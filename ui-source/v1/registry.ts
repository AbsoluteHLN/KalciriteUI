export const HLN_CANONICAL_THEME_IDS = [
  "flat-design",
  "aurora",
  "liquid-glass",
  "organic-biophilic",
  "arknights",
  "endfield",
] as const

export type HlnCanonicalThemeId = (typeof HLN_CANONICAL_THEME_IDS)[number]

export type HlnThemeDefinition = {
  id: HlnCanonicalThemeId
  label: string
  family: "flat" | "aurora" | "glass" | "organic" | "tactical" | "industrial"
  colorScheme: "light" | "dark"
  description: string
}

export const HLN_THEME_REGISTRY: readonly HlnThemeDefinition[] = [
  {
    id: "flat-design",
    label: "Flat Design",
    family: "flat",
    colorScheme: "light",
    description: "Clear surfaces, direct hierarchy, and deterministic controls.",
  },
  {
    id: "aurora",
    label: "Aurora",
    family: "aurora",
    colorScheme: "dark",
    description: "Quiet cyan-violet atmosphere for long agent sessions.",
  },
  {
    id: "liquid-glass",
    label: "Liquid Glass",
    family: "glass",
    colorScheme: "dark",
    description: "Refractive layers with restrained blur and clear focus states.",
  },
  {
    id: "organic-biophilic",
    label: "Organic Biophilic",
    family: "organic",
    colorScheme: "light",
    description: "Soft green workspace with calm editorial readability.",
  },
  {
    id: "arknights",
    label: "Arknights",
    family: "tactical",
    colorScheme: "dark",
    description: "Tactical terminal language with compact field geometry.",
  },
  {
    id: "endfield",
    label: "Endfield",
    family: "industrial",
    colorScheme: "dark",
    description: "Industrial navigation, steel surfaces, and amber status marks.",
  },
]

export function isCanonicalHlnTheme(value: string): value is HlnCanonicalThemeId {
  return (HLN_CANONICAL_THEME_IDS as readonly string[]).includes(value)
}

export function getHlnTheme(value: string): HlnThemeDefinition | undefined {
  return HLN_THEME_REGISTRY.find((theme) => theme.id === value)
}
