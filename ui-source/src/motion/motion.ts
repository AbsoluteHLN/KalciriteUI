export type HlnMotionPreset = "panel" | "item" | "control"
export type HlnMotionState = "enter" | "exit" | "active"
export type HlnMotionVariant = "spring"

export function prefersHlnReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function playHlnMotion(
  root: ParentNode | undefined,
  preset: HlnMotionPreset,
  state: HlnMotionState = "enter",
  variant?: HlnMotionVariant,
): void {
  if (!root) return
  const isElement = typeof Element !== "undefined" && root instanceof Element
  const selector = `[data-hln-motion="${preset}"]`
  const elements: HTMLElement[] = isElement && root.matches(selector)
    ? [root as HTMLElement]
    : Array.from(root.querySelectorAll<HTMLElement>(selector))

  if (prefersHlnReducedMotion()) {
    elements.forEach((element) => {
      delete element.dataset.hlnMotionState
      delete element.dataset.hlnMotionVariant
    })
    return
  }

  elements.forEach((element, index) => {
    element.style.setProperty("--hln-ui-motion-index", String(index))
    element.dataset.hlnMotionState = state
    if (variant) element.dataset.hlnMotionVariant = variant
    element.addEventListener("animationend", () => {
      delete element.dataset.hlnMotionState
      delete element.dataset.hlnMotionVariant
    }, { once: true })
  })
}

export function hlnFlip(
  target: HTMLElement,
  applyChange: () => void,
  options: { duration?: number; easing?: string } = {},
): void {
  if (prefersHlnReducedMotion()) {
    applyChange()
    return
  }

  const before = target.getBoundingClientRect()
  applyChange()
  const after = target.getBoundingClientRect()
  const dx = before.left - after.left
  const dy = before.top - after.top
  const scaleX = before.width / (after.width || 1)
  const scaleY = before.height / (after.height || 1)
  if (dx === 0 && dy === 0 && scaleX === 1 && scaleY === 1) return

  target.animate(
    [
      { transform: `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`, transformOrigin: "top left" },
      { transform: "translate(0, 0) scale(1, 1)", transformOrigin: "top left" },
    ],
    {
      duration: Math.min(300, Math.max(150, options.duration ?? 220)),
      easing: options.easing ?? "cubic-bezier(0.2, 0.8, 0.2, 1)",
      fill: "none",
    },
  )
}
