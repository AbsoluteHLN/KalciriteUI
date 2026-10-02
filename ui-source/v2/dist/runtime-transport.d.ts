// ProjectHLN UI System v2 - Runtime transport declarations

export type HlnV2ApprovalStatus = "requested" | "approved" | "rejected" | "timed_out" | "revoked"
export type HlnV2ApprovalWireStatus = HlnV2ApprovalStatus | "pending" | "expired" | "not-required"
export type HlnV2ProjectionState = "live" | "offline" | "unknown"

export interface HlnV2TransportErrorOptions {
  code?: string
  httpStatus?: number | null
  method?: string | null
  path?: string | null
  body?: unknown
  cause?: unknown
}

export declare class HlnV2RuntimeTransportError extends Error {
  readonly name: "HlnV2RuntimeTransportError"
  readonly code: string
  readonly httpStatus: number | null
  readonly status: number | null
  readonly method: string | null
  readonly path: string | null
  readonly responseBody: unknown
  readonly body: unknown
  readonly cause?: unknown
  constructor(message: string, options?: HlnV2TransportErrorOptions)
}

export declare class HlnV2RuntimeContractError extends HlnV2RuntimeTransportError {
  readonly name: "HlnV2RuntimeContractError"
}

export interface HlnV2NormalizedEvent {
  eventId: string
  sourceEventId: string | null
  canonicalEventId: string | null
  idKind: "canonical" | "source"
  eventType: string
  parentEventId: string | null
  rootEventId: string | null
  taskId: string | null
  turnId: string | null
  stepId: string | null
  sourceTaskId: string | null
  sourceTurnId: string | null
  timestamp: string
  payload: Record<string, unknown>
  [key: string]: unknown
}

export interface HlnV2CallTree {
  events: HlnV2NormalizedEvent[]
  sourceEvents: HlnV2NormalizedEvent[]
  roots: string[]
  childrenByParent: Record<string, string[]>
  orphanEventIds: string[]
}

export interface HlnV2AuditCollector {
  readonly size: number
  readonly truncated: boolean
  add(event: HlnV2NormalizedEvent): HlnV2NormalizedEvent
  list(filter?: { canonicalOnly?: boolean; taskId?: string; turnId?: string; stepId?: string }): HlnV2NormalizedEvent[]
  snapshot(): { events: HlnV2NormalizedEvent[]; callTree: HlnV2CallTree; truncated: boolean }
}

export interface HlnV2RuntimeTransportOptions {
  /** Empty for same-origin, `/api` for the desktop proxy, or an http(s) origin. */
  baseUrl?: string
  fetch?: typeof globalThis.fetch
  eventSourceFactory?: (url: string) => EventSourceLike
}

export interface EventSourceLike {
  onmessage: ((event: { data?: string | unknown }) => void) | null
  onerror: ((event: unknown) => void) | null
  close(): void
}

export interface HlnV2Approval {
  approvalId: string
  status: HlnV2ApprovalStatus | "not-required"
  rawStatus: HlnV2ApprovalWireStatus
  [key: string]: unknown
}

export interface HlnV2Task {
  id: string
  state: string
  type: string
  goal: string
  [key: string]: unknown
}

export interface HlnV2Turn {
  id: string
  task_id: string
  state: string
  [key: string]: unknown
}

export interface HlnV2Step {
  id: string
  task_id: string
  turn_id: string
  state: string
  [key: string]: unknown
}

export interface HlnV2TaskTree {
  task: HlnV2Task
  turns: Array<{ turn: HlnV2Turn; steps: HlnV2Step[] }>
}

export interface HlnV2Projection<T = unknown> {
  ok: boolean
  resource?: string
  state: HlnV2ProjectionState
  data?: T
  code?: string
  error?: string
  [key: string]: unknown
}

export interface HlnV2ProjectionSnapshot {
  ok: boolean
  checkedAt?: string
  updatedAt?: string
  resources: Record<string, HlnV2Projection>
  [key: string]: unknown
}

export interface HlnV2RuntimeTransport {
  listTasks(): Promise<HlnV2Task[]>
  getTask(taskId: string): Promise<HlnV2Task>
  listTaskTurns(taskId: string): Promise<HlnV2Turn[]>
  getTurn(turnId: string): Promise<HlnV2Turn>
  listTurnSteps(turnId: string): Promise<HlnV2Step[]>
  getStep(stepId: string): Promise<HlnV2Step>
  getTaskTree(taskId: string): Promise<HlnV2TaskTree>
  getProjection(): Promise<HlnV2ProjectionSnapshot>
  getProjection(resource: string): Promise<HlnV2Projection>
  getProjectionSnapshot(): Promise<HlnV2ProjectionSnapshot>
  getApprovalProjection(): Promise<HlnV2Projection<{ items: HlnV2Approval[]; [key: string]: unknown }>>
  listApprovals(): Promise<HlnV2Approval[]>
  getApprovals(): Promise<HlnV2Approval[]>
  approveTurn(turnId: string, decision: "approved" | "rejected" | "expired"): Promise<Record<string, unknown>>
  cancelTurn(turnId: string): Promise<Record<string, unknown>>
  getSafety(): Promise<Record<string, unknown>>
  setSafety(input: { autonomyEnabled?: boolean; safeMode?: boolean }): Promise<Record<string, unknown>>
  emergencyStop(action?: "stop" | "clear", reason?: string): Promise<Record<string, unknown>>
  getScheduler(): Promise<Record<string, unknown>>
  controlScheduler(action: "start" | "stop", reason?: string): Promise<Record<string, unknown>>
  subscribeEvents(listener: (event: HlnV2NormalizedEvent) => void, options?: { onError?: (error: HlnV2RuntimeTransportError) => void }): () => void
}

export declare const HLN_V2_RUNTIME_PROJECTION_RESOURCES: readonly string[]
export declare function sanitizeHlnV2EventPayload(value: unknown): Record<string, unknown>
export declare function normalizeHlnV2RuntimeEvent(value: unknown): HlnV2NormalizedEvent
export declare function buildHlnV2CallTree(events: HlnV2NormalizedEvent[]): HlnV2CallTree
export declare function createHlnV2AuditCollector(options?: { maxEvents?: number }): HlnV2AuditCollector
export declare function createHlnV2RuntimeTransport(options?: HlnV2RuntimeTransportOptions): HlnV2RuntimeTransport
