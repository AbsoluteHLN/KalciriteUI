# ProjectHLN UI System

Canonical, framework-neutral visual foundation for every ProjectHLN client.
It ships three independent UI versions (v1 Standard Foundations, v2 HyperGryph Tactical Vector Edition, and v2.3 Industrial-Tactical Curated Edition), a maintainable motion core, custom scrollbars, and reusable component grammars.

## Version Architecture

- **v1 (Foundational Multiverse)**: Located in ui-system/v1/. Provides 6 canonical themes (flat-design, aurora, liquid-glass, organic-biophilic, arknights, endfield) and clean glassmorphism surfaces.
- **v2 (HyperGryph Tactical Vector Edition)**: Located in ui-system/v2/. An independent, high-density industrial design system inspired by ak.hypergryph.com with 9 tactical themes, multi-tier vector background shaders, Chamfer/Bracket geometric controls, and Neo Grotesque / Cyber Mono typography.
- **v2.3 (Industrial-Tactical Curated Edition)**: Located in ui-system/v2.3/. A hardened, curated subset of v2 narrowed to industrial / tech / tactical / vector / linear / geometric design only. 4 themes (arknights, endfield, blacksteel, abyss-aegir), 6 fonts (display, technical, grotesque, cyber, berlin, condensed), 12 clean motion variants (cyber-scan, wipe-reveal, radar-sweep, clip-scan, tactical-lock, data-stream, grid-march, scanline-decode, corner-deploy, radar-deploy, pulse-chain, signal-sweep), and 12 geometric ambient backgrounds (tactical-grid, holo-scan, circuit-trace, prts-sonar, hazard-hatch, hex-field, radar-cross, data-rain, blueprint, data-lattice, blueprint-schematic, quiet).

## Version Tri-Mount & Workbench

`E:\Projects\KalciriteUI\artist-Paralos-main\` serves as the live preview workbench supporting dynamic, zero-pollution switching between v1, v2, and v2.3 UI engines. Each version loads its own stylesheet and keeps its own independent theme / font / background / motion catalog; nothing leaks across versions.

## Build & Verification
```bash
# Build & verify v2 bundle
node v2/build.mjs
node v2/verify.mjs

# Build & verify v2.3 bundle
node v2.3/build.mjs
node v2.3/verify.mjs
node --test v2.3/node-contract.test.mjs
```
