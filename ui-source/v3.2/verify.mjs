// ProjectHLN UI System v3.2 - Verification Script
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import {
  HLN_V32_THEMES,
  HLN_V32_THEME_REGISTRY,
  HLN_V32_FONTS,
  HLN_V32_BG_PRESETS,
} from "./dist/index.js"

const root = dirname(fileURLToPath(import.meta.url))
const bundle = readFileSync(join(root, "dist/hln-ui-system-v3.2.css"), "utf8")

assert.equal(HLN_V32_THEMES.length, 6)
assert.equal(HLN_V32_THEME_REGISTRY.length, 6)
assert.equal(HLN_V32_FONTS.length, 5)
assert.equal(HLN_V32_BG_PRESETS.length, 5)

for (const id of HLN_V32_THEMES) {
  assert.ok(bundle.includes(`data-hln-theme="${id}"`), `Missing theme ${id} in v3.2 bundle`)
}
for (const f of HLN_V32_FONTS) {
  assert.ok(bundle.includes(`data-hln-font="${f}"`), `Missing font ${f} in v3.2 bundle`)
}
console.log("v3.2 verify passed: 6 subtractive linear themes, 5 typography profiles, 5 horizon backgrounds OK")
