// ProjectHLN UI System v2 - Contract verification script
import { readFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const v2 = dirname(fileURLToPath(import.meta.url))
const distCss = await readFile(join(v2, "dist", "hln-ui-system-v2.css"), "utf8")
const indexJs = await import("./dist/index.js")

const themes = [
  "arknights",
  "endfield",
  "rhodes-island",
  "monster-siren",
  "rhine-lab",
  "blacksteel",
  "babel",
  "victoria-steam",
  "abyss-aegir",
]

for (const theme of themes) {
  if (!distCss.includes(`data-hln-theme="${theme}"`)) {
    throw new Error(`v2 bundle missing theme definition for: ${theme}`)
  }
}

const fonts = ["display", "body", "classic", "technical"]
for (const font of fonts) {
  if (!distCss.includes(`data-hln-font="${font}"`)) {
    throw new Error(`v2 bundle missing font definition for: ${font}`)
  }
}

const kinetics = ["panel", "item", "spring", "cyber-scan", "blur-zoom", "wipe-reveal", "quantum-glitch", "radar-sweep", "prism-burst"]
for (const k of kinetics) {
  if (!distCss.includes(k)) {
    throw new Error(`v2 bundle missing kinetic variant: ${k}`)
  }
}

const bgPresets = ["tactical-grid", "holo-scan", "nebula-flow", "prts-sonar", "quantum-wave", "aurora", "quiet"]
for (const bg of bgPresets) {
  if (!distCss.includes(`data-hln-bg-motion="${bg}"`)) {
    throw new Error(`v2 bundle missing ambient background preset: ${bg}`)
  }
}

if (indexJs.HLN_V2_THEMES.length !== 9) {
  throw new Error(`v2 ESM runtime themes mismatch: expected 9, got ${indexJs.HLN_V2_THEMES.length}`)
}

console.log("v2 verify passed: 9 tactical themes, 4 fonts, full kinetics & rich ambient background shaders OK")
