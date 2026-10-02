# ProjectHLN UI System v2.5 Contract

Linear Editorial Vector Edition, based on `v2.3` and shipped as an independent package.

## 1. Architectural Independence

- `v1` keeps its original themes and behavior.
- `v2` keeps its nine-theme catalog and full motion system.
- `v2.3` remains unchanged as the industrial-tactical vector baseline.
- `v2.5` owns `dist/hln-ui-system-v2.5.css`, `dist/index.js`, and `dist/index.d.ts`.
- Version selectors are scoped with `data-hln-ui-version="v2.5"` where a v2.5 override must not affect older engines.
- A host may mount v2.5 beside earlier versions without replacing their runtime registries or theme data.

## 2. Canonical Theme Catalog

The runtime registry and CSS must contain exactly these nine theme ids:

1. `arknights` - tactical cyan terminal.
2. `endfield` - heavy industry hazard yellow.
3. `blacksteel` - carbon and hazard orange.
4. `abyss-aegir` - deep submarine emerald.
5. `babel` - void violet core.
6. `monster-siren` - acid signal green.
7. `rhodes-paper` - light editorial paper surface.
8. `lungmen-night` - civic night terminal with brass accent.
9. `kazdel-ink` - monochrome editorial surface.

Each registry record exposes `id`, `label`, `swatch`, `accent`, and `colorScheme`. The registry accent, background swatch, and color scheme must match the corresponding CSS theme block.

## 3. Typography Contract

`HLN_V25_FONTS` exposes exactly eight profiles:

- `display`
- `technical`
- `grotesque`
- `cyber`
- `berlin`
- `condensed`
- `editorial`
- `label`

The CSS maps `editorial` to a readable display stack for section titles and metric values. `label` maps to a compact technical stack for metadata, indices, and status text. Removed legacy hooks remain absent from the bundle: `body`, `classic`, and `fangsong`.

## 4. Motion Contract

Motion is triggered through `data-hln-motion`, `data-hln-motion-state`, and `data-hln-motion-variant`. The supported variant catalog contains:

- `cyber-scan`
- `wipe-reveal`
- `radar-sweep`
- `clip-scan`
- `tactical-lock`
- `data-stream`
- `grid-march`
- `scanline-decode`
- `corner-deploy`
- `radar-deploy`
- `pulse-chain`
- `signal-sweep`
- `rail-draw`
- `type-in`
- `page-shift`

The first twelve variants inherit the v2.3 vector motion language. The final three are the v2.5 editorial additions. They are short, linear, and subordinate to content readability. `playHlnV25Motion` resets the state before replaying a one-shot animation and does nothing when reduced motion is requested.

## 5. Ambient Background Contract

`HLN_V25_BG_PRESETS` contains exactly thirteen ids:

1. `tactical-grid`
2. `holo-scan`
3. `circuit-trace`
4. `prts-sonar`
5. `hazard-hatch`
6. `hex-field`
7. `radar-cross`
8. `data-rain`
9. `blueprint`
10. `data-lattice`
11. `blueprint-schematic`
12. `editorial-grid`
13. `quiet`

All backgrounds are vector, grid, drafting, or information-field treatments. `editorial-grid` is the v2.5 addition. `quiet` is the static fallback. Removed soft/organic presets such as `nebula-flow`, `quantum-wave`, and `aurora-veil` must not appear in the v2.5 bundle.

## 6. Linear Editorial Components

The v2.5 edition layer defines the following stable primitives:

- `.hln-v25-workbench`
- `.hln-v25-command-strip`
- `.hln-v25-rail`
- `.hln-v25-rail__item`
- `.hln-v25-stage`
- `.hln-v25-section`
- `.hln-v25-section__header`
- `.hln-v25-metric-row`
- `.hln-v25-metric`
- `.hln-v25-data-list`
- `.hln-v25-data-list__row`
- `.hln-v25-swatch-grid`
- `.hln-v25-swatch`
- `.hln-v25-status`

The workbench collapses to a single column at narrow widths. Metric strips move from four columns to two, while the rail becomes a horizontal navigation band and then a single-column list on compact screens. Data rows become stacked blocks below the mobile breakpoint so labels and values do not collide.

## 7. Interaction and Accessibility

- `:focus-visible` indicators remain visible and use the active theme focus token.
- Controls retain predictable hover, active, and disabled states.
- Text uses zero letter spacing in the v2.5 edition layer to preserve Chinese and Latin readability.
- The workbench baseline is 15px, with stable non-viewport-scaled title and metric sizes.
- Primary controls and fields are 40px on larger surfaces and 44px at the compact breakpoint; segmented controls, switches, selects, and sliders retain usable hit areas.
- Long labels and details use `overflow-wrap: anywhere` at data boundaries so localization and identifiers do not overlap adjacent values.
- The paper theme avoids blur and glow-heavy effects.
- `prefers-reduced-motion: reduce` disables ambient motion and collapses transitions and animations.
- Layout uses stable grid tracks and responsive constraints so labels, icons, and dynamic values do not resize surrounding controls.

## 8. Build and Drift Checks

The source of truth is `src/`. Running `node v2.5/build.mjs` copies:

- `tokens.css`
- `themes.css`
- `base.css`
- `edition.css`
- `index.js`
- `index.d.ts`

The same build assembles those CSS files into `dist/hln-ui-system-v2.5.css`. `verify.mjs` checks the runtime catalog and generated bundle. `node-contract.test.mjs` checks source/dist parity, bundle assembly, registry metadata, curated ids, and the editorial component contract.
