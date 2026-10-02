export type HlnIconName =
  | "menu"
  | "minus"
  | "maximize"
  | "close"
  | "plus"
  | "chevron-right"
  | "chevron-left"
  | "more"
  | "sliders"
  | "usage"
  | "prompt"
  | "workflow"
  | "model"
  | "attach"
  | "send"
  | "check"
  | "pin"
  | "archive"
  | "trash"
  | "settings"

export type HlnIconOptions = {
  label?: string
  size?: number
  strokeWidth?: number
  className?: string
}

const ICON_PATHS: Record<HlnIconName, string> = {
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  minus: '<path d="M5 12h14"/>',
  maximize: '<path d="M5 5h14v14H5z"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  "chevron-right": '<path d="m9 6 6 6-6 6"/>',
  "chevron-left": '<path d="m15 6-6 6 6 6"/>',
  more: '<circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18" cy="12" r="1"/>',
  sliders: '<path d="M4 6h16M4 12h16M4 18h16"/><path d="M8 4v4M15 10v4M11 16v4"/>',
  usage: '<path d="M4 19V5M20 19V5M8 17V9M12 17V7M16 17v-4"/>',
  prompt: '<path d="M4 5h16v11H9l-5 4V5Z"/>',
  workflow: '<path d="M5 8h14M5 16h14M8 5v3M16 5v3M8 16v3M16 16v3"/>',
  model: '<path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
  attach: '<path d="m21 11-8.5 8.5a5 5 0 0 1-7-7L14 4a3 3 0 0 1 4.3 4.3L10 17a1.5 1.5 0 0 1-2.1-2.1l7.5-7.5"/>',
  send: '<path d="m5 12 14-8-4 16-3.5-6L5 12Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  pin: '<path d="m15 4 5 5-3 1-4 4 1 3-2 2-2-5-5-2 2-2 3 1 4-4 1-3Z"/>',
  archive: '<path d="M4 7h16v13H4zM3 4h18v3H3zM9 11h6"/>',
  trash: '<path d="M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.14-1.4l2-1.56-2-3.46-2.36.95a7 7 0 0 0-2.42-1.4L13.6 2.6h-4l-.48 2.53a7 7 0 0 0-2.42 1.4l-2.36-.95-2 3.46 2 1.56A7 7 0 0 0 4.14 12c0 .48.05.94.14 1.4l-2 1.56 2 3.46 2.36-.95a7 7 0 0 0 2.42 1.4l.48 2.53h4l.48-2.53a7 7 0 0 0 2.42-1.4l2.36.95 2-3.46-2-1.56c.09-.46.14-.92.14-1.4Z"/>',
}

function escapeAttribute(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] ?? character)
}

export function hlnIcon(name: HlnIconName, options: HlnIconOptions = {}): string {
  const size = Math.max(12, Math.min(48, Math.round(options.size ?? 18)))
  const strokeWidth = Math.max(1, Math.min(3, options.strokeWidth ?? 1.7))
  const className = options.className ? ` class="${escapeAttribute(options.className)}"` : ""
  const label = options.label
  const labelled = label
    ? `role="img" aria-label="${escapeAttribute(label)}"`
    : 'aria-hidden="true"'
  const title = label ? `<title>${escapeAttribute(label)}</title>` : ""

  return `<svg${className} viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" focusable="false" ${labelled}>${title}${ICON_PATHS[name]}</svg>`
}

export function mountHlnIcon(
  target: Element,
  name: HlnIconName,
  options: HlnIconOptions = {},
): void {
  target.innerHTML = hlnIcon(name, options)
}
