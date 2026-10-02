export type HlnSkinToken =
  | "--hln-ui-accent"
  | "--hln-ui-accent-strong"
  | "--hln-ui-bg-0"
  | "--hln-ui-bg-1"
  | "--hln-ui-bg-2"
  | "--hln-ui-line"
  | "--hln-ui-line-strong"
  | "--hln-ui-text"
  | "--hln-ui-text-muted"
  | "--hln-ui-text-faint"
  | "--hln-ui-glass"
  | "--hln-ui-glass-strong"

export type HlnSkinDefinition = {
  id: string
  label: string
  tokens: Partial<Record<HlnSkinToken, string>>
}

const SKIN_TOKEN_SET = new Set<HlnSkinToken>([
  "--hln-ui-accent",
  "--hln-ui-accent-strong",
  "--hln-ui-bg-0",
  "--hln-ui-bg-1",
  "--hln-ui-bg-2",
  "--hln-ui-line",
  "--hln-ui-line-strong",
  "--hln-ui-text",
  "--hln-ui-text-muted",
  "--hln-ui-text-faint",
  "--hln-ui-glass",
  "--hln-ui-glass-strong",
])

function normalizeSkinId(value: string): string {
  const id = value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
  if (!id) throw new Error("A skin id must contain at least one letter or number.")
  return id
}

function isSafeCssValue(value: string): boolean {
  const trimmed = value.trim()
  return trimmed.length > 0 && trimmed.length <= 160 && !/[;{}<>]/.test(trimmed)
}

export function createHlnSkin(
  id: string,
  label: string,
  tokens: HlnSkinDefinition["tokens"],
): HlnSkinDefinition {
  const safeTokens: HlnSkinDefinition["tokens"] = {}
  for (const [token, value] of Object.entries(tokens)) {
    if (!SKIN_TOKEN_SET.has(token as HlnSkinToken) || typeof value !== "string") continue
    if (!isSafeCssValue(value)) throw new Error(`Unsafe CSS value for ${token}.`)
    safeTokens[token as HlnSkinToken] = value.trim()
  }
  return { id: normalizeSkinId(id), label: label.trim() || "Custom skin", tokens: safeTokens }
}

export function applyHlnSkin(
  root: HTMLElement,
  skin: HlnSkinDefinition,
): () => void {
  const previous = new Map<HlnSkinToken, string>()
  for (const [token, value] of Object.entries(skin.tokens) as [HlnSkinToken, string][]) {
    if (!SKIN_TOKEN_SET.has(token)) continue
    previous.set(token, root.style.getPropertyValue(token))
    root.style.setProperty(token, value)
  }

  const previousId = root.dataset.hlnSkin
  root.dataset.hlnSkin = skin.id

  return () => {
    for (const token of Object.keys(skin.tokens) as HlnSkinToken[]) {
      const value = previous.get(token) ?? ""
      if (value) root.style.setProperty(token, value)
      else root.style.removeProperty(token)
    }
    if (previousId) root.dataset.hlnSkin = previousId
    else delete root.dataset.hlnSkin
  }
}

export function clearHlnSkin(root: HTMLElement): void {
  for (const token of SKIN_TOKEN_SET) root.style.removeProperty(token)
  delete root.dataset.hlnSkin
}
