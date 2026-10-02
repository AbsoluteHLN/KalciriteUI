# ProjectHLN UI System v3.0 Contract

Euclidean Vector Flat, Numerical & Mathematical Geometry Edition, shipped as an independent package in `ui-source/v3/`.

## 1. Architectural Independence & Pure Terminology

- `v1`, `v2`, `v2.3`, and `v2.5` remain completely untouched in their own directories and keep their original showcase layouts.
- `v3` owns `dist/hln-ui-system-v3.css`, `dist/index.js`, and `dist/index.d.ts`.
- `v3` uses pure mathematical, numerical, and vector design terminology and excludes game-specific nouns (`PRTS`, `Arknights`, `Endfield`, `Rhodes`, `Blacksteel`, `Aegir`, `Babel`, `Rhine`, `Kazdel`, `Lungmen`, `Monster Siren`).

## 2. Canonical Theme Catalog

`HLN_V3_THEMES` and `HLN_V3_THEME_REGISTRY` contain exactly nine themes:

1. `euclidean-cyan` - Dark cyan vector coordinate plane.
2. `isometric-amber` - Dark signal amber isometric plane.
3. `drafting-paper` - Light architectural drafting vellum.
4. `bauhaus-grid` - Light Swiss constructivist primary plane.
5. `cartesian-emerald` - Light clinical parametric emerald plane.
6. `graphite-polygon` - Dark graphite & international orange plane.
7. `polar-cobalt` - Deep cobalt & aqua polar locus plane.
8. `hypercube-violet` - Deep indigo & electric violet manifold plane.
9. `axiom-mono` - High-contrast monochrome vector ink plane.

All 9 themes enforce `--hln-ui-blur: 0px` and crisp geometric offset shadows (`3px 3px 0`).

## 3. Typography Contract

`HLN_V3_FONTS` exposes eight profiles:

- `geometric`
- `display`
- `technical`
- `grotesque`
- `cyber`
- `berlin`
- `editorial`
- `label`

## 4. Mathematical Motion & Ambient Background Contract

Motion variants (`data-hln-motion-variant`):
- `vector-construct`, `golden-iris`, `iso-shift`, `polygon-unfold`, `axis-snap`, `vertex-lock`, `wipe-reveal`, `clip-scan`, `rail-draw`, `type-in`, `page-shift`.

Ambient vector background presets (`HLN_V3_BG_PRESETS`):
- `euclidean-grid`, `golden-spiral`, `isometric-lattice`, `polar-locus`, `bezier-field`, `voronoi-poly`, `hex-field`, `blueprint-schematic`, `swiss-dots`, `quiet`.

## 5. Numerical & Vector Geometry Primitives

`src/geometry.css` defines:
- `.hln-v3-golden-grid`, `.hln-v3-silver-grid`, `.hln-v3-triad-grid`
- `.hln-v3-workbench`, `.hln-v3-axis-bar`, `.hln-v3-card`
- `.hln-v3-ruler-scale`, `.hln-v3-ruler-marks`, `.hln-v3-ruler-ticks`
- `.hln-v3-num-grid`, `.hln-v3-num-card`, `.hln-v3-metric-matrix`
- `.hln-v3-diagram-grid`, `.hln-v3-diagram`, `.hln-v3-fibonacci-box`
- `.hln-v3-transform-matrix`, `.hln-v3-matrix-grid`, `.hln-v3-quant-meter`, `.hln-v3-spec-list`
