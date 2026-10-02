import { describe, expect, test } from "bun:test"
import { resolve } from "node:path"

const uiRoot = resolve(import.meta.dir)
const workspaceRoot = resolve(uiRoot, "..", "..")

const canonicalThemeIds = [
  "flat-design",
  "aurora",
  "liquid-glass",
  "organic-biophilic",
  "arknights",
  "endfield",
] as const

const legacyThemeIds = [
  "flat-glass",
  "neumorphism",
  "modern-dark",
  "swiss",
  "oled",
  "ai-native",
] as const

const generatedFiles = [
  "tokens.css",
  "themes.css",
  "compatibility.css",
  "surfaces.css",
  "components.css",
  "composer.css",
  "motion.css",
  "motion.ts",
  "icons.ts",
  "skins.ts",
  "registry.ts",
  "theme-registry.js",
  "index.ts",
  "contract.md",
] as const

const syncedFiles = [...generatedFiles, "hln-ui-system.css"] as const

const generatedToSource = {
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
} as const

const syncDestinations = [
  // v1 is a preserved compatibility snapshot. The live preview is mounted
  // from the relocated canonical root distribution, not this legacy tree.
] as const

async function read(relativePath: string): Promise<string> {
  return Bun.file(resolve(uiRoot, relativePath)).text()
}

async function readWorkspace(relativePath: string): Promise<string> {
  return Bun.file(resolve(workspaceRoot, relativePath)).text()
}

function themeBlock(source: string, id: string): string {
  source = source.replace(/\r\n?/g, "\n")
  const marker = `:root[data-hln-theme="${id}"]`
  const start = source.indexOf(marker)
  const end = source.indexOf("\n}\n", start)
  if (start === -1 || end === -1) throw new Error(`Missing theme block for ${id}`)
  return source.slice(start, end + 3)
}

function hexToken(block: string, name: string): string {
  const value = block.match(new RegExp(`--hln-ui-${name}:\\s*(#[0-9a-fA-F]{6})`))?.[1]
  if (!value) throw new Error(`Missing opaque ${name} token in theme block`)
  return value
}

function relativeLuminance(value: string): number {
  const channels = [0, 2, 4].map((offset) => Number.parseInt(value.slice(offset + 1, offset + 3), 16) / 255)
  return channels.reduce((sum, channel, index) => {
    const linear = channel <= 0.03928
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4
    return sum + linear * [0.2126, 0.7152, 0.0722][index]!
  }, 0)
}

function contrastRatio(foreground: string, background: string): number {
  const light = Math.max(relativeLuminance(foreground), relativeLuminance(background))
  const dark = Math.min(relativeLuminance(foreground), relativeLuminance(background))
  return (light + 0.05) / (dark + 0.05)
}

function pixelToken(source: string, name: string): number {
  const value = source.match(new RegExp(`--hln-ui-${name}:\\s*(\\d+)px`))?.[1]
  if (!value) throw new Error(`Missing ${name} token`)
  return Number(value)
}

function expectedIndex(source: string): string {
  return source
    .replace("./themes/registry", "./registry")
    .replace("./motion/motion", "./motion")
    .replace("./icons/icons", "./icons")
    .replace("./skins/skins", "./skins")
}

function componentMotionSection(source: string): string {
  const backgroundMarker = "[data-hln-ui-root][data-hln-bg-motion]"
  const markerIndex = source.indexOf(backgroundMarker)
  return markerIndex === -1 ? source : source.slice(0, markerIndex)
}

describe("HLN canonical UI system", () => {
  test("exposes exactly six canonical themes and isolates legacy ids", async () => {
    const [themes, compatibility, registry, manifestText] = await Promise.all([
      read("themes.css"),
      read("compatibility.css"),
      read("registry.ts"),
      readWorkspace("ui-source/manifests/agents.json"),
    ])
    const manifest = JSON.parse(manifestText)

    expect(manifest.source).toBe("ui-system/src")
    expect(manifest.themes).toEqual([...canonicalThemeIds])
    expect(registry).toContain("HLN_CANONICAL_THEME_IDS")

    for (const id of canonicalThemeIds) {
      expect(themes).toContain(`data-hln-theme="${id}"`)
      expect(themes).toContain(`data-theme="${id}"`)
    }

    for (const id of legacyThemeIds) {
      expect(themes).not.toContain(`data-hln-theme="${id}"`)
      expect(compatibility).toContain(`data-hln-theme="${id}"`)
    }
    expect(compatibility).toContain("Legacy theme ids are isolated")
  })

  test("keeps the required typography and removes retired design variables", async () => {
    const tokens = await read("tokens.css")
    for (const token of [
      "--hln-ui-font-display",
      "--hln-ui-font-title",
      "--hln-ui-font-body",
      "--hln-ui-font-form",
      "--hln-ui-font-technical",
    ]) {
      expect(tokens).toContain(token)
    }
    for (const family of ["Book Antiqua", "Berlin Sans BF", "方正小标宋简体", "仿宋"]) {
      expect(tokens).toContain(family)
    }
    for (const retired of ["--hln-ui-glow-accent", "--hln-ui-accent-gradient", "--hln-ui-pill-radius"]) {
      expect(tokens).not.toContain(retired)
    }
  })

  test("keeps theme geometry compact and semantic contrast readable", async () => {
    const themes = await read("themes.css")
    for (const id of canonicalThemeIds) {
      const block = themeBlock(themes, id)
      expect(pixelToken(block, "radius-xs")).toBeLessThanOrEqual(8)
      expect(pixelToken(block, "radius-sm")).toBeLessThanOrEqual(8)
      expect(pixelToken(block, "radius-md")).toBeLessThanOrEqual(8)

      const background = hexToken(block, "bg-1")
      expect(contrastRatio(hexToken(block, "text"), background)).toBeGreaterThanOrEqual(4.5)
      expect(contrastRatio(hexToken(block, "text-muted"), background)).toBeGreaterThanOrEqual(4.5)
      expect(contrastRatio(hexToken(block, "text-faint"), background)).toBeGreaterThanOrEqual(3)
      expect(contrastRatio(hexToken(block, "accent"), background)).toBeGreaterThanOrEqual(3)
      expect(contrastRatio(hexToken(block, "focus"), background)).toBeGreaterThanOrEqual(3)
    }
  })

  test("ships the motion, scrollbar, resize, and composer contracts", async () => {
    const [motion, surfaces, composer, contract] = await Promise.all([
      read("motion.css"),
      read("surfaces.css"),
      read("composer.css"),
      read("contract.md"),
    ])

    for (const preset of ["panel", "item", "control"]) {
      expect(motion).toContain(`[data-hln-motion="${preset}"]`)
    }
    expect(motion).toContain('[data-hln-motion-variant="spring"]')
    expect(motion).toContain("@media (prefers-reduced-motion: reduce)")
    expect(componentMotionSection(motion)).not.toMatch(/\banimation(?:-name)?\s*:[^;{}]*\binfinite\b/i)
    expect(motion).toMatch(/\[data-hln-ui-root\]\[data-hln-bg-motion="aurora"\][\s\S]*\banimation\s*:[^;{}]*\binfinite\b/i)
    for (const retired of ["hln-pulse", "hln-ambient", "hln-scan", "hln-shimmer"]) {
      expect(motion).not.toContain(retired)
    }
    expect(surfaces).toContain("scrollbar-width: thin")
    expect(surfaces).toContain("::-webkit-scrollbar-thumb")
    expect(surfaces).toContain('[data-hln-ui-resize-handle="vertical"]')
    expect(surfaces).toContain('[data-hln-ui-resize-handle="horizontal"]')
    expect(composer).toContain('[data-slot="anti-composer"]')
    expect(contract).toContain("ui-system/src/")
    expect(contract).toMatch(/ordinary controls and\s+panels use radii no larger than 8px/)
  })

  test("keeps motion and skin APIs bounded and framework-neutral", async () => {
    const [motionTs, skins, icons, sourceIndex] = await Promise.all([
      read("motion.ts"),
      read("skins.ts"),
      read("icons.ts"),
      read("src/index.ts"),
    ])

    expect(motionTs).toContain("prefersHlnReducedMotion")
    expect(motionTs).toContain("playHlnMotion")
    expect(motionTs).toContain("hlnFlip")
    expect(motionTs).toContain("Math.min(300, Math.max(150")
    expect(skins).toContain("SKIN_TOKEN_SET")
    expect(skins).toContain("Unsafe CSS value")
    expect(skins).toContain("return () =>")
    expect(skins).toContain("clearHlnSkin")
    expect(icons).toContain("escapeAttribute")
    expect(icons).toContain('aria-hidden="true"')
    expect(sourceIndex).toContain('HLN_UI_SOURCE_ROOT = "ui-system/src"')
  })

  test("exposes native window-control glyphs in the canonical icon contract", async () => {
    const icons = await read("src/icons/icons.ts")

    expect(icons).toContain('| "minus"')
    expect(icons).toContain('| "maximize"')
    expect(icons).toContain('minus: \'<path d="M5 12h14"/>\'')
    expect(icons).toContain('maximize: \'<path d="M5 5h14v14H5z"/>\'')
  })

  test("keeps generated distribution byte-equivalent to canonical source", async () => {
    const sourceIndex = await read("src/index.ts")
    for (const file of generatedFiles) {
      const generated = await read(file)
      const source = file === "index.ts"
        ? expectedIndex(sourceIndex)
        : await read(generatedToSource[file as keyof typeof generatedToSource])
      expect(generated, `${file} drifted from ui-system/src`).toBe(source)
    }

    const bundle = await read("hln-ui-system.css")
    expect(bundle).not.toContain("@import")
    expect(bundle).toContain("Canonical source: ui-system/src")
    expect(bundle).toContain("--hln-ui-bg-1")
    expect(bundle).toContain('data-hln-theme="arknights"')
    expect(bundle).toContain('[data-hln-ui-surface="glass"]')
    expect(bundle).toContain('[data-slot="anti-composer"]')
    expect(bundle).toContain("@keyframes hln-panel-enter")
    expect(componentMotionSection(bundle)).not.toMatch(/\banimation(?:-name)?\s*:[^;{}]*\binfinite\b/i)
    expect(bundle).toMatch(/\[data-hln-ui-root\]\[data-hln-bg-motion="aurora"\][\s\S]*\banimation\s*:[^;{}]*\binfinite\b/i)
  })

  test("keeps all registered host copies synchronized", async () => {
    const version = (await readWorkspace("ui-source/version.txt")).trim()
    for (const destination of syncDestinations) {
      expect((await readWorkspace(`${destination}/VERSION`)).trim()).toBe(version)
      for (const file of syncedFiles) {
        const source = await read(file)
        const copy = await readWorkspace(`${destination}/${file}`)
        expect(copy, `${destination}/${file} drifted from ui-system/${file}`).toBe(source)
      }
    }
  })

  test("keeps the artist-Paralos preview wired to the shared distribution", async () => {
    const [html, app, demoCss] = await Promise.all([
      readWorkspace("artist-Paralos-main/index.html"),
      readWorkspace("artist-Paralos-main/app.js"),
      readWorkspace("artist-Paralos-main/styles/demo.css"),
    ])

    expect(html).toContain('styles/hln-ui-system.css')
    expect(html).toContain("data-hln-ui-root")
    for (const id of canonicalThemeIds) expect(app).toContain(`"${id}"`)
    expect(app).toContain("prefers-reduced-motion")
    expect(app).toContain("data-skin-apply")
    expect(demoCss).not.toContain("radial-gradient")
    for (const retired of ["--hln-ui-glow-accent", "--hln-ui-accent-gradient"]) {
      expect(demoCss).not.toContain(retired)
    }
  })
})
