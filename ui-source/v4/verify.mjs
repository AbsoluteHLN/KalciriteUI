// ProjectHLN UI System v4 - Folio Verification Script
// Standalone check: run after `node ui-source/v4/build.mjs`.
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import {
  HLN_V4_VERSION,
  HLN_V4_THEMES,
  HLN_V4_THEME_REGISTRY,
  HLN_V4_FONTS,
  HLN_V4_CJK_FONTS,
  HLN_V4_BG_PRESETS,
  HLN_V4_MOTION_VARIANTS,
} from "./dist/index.js"

const root = dirname(fileURLToPath(import.meta.url))
const bundle = readFileSync(join(root, "dist/hln-ui-system-v4.css"), "utf8")

assert.equal(HLN_V4_VERSION, "4.0.0")
assert.equal(HLN_V4_THEMES.length, 8)
assert.equal(HLN_V4_THEME_REGISTRY.length, 8)
assert.equal(HLN_V4_FONTS.length, 6)
assert.equal(HLN_V4_CJK_FONTS.length, 7)
assert.equal(HLN_V4_BG_PRESETS.length, 7)
assert.equal(HLN_V4_MOTION_VARIANTS.length, 7)

for (const id of HLN_V4_THEMES) {
  assert.ok(bundle.includes(`data-hln-theme="${id}"`), `Missing theme ${id} in v4 bundle`)
}
for (const f of HLN_V4_FONTS) {
  assert.ok(bundle.includes(`data-hln-font="${f}"`), `Missing font ${f} in v4 bundle`)
}
for (const cjk of HLN_V4_CJK_FONTS) {
  assert.ok(bundle.includes(`data-hln-cjk-font="${cjk}"`), `Missing CJK font ${cjk} in v4 bundle`)
}
for (const preset of HLN_V4_BG_PRESETS) {
  assert.ok(
    bundle.includes(`data-hln-bg-motion="${preset.id}"`),
    `Missing background ${preset.id} in v4 bundle`,
  )
}
for (const variant of HLN_V4_MOTION_VARIANTS) {
  assert.ok(bundle.includes(variant), `Missing motion variant ${variant} in v4 bundle`)
}

assert.ok(bundle.includes("prefers-reduced-motion"), "v4 bundle missing reduced-motion handling")
assert.ok(!bundle.includes("infinite"), "v4 bundle must not contain an infinite animation")
assert.ok(bundle.includes('data-active="true"'), "v4 bundle missing the Wash selected state")

console.log(
  "v4 verify passed: 8 multi-pigment themes, 6 typography profiles, 7 static backgrounds, 7 motion variants OK",
)
