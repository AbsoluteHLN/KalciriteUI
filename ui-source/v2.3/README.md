# UI System v2.3 - Industrial-Tactical Vector Edition

Canonical independent distribution for ProjectHLN UI System **v2.3** - a curated, hardened subset of v2, narrowed strictly to **industrial / tech / tactical / vector / linear / geometric** design. Soft, organic, and decorative elements (spring physics, blur/zoom, prismatic flares, nebula/aurora backgrounds, and the serif/classic/fangsong type hooks) have been removed. v1 and v2 remain untouched and independent.

## Build & Verify

```bash
node ui-system/v2.3/build.mjs
node ui-system/v2.3/verify.mjs
node --test ui-system/v2.3/node-contract.test.mjs
```

## Four Industrial-Tactical Themes (Fixed Catalog)
The v2.3 catalog is fixed at exactly **four** themes, cross-referenced in src/themes.css, src/index.js (registry), src/index.d.ts (types), contract.md, and dist/:

1. arknights - Arknights Tactical Terminal (dark, #00e5ff cyan laser accent)
2. endfield - Endfield Heavy Industry (dark, #f6d000 hazard yellow accent)
3. blacksteel - Blacksteel PMC (dark, #ff9100 high-hazard orange accent)
4. abyss-aegir, babel, monster-siren - Abyss Aegir Submarine Tactical (dark, #00ffd5 bioluminescent emerald accent)

## Curated Kinetics (Geometric Only)
Triggered via data-hln-motion. v2.3 keeps the four hard, linear v2 variants and adds eleven new geometric/complex ones:

- Kept: cyber-scan, wipe-reveal, radar-sweep
- New (geometric): clip-scan (polygon wipe + grid march), tactical-lock (bracket convergence frame), data-stream (linear dash-march reveal)
- New (complex multi-layer): grid-march (staggered column build + accent sweep), scanline-decode (stepped scanbar + decode flicker), corner-deploy (chamfer corner deploy + frame lock), radar-deploy (geometric polygon expansion + frame settle, non-rotating), pulse-chain (linear pulse through segmented frame)
- New (deep vector choreography): prism-grid (rotating conic light through an animated diagonal vector grid), signal-sweep (conic radar wipe + sonar ring + content lock) (alternating row reveal + travelling phase line)

Excluded as over-the-top: vector-assemble, orbit-lock, cascade-deploy (removing these aggressive multi-phase rotations / fly-in effects keeps the showcase calm and readable).

Removed: spring, blur-zoom, prism-burst.

## Curated Ambient Backgrounds (Vector / Industrial)
Controlled via data-hln-bg-motion:

1. tactical-grid - precision coordinate point matrix + vector grid drift
2. holo-scan - high-velocity laser scanline sweep
3. circuit-trace - NEW industrial PCB trace grid with node pings
4. prts-sonar - concentric sonar pulses + 360deg radar sweep
5. hazard-hatch - NEW industrial 45deg diagonal warning stripe field
6. hex-field - NEW tessellated hex lattice with drifting highlight bloom
7. radar-cross - NEW crosshair rings + 360deg rotating conic radar sweep
8. data-rain - NEW falling vertical column stream + travelling readout scan band
9. blueprint - NEW fine drafting grid (12/60px) with marching corner reticles
10. data-lattice - NEW falling vector glyph grid + travelling column scan
11. blueprint-schematic - NEW fine drafting grid + marching dimension lines + corner registration
12. quiet - static neutral surface, zero ambient motion

Removed: nebula-flow, quantum-wave, aurora.

## Showcase Tidy (clean text)
A v2.3-only override block removes the rotating conic card reticle and the stray "+" stat glyph, and demotes the card-header scan line, stat reticle, and component-block ticks to static, low-opacity frame accents. Content is lifted above any decorative overlay so text never mixes with graphics.

## Curated Typography (4 Vector/Technical Stacks)
Switched at runtime via data-hln-font:

- display (--hln-ui-font-display): DIN Alternate, Bahnschrift, Segoe UI Variable Display, PingFang SC.
- technical (--hln-ui-font-technical): Cascadia Code, JetBrains Mono, SF Mono, Consolas, monospace.
- grotesque (--hln-ui-font-neo-grotesque): Inter, Segoe UI, PingFang SC, Noto Sans SC.
- cyber (--hln-ui-font-cyber-mono): JetBrains Mono, Fira Code, Cascadia Code, Sarasa Mono SC, PingFang SC, monospace.

Removed: body, classic, fangsong.

## Button Geometry & Tactical Components
- Shapes: chamfer, chamfer-sharp, bracket, tag-cut, sharp, pill.
- HUD: .segmented, .tactical-meter / .tactical-meter-wrap, .telemetry-grid / .stat-box, .tactical-coords-card.
- v2.3 vector ornaments: crosshair registration ticks on tactical surfaces, .linear-rail (animated data-flow dashes), chamfered 45deg cut on showcase cards, scanning vector underline sweep on card headers, rotating crosshair reticle on stat boxes, animated hazard-stripe slide, marching-ant pipeline steps, marching active-tab underline, and corner registration ticks on component blocks.

## Structure
- src/tokens.css - Vector HUD tokens, font stacks, layout & coordinate grid variables.
- src/themes.css - The four canonical industrial-tactical themes above.
- src/base.css - Vector geometry, corner brackets, chamfer cuts, kinetic engine, ambient background engine, and v2.3 geometric additions.
- src/index.js - ESM runtime (registry + theme/font/motion helpers).
- src/index.d.ts - TypeScript declarations.
- dist/ - Generated bundle hln-ui-system-v2.3.css and copied sources.

## Isolation
v1, v2, and v2.3 are independent engines. Preview shells keep separate catalogs per version; v2.3 never leaks into v1/v2 and vice-versa.
