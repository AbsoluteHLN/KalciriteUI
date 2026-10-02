# UI System v3.0 - Euclidean Vector Flat & Numerical Geometry Edition

Independent ProjectHLN UI System **v3.0**, built around **vectorized flat graphic design**, **Swiss numerical typography**, and **mathematical geometry aesthetics** ($\varphi = 1.618$, $\sqrt{2} = 1.414$, $\sqrt{3} = 1.732$, $\pi = 3.14159$). It contains zero game-specific terminology and enforces pure flat vector surfaces (`--hln-ui-blur: 0px`) with crisp geometric offset shadows (`3px 3px 0`).

## Build & Verify

```bash
node ui-source/v3/build.mjs
node ui-source/v3/verify.mjs
node --test ui-source/v3/node-contract.test.mjs
```

## Canonical 9-Theme Catalog (6 Dark + 3 Light Vector Planes)

1. `euclidean-cyan` - Dark obsidian coordinate plane with cyan vector axis (`#00d4ff`).
2. `isometric-amber` - Carbon slate isometric lattice with signal amber (`#f5c400`).
3. `drafting-paper` - Light architectural drafting vellum with deep teal ink (`#0d746e`).
4. `bauhaus-grid` - Light Swiss constructivist plane with ultramarine & carmine (`#1d4ed8`).
5. `cartesian-emerald` - Light clinical parametric plane with emerald vector lines (`#059669`).
6. `graphite-polygon` - Dark ballistic graphite plane with international orange (`#ff6b00`).
7. `polar-cobalt` - Deep cobalt polar locus plane with vector aqua (`#00e5bf`).
8. `hypercube-violet` - Non-Euclidean indigo manifold with electric violet (`#9d4edd`).
9. `axiom-mono` - Stark high-contrast monochrome ink and chalk (`#e2e8f0`).

## Numerical & Vector Design Primitives (`src/geometry.css`)

- `.hln-v3-golden-grid` / `.hln-v3-silver-grid` / `.hln-v3-triad-grid` - Mathematical proportion layout grids ($1.618:1$, $1.414:1$, $1:1:1$).
- `.hln-v3-workbench` / `.hln-v3-axis-bar` - Euclidean workbench with graduated ruler ticks.
- `.hln-v3-ruler-scale` / `.hln-v3-ruler-marks` / `.hln-v3-ruler-ticks` - Graduated numerical coordinate ruler (`00` to `100` with `61.8 φ` golden mark).
- `.hln-v3-num-grid` / `.hln-v3-num-card` - Swiss numerical typography cards with tabular numerals, index callouts (`01`..`04`), and vector progress bars.
- `.hln-v3-diagram-grid` / `.hln-v3-diagram` - Vector SVG artboard containers for Golden Spiral, Cubic Bézier splines, Polar unit circle, and Isometric $\sqrt{3}$ projections.
- `.hln-v3-fibonacci-box` - Interactive $61.8\% / 38.2\%$ recursive Fibonacci planar partition.
- `.hln-v3-transform-matrix` / `.hln-v3-matrix-grid` - $3\times 3$ homogeneous affine transformation matrix readout.
- `.hln-v3-quant-meter` - Discrete quantized step gauge.
- `.hln-v3-metric-matrix` / `.hln-v3-spec-list` - Tabular numerical metrics and dotted-leader coordinate specifications.
