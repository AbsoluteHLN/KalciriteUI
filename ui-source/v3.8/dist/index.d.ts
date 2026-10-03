// ProjectHLN UI System v3.8 - TypeScript Declarations (index.d.ts)

export type HlnV38ThemeId =
  | "cosmic-euclid"
  | "pulsar-gold"
  | "graviton-emerald"
  | "supernova-crimson"
  | "event-horizon"
  | "orbital-station"

export type HlnV38FontId =
  | "geometric"
  | "display"
  | "technical"
  | "grotesque"
  | "cyber"
  | "berlin"
  | "editorial"
  | "label"

export type HlnV38CjkFontId =
  | "auto"
  | "hei"
  | "display"
  | "song"
  | "kai"
  | "mono"
  | "fangsong"

export type HlnV38BgPresetId =
  | "cosmic-geodesic"
  | "stellar-spectrum"
  | "pulsar-array"
  | "celestial-sphere"
  | "einstein-ring"
  | "deep-space-lattice"
  | "quiet"

export interface HlnV38ThemeMetadata {
  readonly id: HlnV38ThemeId
  readonly label: string
  readonly colorScheme: "dark" | "light"
  readonly swatch: string
  readonly accent: string
  readonly category: string
}

export declare const HLN_V38_MATH_CONSTANTS: Readonly<{
  PHI: number
  PHI_INV: number
  SQRT2: number
  PI: number
  C_LIGHT: number
  G_CONST: number
  H_PLANCK: number
  AU: number
  PC: number
}>

export declare const HLN_V38_THEMES: readonly HlnV38ThemeId[]
export declare const HLN_V38_THEME_REGISTRY: readonly HlnV38ThemeMetadata[]
export declare const HLN_V38_FONTS: readonly HlnV38FontId[]
export declare const HLN_V38_CJK_FONTS: readonly HlnV38CjkFontId[]
export declare const HLN_V38_BG_PRESETS: readonly Readonly<{
  id: HlnV38BgPresetId
  label: string
  note: string
}>[]
export declare const HLN_V38_MOTION_PRESETS: readonly string[]

export declare function isHlnV38Theme(value: unknown): value is HlnV38ThemeId
export declare function applyHlnV38Theme(root: HTMLElement | null | undefined, themeId: string): HlnV38ThemeId
export declare function applyHlnV38CjkFont(root: HTMLElement | null | undefined, cjkMode?: string): HlnV38CjkFontId
