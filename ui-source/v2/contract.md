# ProjectHLN UI System v2 Specification (HyperGryph Tactical Vector Edition)

Inspired by the visual design language of **ak.hypergryph.com** and HyperGryph's tactical vector aesthetic, v2 provides a high-impact, independent UI system designed for code-heavy, vector-focused, and industrial-tactical applications.

---

## 1. Architectural Independence from v1

- **v1 Integrity**: v1 remains clean and untouched with its original canonical themes (`flat-design`, `aurora`, `liquid-glass`, `organic-biophilic`, `arknights`, `endfield`).
- **v2 Namespace**: v2 provides its own complete bundle (`dist/hln-ui-system-v2.css`), ESM runtime (`dist/index.js`), and declaration file (`dist/index.d.ts`).
- **Isolation Principle**: v1 and v2 operate as independent UI engines. When switching between versions in preview shells or agent frontends, their theme catalogs, kinetics, and ambient background presets do not overwrite or pollute one another.

---

## 2. Nine Specialized Tactical Themes (v2 Catalog)

1. `arknights` (Dark): Rhodes Island Tactical Terminal with deep obsidian base `#0a0e13`, cyan laser accent `#00e5ff`, and technical warning gold `#f6d000`.
2. `endfield` (Dark): Heavy Industry Vector Terminal with graphite slate `#0a0f12`, industrial yellow accent `#f6d000`, and precision 45° warning hatch.
3. `rhodes-island` (Light): PRTS Clinical Medical Tactical Suite with pure sterile white `#ffffff`, cerulean laser `#009cb8`, and high-contrast clinical readability.
4. `monster-siren` (Dark): MSR Monster Siren Records audio visualizer with acid cyber black `#060608`, electropunk neon red `#ff0055`, and starlight cyan highlights.
5. `rhine-lab` (Light): Rhine Lab Scientific Research Facility with eco-crystal white `#ffffff`, biophysical laser green `#00aa66`, and structural coordinate micro-grids.
6. `blacksteel` (Dark): Blacksteel Worldwide Tactical PMC with heavy ballistic carbon `#0a0a0c`, high-hazard orange `#ff9100`, and armor chamfer cutouts.
7. `babel` (Dark): Babel Ancient Archaeological Cyber Core with deep violet void `#08060f`, royal starlight purple `#a855f7`, and high-energy specular glow.
8. `victoria-steam` (Light): Victorian High-Industrial Brass with warm parchment white `#fffdf9`, steam bronze `#b35b3c`, and iron line rules.
9. `abyss-aegir` (Dark): Aegir Deep Abyss Submarine Tactical with sub-oceanic navy `#040e16`, bioluminescent emerald `#00ffd5`, and fluid depth diffusion.

---

## 3. High-Impact Kinetics & Motion Engine (v2)

v2 provides a rich kinetic matrix triggered via `data-hln-motion`:

- `panel` / `item` / `control`: Core kinetic channels.
- Variants:
  - `spring`: Snappy elastic burst with overshoot (`cubic-bezier(0.34, 1.25, 0.64, 1)`).
  - `cyber-scan`: HyperGryph laser line scan with high-contrast luminance burst.
  - `blur-zoom`: Depth-of-field optical zoom with gaussian diffusion decay.
  - `wipe-reveal`: Vector polygon clip-path reveal.
  - `quantum-glitch`: Multi-pass chromatic aberration and displacement glitch.
  - `radar-sweep`: Circular tactical radar sweep reveal.
  - `prism-burst`: Prismatic rotation flare with optical flare bloom.

---

## 4. Multi-Layered Ambient Background Engines (v2)

Controlled via `data-hln-bg-motion`:

1. `tactical-grid`: Dual-layer coordinate point matrix and 48px vector grid drift.
2. `holo-scan`: High-velocity vertical laser scanline sweep with glowing grid sheen.
3. `nebula-flow`: Particle stream and deep cosmic fluid diffusion.
4. `prts-sonar`: Concentric expanding sonar pulses with 360° rotating radar sweep.
5. `quantum-wave`: Chromatic glitch lines with pulsing electromagnetic field.
6. `aurora`: Rich multi-layer luminescence veil with organic wave deformation.
7. `quiet`: Static neutral surface with zero ambient motion.

---

## 5. Dynamic Typography Matrix

v2 supports 4 distinct modern and tactical typography profiles switchable at runtime with superior Latin and CJK typography balance:

- display (--hln-ui-font-display): DIN Alternate, Bahnschrift, Segoe UI Variable Display, PingFang SC, Microsoft YaHei.
- grotesque (--hln-ui-font-neo-grotesque): Inter, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Noto Sans SC, Microsoft YaHei. (Modern neutral geometric CJK/Latin blend)
- cyber (--hln-ui-font-cyber-mono): JetBrains Mono, Fira Code, Cascadia Code, Sarasa Mono SC, PingFang SC, monospace. (Industrial terminal & monospaced CJK alignment)
- ody (--hln-ui-font-body): Native clean system UI font stack with balanced line heights.
- 	echnical (--hln-ui-font-technical): Cascadia Code, JetBrains Mono, SF Mono, Consolas, monospace.
- classic (--hln-ui-font-classic): Book Antiqua, Georgia, Source Han Serif SC, Songti SC, serif.

Set via data-hln-font="{mode}" on [data-hln-ui-root] or through pplyHlnV2Font(font).

## Button Geometry & Shape Variants
- data-shape="chamfer": 45-degree corner chamfer polygon cuts.
- data-shape="chamfer-sharp": Asymmetrical tactical cut corners.
- data-shape="bracket": Double-ended accent tactical bracket clamps.
- data-shape="tag-cut": Top-left notched tag silhouette.
- data-shape="sharp": Strict zero-radius industrial block.
- data-shape="pill": High-density rounded tactical capsule.

## Tactical Visual Components
- .segmented: Low-contrast grouped switcher with high-glow active tab indicator.
- .tactical-meter-wrap / .tactical-meter: Linear laser telemetry gauges.
- .telemetry-grid / .stat-box: Real-time monitored metrics HUD cards.
- .tactical-coords-card: Monospaced coordinate and protocol security status block.