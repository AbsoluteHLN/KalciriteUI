// ProjectHLN UI System v2.5 - TypeScript Declarations
// Linear Editorial Vector edition based on v2.3 and independently shipped as v2.5.

export type HlnV25Theme =
  | "arknights"
  | "endfield"
  | "blacksteel"
  | "abyss-aegir"
  | "babel"
  | "monster-siren"
  | "rhodes-paper"
  | "lungmen-night"
  | "kazdel-ink"

export type HlnV25Font =
  | "display"
  | "technical"
  | "grotesque"
  | "cyber"
  | "berlin"
  | "condensed"
  | "editorial"
  | "label"

export type HlnV25MotionPreset = "panel" | "item" | "control"
export type HlnV25MotionState = "enter" | "exit"
export type HlnV25MotionVariant =
  | "cyber-scan"
  | "wipe-reveal"
  | "radar-sweep"
  | "clip-scan"
  | "tactical-lock"
  | "data-stream"
  | "grid-march"
  | "scanline-decode"
  | "corner-deploy"
  | "radar-deploy"
  | "pulse-chain"
  | "signal-sweep"
  | "rail-draw"
  | "type-in"
  | "page-shift"

export type HlnV25BgPresetId =
  | "tactical-grid"
  | "holo-scan"
  | "circuit-trace"
  | "prts-sonar"
  | "hazard-hatch"
  | "hex-field"
  | "radar-cross"
  | "data-rain"
  | "blueprint"
  | "data-lattice"
  | "blueprint-schematic"
  | "editorial-grid"
  | "quiet"

export interface HlnV25ThemeMetadata {
  id: HlnV25Theme
  label: string
  swatch: string
  accent: string
  colorScheme: "dark" | "light"
}

export interface HlnV25BgPreset {
  id: HlnV25BgPresetId
  label: string
  note: string
}

export declare const HLN_V25_THEMES: readonly HlnV25Theme[]
export declare const HLN_V25_THEME_REGISTRY: readonly HlnV25ThemeMetadata[]
export declare const HLN_V25_BG_PRESETS: readonly HlnV25BgPreset[]
export declare const HLN_V25_FONTS: readonly HlnV25Font[]

export declare function isHlnV25Theme(theme: string): theme is HlnV25Theme
export declare function applyHlnV25Theme(theme: HlnV25Theme, target?: HTMLElement | null): boolean
export declare function currentHlnV25Theme(target?: HTMLElement | null): HlnV25Theme

export declare function isHlnV25Font(font: string): font is HlnV25Font
export declare function applyHlnV25Font(font: HlnV25Font, target?: HTMLElement | null): boolean
export declare function currentHlnV25Font(target?: HTMLElement | null): HlnV25Font

export declare function playHlnV25Motion(
  scope: HTMLElement | null,
  preset?: HlnV25MotionPreset,
  state?: HlnV25MotionState,
  variant?: HlnV25MotionVariant
): void
