export const HLN_CANONICAL_THEME_IDS = Object.freeze([
  "flat-design",
  "aurora",
  "liquid-glass",
  "organic-biophilic",
  "arknights",
  "endfield",
])

export const HLN_THEME_REGISTRY = Object.freeze([
  { id: "flat-design", label: "Flat Design", family: "flat", colorScheme: "light" },
  { id: "aurora", label: "Aurora", family: "aurora", colorScheme: "dark" },
  { id: "liquid-glass", label: "Liquid Glass", family: "glass", colorScheme: "dark" },
  { id: "organic-biophilic", label: "Organic Biophilic", family: "organic", colorScheme: "light" },
  { id: "arknights", label: "Arknights", family: "tactical", colorScheme: "dark" },
  { id: "endfield", label: "Endfield", family: "industrial", colorScheme: "dark" },
])

export function isCanonicalHlnTheme(value) {
  return HLN_CANONICAL_THEME_IDS.includes(value)
}

export function getHlnTheme(value) {
  return HLN_THEME_REGISTRY.find((theme) => theme.id === value)
}
