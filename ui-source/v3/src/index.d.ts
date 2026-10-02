// ProjectHLN UI System v3.0 - TypeScript Declarations
// Euclidean Vector Flat, Numerical & Mathematical Geometry Edition

export type HlnV3Theme =
  | "euclidean-cyan"
  | "isometric-amber"
  | "drafting-paper"
  | "bauhaus-grid"
  | "cartesian-emerald"
  | "graphite-polygon"
  | "polar-cobalt"
  | "hypercube-violet"
  | "axiom-mono"

export type HlnV3Font =
  | "geometric"
  | "display"
  | "technical"
  | "grotesque"
  | "cyber"
  | "berlin"
  | "editorial"
  | "label"

export type HlnV3CjkFont =
  | "auto"
  | "hei"
  | "display"
  | "song"
  | "kai"
  | "mono"
  | "fangsong"

export interface HlnV3CjkFontMetadata {
  id: HlnV3CjkFont
  label: string
  family: string
}

export type HlnV3MotionPreset = "panel" | "item" | "control"
export type HlnV3MotionState = "enter" | "exit"
export type HlnV3MotionVariant =
  | "vector-construct"
  | "golden-iris"
  | "iso-shift"
  | "polygon-unfold"
  | "axis-snap"
  | "vertex-lock"
  | "wipe-reveal"
  | "clip-scan"
  | "rail-draw"
  | "type-in"
  | "page-shift"

export type HlnV3BgPresetId =
  | "euclidean-grid"
  | "golden-spiral"
  | "isometric-lattice"
  | "polar-locus"
  | "bezier-field"
  | "voronoi-poly"
  | "hex-field"
  | "blueprint-schematic"
  | "swiss-dots"
  | "quiet"

export interface HlnV3ThemeMetadata {
  id: HlnV3Theme
  label: string
  swatch: string
  accent: string
  colorScheme: "dark" | "light"
}

export interface HlnV3BgPreset {
  id: HlnV3BgPresetId
  label: string
  note: string
}

export interface HlnV3MathConstants {
  readonly PHI: number
  readonly INV_PHI: number
  readonly SQRT2: number
  readonly SQRT3: number
  readonly PI: number
}

export declare const HLN_V3_THEMES: readonly HlnV3Theme[]
export declare const HLN_V3_THEME_REGISTRY: readonly HlnV3ThemeMetadata[]
export declare const HLN_V3_BG_PRESETS: readonly HlnV3BgPreset[]
export declare const HLN_V3_FONTS: readonly HlnV3Font[]
export declare const HLN_V3_CJK_FONTS: readonly HlnV3CjkFont[]
export declare const HLN_V3_CJK_FONT_REGISTRY: readonly HlnV3CjkFontMetadata[]
export declare const HLN_V3_MATH_CONSTANTS: HlnV3MathConstants

export declare function isHlnV3Theme(theme: string): theme is HlnV3Theme
export declare function applyHlnV3Theme(theme: HlnV3Theme, target?: HTMLElement | null): boolean
export declare function currentHlnV3Theme(target?: HTMLElement | null): HlnV3Theme

export declare function isHlnV3Font(font: string): font is HlnV3Font
export declare function applyHlnV3Font(font: HlnV3Font, target?: HTMLElement | null): boolean
export declare function currentHlnV3Font(target?: HTMLElement | null): HlnV3Font

export declare function isHlnV3CjkFont(cjkFont: string): cjkFont is HlnV3CjkFont
export declare function applyHlnV3CjkFont(cjkFont: HlnV3CjkFont, target?: HTMLElement | null): boolean
export declare function currentHlnV3CjkFont(target?: HTMLElement | null): HlnV3CjkFont

export declare function playHlnV3Motion(
  scope: HTMLElement | null,
  preset?: HlnV3MotionPreset,
  state?: HlnV3MotionState,
  variant?: HlnV3MotionVariant
): void
