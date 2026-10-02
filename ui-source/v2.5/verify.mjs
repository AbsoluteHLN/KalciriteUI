// ProjectHLN UI System v2.5 - Contract verification script
import { readFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const v25 = dirname(fileURLToPath(import.meta.url))
const distCss = await readFile(join(v25, "dist", "hln-ui-system-v2.5.css"), "utf8")
const Q = String.fromCharCode(34)
const indexJs = await import("./dist/index.js")

const themes = ["arknights", "endfield", "blacksteel", "abyss-aegir", "babel", "monster-siren", "rhodes-paper", "lungmen-night", "kazdel-ink"]
for (const theme of themes) {
  if (!distCss.includes(`data-hln-theme="${theme}"`)) {
    throw new Error(`v2.5 bundle missing theme definition for: ${theme}`)
  }
}

const fonts = ["display", "technical", "grotesque", "cyber", "berlin", "condensed", "editorial", "label"]
for (const font of fonts) {
  if (!distCss.includes(`data-hln-font="${font}"`)) {
    throw new Error(`v2.5 bundle missing font definition for: ${font}`)
  }
}

const kinetics = ["panel", "item", "cyber-scan", "wipe-reveal", "radar-sweep", "clip-scan", "tactical-lock", "data-stream", "grid-march", "scanline-decode", "corner-deploy", "radar-deploy", "pulse-chain", "signal-sweep", "rail-draw", "type-in", "page-shift"]
for (const k of kinetics) {
  if (!distCss.includes(k)) {
    throw new Error(`v2.5 bundle missing kinetic variant: ${k}`)
  }
}

const bgPresets = ["tactical-grid", "holo-scan", "circuit-trace", "prts-sonar", "hazard-hatch", "hex-field", "radar-cross", "data-rain", "blueprint", "data-lattice", "blueprint-schematic", "editorial-grid", "quiet"]
for (const bg of bgPresets) {
  if (!distCss.includes(`data-hln-bg-motion="${bg}"`)) {
    throw new Error(`v2.5 bundle missing ambient background preset: ${bg}`)
  }
}

// v2.5 must NOT contain the dropped v2 soft/organic items
const dropped = ["nebula-flow", "quantum-wave", "data-hln-font=" + Q + "fangsong" + Q, "data-hln-font=" + Q + "classic" + Q, "prism-burst", "blur-zoom", "aurora-veil"]
for (const d of dropped) {
  if (distCss.includes(d)) {
    throw new Error(`v2.5 bundle must not contain dropped v2 item: ${d}`)
  }
}

if (indexJs.HLN_V25_THEMES.length !== 9) {
  throw new Error(`v2.5 ESM runtime themes mismatch: expected 9, got ${indexJs.HLN_V25_THEMES.length}`)
}

console.log("v2.5 verify passed: 9 themes, 8 typography profiles, linear editorial components and ambient backgrounds OK")
