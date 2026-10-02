# UI System v2 - HyperGryph Tactical Vector Edition

Canonical independent distribution for ProjectHLN UI System v2, modeled after HyperGryph tactical design language (ak.hypergryph.com), tailored for code-heavy, vector, and industrial sci-fi environments.

## Build & Verify
`ash
node ui-system/v2/build.mjs
node ui-system/v2/verify.mjs
node --test ui-system/v2/node-contract.test.mjs
`

## Nine Tactical Themes (Fixed Catalog)
The v2 catalog is fixed at exactly nine themes, cross-referenced in src/themes.css, src/index.js (registry), src/index.d.ts (types), contract.md, and dist/:

1. arknights - Rhodes Island Tactical Terminal (dark, #00e5ff cyan accent)
2. endfield - Heavy Industrial Vector Terminal (dark, #f6d000 hazard yellow accent)
3. rhodes-island - PRTS Clinical Medical Tactical Suite (light, #009cb8 cerulean accent)
4. monster-siren - MSR Monster Siren Records Audio Visualizer (dark, #ff0055 electropunk neon)
5. rhine-lab - Rhine Lab Scientific Research Matrix (light, #00aa66 biophysical laser green)
6. blacksteel - Blacksteel Worldwide Tactical PMC (dark, #ff9100 high-hazard orange)
7. babel - Babel Archaeological Cyber Core (dark, #a855f7 void purple)
8. victoria-steam - Victorian High-Industrial Brass (light, #b35b3c steam bronze)
9. abyss-aegir - Aegir Deep Abyss Submarine Tactical (dark, #00ffd5 bioluminescent emerald)

## Button Geometry & Tactical Components
- Tactile Shapes: data-shape=chamfer, data-shape=chamfer-sharp, data-shape=bracket, data-shape=tag-cut, data-shape=sharp, data-shape=pill.
- Interactive HUD: .segmented, .tactical-meter / .tactical-meter-wrap, .telemetry-grid / .stat-box, .tactical-coords-card.

## Typography Stacks
- display: DIN Alternate, Bahnschrift, Segoe UI Variable Display, PingFang SC.
- grotesque: Inter, Segoe UI, PingFang SC, Noto Sans SC (Neo Grotesque).
- cyber: JetBrains Mono, Fira Code, Sarasa Mono SC (Cyber Mono).
- body: Native high-legibility system text.
- technical: Cascadia Code, JetBrains Mono, SF Mono.
- classic: Book Antiqua, Georgia, Source Han Serif SC.

## Structure
- src/tokens.css - Vector HUD tokens, font stacks, layout & coordinate grid variables.
- src/themes.css - The nine canonical tactical themes above.
- src/base.css - Vector geometry, corner brackets, Chamfer cuts, Kinetics engine, and ambient background shaders.
- src/index.js - ESM runtime API with applyHlnV2Theme, applyHlnV2Font, playHlnV2Motion, and theme registry.
- src/index.d.ts - TypeScript contract declarations.
- dist/ - Self-contained bundled distribution files (hln-ui-system-v2.css, index.js, index.d.ts).