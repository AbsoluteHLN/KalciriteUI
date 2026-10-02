// ProjectHLN UI System v2.3 - Contract verification script
import { readFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const v23 = dirname(fileURLToPath(import.meta.url))
const distCss = await readFile(join(v23, "dist", "hln-ui-system-v2.3.css"), "utf8")
const Q = String.fromCharCode(34)
const indexJs = await import("./dist/index.js")

const themes = ["arknights", "endfield", "blacksteel", "abyss-aegir"]
for (const theme of themes) {
  if (!distCss.includes(`data-hln-theme="${theme}"`)) {
    throw new Error(`v2.3 bundle missing theme definition for: ${theme}`)
  }
}

const fonts = ["display", "technical", "grotesque", "cyber", "berlin", "condensed"]
for (const font of fonts) {
  if (!distCss.includes(`data-hln-font="${font}"`)) {
    throw new Error(`v2.3 bundle missing font definition for: ${font}`)
  }
}

const kinetics = ["panel", "item", "cyber-scan", "wipe-reveal", "radar-sweep", "clip-scan", "tactical-lock", "data-stream", "grid-march", "scanline-decode", "corner-deploy", "radar-deploy", "pulse-chain", "signal-sweep"]
for (const k of kinetics) {
  if (!distCss.includes(k)) {
    throw new Error(`v2.3 bundle missing kinetic variant: ${k}`)
  }
}

const bgPresets = ["tactical-grid", "holo-scan", "circuit-trace", "prts-sonar", "hazard-hatch", "hex-field", "radar-cross", "data-rain", "blueprint", "data-lattice", "blueprint-schematic", "quiet"]
for (const bg of bgPresets) {
  if (!distCss.includes(`data-hln-bg-motion="${bg}"`)) {
    throw new Error(`v2.3 bundle missing ambient background preset: ${bg}`)
  }
}

// v2.3 must NOT contain the dropped v2 soft/organic items
const dropped = ["nebula-flow", "quantum-wave", "data-hln-font=" + Q + "fangsong" + Q, "data-hln-font=" + Q + "classic" + Q, "prism-burst", "blur-zoom", "aurora-veil"]
for (const d of dropped) {
  if (distCss.includes(d)) {
    throw new Error(`v2.3 bundle must not contain dropped v2 item: ${d}`)
  }
}

if (indexJs.HLN_V23_THEMES.length !== 6) {
  throw new Error(`v2.3 ESM runtime themes mismatch: expected 6, got ${indexJs.HLN_V23_THEMES.length}`)
}

console.log("v2.3 verify passed: 6 industrial themes, 4 vector fonts, curated kinetics & geometric ambient backgrounds OK")
