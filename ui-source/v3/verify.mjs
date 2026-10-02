// ProjectHLN UI System v3.0 - Contract verification script
import { readFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const v3 = dirname(fileURLToPath(import.meta.url))
const distCss = await readFile(join(v3, "dist", "hln-ui-system-v3.css"), "utf8")
const indexJs = await import("./dist/index.js")

const themes = [
  "euclidean-cyan",
  "isometric-amber",
  "drafting-paper",
  "bauhaus-grid",
  "cartesian-emerald",
  "graphite-polygon",
  "polar-cobalt",
  "hypercube-violet",
  "axiom-mono",
]
for (const theme of themes) {
  if (!distCss.includes(`data-hln-theme="${theme}"`)) {
    throw new Error(`v3 bundle missing theme definition for: ${theme}`)
  }
}

const fonts = ["geometric", "display", "technical", "grotesque", "cyber", "berlin", "editorial", "label"]
for (const font of fonts) {
  if (!distCss.includes(`data-hln-font="${font}"`)) {
    throw new Error(`v3 bundle missing font definition for: ${font}`)
  }
}

const kinetics = [
  "panel",
  "item",
  "vector-construct",
  "golden-iris",
  "iso-shift",
  "polygon-unfold",
  "axis-snap",
  "vertex-lock",
  "wipe-reveal",
  "clip-scan",
  "rail-draw",
  "type-in",
  "page-shift",
]
for (const k of kinetics) {
  if (!distCss.includes(k)) {
    throw new Error(`v3 bundle missing kinetic variant: ${k}`)
  }
}

const bgPresets = [
  "euclidean-grid",
  "golden-spiral",
  "isometric-lattice",
  "polar-locus",
  "bezier-field",
  "voronoi-poly",
  "hex-field",
  "blueprint-schematic",
  "swiss-dots",
  "quiet",
]
for (const bg of bgPresets) {
  if (!distCss.includes(`data-hln-bg-motion="${bg}"`)) {
    throw new Error(`v3 bundle missing ambient background preset: ${bg}`)
  }
}

if (indexJs.HLN_V3_THEMES.length !== 9) {
  throw new Error(`v3 ESM runtime themes mismatch: expected 9, got ${indexJs.HLN_V3_THEMES.length}`)
}

console.log("v3 verify passed: 9 Euclidean vector-flat themes, 8 geometric typography profiles, 10 mathematical backgrounds OK")
