// ProjectHLN UI System v3.0 - ESM runtime entry
// Euclidean Vector Flat, Numerical & Mathematical Geometry Design System (independently shipped as v3)

export const HLN_V3_THEMES = Object.freeze([
  "euclidean-cyan",
  "isometric-amber",
  "drafting-paper",
  "bauhaus-grid",
  "cartesian-emerald",
  "graphite-polygon",
  "polar-cobalt",
  "hypercube-violet",
  "axiom-mono",
])

export const HLN_V3_THEME_REGISTRY = Object.freeze([
  { id: "euclidean-cyan",    label: "Euclidean Cyan",    swatch: "#121820", accent: "#00d4ff", colorScheme: "dark" },
  { id: "isometric-amber",   label: "Isometric Amber",   swatch: "#141b22", accent: "#f5c400", colorScheme: "dark" },
  { id: "drafting-paper",    label: "Drafting Vellum",   swatch: "#f8faf7", accent: "#0d746e", colorScheme: "light" },
  { id: "bauhaus-grid",      label: "Bauhaus Construct", swatch: "#f9f7f1", accent: "#1d4ed8", colorScheme: "light" },
  { id: "cartesian-emerald", label: "Cartesian Emerald", swatch: "#f4f9f6", accent: "#059669", colorScheme: "light" },
  { id: "graphite-polygon",  label: "Graphite Polygon",  swatch: "#15171c", accent: "#ff6b00", colorScheme: "dark" },
  { id: "polar-cobalt",      label: "Polar Cobalt",      swatch: "#0b1b28", accent: "#00e5bf", colorScheme: "dark" },
  { id: "hypercube-violet",  label: "Hypercube Violet",  swatch: "#120f22", accent: "#9d4edd", colorScheme: "dark" },
  { id: "axiom-mono",        label: "Axiom Monochrome",  swatch: "#141619", accent: "#e2e8f0", colorScheme: "dark" },
])

export const HLN_V3_BG_PRESETS = Object.freeze([
  { id: "euclidean-grid",      label: "Euclidean Coordinate", note: "Cartesian major/minor axes" },
  { id: "golden-spiral",       label: "Golden Ratio Field",   note: "phi = 1.618 subdivision" },
  { id: "isometric-lattice",   label: "Isometric Lattice",    note: "30/60/120 deg triangulation" },
  { id: "polar-locus",         label: "Polar Unit Circle",    note: "concentric radial locus" },
  { id: "bezier-field",        label: "Bezier Anchor Matrix", note: "vector nodes & tangents" },
  { id: "voronoi-poly",        label: "Polygon Tessellation", note: "planar geometric facets" },
  { id: "hex-field",           label: "Hexagonal Honeycomb",  note: "sqrt(3) hex lattice" },
  { id: "blueprint-schematic", label: "Architectural Draft",  note: "dimension ticks & rules" },
  { id: "swiss-dots",          label: "Swiss Dot Matrix",     note: "minimalist 16px point grid" },
  { id: "quiet",               label: "Matte Flat Canvas",    note: "zero background ornament" },
])

export const HLN_V3_FONTS = Object.freeze([
  "geometric",
  "display",
  "technical",
  "grotesque",
  "cyber",
  "berlin",
  "editorial",
  "label",
])

export const HLN_V3_CJK_FONTS = Object.freeze([
  "auto",
  "hei",
  "display",
  "song",
  "kai",
  "mono",
  "fangsong",
])

export const HLN_V3_CJK_FONT_REGISTRY = Object.freeze([
  { id: "auto",     label: "联动配对 · Auto Pair",     family: "var(--hln-ui-font-cjk-auto, var(--hln-ui-font-cjk-hei))" },
  { id: "hei",      label: "现代几何黑 · Geometric Hei", family: "var(--hln-ui-font-cjk-hei)" },
  { id: "display",  label: "凝练建筑黑 · Display Hei",   family: "var(--hln-ui-font-cjk-display)" },
  { id: "song",     label: "人文思源宋 · Editorial Song", family: "var(--hln-ui-font-cjk-song)" },
  { id: "kai",      label: "制图霞鹜楷 · Blueprint Kai",  family: "var(--hln-ui-font-cjk-kai)" },
  { id: "mono",     label: "等宽更纱黑 · Technical Mono", family: "var(--hln-ui-font-cjk-mono)" },
  { id: "fangsong", label: "工程清仿宋 · FangSong",       family: "var(--hln-ui-font-cjk-fangsong)" },
])

export const HLN_V3_MATH_CONSTANTS = Object.freeze({
  PHI: 1.6180339887,
  INV_PHI: 0.6180339887,
  SQRT2: 1.4142135623,
  SQRT3: 1.7320508075,
  PI: 3.1415926535,
})

export function isHlnV3Theme(theme) {
  return HLN_V3_THEMES.includes(theme)
}

export function applyHlnV3Theme(theme, target = typeof document !== "undefined" ? document.body : null) {
  if (!target || !isHlnV3Theme(theme)) return false
  target.dataset.hlnTheme = theme
  target.dataset.theme = theme
  return true
}

export function currentHlnV3Theme(target = typeof document !== "undefined" ? document.body : null) {
  return target?.dataset?.hlnTheme ?? "euclidean-cyan"
}

export function isHlnV3Font(font) {
  return HLN_V3_FONTS.includes(font)
}

export function applyHlnV3Font(font, target = typeof document !== "undefined" ? document.body : null) {
  if (!target || !isHlnV3Font(font)) return false
  target.dataset.hlnFont = font
  return true
}

export function currentHlnV3Font(target = typeof document !== "undefined" ? document.body : null) {
  return target?.dataset?.hlnFont ?? "geometric"
}

export function isHlnV3CjkFont(cjkFont) {
  return HLN_V3_CJK_FONTS.includes(cjkFont)
}

export function applyHlnV3CjkFont(cjkFont, target = typeof document !== "undefined" ? document.body : null) {
  if (!target || !isHlnV3CjkFont(cjkFont)) return false
  target.dataset.hlnCjkFont = cjkFont
  return true
}

export function currentHlnV3CjkFont(target = typeof document !== "undefined" ? document.body : null) {
  return target?.dataset?.hlnCjkFont ?? "auto"
}

export function playHlnV3Motion(scope, preset = "panel", state = "enter", variant) {
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
