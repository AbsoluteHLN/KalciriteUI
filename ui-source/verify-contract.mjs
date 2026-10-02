import { readFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import { dirname, join, resolve } from "node:path"

const themes = ["flat-design", "aurora", "liquid-glass", "organic-biophilic", "arknights", "endfield"]
const generated = {
  "tokens.css": "src/core/tokens.css",
  "themes.css": "src/themes/themes.css",
  "compatibility.css": "src/themes/compatibility.css",
  "surfaces.css": "src/surfaces/surfaces.css",
  "components.css": "src/components/components.css",
  "composer.css": "src/components/composer.css",
  "motion.css": "src/motion/motion.css",
  "motion.ts": "src/motion/motion.ts",
  "icons.ts": "src/icons/icons.ts",
  "skins.ts": "src/skins/skins.ts",
  "registry.ts": "src/themes/registry.ts",
  "theme-registry.js": "src/themes/theme-registry.js",
  "contract.md": "src/contract.md",
}
const hosts = [
  "artist-Paralos-main/styles",
]
const synced = [...Object.keys(generated), "hln-ui-system.css"]

async function text(path) { return readFile(path, "utf8") }

export async function verifyUiSystem(rootUrl = new URL("./", import.meta.url)) {
  const root = dirname(fileURLToPath(new URL("package.json", rootUrl)))
  const workspace = resolve(root, "..")
  const errors = []
  const themeCss = await text(join(root, "themes.css"))
  for (const theme of themes) {
    if (!themeCss.includes(`data-hln-theme="${theme}"`)) errors.push(`missing theme ${theme}`)
    if (!themeCss.includes(`data-theme="${theme}"`)) errors.push(`missing compatibility selector ${theme}`)
  }
  for (const [distribution, source] of Object.entries(generated)) {
    if ((await text(join(root, distribution))) !== (await text(join(root, source)))) errors.push(`distribution drift ${distribution}`)
  }
  const tokens = await text(join(root, "tokens.css"))
  const components = await text(join(root, "components.css"))
  if (!components.includes("min-height: 44px")) errors.push("missing 44px control minimum")
  if (!tokens.includes("font-size: 14px")) errors.push("missing 14px body font baseline")
  const motion = await text(join(root, "motion.css"))
  if (!motion.includes("@media (prefers-reduced-motion: reduce)")) errors.push("missing reduced-motion contract")
  const bundle = await text(join(root, "hln-ui-system.css"))
  if (!bundle.includes(":focus-visible")) errors.push("missing focus-visible contract")
  for (const host of hosts) {
    for (const file of synced) {
      if ((await text(join(root, file))) !== (await text(join(workspace, host, file)))) errors.push(`host drift ${host}/${file}`)
    }
  }
  return { errors, themeCount: themes.length, hostCount: hosts.length }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await verifyUiSystem()
  if (result.errors.length) {
    for (const error of result.errors) console.error(error)
    process.exitCode = 1
  } else console.log(`UI contract passed: ${result.themeCount} themes, ${result.hostCount} hosts`)
}
