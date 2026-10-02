# ProjectHLN UI System v2.3 Specification (Industrial-Tactical Vector Edition)

Inspired by the visual design language of **ak.hypergryph.com** and HyperGryph tactical vector aesthetics, v2.3 is a curated, hardened subset of v2 restricted to **industrial / tech / tactical / vector / linear / geometric** design. It removes soft, organic, and decorative motion, backgrounds, and type so the system reads harder and more technical than v2.

---

## 1. Architectural Independence from v1 and v2

- **v1 Integrity**: v1 remains clean and untouched with its original themes (flat-design, aurora, liquid-glass, organic-biophilic, arknights, endfield).
- **v2 Integrity**: v2 remains untouched with its nine-theme catalog and full kinetics.
- **v2.3 Namespace**: v2.3 provides its own bundle (dist/hln-ui-system-v2.3.css), ESM runtime (dist/index.js), and declarations (dist/index.d.ts).
- **Isolation Principle**: v1, v2, and v2.3 operate as independent UI engines. Switching between versions in preview shells or agent frontends never overwrites or pollutes one another.

---

## 2. Four Specialized Industrial-Tactical Themes (v2.3 Catalog)

1. arknights (Dark): Arknights Tactical Terminal - deep obsidian base #0a0e13, cyan laser accent #00e5ff, warning gold #f6d000.
2. endfield (Dark): Heavy Industry Vector Terminal - graphite slate #0a0f12, industrial yellow #f6d000, precision 45deg warning hatch.
3. blacksteel (Dark): Blacksteel Worldwide Tactical PMC - heavy ballistic carbon #0a0a0c, high-hazard orange #ff9100, armor chamfer cutouts.
4. abyss-aegir (Dark): Aegir Deep Abyss Submarine Tactical - sub-oceanic navy #040e16, bioluminescent emerald #00ffd5, linear depth diffusion.

Dropped from v2: rhodes-island, monster-siren, rhine-lab, babel, victoria-steam.

---

## 3. Curated Kinetics & Motion Engine (v2.3, Geometric Only)

v2.3 triggers motion via data-hln-motion and keeps only hard, linear, geometric variants:

- Channels: panel / item / control.
- Kept variants:
  - cyber-scan: HyperGryph laser line scan with high-contrast luminance burst.
  - wipe-reveal: vector polygon clip-path reveal.
  - quantum-glitch: multi-pass chromatic aberration and displacement glitch.
  - radar-sweep: circular tactical radar sweep reveal.
- New v2.3 variants:
  - clip-scan: stepped polygon clip-path wipe with a hard grid march (hln-v23-clip-scan).
  - tactical-lock: inset-bracket convergence that frames the target (hln-v23-tactical-lock).
  - data-stream: linear stepped dash reveal, left-to-right (hln-v23-data-stream).
  - grid-march: staggered linear column build with a travelling accent sweep (hln-v23-grid-march).
  - scanline-decode: stepped scanbar descend + decode flicker + linear settle (hln-v23-scanline-decode).
  - corner-deploy: chamfered corner deploy into a full frame lock (hln-v23-corner-deploy).
  - radar-deploy: geometric polygon expansion + frame settle without whole-card rotation (hln-v23-radar-deploy).
  - pulse-chain: linear pulse travelling through a segmented frame (hln-v23-pulse-chain).
  - signal-sweep: conic radar wipe + expanding sonar ring + content lock (hln-v23-signal-sweep).
- Dropped variants: spring, blur-zoom, prism-burst.

---

## 4. Curated Ambient Background Engines (v2.3, Vector / Industrial)

Controlled via data-hln-bg-motion:

1. tactical-grid: dual-layer coordinate point matrix and 48px vector grid drift.
2. holo-scan: high-velocity vertical laser scanline sweep with glowing grid sheen.
3. circuit-trace (NEW): industrial PCB trace grid with drifting major/minor lines and pinging node junctions (hln-v23-bg-circuit / -nodes).
4. prts-sonar: concentric expanding sonar pulses with 360deg rotating radar sweep.
5. hazard-hatch (NEW): industrial 45deg diagonal warning stripe field with a slow vertical scan band (hln-v23-bg-hazard / -scan).
6. hex-field (NEW): tessellated hex lattice with drifting highlight bloom (hln-v23-bg-hex).
7. radar-cross (NEW): crosshair rings + 360deg rotating conic radar sweep (hln-v23-bg-radar-rot).
8. data-rain (NEW): falling vertical column stream + travelling readout scan band (hln-v23-bg-rain / -scan).
9. blueprint (NEW): fine drafting grid (12/60px) with marching corner reticles (hln-v23-bg-blueprint).
10. data-lattice (NEW): falling vector glyph grid + travelling column scan (hln-v23-bg-lattice-fall / -scan).
11. blueprint-schematic (NEW): fine drafting grid + marching dimension lines + corner registration (hln-v23-bg-schematic-march).
12. quiet: static neutral surface with zero ambient motion.

Dropped backgrounds: nebula-flow, quantum-wave, aurora.

---

## 5. Curated Typography Matrix (4 Vector/Technical Stacks)

v2.3 supports exactly four tactical typography profiles, switchable at runtime via data-hln-font={mode} or applyHlnV23Font(font):

- display (--hln-ui-font-display): DIN Alternate, Bahnschrift, Segoe UI Variable Display, PingFang SC, Microsoft YaHei.
- technical (--hln-ui-font-technical): Cascadia Code, JetBrains Mono, SF Mono, Consolas, monospace.
- grotesque (--hln-ui-font-neo-grotesque): Inter, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Noto Sans SC, Microsoft YaHei.
- cyber (--hln-ui-font-cyber-mono): JetBrains Mono, Fira Code, Cascadia Code, Sarasa Mono SC, PingFang SC, monospace.

Dropped type hooks: body, classic, fangsong.

## Showcase Tidy (clean text)
- The rotating conic card reticle (`hln-v23-bg-conic-rot` overlay) and the stray "+" stat glyph are removed.
- The card-header scan line, stat reticle, and component-block left ticks are demoted to static, low-opacity frame accents (no animation).
- Content elements are lifted above decorative pseudo-element overlays so text and graphics never mix.

## 6. Button Geometry & Shape Variants
- data-shape="chamfer": 45-degree corner chamfer polygon cuts.
- data-shape="chamfer-sharp": asymmetrical tactical cut corners.
- data-shape="bracket": double-ended accent tactical bracket clamps.
- data-shape="tag-cut": top-left notched tag silhouette.
- data-shape="sharp": strict zero-radius industrial block.
- data-shape="pill": high-density rounded tactical capsule.

## 7. Tactical Visual Components
- .segmented: low-contrast grouped switcher with high-glow active tab indicator.
- .tactical-meter-wrap / .tactical-meter: linear laser telemetry gauges.
- .telemetry-grid / .stat-box: real-time monitored metrics HUD cards.
- .tactical-coords-card: monospaced coordinate and protocol security status block.
- v2.3 vector ornaments: crosshair registration ticks on tactical surface corners, .linear-rail segmented progress indicator (with animated data-flow dashes), chamfered 45deg cut on .showcase-card, scanning vector underline sweep on .card-header, rotating crosshair reticle on .stat-box, animated hazard-stripe slide, marching-ant pipeline steps, and marching active-tab underline on .segmented.

## 8. Accessibility Contract
- :focus-visible indicators are preserved.
- prefers-reduced-motion disables all animations and background motion, per the base.css Reduced Motion block.
