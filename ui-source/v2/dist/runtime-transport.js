// ProjectHLN UI System v2 - real Soul Runtime transport adapter.
// This module is deliberately transport-only: it never creates runtime entities,
// approvals, or audit records when the Runtime is unavailable.

export const HLN_V2_RUNTIME_PROJECTION_RESOURCES = Object.freeze([
  "status",
  "providers",
  "models",
  "workflows",
  "agents",
  "sessions",
  "tasks",
  "plugins",
  "memory",
  "transport",
  "logs",
  "approvals",
  "settings",
])

const PROJECTION_RESOURCE_SET = new Set(HLN_V2_RUNTIME_PROJECTION_RESOURCES)
const APPROVAL_STATUSES = new Set(["requested", "approved", "rejected", "timed_out", "revoked", "pending", "expired", "not-required"])
const PROJECTION_STATES = new Set(["live", "offline", "unknown"])
const SENSITIVE_KEY = /(authorization|bearer|token|api[-_]?key|secret|password|cookie|credential|private[-_]?key)/i
const PATH_KEY = /(^|[-_])(path|cwd|directory|filename)$/i
const ABSOLUTE_PATH = /[A-Za-z]:\\|(?:^|\s)\/(?:Users|home|tmp|var|workspace|mnt|opt)\//
const MAX_EVENT_DEPTH = 5
const MAX_EVENT_STRING = 2_000
const MAX_EVENT_KEYS = 100
const MAX_EVENT_ITEMS = 100
const MAX_EVENT_JSON = 16_000

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value)
}

function record(value, label) {
  if (!isRecord(value)) throw new HlnV2RuntimeContractError(`${label} must be an object`, { code: "INVALID_RUNTIME_RESPONSE", body: value })
  return value
}

function requiredString(value, label) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new HlnV2RuntimeContractError(`${label} must be a non-empty string`, { code: "INVALID_RUNTIME_RESPONSE", body: value })
  }
  return value
}

function optionalString(value, label) {
  if (value === null || value === undefined) return null
  return requiredString(value, label)
}

function encodeId(value, label) {
  return encodeURIComponent(requiredString(value, label))
}

function hasOwn(value, key) {
  return Object.prototype.hasOwnProperty.call(value, key)
}

function pickString(value, keys, label, { required = true } = {}) {
  for (const key of keys) {
    if (hasOwn(value, key) && value[key] !== null && value[key] !== undefined) return requiredString(value[key], label)
  }
  if (required) throw new HlnV2RuntimeContractError(`${label} is missing`, { code: "INVALID_RUNTIME_RESPONSE", body: value })
  return null
}

function pickNullableId(value, keys, label) {
  for (const key of keys) {
    if (hasOwn(value, key)) return optionalString(value[key], label)
  }
  return null
}

function jsonCloneForUi(value, depth = 0, key = "") {
  if (depth > MAX_EVENT_DEPTH) return "[truncated]"
  if (SENSITIVE_KEY.test(key)) return "[redacted]"
  if (typeof value === "string") {
    if (PATH_KEY.test(key) || ABSOLUTE_PATH.test(value)) return "[redacted-path]"
    return value.length > MAX_EVENT_STRING ? `${value.slice(0, MAX_EVENT_STRING)}…` : value
  }
  if (value === null || typeof value === "number" || typeof value === "boolean") return value
  if (Array.isArray(value)) return value.slice(0, MAX_EVENT_ITEMS).map((item) => jsonCloneForUi(item, depth + 1, ""))
  if (!isRecord(value)) return String(value)
  const output = {}
  for (const [childKey, childValue] of Object.entries(value).slice(0, MAX_EVENT_KEYS)) {
    output[childKey] = jsonCloneForUi(childValue, depth + 1, childKey)
  }
  return output
}

/**
 * Keep event payloads bounded and safe for rendering. Runtime events are
 * already redacted at the Runtime boundary; this second boundary prevents a
 * non-conforming upstream from putting credentials or local paths in a UI.
 */
export function sanitizeHlnV2EventPayload(value) {
  const sanitized = jsonCloneForUi(value)
  if (!isRecord(sanitized)) return { value: sanitized }
  try {
    if (JSON.stringify(sanitized).length <= MAX_EVENT_JSON) return sanitized
  } catch {
    return { value: "[unserializable]" }
  }
  return { ...Object.fromEntries(Object.entries(sanitized).slice(0, 20)), _hlnTruncated: true }
}

function normalizeBaseUrl(input) {
  const value = input === undefined ? "" : input
  if (typeof value !== "string") throw new TypeError("baseUrl must be a string")
  const trimmed = value.trim()
  if (!trimmed) return ""
  if (trimmed.includes("?") || trimmed.includes("#")) throw new TypeError("baseUrl must not contain a query or hash")
  if (trimmed.startsWith("//")) throw new TypeError("baseUrl must use an explicit http(s) origin or a same-origin path")
  if (/^https?:\/\//i.test(trimmed)) {
    const parsed = new URL(trimmed)
    if (parsed.username || parsed.password) throw new TypeError("baseUrl must not contain credentials")
    return `${parsed.origin}${parsed.pathname.replace(/\/$/, "")}`
  }
  if (!trimmed.startsWith("/")) throw new TypeError("baseUrl must be an absolute http(s) URL or a same-origin path")
  return trimmed.replace(/\/$/, "")
}

function joinUrl(baseUrl, path) {
  return `${baseUrl}${path}` || path
}

function parseResponseBody(text, contentType = "") {
  if (!text) return undefined
  if (contentType.toLowerCase().includes("json") || /^[\[{]/.test(text.trim())) {
    try { return JSON.parse(text) } catch { /* preserve non-JSON response text below */ }
  }
  return text
}

function messageFromBody(body, fallback) {
  if (isRecord(body)) {
    for (const key of ["error", "message", "detail"]) {
      if (typeof body[key] === "string" && body[key].trim()) return body[key]
    }
  }
  if (typeof body === "string" && body.trim()) return body
  return fallback
}

export class HlnV2RuntimeTransportError extends Error {
  constructor(message, options = {}) {
    super(message)
    this.name = "HlnV2RuntimeTransportError"
    this.code = options.code ?? "RUNTIME_TRANSPORT_ERROR"
    this.httpStatus = options.httpStatus ?? null
    this.status = this.httpStatus
    this.method = options.method ?? null
    this.path = options.path ?? null
    this.responseBody = options.body
    this.body = options.body
    if (options.cause !== undefined) this.cause = options.cause
  }
}

export class HlnV2RuntimeContractError extends HlnV2RuntimeTransportError {
  constructor(message, options = {}) {
    super(message, { ...options, code: options.code ?? "INVALID_RUNTIME_RESPONSE" })
    this.name = "HlnV2RuntimeContractError"
  }
}

function asResponseLike(value) {
  if (!value || typeof value !== "object" || typeof value.text !== "function") {
    throw new HlnV2RuntimeTransportError("fetch implementation returned an invalid response", { code: "TRANSPORT_INVALID_RESPONSE" })
  }
  return value
}

function envelopeItems(body, key, path) {
  if (Array.isArray(body)) return body
  const object = record(body, `${path} response`)
  if (!Array.isArray(object[key])) throw new HlnV2RuntimeContractError(`${path} response must contain an array named ${key}`, { code: "INVALID_RUNTIME_RESPONSE", body })
  return object[key]
}

function normalizeTask(value) {
  const item = record(value, "Task")
  return {
    ...item,
    id: requiredString(item.id, "Task.id"),
    state: requiredString(item.state, "Task.state"),
    type: requiredString(item.type, "Task.type"),
    goal: requiredString(item.goal, "Task.goal"),
  }
}

function normalizeTurn(value) {
  const item = record(value, "Turn")
  return {
    ...item,
    id: requiredString(item.id, "Turn.id"),
    task_id: requiredString(item.task_id, "Turn.task_id"),
    state: requiredString(item.state, "Turn.state"),
  }
}

function normalizeStep(value) {
  const item = record(value, "Step")
  return {
    ...item,
    id: requiredString(item.id, "Step.id"),
    task_id: requiredString(item.task_id, "Step.task_id"),
    turn_id: requiredString(item.turn_id, "Step.turn_id"),
    state: requiredString(item.state, "Step.state"),
  }
}

function normalizeApproval(value) {
  const item = record(value, "Approval")
  const approvalId = pickString(item, ["approval_id", "approvalId", "id"], "Approval.id")
  const rawStatus = pickString(item, ["status", "state"], "Approval.status")
  if (!APPROVAL_STATUSES.has(rawStatus)) throw new HlnV2RuntimeContractError(`unsupported Approval.status: ${rawStatus}`, { code: "INVALID_RUNTIME_RESPONSE", body: item })
  const status = rawStatus === "pending" ? "requested" : rawStatus === "expired" ? "timed_out" : rawStatus
  return {
    ...item,
    approvalId,
    status,
    rawStatus,
  }
}

function normalizeProjection(value, path) {
  const item = record(value, `${path} projection`)
  const state = pickString(item, ["state"], `${path}.state`)
  if (!PROJECTION_STATES.has(state)) throw new HlnV2RuntimeContractError(`unsupported ${path}.state: ${state}`, { code: "INVALID_RUNTIME_RESPONSE", body: item })
  if (item.resource !== undefined) requiredString(item.resource, `${path}.resource`)
  return item
}

function normalizeProjectionSnapshot(value) {
  const item = record(value, "/v1/projection snapshot")
  if (typeof item.ok !== "boolean") throw new HlnV2RuntimeContractError("/v1/projection.ok must be boolean", { code: "INVALID_RUNTIME_RESPONSE", body: item })
  const resources = record(item.resources, "/v1/projection.resources")
  const normalized = {}
  for (const [resource, projection] of Object.entries(resources)) {
    if (!PROJECTION_RESOURCE_SET.has(resource)) continue
    normalized[resource] = normalizeProjection(projection, `/v1/projection.resources.${resource}`)
  }
  return { ...item, resources: normalized }
}

export function normalizeHlnV2RuntimeEvent(value) {
  const item = record(value, "Runtime event")
  const wireEventId = pickString(item, ["event_id", "eventId", "id"], "Runtime event id")
  // `/events` currently emits the in-process SoulEvent shape (`id`, `turnId`,
  // `type`). That identifier is not a Canonical Store event_id. Only an
  // explicit canonical `event_id` or `canonical_event_id` is promoted.
  const isCanonical = hasOwn(item, "event_id") || hasOwn(item, "canonical_event_id") || hasOwn(item, "canonicalEventId")
  const canonicalEventId = pickString(item, ["canonical_event_id", "canonicalEventId", "event_id"], "Runtime event canonical id", { required: false })
  const sourceEventId = pickString(item, ["source_event_id", "sourceEventId", "eventId", "id"], "Runtime event source id", { required: false })
    ?? (isCanonical ? null : wireEventId)
  const eventType = pickString(item, ["event_type", "eventType", "type"], "Runtime event type")
  const timestamp = pickString(item, ["timestamp", "created_at", "createdAt"], "Runtime event timestamp")
  if (!Number.isFinite(Date.parse(timestamp))) throw new HlnV2RuntimeContractError("Runtime event timestamp is invalid", { code: "INVALID_RUNTIME_RESPONSE", body: item })
  const payload = record(item.payload, "Runtime event.payload")
  const parentEventId = pickNullableId(item, ["parent_event_id", "parentEventId"], "Runtime event parent event id")
  const rootEventId = pickNullableId(item, ["root_event_id", "rootEventId"], "Runtime event root event id")
  if (isCanonical) {
    if (!canonicalEventId) throw new HlnV2RuntimeContractError("canonical Runtime event is missing event_id", { code: "INVALID_RUNTIME_RESPONSE", body: item })
    if (!rootEventId) throw new HlnV2RuntimeContractError("canonical Runtime event is missing root_event_id", { code: "INVALID_RUNTIME_RESPONSE", body: item })
  }
  const sourceTurnId = pickNullableId(item, ["source_turn_id", "sourceTurnId", "turnId"], "Runtime event source turn id")
  const sourceTaskId = pickNullableId(item, ["source_task_id", "sourceTaskId", "taskId"], "Runtime event source task id")
  return {
    ...item,
    eventId: wireEventId,
    sourceEventId,
    canonicalEventId: canonicalEventId ?? null,
    idKind: canonicalEventId ? "canonical" : "source",
    eventType,
    parentEventId,
    rootEventId,
    taskId: pickNullableId(item, ["task_id", "canonical_task_id"], "Runtime event task id"),
    turnId: pickNullableId(item, ["turn_id", "canonical_turn_id"], "Runtime event turn id"),
    stepId: pickNullableId(item, ["step_id", "canonical_step_id"], "Runtime event step id"),
    sourceTaskId,
    sourceTurnId,
    timestamp,
    payload: sanitizeHlnV2EventPayload(payload),
  }
}

/**
 * Project only canonical events into a causal call tree. Source-only SSE
 * frames remain available as `sourceEvents`, but are never assigned a fake
 * task/turn/event identity. Missing parents are reported instead of repaired.
 */
export function buildHlnV2CallTree(events) {
  if (!Array.isArray(events)) throw new TypeError("events must be an array")
  const canonical = events.filter((event) => event?.canonicalEventId)
  const sourceEvents = events.filter((event) => !event?.canonicalEventId)
  const byId = new Map()
  for (const event of canonical) {
    const id = requiredString(event.canonicalEventId, "canonical event id")
    if (byId.has(id)) throw new HlnV2RuntimeContractError(`duplicate canonical event id: ${id}`, { code: "DUPLICATE_CANONICAL_EVENT_ID", body: event })
    byId.set(id, event)
  }
  const childrenByParent = Object.create(null)
  const roots = []
  const orphanEventIds = []
  for (const event of canonical) {
    const id = event.canonicalEventId
    const parent = event.parentEventId ?? null
    if (!parent) {
      roots.push(id)
      continue
    }
    if (!byId.has(parent)) orphanEventIds.push(id)
    if (!childrenByParent[parent]) childrenByParent[parent] = []
    childrenByParent[parent].push(id)
  }
  return { events: canonical, sourceEvents, roots, childrenByParent, orphanEventIds }
}

/**
 * Bounded UI-side audit buffer. It only stores events received from Runtime;
 * it is not a historical audit authority and never synthesizes records.
 */
export function createHlnV2AuditCollector(options = {}) {
  const maxEvents = options.maxEvents === undefined ? 2_000 : Math.max(1, Math.floor(options.maxEvents))
  const events = new Map()
  let truncated = false
  function keyFor(event) {
    return requiredString(event?.canonicalEventId ?? event?.sourceEventId ?? event?.eventId, "audit event id")
  }
  function add(event) {
    if (!event || typeof event !== "object") throw new TypeError("audit event must be an object")
    const key = keyFor(event)
    if (!events.has(key)) events.set(key, event)
    while (events.size > maxEvents) {
      events.delete(events.keys().next().value)
      truncated = true
    }
    return event
  }
  function list(filter = {}) {
    let result = [...events.values()]
    if (filter.canonicalOnly) result = result.filter((event) => Boolean(event.canonicalEventId))
    if (filter.taskId !== undefined) result = result.filter((event) => (event.taskId ?? event.sourceTaskId) === filter.taskId)
    if (filter.turnId !== undefined) result = result.filter((event) => (event.turnId ?? event.sourceTurnId) === filter.turnId)
    if (filter.stepId !== undefined) result = result.filter((event) => event.stepId === filter.stepId)
    return result
  }
  function snapshot() {
    const current = list()
    return { events: current, callTree: buildHlnV2CallTree(current), truncated }
  }
  return Object.freeze({ add, list, snapshot, get size() { return events.size }, get truncated() { return truncated } })
}

function normalizeActionResponse(value) {
  const item = record(value, "Runtime action response")
  const output = { ...item }
  if (item.events !== undefined) {
    if (!Array.isArray(item.events)) throw new HlnV2RuntimeContractError("Runtime action response events must be an array", { code: "INVALID_RUNTIME_RESPONSE", body: item })
    output.events = item.events.map(normalizeHlnV2RuntimeEvent)
  }
  if (item.approval !== undefined && item.approval !== null) output.approval = normalizeApproval(item.approval)
  return output
}

function normalizeEventSource(factory, url) {
  if (typeof factory === "function") return factory(url)
  if (typeof globalThis.EventSource === "function") return new globalThis.EventSource(url)
  throw new HlnV2RuntimeTransportError("EventSource is not available; provide eventSourceFactory", { code: "EVENT_STREAM_UNAVAILABLE", path: "/events", method: "GET" })
}

function ensureEventSource(source) {
  if (!source || typeof source.close !== "function") throw new HlnV2RuntimeTransportError("eventSourceFactory returned an invalid EventSource", { code: "EVENT_STREAM_UNAVAILABLE" })
  return source
}

/**
 * Create a transport bound to the real Soul Runtime HTTP/SSE contract.
 * `baseUrl` may be empty for same-origin calls, `/api` for a desktop proxy,
 * or an explicit http(s) origin. Writes are sent once and are never retried.
 */
export function createHlnV2RuntimeTransport(options = {}) {
  const baseUrl = normalizeBaseUrl(options.baseUrl)
  const fetchImpl = options.fetch ?? globalThis.fetch
  if (typeof fetchImpl !== "function") throw new TypeError("a fetch implementation is required")

  async function request(path, { method = "GET", body } = {}) {
    const url = joinUrl(baseUrl, path)
    const headers = { Accept: "application/json" }
    const init = { method, headers }
    if (body !== undefined) {
      headers["Content-Type"] = "application/json"
      init.body = JSON.stringify(body)
    }
    let response
    try {
      response = asResponseLike(await fetchImpl(url, init))
    } catch (error) {
      if (error instanceof HlnV2RuntimeTransportError) throw error
      throw new HlnV2RuntimeTransportError(`Runtime ${method} ${path} is unavailable`, {
        code: "TRANSPORT_UNAVAILABLE",
        method,
        path,
        cause: error,
      })
    }
    const text = await response.text()
    const contentType = response.headers?.get?.("content-type") ?? response.headers?.["content-type"] ?? ""
    const parsed = parseResponseBody(text, contentType)
    if (!response.ok) {
      const status = Number.isFinite(response.status) ? response.status : null
      const bodyRecord = isRecord(parsed) ? parsed : undefined
      throw new HlnV2RuntimeTransportError(messageFromBody(parsed, `Runtime ${method} ${path} failed`), {
        code: typeof bodyRecord?.code === "string" ? bodyRecord.code : "HTTP_ERROR",
        httpStatus: status,
        method,
        path,
        body: parsed,
      })
    }
    return parsed
  }

  async function listTasks() {
    return envelopeItems(await request("/v1/tasks"), "tasks", "/v1/tasks").map(normalizeTask)
  }

  async function getTask(taskId) {
    return normalizeTask(await request(`/v1/tasks/${encodeId(taskId, "taskId")}`))
  }

  async function listTaskTurns(taskId) {
    return envelopeItems(await request(`/v1/tasks/${encodeId(taskId, "taskId")}/turns`), "turns", "/v1/tasks/:taskId/turns").map(normalizeTurn)
  }

  async function getTurn(turnId) {
    return normalizeTurn(await request(`/v1/turns/${encodeId(turnId, "turnId")}`))
  }

  async function listTurnSteps(turnId) {
    return envelopeItems(await request(`/v1/turns/${encodeId(turnId, "turnId")}/steps`), "steps", "/v1/turns/:turnId/steps").map(normalizeStep)
  }

  async function getStep(stepId) {
    return normalizeStep(await request(`/v1/steps/${encodeId(stepId, "stepId")}`))
  }

  async function getTaskTree(taskId) {
    const task = await getTask(taskId)
    const turns = await listTaskTurns(task.id)
    const branches = await Promise.all(turns.map(async (turn) => ({ turn, steps: await listTurnSteps(turn.id) })))
    return { task, turns: branches }
  }

  async function getProjection(resource) {
    if (resource !== undefined && (!PROJECTION_RESOURCE_SET.has(resource))) throw new TypeError(`unsupported projection resource: ${resource}`)
    if (resource === undefined) return normalizeProjectionSnapshot(await request("/v1/projection"))
    return normalizeProjection(await request(`/v1/projection/${encodeURIComponent(resource)}`), `/v1/projection/${resource}`)
  }

  async function getProjectionSnapshot() {
    return getProjection()
  }

  async function getApprovalProjection() {
    const projection = normalizeProjection(await getProjection("approvals"), "/v1/projection/approvals")
    const data = projection.data
    if (data === undefined || data === null) return projection
    const dataRecord = record(data, "/v1/projection/approvals.data")
    if (!Array.isArray(dataRecord.items)) throw new HlnV2RuntimeContractError("approval projection data must contain items", { code: "INVALID_RUNTIME_RESPONSE", body: projection })
    return { ...projection, data: { ...dataRecord, items: dataRecord.items.map(normalizeApproval) } }
  }

  async function listApprovals() {
    const projection = await getApprovalProjection()
    if (projection.state !== "live" || projection.ok !== true || !isRecord(projection.data) || !Array.isArray(projection.data.items)) {
      throw new HlnV2RuntimeTransportError(projection.error ?? "Runtime approval projection is unavailable", {
        code: projection.code ?? "APPROVALS_UNAVAILABLE",
        method: "GET",
        path: "/v1/projection/approvals",
        body: projection,
      })
    }
    return projection.data.items
  }

  async function approveTurn(turnId, decision) {
    if (!["approved", "rejected", "expired"].includes(decision)) throw new TypeError("decision must be approved, rejected, or expired")
    return normalizeActionResponse(await request(`/v1/turns/${encodeId(turnId, "turnId")}/approval`, { method: "POST", body: { decision } }))
  }

  async function cancelTurn(turnId) {
    return normalizeActionResponse(await request(`/v1/turns/${encodeId(turnId, "turnId")}/cancel`, { method: "POST" }))
  }

  async function getSafety() {
    return record(await request("/v1/runtime/safety"), "/v1/runtime/safety")
  }

  async function setSafety(input) {
    if (!isRecord(input) || (!hasOwn(input, "autonomyEnabled") && !hasOwn(input, "safeMode"))) throw new TypeError("setSafety requires autonomyEnabled and/or safeMode")
    if (hasOwn(input, "autonomyEnabled") && typeof input.autonomyEnabled !== "boolean") throw new TypeError("autonomyEnabled must be boolean")
    if (hasOwn(input, "safeMode") && typeof input.safeMode !== "boolean") throw new TypeError("safeMode must be boolean")
    return record(await request("/v1/runtime/safety", { method: "POST", body: input }), "/v1/runtime/safety")
  }

  async function emergencyStop(action = "stop", reason) {
    if (action !== "stop" && action !== "clear") throw new TypeError("emergency stop action must be stop or clear")
    const body = { action, ...(reason === undefined ? {} : { reason: requiredString(reason, "reason") }) }
    return record(await request("/v1/runtime/emergency-stop", { method: "POST", body }), "/v1/runtime/emergency-stop")
  }

  async function getScheduler() {
    return record(await request("/v1/runtime/scheduler"), "/v1/runtime/scheduler")
  }

  async function controlScheduler(action, reason) {
    if (action !== "start" && action !== "stop") throw new TypeError("scheduler action must be start or stop")
    const body = { action, ...(reason === undefined ? {} : { reason: requiredString(reason, "reason") }) }
    return record(await request("/v1/runtime/scheduler", { method: "POST", body }), "/v1/runtime/scheduler")
  }

  function subscribeEvents(listener, eventOptions = {}) {
    if (typeof listener !== "function") throw new TypeError("event listener must be a function")
    const url = joinUrl(baseUrl, "/events")
    let source
    try {
      source = ensureEventSource(normalizeEventSource(options.eventSourceFactory, url))
    } catch (error) {
      if (error instanceof HlnV2RuntimeTransportError) throw error
      throw new HlnV2RuntimeTransportError("Runtime event stream is unavailable", { code: "EVENT_STREAM_UNAVAILABLE", method: "GET", path: "/events", cause: error })
    }
    let closed = false
    source.onmessage = (message) => {
      if (closed) return
      try {
        const raw = typeof message?.data === "string" ? JSON.parse(message.data) : message?.data
        listener(normalizeHlnV2RuntimeEvent(raw))
      } catch (error) {
        const contractError = error instanceof HlnV2RuntimeTransportError
          ? error
          : new HlnV2RuntimeContractError("Runtime event frame is invalid", { code: "INVALID_RUNTIME_EVENT", path: "/events", cause: error })
        try { eventOptions.onError?.(contractError) } catch { /* observers cannot break the stream */ }
      }
    }
    source.onerror = (event) => {
      if (closed) return
      const error = new HlnV2RuntimeTransportError("Runtime event stream failed", { code: "EVENT_STREAM_ERROR", method: "GET", path: "/events", body: event })
      try { eventOptions.onError?.(error) } catch { /* observers cannot break the stream */ }
    }
    return () => {
      if (closed) return
      closed = true
      source.onmessage = null
      source.onerror = null
      source.close()
    }
  }

  return Object.freeze({
    listTasks,
    getTask,
    listTaskTurns,
    getTurn,
    listTurnSteps,
    getStep,
    getTaskTree,
    getProjection,
    getProjectionSnapshot,
    getApprovalProjection,
    listApprovals,
    getApprovals: listApprovals,
    approveTurn,
    cancelTurn,
    getSafety,
    setSafety,
    emergencyStop,
    getScheduler,
    controlScheduler,
    subscribeEvents,
  })
}

