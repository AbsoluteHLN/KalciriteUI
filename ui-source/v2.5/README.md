# UI System v2.5 - Linear Editorial Vector Edition

Independent ProjectHLN UI System **v2.5**, built on the geometry and component language of `v2.3`. The edition adds a calmer editorial workbench layer: stronger reading hierarchy, more disciplined rules, clearer labels, compact data rows, and restrained motion. The v2.3 directory remains untouched.

## Build & Verify

```bash
node ui-system/v2.5/build.mjs
node ui-system/v2.5/verify.mjs
node --test ui-system/v2.5/node-contract.test.mjs
```

The generated bundle is `dist/hln-ui-system-v2.5.css`. Source files are copied into `dist/` so the bundle and individual imports can be inspected independently.

## Theme Catalog

The catalog contains exactly **nine** themes:

1. `arknights` - tactical terminal with cyan signal accents.
2. `endfield` - heavy industry terminal with hazard yellow.
3. `blacksteel` - ballistic carbon surfaces with hazard orange.
4. `abyss-aegir` - deep-submarine interface with bioluminescent emerald.
5. `babel` - archaeological void core with restrained violet.
6. `monster-siren` - acid cyber-industrial mode with signal green.
7. `rhodes-paper` - light editorial drafting desk for high-clarity layouts.
8. `lungmen-night` - compact civic information terminal with warm brass.
9. `kazdel-ink` - severe monochrome editorial mode for quiet composition.

Each theme is defined in `src/themes.css`, registered in `src/index.js`, typed in `src/index.d.ts`, and verified against the generated bundle.

## Linear Editorial Layer

The v2.5-only layout primitives are designed for vector editors, design-system workbenches, and tactical information surfaces:

- `.hln-v25-workbench` - two-column workbench with responsive collapse.
- `.hln-v25-command-strip` - concise command and status rail.
- `.hln-v25-rail` / `.hln-v25-rail__item` - linear section navigation.
- `.hln-v25-stage` / `.hln-v25-section` - reading-oriented content stages.
- `.hln-v25-metric-row` - dense, aligned metric strip.
- `.hln-v25-data-list` - scan-friendly rows for structured information.
- `.hln-v25-swatch-grid` - vector color and theme samples.
- `.hln-v25-status` - compact status indicator with semantic states.

The layer keeps the sharp, low-radius geometry of v2.3 while reducing visual noise. Text is placed above decorative overlays, controls retain visible focus rings, and the light paper theme removes glow-heavy treatment for clarity.

The latest refinement pass sets a stable 15px workbench baseline, uses fixed editorial display sizes, raises desktop controls to 40px and compact touch controls to 44px, and lets long labels wrap instead of colliding or silently truncating. The range slider keeps a fine vector track while exposing a larger interaction area.

## Typography

Runtime font profiles are:

- `display`, `technical`, `grotesque`, `cyber`
- `berlin`, `condensed`
- `editorial`, `label`

Use the v2.5 helpers from `dist/index.js`:

```js
import {
  applyHlnV25Theme,
  applyHlnV25Font,
  playHlnV25Motion,
} from "@hln/ui-system-v2.5"
```

## Motion & Backgrounds

The inherited vector motion catalog remains available, with three v2.5 editorial variants:

- `rail-draw` - draws a linear rail into view.
- `type-in` - reveals labels with a stepped editorial decode.
- `page-shift` - shifts a stage into place with a short linear settle.

The added `editorial-grid` background is a quiet drafting field for workbench surfaces. All motion respects `prefers-reduced-motion: reduce`.

## Structure

- `src/tokens.css` - semantic tokens, typography, spacing, and editorial variables.
- `src/themes.css` - the nine canonical themes.
- `src/base.css` - inherited vector geometry, controls, kinetics, and ambient fields.
- `src/edition.css` - v2.5 workbench layout, editorial surfaces, and new motion.
- `src/index.js` - ESM runtime registry and helpers.
- `src/index.d.ts` - TypeScript declarations.
- `dist/` - generated copies and `hln-ui-system-v2.5.css`.
- `themes/` - reserved for optional host-mounted per-theme overrides.

## Isolation

`v1`, `v2`, `v2.3`, and `v2.5` are independent engines. v2.5 is an additive evolution of v2.3 in its own directory; it does not overwrite or pollute earlier versions.
