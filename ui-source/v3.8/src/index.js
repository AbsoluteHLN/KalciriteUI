// ProjectHLN UI System v3.8 - Cosmic Viewport Lens & Astrophysics Telemetry Runtime (index.js)
// Zero game terminology.

export const HLN_V38_MATH_CONSTANTS = Object.freeze({
  PHI: 1.618033988749895,
  PHI_INV: 0.6180339887498949,
  SQRT2: 1.4142135623730951,
  PI: 3.141592653589793,
  C_LIGHT: 299792458,
  G_CONST: 6.6743e-11,
  H_PLANCK: 6.62607e-34,
  AU: 149597870700,
  PC: 3.085677581e16,
})

export const HLN_V38_THEMES = Object.freeze([
  "cosmic-euclid",
  "pulsar-gold",
  "graviton-emerald",
  "supernova-crimson",
  "event-horizon",
  "orbital-station",
])

export const HLN_V38_THEME_REGISTRY = Object.freeze([
  {
    id: "cosmic-euclid",
    label: "Cosmic Euclid",
    colorScheme: "dark",
    swatch: "#0a0f1c",
    accent: "#38bdf8",
    category: "cosmic-dark",
  },
  {
    id: "pulsar-gold",
    label: "Pulsar Gold",
    colorScheme: "dark",
    swatch: "#13110b",
    accent: "#fbbf24",
    category: "pulsar-dark",
  },
  {
    id: "graviton-emerald",
    label: "Graviton Emerald",
    colorScheme: "dark",
    swatch: "#08140f",
    accent: "#34d399",
    category: "nebula-dark",
  },
  {
    id: "supernova-crimson",
    label: "Supernova Crimson",
    colorScheme: "dark",
    swatch: "#16080f",
    accent: "#f43f5e",
    category: "furnace-dark",
  },
  {
    id: "event-horizon",
    label: "Event Horizon",
    colorScheme: "dark",
    swatch: "#0d0f14",
    accent: "#f8fafc",
    category: "singularity-dark",
  },
  {
    id: "orbital-station",
    label: "Orbital Station",
    colorScheme: "light",
    swatch: "#ffffff",
    accent: "#2563eb",
    category: "station-light",
  },
])

export const HLN_V38_FONTS = Object.freeze([
  "geometric",
  "display",
  "technical",
  "grotesque",
  "cyber",
  "berlin",
  "editorial",
  "label",
])

export const HLN_V38_CJK_FONTS = Object.freeze([
  "auto",
  "hei",
  "display",
  "song",
  "kai",
  "mono",
  "fangsong",
])

export const HLN_V38_BG_PRESETS = Object.freeze([
  { id: "cosmic-geodesic", label: "Cosmic Geodesic", note: "spacetime curvature lens grid" },
  { id: "stellar-spectrum", label: "Stellar Spectrum", note: "absorption lines & photon flux" },
  { id: "pulsar-array", label: "Pulsar Timing Array", note: "relativistic beam pulse sweep" },
  { id: "celestial-sphere", label: "Celestial Sphere", note: "RA/Dec equatorial coordinate grid" },
  { id: "einstein-ring", label: "Einstein Ring Aperture", note: "concentric optical caustic arcs" },
  { id: "deep-space-lattice", label: "Deep Space Survey", note: "astronomical astrometry lattice" },
  { id: "quiet", label: "Observatory Quiet", note: "zero background motion" },
])

export const HLN_V38_MOTION_PRESETS = Object.freeze([
  "panel",
  "item",
  "reticle-lock",
  "lensing-warp",
  "spectrum-scan",
  "orbit-sweep",
  "photon-pulse",
  "caliper-draw",
  "type-in",
  "page-shift",
])

export function isHlnV38Theme(value) {
  return typeof value === "string" && HLN_V38_THEMES.includes(value)
}

export function applyHlnV38Theme(root, themeId) {
  const resolved = isHlnV38Theme(themeId) ? themeId : HLN_V38_THEMES[0]
  if (root && root.dataset) {
    root.dataset.hlnTheme = resolved
  }
  return resolved
}

export function applyHlnV38CjkFont(root, cjkMode = "auto") {
  const resolved = HLN_V38_CJK_FONTS.includes(cjkMode) ? cjkMode : "auto"
  if (root && root.dataset) {
    root.dataset.hlnCjkFont = resolved
  }
  return resolved
}
