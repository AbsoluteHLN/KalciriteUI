// ProjectHLN UI System v2.5 - ESM runtime entry
// Linear Editorial Vector Design System (based on v2.3, independently shipped as v2.5)

export const HLN_V25_THEMES = Object.freeze([
  "arknights",
  "endfield",
  "blacksteel",
  "abyss-aegir",
  "babel",
  "monster-siren",
  "rhodes-paper",
  "lungmen-night",
  "kazdel-ink",
])

export const HLN_V25_THEME_REGISTRY = Object.freeze([
  { id: "arknights",     label: "Arknights Tactical", swatch: "#131920", accent: "#00e5ff", colorScheme: "dark" },
  { id: "endfield",      label: "Endfield Industry",  swatch: "#121c22", accent: "#f6d000", colorScheme: "dark" },
  { id: "blacksteel",    label: "Blacksteel PMC",     swatch: "#141418", accent: "#ff9100", colorScheme: "dark" },
  { id: "abyss-aegir",   label: "Abyss Aegir",        swatch: "#091a28", accent: "#00ffd5", colorScheme: "dark" },
  { id: "babel",         label: "Babel Void",         swatch: "#120e20", accent: "#a855f7", colorScheme: "dark" },
  { id: "monster-siren", label: "Monster Siren",      swatch: "#0f0f12", accent: "#00ff66", colorScheme: "dark" },
  { id: "rhodes-paper",  label: "Rhodes Paper",       swatch: "#f5f7f4", accent: "#147d76", colorScheme: "light" },
  { id: "lungmen-night", label: "Lungmen Night",     swatch: "#1a1c21", accent: "#d8b05c", colorScheme: "dark" },
  { id: "kazdel-ink",    label: "Kazdel Ink",        swatch: "#171819", accent: "#d8dde0", colorScheme: "dark" },
])

export const HLN_V25_BG_PRESETS = Object.freeze([
  { id: "tactical-grid", label: "Tactical Vector Grid",  note: "precision coordinate scan" },
  { id: "holo-scan",     label: "Cyber Laser Scan",      note: "laser scanline sweep" },
  { id: "circuit-trace", label: "Circuit Trace Matrix",  note: "industrial trace grid" },
  { id: "prts-sonar",    label: "PRTS Sonar Sweep",      note: "circular tactical radar" },
  { id: "hazard-hatch",  label: "Hazard Hatch Field",    note: "industrial diagonal stripes" },
  { id: "hex-field",     label: "Hex Field Lattice",   note: "tessellated hex grid" },
  { id: "radar-cross",   label: "Radar Crosshair",     note: "rotating sweep + cross" },
  { id: "data-rain",     label: "Data Rain Columns",   note: "falling vector stream" },
  { id: "blueprint",     label: "Blueprint Draft Grid",note: "fine drafting matrix" },
  { id: "data-lattice",      label: "Data Lattice Matrix", note: "falling glyph grid + scan" },
  { id: "blueprint-schematic",label: "Blueprint Schematic", note: "drafting grid + dimension lines" },
  { id: "editorial-grid",  label: "Editorial Draft Grid", note: "quiet fine-grid layout field" },
  { id: "quiet",         label: "Static Quiet",          note: "zero background motion" },
])

export const HLN_V25_FONTS = Object.freeze([
  "display",
  "technical",
  "grotesque",
  "cyber",
  "berlin",
  "condensed",
  "editorial",
  "label",
])

export function isHlnV25Theme(theme) {
  return HLN_V25_THEMES.includes(theme)
}

export function applyHlnV25Theme(theme, target = typeof document !== "undefined" ? document.body : null) {
  if (!target || !isHlnV25Theme(theme)) return false
  target.dataset.hlnTheme = theme
  target.dataset.theme = theme
  return true
}

export function currentHlnV25Theme(target = typeof document !== "undefined" ? document.body : null) {
  return target?.dataset?.hlnTheme ?? "arknights"
}

export function isHlnV25Font(font) {
  return HLN_V25_FONTS.includes(font)
}

export function applyHlnV25Font(font, target = typeof document !== "undefined" ? document.body : null) {
  if (!target || !isHlnV25Font(font)) return false
  target.dataset.hlnFont = font
  return true
}

export function currentHlnV25Font(target = typeof document !== "undefined" ? document.body : null) {
  return target?.dataset?.hlnFont ?? "display"
}

export function playHlnV25Motion(scope, preset = "panel", state = "enter", variant) {
  if (!scope || typeof window === "undefined") return
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  const selector = "[data-hln-motion=" + JSON.stringify(preset) + "]"
  const elements = scope.matches?.(selector) ? [scope] : [...scope.querySelectorAll(selector)]
  elements.forEach((element, index) => {
    element.style.setProperty("--hln-ui-motion-index", String(index))
    delete element.dataset.hlnMotionState
    delete element.dataset.hlnMotionVariant
    void element.offsetWidth
    element.dataset.hlnMotionState = state
    if (variant) element.dataset.hlnMotionVariant = variant
    element.addEventListener("animationend", () => {
      delete element.dataset.hlnMotionState
      delete element.dataset.hlnMotionVariant
    }, { once: true })
  })
}
