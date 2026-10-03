const fontsV1 = [
  { id: "display", label: "Display" },
  { id: "body", label: "Body" },
  { id: "classic", label: "Classic" },
  { id: "fangsong", label: "FangSong" },
  { id: "technical", label: "Technical" },
]

const fontsV2 = [
  { id: "display", label: "Display DIN" },
  { id: "grotesque", label: "Neo Grotesque" },
  { id: "cyber", label: "Cyber Mono" },
  { id: "body", label: "Modern Body" },
  { id: "technical", label: "Technical" },
  { id: "classic", label: "Classic Serif" },
]

const fontsV23 = [
  { id: "display", label: "Display Tactical" },
  { id: "technical", label: "Technical Mono" },
  { id: "grotesque", label: "Neo Grotesque" },
  { id: "cyber", label: "Cyber Mono" },
  { id: "berlin", label: "Berlin Vector" },
  { id: "condensed", label: "Condensed Block" },
]

const fontsV25 = [
  { id: "display", label: "凝练黑 · Editorial" },
  { id: "technical", label: "工程黑 · Tech Mono" },
  { id: "grotesque", label: "兰亭黑 · Grotesque" },
  { id: "cyber", label: "矩阵黑 · Cyber Mono" },
  { id: "berlin", label: "制图楷 · Berlin" },
  { id: "condensed", label: "窄体黑 · Condensed" },
  { id: "editorial", label: "人文宋 · Serif" },
  { id: "label", label: "铭牌体 · Label" },
]

const fontsV3 = [
  { id: "geometric", label: "几何黑 · Geometric" },
  { id: "display", label: "凝练黑 · Display" },
  { id: "technical", label: "工程黑 · Math Mono" },
  { id: "grotesque", label: "兰亭黑 · Grotesque" },
  { id: "cyber", label: "矩阵黑 · Cyber" },
  { id: "berlin", label: "制图楷 · Construct" },
  { id: "editorial", label: "人文宋 · Editorial" },
  { id: "label", label: "铭牌体 · Label" },
]

const fontsV32 = [
  { id: "geometric", label: "几何黑 · Geometric" },
  { id: "grotesque", label: "兰亭黑 · Linear Sans" },
  { id: "editorial", label: "人文宋 · Editorial" },
  { id: "technical", label: "工程黑 · Tech Mono" },
  { id: "display", label: "凝练黑 · Display" },
]

const cjkFontModes = [
  { id: "auto", label: "联动 · Auto", name: "联动配对", badge: "AUTO PAIR" },
  { id: "hei", label: "几何黑 · Hei", name: "现代几何黑", badge: "CJK HEI" },
  { id: "display", label: "凝练黑 · Display", name: "凝练建筑黑", badge: "CJK DISPLAY" },
  { id: "song", label: "思源宋 · Song", name: "人文思源宋", badge: "CJK SONG" },
  { id: "kai", label: "霞鹜楷 · Kai", name: "制图霞鹜楷", badge: "CJK KAI" },
  { id: "fangsong", label: "清仿宋 · FangSong", name: "工程清仿宋", badge: "CJK FANGSONG" },
  { id: "mono", label: "等宽黑 · Mono", name: "等宽更纱黑", badge: "CJK MONO" },
]

const cjkFontTokenMap = {
  hei: "var(--hln-ui-font-cjk-hei)",
  display: "var(--hln-ui-font-cjk-display)",
  song: "var(--hln-ui-font-cjk-song)",
  kai: "var(--hln-ui-font-cjk-kai)",
  fangsong: "var(--hln-ui-font-cjk-fangsong)",
  mono: "var(--hln-ui-font-cjk-mono)",
}

const cjkAutoPairNames = {
  geometric: "现代几何黑",
  display: "凝练建筑黑",
  technical: "等宽更纱黑",
  grotesque: "瑞士兰亭黑",
  cyber: "等宽矩阵黑",
  berlin: "制图霞鹜楷",
  condensed: "窄体建筑黑",
  editorial: "人文思源宋",
  classic: "人文思源宋",
  fangsong: "工程清仿宋",
  label: "精密微米黑",
  body: "现代几何黑",
}

const themesV1 = [
  { id: "flat-design", label: "Flat Design", swatch: "#f4f6f4", accent: "#0b6b62" },
  { id: "aurora", label: "Aurora", swatch: "#151b32", accent: "#83e4d8" },
  { id: "liquid-glass", label: "Liquid Glass", swatch: "#14273a", accent: "#7ed7ff" },
  { id: "organic-biophilic", label: "Organic Biophilic", swatch: "#f9fdf9", accent: "#19754d" },
  { id: "arknights", label: "Arknights (v1)", swatch: "#1b2024", accent: "#7bd1c3" },
  { id: "endfield", label: "Endfield (v1)", swatch: "#18242a", accent: "#78ddcf" },
]

const themesV2 = [
  { id: "arknights", label: "Arknights Terminal", swatch: "#0a0e13", accent: "#00e5ff" },
  { id: "endfield", label: "Endfield Industry", swatch: "#0a0f12", accent: "#f6d000" },
  { id: "rhodes-island", label: "Rhodes Island PRTS", swatch: "#f0f4f8", accent: "#0284c7" },
  { id: "monster-siren", label: "Monster Siren MSR", swatch: "#08060e", accent: "#d946ef" },
  { id: "rhine-lab", label: "Rhine Lab Bio-Tech", swatch: "#f2f7f4", accent: "#059669" },
  { id: "blacksteel", label: "Blacksteel PMC", swatch: "#0c0d10", accent: "#f97316" },
  { id: "babel", label: "Babel Void Core", swatch: "#090611", accent: "#8b5cf6" },
  { id: "victoria-steam", label: "Victoria Steam", swatch: "#14100c", accent: "#d97706" },
  { id: "abyss-aegir", label: "Aegir Deep Abyss", swatch: "#050e14", accent: "#10b981" },
]

const themesV23 = [
  { id: "arknights", label: "Arknights Tactical", swatch: "#131920", accent: "#00e5ff" },
  { id: "endfield", label: "Endfield Industry", swatch: "#121c22", accent: "#f6d000" },
  { id: "blacksteel", label: "Blacksteel PMC", swatch: "#141418", accent: "#ff9100" },
  { id: "abyss-aegir", label: "Abyss Aegir", swatch: "#091a28", accent: "#00ffd5" },
  { id: "babel", label: "Babel Void", swatch: "#120e20", accent: "#a855f7" },
  { id: "monster-siren", label: "Monster Siren", swatch: "#0f0f12", accent: "#00ff66" },
]

const themesV25 = [
  { id: "arknights", label: "Arknights Tactical", swatch: "#131920", accent: "#00e5ff" },
  { id: "endfield", label: "Endfield Industry", swatch: "#121c22", accent: "#f6d000" },
  { id: "blacksteel", label: "Blacksteel PMC", swatch: "#141418", accent: "#ff9100" },
  { id: "abyss-aegir", label: "Abyss Aegir", swatch: "#091a28", accent: "#00ffd5" },
  { id: "babel", label: "Babel Void", swatch: "#120e20", accent: "#a855f7" },
  { id: "monster-siren", label: "Monster Siren", swatch: "#0f0f12", accent: "#00ff66" },
  { id: "rhodes-paper", label: "Rhodes Paper", swatch: "#f5f7f4", accent: "#147d76" },
  { id: "lungmen-night", label: "Lungmen Night", swatch: "#1a1c21", accent: "#d8b05c" },
  { id: "kazdel-ink", label: "Kazdel Ink", swatch: "#171819", accent: "#d8dde0" },
]

const themesV3 = [
  { id: "euclidean-cyan", label: "Euclidean Cyan", swatch: "#121820", accent: "#00d4ff" },
  { id: "isometric-amber", label: "Isometric Amber", swatch: "#141b22", accent: "#f5c400" },
  { id: "drafting-paper", label: "Drafting Vellum", swatch: "#f8faf7", accent: "#0d746e" },
  { id: "bauhaus-grid", label: "Bauhaus Construct", swatch: "#f9f7f1", accent: "#1d4ed8" },
  { id: "cartesian-emerald", label: "Cartesian Emerald", swatch: "#f4f9f6", accent: "#059669" },
  { id: "graphite-polygon", label: "Graphite Polygon", swatch: "#15171c", accent: "#ff6b00" },
  { id: "polar-cobalt", label: "Polar Cobalt", swatch: "#0b1b28", accent: "#00e5bf" },
  { id: "hypercube-violet", label: "Hypercube Violet", swatch: "#120f22", accent: "#9d4edd" },
  { id: "axiom-mono", label: "Axiom Monochrome", swatch: "#141619", accent: "#e2e8f0" },
]

const themesV32 = [
  { id: "linear-obsidian", label: "Linear Obsidian", swatch: "#10141a", accent: "#38bdf8" },
  { id: "linear-platinum", label: "Linear Platinum", swatch: "#ffffff", accent: "#2563eb" },
  { id: "linear-amber", label: "Linear Amber", swatch: "#12161c", accent: "#f59e0b" },
  { id: "linear-paper", label: "Linear Paper", swatch: "#faf9f5", accent: "#0d9488" },
  { id: "linear-emerald", label: "Linear Emerald", swatch: "#0f1714", accent: "#10b981" },
  { id: "linear-mono", label: "Linear Mono", swatch: "#121215", accent: "#f4f4f5" },
]

const themesV35 = [
  { id: "singularity-cyan", label: "Singularity Cyan", swatch: "#0f1622", accent: "#00f0ff" },
  { id: "tensor-amber", label: "Tensor Amber", swatch: "#141922", accent: "#ffb800" },
  { id: "veridian-stream", label: "Veridian Stream", swatch: "#0d1d1a", accent: "#00e699" },
  { id: "synapse-violet", label: "Synapse Violet", swatch: "#131024", accent: "#b366ff" },
  { id: "cobalt-manifold", label: "Cobalt Manifold", swatch: "#0d1b2e", accent: "#38bdf8" },
  { id: "titanium-oxide", label: "Titanium Oxide", swatch: "#161920", accent: "#f8fafc" },
  { id: "alabaster-studio", label: "Alabaster Studio", swatch: "#ffffff", accent: "#2563eb" },
  { id: "bauhaus-compiler", label: "Bauhaus Compiler", swatch: "#fcfaf5", accent: "#dc2626" },
]

const themesV38 = [
  { id: "cosmic-euclid", label: "Cosmic Euclid", swatch: "#080c14", accent: "#00f0ff" },
  { id: "pulsar-gold", label: "Pulsar Gold", swatch: "#0e0c08", accent: "#ffb703" },
  { id: "graviton-emerald", label: "Graviton Emerald", swatch: "#071310", accent: "#00f59b" },
  { id: "supernova-crimson", label: "Supernova Crimson", swatch: "#130909", accent: "#ff3366" },
  { id: "event-horizon", label: "Event Horizon", swatch: "#050608", accent: "#a855f7" },
  { id: "orbital-station", label: "Orbital Station", swatch: "#f8fafc", accent: "#0284c7" },
]

const bgPresetsV1 = [
  { id: "aurora", label: "Aurora Drift", note: "soft layered glow" },
  { id: "grid-drift", label: "Grid Drift", note: "point-line cadence" },
  { id: "pulse", label: "Pulse Field", note: "slow focus rhythm" },
  { id: "holo-scan", label: "Holo Scan", note: "cyber scanning grid" },
  { id: "nebula-flow", label: "Nebula Flow", note: "particle fluid depth" },
  { id: "quiet", label: "Quiet", note: "static background" },
]

const bgPresetsV2 = [
  { id: "tactical-grid", label: "Tactical Laser Grid", note: "coordinate scanning" },
  { id: "holo-scan", label: "Holographic Vector", note: "scanline laser sweep" },
  { id: "nebula-flow", label: "Nebula Depth Flow", note: "sub-space particle drift" },
  { id: "prts-sonar", label: "PRTS Sonar Sweep", note: "radial radar ping" },
  { id: "quantum-wave", label: "Quantum Waveform", note: "interference fringes" },
  { id: "aurora", label: "Cosmic Aurora Lum", note: "multi-point energy bloom" },
  { id: "quiet", label: "Quiet Minimal", note: "solid tactical matte" },
]

const bgPresetsV23 = [
  { id: "tactical-grid", label: "Tactical Vector Grid", note: "precision coordinate scan" },
  { id: "holo-scan", label: "Cyber Laser Scan", note: "laser scanline sweep" },
  { id: "circuit-trace", label: "Circuit Trace Matrix", note: "industrial trace grid" },
  { id: "prts-sonar", label: "PRTS Sonar Sweep", note: "circular tactical radar" },
  { id: "hazard-hatch", label: "Hazard Hatch Field", note: "industrial diagonal stripes" },
  { id: "hex-field", label: "Hex Field Lattice", note: "tessellated hex grid" },
  { id: "radar-cross", label: "Radar Crosshair", note: "rotating sweep + cross" },
  { id: "data-rain", label: "Data Rain Columns", note: "falling vector stream" },
  { id: "blueprint", label: "Blueprint Draft Grid", note: "fine drafting matrix" },
  { id: "data-lattice", label: "Data Lattice Matrix", note: "falling glyph grid + scan" },
  { id: "blueprint-schematic", label: "Blueprint Schematic", note: "drafting grid + dimension lines" },
  { id: "quiet", label: "Static Quiet", note: "zero background motion" },
]

const bgPresetsV25 = [
  ...bgPresetsV23.slice(0, -1),
  { id: "editorial-grid", label: "Editorial Draft Grid", note: "quiet fine-grid layout field" },
  { id: "quiet", label: "Static Quiet", note: "zero background motion" },
]

const bgPresetsV3 = [
  { id: "euclidean-grid", label: "Euclidean Coordinate", note: "Cartesian major/minor axes" },
  { id: "golden-spiral", label: "Golden Ratio Field", note: "phi = 1.618 subdivision" },
  { id: "isometric-lattice", label: "Isometric Lattice", note: "30/60/120 deg triangulation" },
  { id: "polar-locus", label: "Polar Unit Circle", note: "concentric radial locus" },
  { id: "bezier-field", label: "Bezier Anchor Matrix", note: "vector nodes & tangents" },
  { id: "voronoi-poly", label: "Polygon Tessellation", note: "planar geometric facets" },
  { id: "hex-field", label: "Hexagonal Honeycomb", note: "sqrt(3) hex lattice" },
  { id: "blueprint-schematic", label: "Architectural Draft", note: "dimension ticks & rules" },
  { id: "swiss-dots", label: "Swiss Dot Matrix", note: "minimalist 16px point grid" },
  { id: "quiet", label: "Matte Flat Canvas", note: "zero background ornament" },
]

const bgPresetsV32 = [
  { id: "horizon-rule", label: "Horizon Rule", note: "61.8% golden horizon & linear sweep" },
  { id: "axial-cross", label: "Axial Cross", note: "single origin crosshair & pulse" },
  { id: "parallel-lines", label: "Parallel Columns", note: "96px vertical architectural lines" },
  { id: "fine-grain-line", label: "Baseline Grid", note: "64px sparse linear baseline" },
  { id: "quiet", label: "Quiet Plane", note: "pure matte void" },
]

const bgPresetsV35 = [
  { id: "tensor-stream", label: "Tensor Data Stream", note: "bidirectional vector packet flow" },
  { id: "neural-dag", label: "Neural DAG Lattice", note: "directed acyclic node mesh" },
  { id: "fourier-harmonics", label: "Fourier Harmonics", note: "phase-shifted wave interference" },
  { id: "procedural-matrix", label: "Procedural Register", note: "quantized 96px/24px register grid" },
  { id: "simplex-contour", label: "Simplex Manifold", note: "topographical vector locus" },
  { id: "clock-bus", label: "Synchronous Bus", note: "parallel program clock traces" },
  { id: "swiss-vector", label: "Swiss Vector Plane", note: "minimalist 32px crosshair grid" },
  { id: "quiet", label: "Studio Quiet", note: "zero background motion" },
]

const bgPresetsV38 = [
  { id: "cosmic-geodesic", label: "Cosmic Geodesic", note: "curved spacetime coordinate mesh" },
  { id: "stellar-spectrum", label: "Stellar Spectrogram", note: "Balmer dark absorption lines" },
  { id: "pulsar-array", label: "Pulsar Beam Array", note: "rotating collimated magnetic axis" },
  { id: "celestial-sphere", label: "Celestial Unit Sphere", note: "equatorial and ecliptic circles" },
  { id: "einstein-ring", label: "Einstein Lensing Ring", note: "gravitational deflection envelope" },
  { id: "deep-space-lattice", label: "Deep Space Lattice", note: "parsec coordinate fiducial crosshairs" },
  { id: "quiet", label: "Quiet Void", note: "zero background ornament" },
]

const motionActionsV1 = [
  { id: "panel", label: "Panel Default", type: "panel", variant: "" },
  { id: "items", label: "Stagger Items", type: "items", variant: "" },
  { id: "spring", label: "Spring Burst", type: "panel", variant: "spring" },
]

const motionActionsV2 = [
  { id: "panel", label: "Panel Enter", type: "panel", variant: "" },
  { id: "spring", label: "Spring Burst", type: "panel", variant: "spring" },
  { id: "cyber-scan", label: "Cyber Scan", type: "panel", variant: "cyber-scan" },
  { id: "blur-zoom", label: "Blur Zoom", type: "panel", variant: "blur-zoom" },
  { id: "wipe-reveal", label: "Wipe Reveal", type: "panel", variant: "wipe-reveal" },
  { id: "quantum-glitch", label: "Quantum Glitch", type: "panel", variant: "quantum-glitch" },
  { id: "radar-sweep", label: "Radar Sweep", type: "panel", variant: "radar-sweep" },
  { id: "prism-burst", label: "Prism Burst", type: "panel", variant: "prism-burst" },
  { id: "items", label: "Stagger Items", type: "items", variant: "" },
]

const motionActionsV23 = [
  { id: "panel", label: "Panel Enter", type: "panel", variant: "" },
  { id: "cyber-scan", label: "Cyber Scan", type: "panel", variant: "cyber-scan" },
  { id: "wipe-reveal", label: "Wipe Reveal", type: "panel", variant: "wipe-reveal" },
  { id: "radar-sweep", label: "Radar Sweep", type: "panel", variant: "radar-sweep" },
  { id: "clip-scan", label: "Clip Scan", type: "panel", variant: "clip-scan" },
  { id: "tactical-lock", label: "Tactical Lock", type: "panel", variant: "tactical-lock" },
  { id: "data-stream", label: "Data Stream", type: "panel", variant: "data-stream" },
  { id: "grid-march", label: "Grid March", type: "panel", variant: "grid-march" },
  { id: "scanline-decode", label: "Scanline Decode", type: "panel", variant: "scanline-decode" },
  { id: "corner-deploy", label: "Corner Deploy", type: "panel", variant: "corner-deploy" },
  { id: "radar-deploy", label: "Radar Deploy", type: "panel", variant: "radar-deploy" },
  { id: "pulse-chain", label: "Pulse Chain", type: "panel", variant: "pulse-chain" },
  { id: "signal-sweep", label: "Signal Sweep", type: "panel", variant: "signal-sweep" },
  { id: "items", label: "Stagger Items", type: "items", variant: "" },
]

const motionActionsV25 = [
  ...motionActionsV23.slice(0, -1),
  { id: "rail-draw", label: "Rail Draw", type: "panel", variant: "rail-draw" },
  { id: "type-in", label: "Type In", type: "panel", variant: "type-in" },
  { id: "page-shift", label: "Page Shift", type: "panel", variant: "page-shift" },
  { id: "items", label: "Stagger Items", type: "items", variant: "" },
]

const motionActionsV3 = [
  { id: "panel", label: "Plane Enter", type: "panel", variant: "" },
  { id: "vector-construct", label: "Vector Construct", type: "panel", variant: "vector-construct" },
  { id: "golden-iris", label: "Golden Iris φ", type: "panel", variant: "golden-iris" },
  { id: "iso-shift", label: "Iso Shift 30°", type: "panel", variant: "iso-shift" },
  { id: "polygon-unfold", label: "Polygon Unfold", type: "panel", variant: "polygon-unfold" },
  { id: "axis-snap", label: "Axis Snap (X,Y)", type: "panel", variant: "axis-snap" },
  { id: "vertex-lock", label: "Vertex Lock", type: "panel", variant: "vertex-lock" },
  { id: "wipe-reveal", label: "Wipe Reveal", type: "panel", variant: "wipe-reveal" },
  { id: "clip-scan", label: "Clip Scan", type: "panel", variant: "clip-scan" },
  { id: "rail-draw", label: "Rail Draw", type: "panel", variant: "rail-draw" },
  { id: "type-in", label: "Type In", type: "panel", variant: "type-in" },
  { id: "page-shift", label: "Page Shift", type: "panel", variant: "page-shift" },
  { id: "items", label: "Stagger Nodes", type: "items", variant: "" },
]

const motionActionsV32 = [
  { id: "line-extend", label: "Line Extend", type: "panel", variant: "line-extend" },
  { id: "plane-glide", label: "Plane Glide", type: "panel", variant: "plane-glide" },
  { id: "axis-reveal", label: "Axis Reveal", type: "panel", variant: "axis-reveal" },
  { id: "rail-draw", label: "Rail Draw", type: "panel", variant: "rail-draw" },
  { id: "type-in", label: "Type In", type: "panel", variant: "type-in" },
  { id: "page-shift", label: "Page Shift", type: "panel", variant: "page-shift" },
  { id: "items", label: "Stagger Lines", type: "items", variant: "" },
]

const motionActionsV35 = [
  { id: "stream-cascade", label: "Stream Cascade", type: "panel", variant: "stream-cascade" },
  { id: "tensor-fold", label: "Tensor Unfold", type: "panel", variant: "tensor-fold" },
  { id: "compile-lock", label: "Compile Lock", type: "panel", variant: "compile-lock" },
  { id: "wave-propagate", label: "Wave Propagate", type: "panel", variant: "wave-propagate" },
  { id: "golden-iris", label: "Golden Iris φ", type: "panel", variant: "golden-iris" },
  { id: "rail-draw", label: "Rail Draw", type: "panel", variant: "rail-draw" },
  { id: "type-in", label: "Type In", type: "panel", variant: "type-in" },
  { id: "page-shift", label: "Page Shift", type: "panel", variant: "page-shift" },
  { id: "items", label: "Stagger Stream", type: "items", variant: "" },
]

const motionActionsV38 = [
  { id: "reticle-lock", label: "Reticle Lock", type: "panel", variant: "reticle-lock" },
  { id: "lensing-warp", label: "Lensing Warp", type: "panel", variant: "lensing-warp" },
  { id: "spectrum-scan", label: "Spectrum Scan", type: "panel", variant: "spectrum-scan" },
  { id: "orbit-sweep", label: "Orbit Sweep", type: "panel", variant: "orbit-sweep" },
  { id: "photon-pulse", label: "Photon Pulse", type: "panel", variant: "photon-pulse" },
  { id: "caliper-draw", label: "Caliper Draw", type: "panel", variant: "caliper-draw" },
  { id: "type-in", label: "Type In", type: "panel", variant: "type-in" },
  { id: "page-shift", label: "Page Shift", type: "panel", variant: "page-shift" },
  { id: "items", label: "Stagger Ephemeris", type: "items", variant: "" },
]

const fontModes = {
  geometric: "var(--hln-ui-font-geometric, var(--hln-ui-font-display))",
  display: "var(--hln-ui-font-display)",
  body: "var(--hln-ui-font-body)",
  grotesque: "var(--hln-ui-font-neo-grotesque)",
  cyber: "var(--hln-ui-font-cyber-mono)",
  berlin: "var(--hln-ui-font-berlin)",
  condensed: "var(--hln-ui-font-condensed)",
  technical: "var(--hln-ui-font-technical)",
  classic: "var(--hln-ui-font-classic)",
  fangsong: "var(--hln-ui-font-fangsong, var(--hln-ui-font-body))",
  editorial: "var(--hln-ui-font-editorial)",
  label: "var(--hln-ui-font-label)",
}

const versionDescriptions = {
  v1: "v1.0 Canonical Multi-Theme Design System",
  v2: "v2.0 HyperGryph Tactical Vector Engine",
  "v2.3": "v2.3 Industrial-Tactical Curated Vector Edition",
  "v2.5": "v2.5 Linear Editorial Vector Workbench",
  v3: "v3.0 Euclidean Vector Flat & Mathematical Geometry",
  "v3.2": "v3.2 Subtractive Linear Architecture — Pure 1px Horizon Discipline",
  "v3.5": "v3.5 Algorithmic Vector, AI-Native, Procedural & Data-Stream Studio",
  "v3.8": "v3.8 Cosmic Viewport Lens — Relativistic Gravitational & Spectroscopic Observatory",
}

const skinTokenMap = {
  accent: "--hln-ui-accent",
  background: "--hln-ui-bg-0",
  panel: "--hln-ui-bg-1",
  line: "--hln-ui-line",
}

let currentUiVersion = "v3"

const root = document.body
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

function getFontsForVersion(version) {
  if (version === "v3.8") return fontsV3
  if (version === "v3.5") return fontsV3
  if (version === "v3.2") return fontsV32
  if (version === "v3") return fontsV3
  if (version === "v2.5") return fontsV25
  if (version === "v2.3") return fontsV23
  if (version === "v2") return fontsV2
  return fontsV1
}

function getThemesForVersion(version) {
  if (version === "v3.8") return themesV38
  if (version === "v3.5") return themesV35
  if (version === "v3.2") return themesV32
  if (version === "v3") return themesV3
  if (version === "v2.5") return themesV25
  if (version === "v2.3") return themesV23
  if (version === "v2") return themesV2
  return themesV1
}

function getBgPresetsForVersion(version) {
  if (version === "v3.8") return bgPresetsV38
  if (version === "v3.5") return bgPresetsV35
  if (version === "v3.2") return bgPresetsV32
  if (version === "v3") return bgPresetsV3
  if (version === "v2.5") return bgPresetsV25
  if (version === "v2.3") return bgPresetsV23
  if (version === "v2") return bgPresetsV2
  return bgPresetsV1
}

function getMotionActionsForVersion(version) {
  if (version === "v3.8") return motionActionsV38
  if (version === "v3.5") return motionActionsV35
  if (version === "v3.2") return motionActionsV32
  if (version === "v3") return motionActionsV3
  if (version === "v2.5") return motionActionsV25
  if (version === "v2.3") return motionActionsV23
  if (version === "v2") return motionActionsV2
  return motionActionsV1
}

const VECTOR_VERSIONS = ["v2", "v2.3", "v2.5", "v3", "v3.2", "v3.5", "v3.8"]

const stylesheetForVersion = {
  v1: "styles/hln-ui-system.css",
  v2: "styles/hln-ui-system-v2.css",
  "v2.3": "styles/hln-ui-system-v2.3.css",
  "v2.5": "styles/hln-ui-system-v2.5.css",
  v3: "styles/hln-ui-system-v3.css",
  "v3.2": "styles/hln-ui-system-v3.2.css",
  "v3.5": "styles/hln-ui-system-v3.5.css",
  "v3.8": "styles/hln-ui-system-v3.8.css",
}

function getActiveShowcaseLayout() {
  if (currentUiVersion === "v3.8") return document.querySelector("#demo-layout-v38")
  if (currentUiVersion === "v3.5") return document.querySelector("#demo-layout-v35")
  if (currentUiVersion === "v3.2") return document.querySelector("#demo-layout-v32")
  if (currentUiVersion === "v3") return document.querySelector("#demo-layout-v3")
  return document.querySelector("#demo-layout")
}

function defaultThemeForVersion(version) {
  if (version === "v3.8") return "cosmic-euclid"
  if (version === "v3.5") return "singularity-cyan"
  if (version === "v3.2") return "linear-obsidian"
  if (version === "v3") return "euclidean-cyan"
  return VECTOR_VERSIONS.indexOf(version) === -1 ? "aurora" : "arknights"
}

function defaultBgForVersion(version) {
  if (version === "v3.8") return "cosmic-geodesic"
  if (version === "v3.5") return "tensor-stream"
  if (version === "v3.2") return "horizon-rule"
  if (version === "v3") return "euclidean-grid"
  if (version === "v2.5") return "editorial-grid"
  return VECTOR_VERSIONS.indexOf(version) === -1 ? "aurora" : "tactical-grid"
}

function defaultFontForVersion(version) {
  return version === "v3" || version === "v3.2" || version === "v3.5" || version === "v3.8" ? "geometric" : "display"
}

function entryVariantForVersion(version) {
  if (version === "v3.8") return "reticle-lock"
  if (version === "v3.5") return "stream-cascade"
  if (version === "v3.2") return "line-extend"
  if (version === "v3") return "vector-construct"
  if (version === "v2.5") return "page-shift"
  return VECTOR_VERSIONS.indexOf(version) === -1 ? "spring" : "cyber-scan"
}

function buildTypographyMatrix() {
  const container = document.querySelector("#font-matrix-grid")
  if (!container) return
  container.innerHTML = ""
  const fonts = getFontsForVersion(currentUiVersion)
  const activeFont = root.dataset.hlnFont || defaultFontForVersion(currentUiVersion)

  fonts.forEach((f) => {
    const btn = document.createElement("button")
    btn.type = "button"
    btn.dataset.hlnUiControl = ""
    btn.dataset.fontMode = f.id
    btn.dataset.active = String(f.id === activeFont)
    btn.textContent = f.label
    btn.addEventListener("click", () => setFontMode(f.id))
    container.append(btn)
  })
}

function buildCjkTypographyMatrix() {
  const container = document.querySelector("#cjk-font-matrix-grid")
  if (!container) return
  container.innerHTML = ""
  const activeCjk = root.dataset.hlnCjkFont || "auto"

  cjkFontModes.forEach((cjk) => {
    const btn = document.createElement("button")
    btn.type = "button"
    btn.dataset.hlnUiControl = ""
    btn.dataset.cjkFontMode = cjk.id
    btn.dataset.active = String(cjk.id === activeCjk)
    btn.textContent = cjk.label
    btn.addEventListener("click", () => setCjkFontMode(cjk.id))
    container.append(btn)
  })
}

function setUiVersion(version) {
  const allowed = ["v1", "v2", "v2.3", "v2.5", "v3", "v3.2", "v3.5", "v3.8"]
  if (allowed.indexOf(version) === -1) return
  currentUiVersion = version

  const stylesheet = document.getElementById("hln-ui-stylesheet")
  const href = stylesheetForVersion[version]
  if (stylesheet && href && !stylesheet.getAttribute("href")?.endsWith(href)) {
    stylesheet.setAttribute("href", href)
  }

  root.dataset.hlnUiVersion = version

  document.querySelectorAll("[data-ui-version]").forEach((button) => {
    const active = button.dataset.uiVersion === version
    button.dataset.active = String(active)
    button.setAttribute("aria-checked", String(active))
  })

  const legacyGroup = document.querySelector("#version-legacy-group")
  if (legacyGroup) {
    const isLegacy = version === "v1" || version === "v2" || version === "v2.3"
    legacyGroup.dataset.hasActive = String(isLegacy)
    const toggleSummary = legacyGroup.querySelector(".version-legacy-toggle")
    if (toggleSummary) {
      toggleSummary.textContent = isLegacy ? `v1–v2.3 (${version})` : "v1–v2.3"
    }
  }

  const selectVersion = document.querySelector("#select-ui-version")
  if (selectVersion && selectVersion.value !== version) {
    selectVersion.value = version
  }

  const badge = document.querySelector("#active-version-badge")
  if (badge) {
    badge.textContent = `UI ${version.toUpperCase()}`
  }

  const topbarDesc = document.querySelector("#topbar-version-desc")
  if (topbarDesc && versionDescriptions[version]) {
    topbarDesc.textContent = versionDescriptions[version]
  }

  const skinLabTitle = document.querySelector("#skin-lab-title")
  if (skinLabTitle) {
    skinLabTitle.textContent =
      version === "v3" || version === "v3.2" ? "Custom Vector Skin Lab" : "Custom Anime Skin Lab"
  }

  const skinNameInput = document.querySelector("#skin-name")
  if (skinNameInput && (skinNameInput.value === "Paralos Velvet" || skinNameInput.value === "Euclidean Cyan Vector")) {
    skinNameInput.value = version === "v3" || version === "v3.2" ? "Euclidean Cyan Vector" : "Paralos Velvet"
  }

  // Ensure current font is valid for this version
  const validFonts = getFontsForVersion(version).map((f) => f.id)
  const nextFont = validFonts.includes(root.dataset.hlnFont)
    ? root.dataset.hlnFont
    : defaultFontForVersion(version)

  // Dynamically re-render version-specific controls
  buildThemeGrid()
  buildBackgroundPresets()
  buildMotionActions()
  buildTypographyMatrix()
  buildCjkTypographyMatrix()

  // Select valid theme, bg, and font for this version
  const currentThemes = getThemesForVersion(version)
  const nextTheme = currentThemes.some((t) => t.id === root.dataset.hlnTheme)
    ? root.dataset.hlnTheme
    : defaultThemeForVersion(version)

  setTheme(nextTheme)
  setBackgroundMotion(defaultBgForVersion(version))
  setFontMode(nextFont)
  setCjkFontMode(root.dataset.hlnCjkFont || "auto")

  playMotion(getActiveShowcaseLayout(), "panel", "enter", entryVariantForVersion(version))
}

function playMotion(scope, preset, state = "enter", variant) {
  if (!scope || motionQuery.matches) return
  const selector = "[data-hln-motion=" + JSON.stringify(preset) + "]"
  const elements = scope.matches?.(selector) ? [scope] : [...scope.querySelectorAll(selector)]
  elements.forEach((element, index) => {
    element.style.setProperty("--hln-ui-motion-index", String(index))
    delete element.dataset.hlnMotionState
    delete element.dataset.hlnMotionVariant
    void element.offsetWidth
    element.dataset.hlnMotionState = state
    if (variant) {
      element.dataset.hlnMotionVariant = variant
    }
    const onEnd = () => {
      element.removeEventListener("animationend", onEnd)
    }
    element.addEventListener("animationend", onEnd, { once: true })
  })
}

function setTheme(id) {
  const currentThemes = getThemesForVersion(currentUiVersion)
  const theme = currentThemes.find((entry) => entry.id === id) ?? currentThemes[0]
  root.dataset.hlnTheme = theme.id
  root.dataset.theme = theme.id
  const label = document.querySelector("#active-theme-label")
  if (label) label.textContent = theme.label
  document.querySelectorAll(".theme-swatch").forEach((swatch) => {
    const active = swatch.dataset.theme === theme.id
    swatch.dataset.active = String(active)
    swatch.setAttribute("aria-selected", String(active))
  })
  const accentInput = document.querySelector("#skin-accent")
  const panelInput = document.querySelector("#skin-panel")
  if (accentInput && theme.accent) accentInput.value = theme.accent
  if (panelInput && theme.swatch) panelInput.value = theme.swatch
  playMotion(getActiveShowcaseLayout(), "panel", "enter", entryVariantForVersion(currentUiVersion))
}

function setBackgroundMotion(id) {
  const currentBgs = getBgPresetsForVersion(currentUiVersion)
  const preset = currentBgs.find((entry) => entry.id === id) ?? currentBgs[0]
  root.dataset.hlnBgMotion = preset.id
  document.querySelectorAll("[data-bg-motion]").forEach((button) => {
    const active = button.dataset.bgMotion === preset.id
    button.dataset.active = String(active)
    button.setAttribute("aria-pressed", String(active))
  })
  const status = document.querySelector("#background-motion-status")
  if (status) status.textContent = `${preset.label} active`
  const activeBg = document.querySelector("#active-bg-label")
  if (activeBg) activeBg.textContent = preset.label
}

function updateSpecimenReadout() {
  const selectedFont = root.dataset.hlnFont || defaultFontForVersion(currentUiVersion)
  const selectedCjk = root.dataset.hlnCjkFont || "auto"
  const cjkEntry = cjkFontModes.find((item) => item.id === selectedCjk) ?? cjkFontModes[0]
  const resolvedCjkName =
    selectedCjk === "auto"
      ? cjkAutoPairNames[selectedFont] || "现代几何黑"
      : cjkEntry.name

  const fontSpecimen = document.querySelector("#font-specimen")
  const metaNode = document.querySelector("#font-specimen-meta")
  const cjkNode = document.querySelector("#font-specimen-cjk")
  const subNode = document.querySelector("#font-specimen-sub")

  if (fontSpecimen) {
    fontSpecimen.style.fontFamily = fontModes[selectedFont] || "var(--hln-ui-font-current)"
  }
  if (metaNode) {
    const modeTag = selectedCjk === "auto" ? "AUTO" : selectedCjk.toUpperCase()
    metaNode.textContent = `${selectedFont.toUpperCase()} × ${resolvedCjkName} [${modeTag}]`
  }
  if (cjkNode) {
    cjkNode.style.fontFamily =
      selectedCjk === "auto"
        ? fontModes[selectedFont] || "var(--hln-ui-font-current)"
        : `${cjkFontTokenMap[selectedCjk]}, ${fontModes[selectedFont]}`
    cjkNode.textContent =
      currentUiVersion === "v3.5"
        ? "向量几何流形 · 程序化数流合成 φ = 1.618034"
        : currentUiVersion === "v3.2"
          ? "极简线性建筑 · 黄金天际分割 φ = 1.618034"
          : currentUiVersion === "v3"
            ? "欧几里得矢量平面 · 黄金分割 φ = 1.618034"
            : "神经矢量界面合成器 · 精密字形对齐 0.9.8"
  }
  if (subNode) {
    subNode.textContent = `永字八法 · 橫竖撇捺 // ${currentUiVersion.toUpperCase()} det(M) = +1.0000`
  }

  const cjkBadge = document.querySelector("#active-cjk-badge")
  if (cjkBadge) {
    cjkBadge.textContent = selectedCjk === "auto" ? `AUTO · ${resolvedCjkName}` : cjkEntry.badge
  }

  const cjkStatus = document.querySelector("#active-cjk-status-label")
  if (cjkStatus) {
    cjkStatus.textContent = `CJK: ${resolvedCjkName}`
  }
}

function setFontMode(mode) {
  const selected = fontModes[mode] ? mode : defaultFontForVersion(currentUiVersion)

  root.dataset.hlnFont = selected
  root.style.setProperty("--hln-ui-font-current", fontModes[selected])

  document.querySelectorAll("[data-font-mode]").forEach((button) => {
    button.dataset.active = String(button.dataset.fontMode === selected)
  })
  const activeFont = document.querySelector("#active-font-label")
  if (activeFont) activeFont.textContent = selected

  updateSpecimenReadout()
  playMotion(document.querySelector("#font-specimen"), "item", "enter")
}

function setCjkFontMode(cjkMode) {
  const entry = cjkFontModes.find((item) => item.id === cjkMode) ?? cjkFontModes[0]
  const selectedCjk = entry.id

  root.dataset.hlnCjkFont = selectedCjk
  if (selectedCjk === "auto") {
    root.style.removeProperty("--hln-ui-font-cjk-override")
  } else if (cjkFontTokenMap[selectedCjk]) {
    root.style.setProperty("--hln-ui-font-cjk-override", cjkFontTokenMap[selectedCjk])
  }

  document.querySelectorAll("[data-cjk-font-mode]").forEach((button) => {
    button.dataset.active = String(button.dataset.cjkFontMode === selectedCjk)
  })

  const selectCjk = document.querySelector("#select-cjk-font")
  if (selectCjk && selectCjk.value !== selectedCjk) {
    selectCjk.value = selectedCjk
  }

  updateSpecimenReadout()
  playMotion(document.querySelector("#font-specimen"), "item", "enter")
}

function buildThemeGrid() {
  const grid = document.querySelector("#theme-grid")
  if (!grid) return
  grid.innerHTML = ""
  const currentThemes = getThemesForVersion(currentUiVersion)
  const currentActive = root.dataset.hlnTheme || currentThemes[0].id

  currentThemes.forEach((theme) => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = "theme-swatch"
    button.dataset.theme = theme.id
    button.dataset.active = String(theme.id === currentActive)
    button.setAttribute("role", "option")
    button.setAttribute("aria-selected", button.dataset.active)
    button.style.setProperty("--swatch-bg", theme.swatch)
    button.style.setProperty("--swatch-accent", theme.accent)
    button.innerHTML = `<span class="theme-swatch-preview" aria-hidden="true"></span><span>${theme.label}</span>`
    button.addEventListener("click", () => setTheme(theme.id))
    grid.append(button)
  })
}

function buildBackgroundPresets() {
  const container = document.querySelector("#background-presets")
  if (!container) return
  container.innerHTML = ""
  const currentBgs = getBgPresetsForVersion(currentUiVersion)
  const currentActive = root.dataset.hlnBgMotion || currentBgs[0].id

  currentBgs.forEach((preset) => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = "background-preset"
    button.dataset.bgMotion = preset.id
    button.dataset.active = String(preset.id === currentActive)
    button.setAttribute("aria-pressed", button.dataset.active)
    button.innerHTML = `
      <span class="background-preset-swatch" aria-hidden="true"></span>
      <span><strong>${preset.label}</strong><small>${preset.note}</small></span>
    `
    button.addEventListener("click", () => setBackgroundMotion(preset.id))
    container.append(button)
  })
}

function buildMotionActions() {
  const container = document.querySelector("#motion-actions-grid")
  if (!container) return
  container.innerHTML = ""
  const actions = getMotionActionsForVersion(currentUiVersion)

  actions.forEach((act) => {
    const button = document.createElement("button")
    button.type = "button"
    button.dataset.hlnUiControl = ""
    button.dataset.shape = "chamfer"
    button.dataset.motionAction = act.id
    button.textContent = act.label
    button.addEventListener("click", () => {
      const layout = getActiveShowcaseLayout()
      const status = document.querySelector("#motion-status")
      if (status) status.textContent = `Playing: ${act.label}`
      if (act.type === "items") {
        playMotion(layout, "item", "enter", act.variant)
      } else {
        playMotion(layout, "panel", "enter", act.variant)
        playMotion(layout, "item", "enter", act.variant)
      }
    })
    container.append(button)
  })
}

function applySkin() {
  const values = {
    accent: document.querySelector("#skin-accent")?.value,
    background: document.querySelector("#skin-bg")?.value,
    panel: document.querySelector("#skin-panel")?.value,
    line: document.querySelector("#skin-line")?.value,
  }
  Object.entries(values).forEach(([key, value]) => {
    if (value && /^#[0-9a-fA-F]{6}$/.test(value)) {
      root.style.setProperty(skinTokenMap[key], value)
    }
  })
  root.dataset.hlnSkin = "custom"
  const skinName = document.querySelector("#skin-name")?.value || "Custom Skin"
  const skinStatus = document.querySelector("#skin-status")
  if (skinStatus) skinStatus.textContent = `${skinName} applied`
  playMotion(getActiveShowcaseLayout(), "item", "enter", entryVariantForVersion(currentUiVersion))
}

function clearSkin() {
  Object.values(skinTokenMap).forEach((token) => root.style.removeProperty(token))
  delete root.dataset.hlnSkin
  const skinStatus = document.querySelector("#skin-status")
  if (skinStatus) skinStatus.textContent = "Theme tokens restored"
  setTheme(root.dataset.hlnTheme || defaultThemeForVersion(currentUiVersion))
}

function bindControls() {
  document.querySelectorAll("[data-ui-version]").forEach((button) => {
    button.addEventListener("click", () => setUiVersion(button.dataset.uiVersion))
  })

  document.querySelector("#select-ui-version")?.addEventListener("change", (e) => {
    setUiVersion(e.target.value)
  })

  document.querySelector("#select-cjk-font")?.addEventListener("change", (e) => {
    setCjkFontMode(e.target.value)
  })

  document.querySelector("[data-skin-apply]")?.addEventListener("click", applySkin)
  document.querySelector("[data-skin-clear]")?.addEventListener("click", clearSkin)

  // Segmented controls interactive switching
  document.querySelectorAll(".segmented").forEach((group) => {
    const buttons = group.querySelectorAll("[data-segmented-item], [data-hln-ui-control]")
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => {
          b.dataset.active = String(b === btn)
        })
      })
    })
  })

  // Legacy calibration slider live update
  const slider = document.querySelector("#demo-range-slider")
  const sliderReadout = document.querySelector("#slider-val-readout")
  slider?.addEventListener("input", () => {
    if (sliderReadout) sliderReadout.textContent = `${slider.value}%`
  })

  // v3 mathematical calibration slider & 3x3 affine matrix live update
  const sliderV3 = document.querySelector("#demo-range-slider-v3")
  const sliderReadoutV3 = document.querySelector("#slider-val-readout-v3")
  const linearRailV3 = document.querySelector("#linear-rail-v3")
  const equilibriumLabelV3 = document.querySelector("#v3-equilibrium-label")
  const matTx = document.querySelector("#v3-tx")
  const matTy = document.querySelector("#v3-ty")
  sliderV3?.addEventListener("input", () => {
    const val = Number(sliderV3.value)
    let suffix = ""
    if (val === 62) suffix = " (φ⁻¹)"
    else if (val === 38) suffix = " (1 - φ⁻¹)"
    else if (val === 71) suffix = " (1/√2)"
    if (sliderReadoutV3) sliderReadoutV3.textContent = `${val}%${suffix}`
    if (linearRailV3) linearRailV3.style.setProperty("--rail-fill", `${val}%`)
    if (equilibriumLabelV3) equilibriumLabelV3.textContent = `${val}.0%`
    if (matTx) matTx.textContent = `+${((val / 100) * 25.8).toFixed(1)}`
    if (matTy) matTy.textContent = `-${(((100 - val) / 100) * 20.9).toFixed(1)}`
  })

  const angleSelectV3 = document.querySelector("#v3-angle-select")
  const matHeadV3 = document.querySelector("#v3-mat-head")
  const matM11 = document.querySelector("#v3-m11")
  const matM12 = document.querySelector("#v3-m12")
  const matM21 = document.querySelector("#v3-m21")
  const matM22 = document.querySelector("#v3-m22")
  angleSelectV3?.addEventListener("change", () => {
    const deg = Number(angleSelectV3.value) || 45
    const rad = (deg * Math.PI) / 180
    const cosStr = `+${Math.cos(rad).toFixed(4)}`
    const sinStr = `+${Math.sin(rad).toFixed(4)}`
    const negSinStr = `-${Math.sin(rad).toFixed(4)}`
    if (matHeadV3) matHeadV3.textContent = `R(θ) · T(tₓ, tᵧ) | θ = ${deg}°`
    if (matM11) matM11.textContent = cosStr
    if (matM12) matM12.textContent = negSinStr
    if (matM21) matM21.textContent = sinStr
    if (matM22) matM22.textContent = cosStr
  })

  // v3.2 subtractive linear horizon slider, ratio presets, projection modes & interactive SVG locus
  const sliderV32 = document.querySelector("#demo-range-slider-v32")
  const sliderReadoutV32 = document.querySelector("#slider-val-readout-v32")
  const linearRailV32 = document.querySelector("#linear-rail-v32")
  const partitionReadoutV32 = document.querySelector("#v32-partition-readout")
  const v32DivLine = document.querySelector("#v32-svg-div-line")
  const v32CircleOuter = document.querySelector("#v32-svg-circle-outer")
  const v32CircleInner = document.querySelector("#v32-svg-circle-inner")
  const v32TangentLine = document.querySelector("#v32-svg-tangent-line")
  const v32TangentNode = document.querySelector("#v32-svg-tangent-node")
  const v32PhiLabel = document.querySelector("#v32-svg-phi-label")
  const v32RatioPills = document.querySelectorAll(".hln-v32-ratio-pill")

  const applyV32Division = (rawVal) => {
    const val = Number(rawVal)
    const comp = 100 - val
    const suffix =
      val === 62
        ? " (φ⁻¹)"
        : val === 71
          ? " (√2⁻¹)"
          : val === 50
            ? " (1/2)"
            : val === 38
              ? " (φ⁻²)"
              : ""
    if (sliderV32 && Number(sliderV32.value) !== val) sliderV32.value = String(val)
    if (sliderReadoutV32) sliderReadoutV32.textContent = `${val}.0%${suffix}`
    if (linearRailV32) linearRailV32.style.setProperty("--line-fill", `${val}%`)
    if (partitionReadoutV32) partitionReadoutV32.textContent = `${val}.0% / ${comp}.0%`

    v32RatioPills.forEach((pill) => {
      pill.dataset.active = String(Number(pill.dataset.v32Ratio) === val)
    })

    // Live-shift the SVG vertical division & unit circle along the 320px horizon
    const cx = Math.round((val / 100) * 320)
    const tangentY = Math.round(96 - ((cx - 24) / 272) * 74)
    if (v32DivLine) {
      v32DivLine.setAttribute("x1", String(cx))
      v32DivLine.setAttribute("x2", String(cx))
    }
    if (v32CircleOuter) v32CircleOuter.setAttribute("cx", String(cx))
    if (v32CircleInner) v32CircleInner.setAttribute("cx", String(cx))
    if (v32TangentNode) {
      v32TangentNode.setAttribute("cx", String(cx))
      v32TangentNode.setAttribute("cy", String(tangentY))
    }
    if (v32PhiLabel) {
      v32PhiLabel.setAttribute("x", String(Math.min(254, cx + 6)))
      v32PhiLabel.textContent = `λ = ${(val / 100).toFixed(3)}`
    }
  }

  sliderV32?.addEventListener("input", () => applyV32Division(sliderV32.value))

  v32RatioPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      applyV32Division(pill.dataset.v32Ratio || 62)
    })
  })

  document.querySelectorAll("[data-v32-proj]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const proj = btn.dataset.v32Proj || "ortho"
      const capLabel = document.querySelector("#v32-svg-caption-label")
      const capEq = document.querySelector("#v32-svg-caption-eq")
      const basisInput = document.querySelector("#v32-basis-equation-input")
      if (proj === "ortho") {
        v32TangentLine?.setAttribute("y1", "96")
        v32TangentLine?.setAttribute("y2", "22")
        v32CircleOuter?.setAttribute("r", "38")
        if (capLabel) capLabel.textContent = "线性切线投影 LINEAR TANGENT"
        if (capEq) capEq.textContent = "y − y₀ = tan(θ) · (x − x₀)"
        if (basisInput) basisInput.value = "L(t) = P₀ + t · (v₁ cos θ + v₂ sin θ)"
      } else if (proj === "horizon") {
        v32TangentLine?.setAttribute("y1", "68")
        v32TangentLine?.setAttribute("y2", "68")
        v32CircleOuter?.setAttribute("r", "28")
        if (capLabel) capLabel.textContent = "零度天际基线 HORIZON AXIS"
        if (capEq) capEq.textContent = "H(x) = y₀ + 0 · (x − φ⁻¹)"
        if (basisInput) basisInput.value = "H(t) = (X₀ + t · φ, Y₀) // 1px Rule"
      } else if (proj === "polar") {
        v32TangentLine?.setAttribute("y1", "104")
        v32TangentLine?.setAttribute("y2", "12")
        v32CircleOuter?.setAttribute("r", "44")
        if (capLabel) capLabel.textContent = "极轴螺旋切线 POLAR LOCUS"
        if (capEq) capEq.textContent = "r(θ) = r₀ · φ^(2θ / π)"
        if (basisInput) basisInput.value = "P(r, θ) = r · e^(i·θ) · φ⁻¹"
      }
    })
  })

  document.querySelectorAll(".hln-v32-operator-row").forEach((row) => {
    row.addEventListener("click", () => {
      row.classList.toggle("is-highlight")
    })
  })

  const v32Steps = document.querySelectorAll(".hln-v32-step")
  v32Steps.forEach((step, idx) => {
    step.addEventListener("click", () => {
      v32Steps.forEach((s, i) => {
        const active = s === step
        s.classList.toggle("is-active", active)
        const meta = s.querySelector(".hln-v32-step__meta")
        if (meta) meta.textContent = active ? "ACTIVE" : `00.${(i + 1) * 8}s`
      })
    })
  })

  // v3.5 Algorithmic Vector, AI-Native, Procedural & Data-Stream Studio interactivity
  const attnMatrix = document.querySelector("#v35-attn-matrix")
  const attnReadout = document.querySelector("#v35-attn-readout")
  const buildV35AttnMatrix = (seedOffset = 0) => {
    if (!attnMatrix) return
    attnMatrix.innerHTML = ""
    for (let r = 1; r <= 6; r++) {
      for (let c = 1; c <= 6; c++) {
        const raw =
          r === c
            ? 0.82 + ((r * 7 + seedOffset) % 16) * 0.01
            : 0.18 + (((r * 13 + c * 19 + seedOffset * 11) % 68) / 100)
        const w = Math.min(0.98, Math.max(0.14, raw))
        const cell = document.createElement("button")
        cell.type = "button"
        cell.className = "hln-v35-attn-cell"
        cell.style.setProperty("--w", w.toFixed(2))
        cell.dataset.active = String(r === 1 && c === 1)
        cell.textContent = w.toFixed(2)
        const selectCell = () => {
          attnMatrix.querySelectorAll(".hln-v35-attn-cell").forEach((el) => {
            el.dataset.active = String(el === cell)
          })
          if (attnReadout) {
            attnReadout.textContent = `A[${r},${c}] = ${w.toFixed(2)} (cos θ)`
          }
        }
        cell.addEventListener("mouseenter", selectCell)
        cell.addEventListener("click", selectCell)
        attnMatrix.append(cell)
      }
    }
  }
  buildV35AttnMatrix(0)

  document.querySelectorAll("[data-v35-paradigm]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.v35Paradigm || "VECTOR STREAM"
      document.querySelectorAll("[data-v35-paradigm]").forEach((b) => {
        b.dataset.active = String(b === btn)
      })
      const label = document.querySelector("#v35-paradigm-label")
      if (label) label.textContent = mode
      const dagStage = document.querySelector("#v35-dag-stage")
      if (dagStage) playMotion(dagStage, "item", "enter", "stream-cascade")
    })
  })

  document.querySelectorAll("[data-v35-prec]").forEach((pill) => {
    pill.addEventListener("click", () => {
      const prec = pill.dataset.v35Prec || "BF16"
      document.querySelectorAll("[data-v35-prec]").forEach((p) => {
        p.dataset.active = String(p === pill)
      })
      const precReadout = document.querySelector("#v35-precision-readout")
      const codeDtype = document.querySelector("#v35-code-dtype")
      const chipManifold = document.querySelector("#v35-chip-manifold")
      if (precReadout) precReadout.textContent = `${prec} // 512-D`
      if (codeDtype) codeDtype.textContent = prec.toLowerCase()
      if (chipManifold) chipManifold.textContent = `ℝ⁵¹² × φ (${prec})`
    })
  })

  // 2D Latent Vector Phase-Plane Compass preset switching
  document.querySelectorAll("[data-v35-orbit]").forEach((pill) => {
    pill.addEventListener("click", () => {
      const orbit = pill.dataset.v35Orbit || "ortho"
      document.querySelectorAll("[data-v35-orbit]").forEach((p) => {
        p.dataset.active = String(p === pill)
      })
      const ellipse = document.querySelector("#v35-compass-ellipse")
      const sigma = document.querySelector("#v35-compass-sigma")
      const lyap = document.querySelector("#v35-compass-lyapunov")
      const vec = document.querySelector("#v35-compass-vector")
      const angleLabel = document.querySelector("#v35-compass-angle")
      if (orbit === "ortho") {
        ellipse?.setAttribute("rx", "28")
        ellipse?.setAttribute("ry", "16")
        if (sigma) sigma.textContent = "1.618 : 1.000"
        if (lyap) lyap.textContent = "−0.042 (STABLE)"
        if (vec) vec.style.transform = "rotate(-38.2deg)"
        if (angleLabel) angleLabel.textContent = "θ = 38.2° (φ⁻²)"
      } else if (orbit === "spiral") {
        ellipse?.setAttribute("rx", "26")
        ellipse?.setAttribute("ry", "26")
        if (sigma) sigma.textContent = "1.618 : 1.618"
        if (lyap) lyap.textContent = "0.000 (HARMONIC)"
        if (vec) vec.style.transform = "rotate(-137.5deg)"
        if (angleLabel) angleLabel.textContent = "θ = 137.5° (黄金角)"
      } else if (orbit === "attractor") {
        ellipse?.setAttribute("rx", "31")
        ellipse?.setAttribute("ry", "10")
        if (sigma) sigma.textContent = "2.414 : 0.618"
        if (lyap) lyap.textContent = "+0.018 (CHAOTIC)"
        if (vec) vec.style.transform = "rotate(-61.8deg)"
        if (angleLabel) angleLabel.textContent = "θ = 61.8° (φ⁻¹)"
      }
    })
  })

  const sliderKappa = document.querySelector("#v35-slider-kappa")
  sliderKappa?.addEventListener("input", () => {
    const val = Number(sliderKappa.value)
    const k = (val / 100).toFixed(2)
    const suffix = val === 62 ? " (φ⁻¹)" : ""
    const kappaReadout = document.querySelector("#v35-kappa-readout")
    const codeKappa = document.querySelector("#v35-code-kappa")
    const kpiCurv = document.querySelector("#v35-kpi-curv")
    const compassVec = document.querySelector("#v35-compass-vector")
    const compassAngle = document.querySelector("#v35-compass-angle")
    if (kappaReadout) kappaReadout.textContent = `κ = ${k}${suffix}`
    if (codeKappa) codeKappa.textContent = k
    if (kpiCurv) kpiCurv.textContent = `+${Number(k).toFixed(4)}`
    const deg = ((val / 100) * 90).toFixed(1)
    if (compassVec) compassVec.style.transform = `rotate(-${deg}deg)`
    if (compassAngle) compassAngle.textContent = `θ = ${deg}°`
  })

  const sliderVelocity = document.querySelector("#v35-slider-velocity")
  sliderVelocity?.addEventListener("input", () => {
    const v = Number(sliderVelocity.value)
    const gbps = ((v / 68) * 4.82).toFixed(2)
    const mult = (v / 68).toFixed(1)
    const dur = Math.max(0.9, (3.8 - (v / 100) * 2.4)).toFixed(2)
    const velReadout = document.querySelector("#v35-velocity-readout")
    const codeFlux = document.querySelector("#v35-code-flux")
    const chipFlux = document.querySelector("#v35-chip-flux")
    const kpiTps = document.querySelector("#v35-kpi-tps")
    const workbench = document.querySelector("#demo-layout-v35")
    if (velReadout) velReadout.textContent = `${gbps} GB/s (${mult}×)`
    if (codeFlux) codeFlux.textContent = gbps
    if (chipFlux) chipFlux.textContent = `${gbps} GB/s`
    if (kpiTps) kpiTps.textContent = Math.round((v / 68) * 14820).toLocaleString("en-US")
    if (workbench) workbench.style.setProperty("--v35-stream-duration", `${dur}s`)
  })

  const dagNodes = document.querySelectorAll(".hln-v35-dag-node")
  const stageNodes = document.querySelectorAll(".hln-v35-stage-node")
  const nodeInspector = document.querySelector("#v35-node-inspector-readout")

  const selectV35NodeById = (nodeId) => {
    dagNodes.forEach((n) => {
      const match = n.dataset.v35Node === nodeId
      n.dataset.active = String(match)
      if (match && nodeInspector && n.dataset.nodeSpec) {
        nodeInspector.textContent = n.dataset.nodeSpec
      }
    })
    stageNodes.forEach((s) => {
      s.dataset.active = String(s.dataset.v35Stage === nodeId)
    })
  }

  dagNodes.forEach((node) => {
    node.addEventListener("click", () => {
      selectV35NodeById(node.dataset.v35Node)
    })
  })

  stageNodes.forEach((stage) => {
    stage.addEventListener("click", () => {
      selectV35NodeById(stage.dataset.v35Stage)
    })
  })

  let v35SeqCounter = 4096
  let v35Seed = 1
  const triggerV35Pulse = (tag = "PULSE", msg = "注入高维向量流脉冲 · Stream Harmonics Synchronized") => {
    v35SeqCounter += 16
    v35Seed += 7
    const busCounter = document.querySelector("#v35-bus-counter")
    if (busCounter) busCounter.textContent = `SEQ #0${v35SeqCounter}`

    // Randomize 16-channel harmonic spectrum bars
    document.querySelectorAll("#v35-stream-bars > i").forEach((bar, idx) => {
      const h = 36 + ((idx * 19 + v35Seed * 13) % 62)
      bar.style.setProperty("--bar-h", `${h}%`)
    })

    // Update Eigenvalue Spectrum Caliper Bars
    let traceSum = 0
    document.querySelectorAll("#v35-eigen-list .hln-v35-eigen-row").forEach((row, idx) => {
      const base = [1.618, 1.196, 0.618, 0.41][idx] || 0.5
      const delta = (((v35Seed * (idx + 3)) % 18) - 9) * 0.012
      const val = Math.max(0.18, base + delta)
      traceSum += val
      const pct = Math.min(96, Math.max(18, Math.round((val / 1.8) * 100)))
      row.querySelector("i")?.style.setProperty("--eigen-w", `${pct}%`)
      const strong = row.querySelector("strong")
      if (strong) strong.textContent = val.toFixed(3)
    })
    const eigenTrace = document.querySelector("#v35-eigen-trace")
    if (eigenTrace) eigenTrace.textContent = `∑λ = ${traceSum.toFixed(3)}`

    // Prepend live frame to packet bus log
    const busLog = document.querySelector("#v35-bus-log")
    if (busLog) {
      const row = document.createElement("div")
      row.className = "hln-v35-bus-row"
      row.innerHTML = `
        <span class="hln-v35-bus-tag">${tag}</span>
        <span class="hln-v35-bus-msg">${msg}</span>
        <span class="hln-v35-bus-val">0.02ms</span>
      `
      busLog.prepend(row)
      while (busLog.children.length > 4) {
        busLog.lastElementChild?.remove()
      }
    }

    const dagStage = document.querySelector("#v35-dag-stage")
    if (dagStage) {
      dagStage.classList.add("is-pulsing")
      setTimeout(() => dagStage.classList.remove("is-pulsing"), 420)
    }
  }

  document.querySelector("#v35-btn-pulse")?.addEventListener("click", () => {
    triggerV35Pulse("PULSE", "注入高维向量流脉冲 · Stream Harmonics Synchronized")
  })

  document.querySelector("#v35-btn-reseed")?.addEventListener("click", () => {
    buildV35AttnMatrix(v35Seed + 5)
    triggerV35Pulse("SEED", "注意力拓扑权重重采样 · Attention Coupling Reseeded")
  })

  document.querySelector("#v35-btn-compile")?.addEventListener("click", () => {
    const status = document.querySelector("#v35-compile-status")
    const latency = document.querySelector("#v35-chip-latency")
    if (status) status.textContent = "JIT..."
    buildV35AttnMatrix(v35Seed + 11)
    triggerV35Pulse("JIT", "WGSL 向量核重编译完成 · SIMD-16 Kernel Optimized")
    setTimeout(() => {
      if (status) status.textContent = "OPTIMIZED"
      if (latency) latency.textContent = "0.14 ms"
    }, 260)
  })

  // v3.8 Cosmic Viewport Lens & Astrophysics Telemetry interactivity
  // v3.8 Deep Space Astrometric Observatory & Gravitational Deck interactivity
  let v38CollimatorLocked = true
  const btnLock = document.querySelector("#v38-btn-lock")
  const lockStatus = document.querySelector("#v38-lock-status")

  btnLock?.addEventListener("click", () => {
    v38CollimatorLocked = !v38CollimatorLocked
    btnLock.dataset.active = String(v38CollimatorLocked)
    btnLock.setAttribute("aria-pressed", String(v38CollimatorLocked))
    if (lockStatus) {
      lockStatus.textContent = v38CollimatorLocked ? "准直锁定 · LOCKED" : "搜索追踪 · SEARCH"
    }
    const layout = document.querySelector("#demo-layout-v38")
    if (layout && v38CollimatorLocked) {
      playMotion(layout, "panel", "enter", "reticle-lock")
    }
  })

  // Gravitational Lensing Parameter Scrubbers
  const sliderMass = document.querySelector("#v38-slider-mass")
  const sliderImpact = document.querySelector("#v38-slider-impact")
  const einsteinRing = document.querySelector("#v38-svg-einstein-ring")
  const geoTop = document.querySelector("#v38-svg-geodesic-top")
  const geoBot = document.querySelector("#v38-svg-geodesic-bot")

  const updateV38Lensing = () => {
    const mVal = Number(sliderMass?.value || 42)
    const bVal = Number(sliderImpact?.value || 58)
    const mass = (mVal / 10).toFixed(2)
    const impact = (bVal / 10).toFixed(2)

    // Deflection angle \hat{\alpha} = 4GM / c^2b
    const alpha = ((mass * 3.42) / impact).toFixed(2)
    const thetaE = (Math.sqrt(mass) * 0.789).toFixed(3)
    const rE = Math.round(24 + Math.sqrt(mass) * 11.5)

    const massReadout = document.querySelector("#v38-mass-readout")
    const impactReadout = document.querySelector("#v38-impact-readout")
    const einsteinReadout = document.querySelector("#v38-einstein-readout")
    const einsteinBadge = document.querySelector("#v38-einstein-badge")
    const deflReadout = document.querySelector("#v38-deflection-readout")
    const lensingSat = document.querySelector("#v38-lensing-sat")
    const railSat = document.querySelector("#linear-rail-v38-sat")

    if (massReadout) massReadout.textContent = `${mass} M⊙`
    if (impactReadout) impactReadout.textContent = `${impact} kpc`
    if (einsteinReadout) einsteinReadout.textContent = `θ_E = ${thetaE}″ (爱因斯坦环)`
    if (einsteinBadge) einsteinBadge.textContent = `θ_E = ${thetaE}″`
    if (deflReadout) deflReadout.textContent = `α̂ = 4GM / c²b = +${alpha}″`
    if (lensingSat) {
      const satVal = Math.min(100, Math.round(Number(alpha) * 24.8))
      lensingSat.textContent = `${satVal}.0%`
      railSat?.style.setProperty("--rail-fill", `${satVal}%`)
    }

    if (einsteinRing) einsteinRing.setAttribute("r", String(rE))

    // Bend geodesics closer to singularity as mass increases / impact decreases
    const bendShift = Math.round((mass / impact) * 16)
    const topY = Math.min(88, 76 + bendShift)
    const botY = Math.max(92, 104 - bendShift)
    if (geoTop) geoTop.setAttribute("d", `M 20,44 C 95,44 135,${topY} 170,${topY} C 205,${topY} 245,44 320,44`)
    if (geoBot) geoBot.setAttribute("d", `M 20,136 C 95,136 135,${botY} 170,${botY} C 205,${botY} 245,136 320,136`)
  }

  sliderMass?.addEventListener("input", updateV38Lensing)
  sliderImpact?.addEventListener("input", updateV38Lensing)

  // Lens Projection Mode switching
  document.querySelectorAll("[data-v38-lens-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.v38LensMode || "einstein"
      document.querySelectorAll("[data-v38-lens-mode]").forEach((b) => {
        b.dataset.active = String(b === btn)
      })
      if (einsteinRing) {
        if (mode === "einstein") {
          einsteinRing.style.strokeDasharray = "4 4"
          einsteinRing.style.opacity = "1"
        } else if (mode === "geodesic") {
          einsteinRing.style.strokeDasharray = "1 5"
          einsteinRing.style.opacity = "0.45"
        } else if (mode === "microlens") {
          einsteinRing.style.strokeDasharray = "10 5"
          einsteinRing.style.opacity = "0.85"
        }
      }
    })
  })

  // Survey Spectral Band Selector
  const surveyBands = {
    radio: { label: "射电 Radio 21cm", baseline: "B = 12,800 km" },
    nir: { label: "近红外 NIR 1.2μm", baseline: "B = 8,400 km" },
    optical: { label: "可见光 V 550nm", baseline: "B = 4,200 km" },
    xray: { label: "高能 X-Ray 0.1nm", baseline: "B = 18,600 km" },
  }
  document.querySelectorAll("[data-v38-band]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const bandId = btn.dataset.v38Band || "nir"
      document.querySelectorAll("[data-v38-band]").forEach((b) => {
        b.dataset.active = String(b === btn)
      })
      const info = surveyBands[bandId] || surveyBands.nir
      const bandLabel = document.querySelector("#v38-band-label")
      const chipBaseline = document.querySelector("#v38-chip-baseline")
      if (bandLabel) bandLabel.textContent = info.label
      if (chipBaseline) chipBaseline.textContent = info.baseline
    })
  })

  // FOV Scrubber
  const sliderFov = document.querySelector("#v38-slider-fov")
  const fovReadout = document.querySelector("#v38-fov-readout")
  sliderFov?.addEventListener("input", () => {
    const fov = Number(sliderFov.value)
    const fovH = (fov * 0.625).toFixed(1)
    if (fovReadout) fovReadout.textContent = `${fov}.0° × ${fovH}°`
  })

  // Wavelength Scrubber & Doppler Shift
  const sliderLambda = document.querySelector("#v38-slider-lambda")
  const scrubLine = document.querySelector("#v38-scrub-line")
  const lambdaReadout = document.querySelector("#v38-lambda-readout")
  const dopplerReadout = document.querySelector("#v38-doppler-readout")
  const kpiZ = document.querySelector("#v38-kpi-z")

  sliderLambda?.addEventListener("input", () => {
    const lambda = Number(sliderLambda.value)
    const normX = Math.round(((lambda - 380) / (750 - 380)) * 320)
    if (scrubLine) {
      scrubLine.setAttribute("x1", String(normX))
      scrubLine.setAttribute("x2", String(normX))
    }
    const deltaV = (((lambda - 545) / 545) * 29979.2).toFixed(1)
    const z = (((lambda - 545) / 545) * 0.0016).toFixed(5)
    const band = lambda < 440 ? "B波段" : lambda < 590 ? "V波段" : lambda < 690 ? "R波段" : "NIR近红外"
    if (lambdaReadout) lambdaReadout.textContent = `λ = ${lambda}.0 nm (${band})`
    if (dopplerReadout) {
      const sign = Number(deltaV) >= 0 ? "+" : ""
      dopplerReadout.textContent = `${sign}${deltaV} km/s (z=${z})`
    }
    if (kpiZ) {
      const sign = Number(z) >= 0 ? "+" : ""
      kpiZ.textContent = `${sign}${z}`
    }
  })

  // Morgan-Keenan Spectral Classification
  const stellarClasses = {
    O: { temp: "38,000 K", label: "O5V (HOT BLUE GIANT)", flux: "1.280×10³¹ W", curveY: 4, curveX: 45 },
    B: { temp: "18,500 K", label: "B2V (BLUE-WHITE DWARF)", flux: "8.420×10²⁸ W", curveY: 8, curveX: 75 },
    A: { temp: "9,800 K", label: "A0V (VEGA STANDARD)", flux: "2.140×10²⁷ W", curveY: 12, curveX: 110 },
    F: { temp: "7,200 K", label: "F5V (YELLOW-WHITE)", flux: "9.540×10²⁶ W", curveY: 15, curveX: 140 },
    G: { temp: "5,778 K", label: "G2V (SOL-TYPE DWARF)", flux: "3.828×10²⁶ W", curveY: 18, curveX: 165 },
    K: { temp: "4,400 K", label: "K2V (ORANGE DWARF)", flux: "1.120×10²⁶ W", curveY: 24, curveX: 215 },
    M: { temp: "3,200 K", label: "M4V (COOL RED DWARF)", flux: "2.400×10²⁴ W", curveY: 30, curveX: 275 },
  }

  document.querySelectorAll("[data-v38-class]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cls = btn.dataset.v38Class || "G"
      document.querySelectorAll("[data-v38-class]").forEach((b) => {
        b.dataset.active = String(b === btn)
      })
      const spec = stellarClasses[cls] || stellarClasses.G
      const classLabel = document.querySelector("#v38-class-label")
      const kpiTemp = document.querySelector("#v38-kpi-temp")
      const kpiFlux = document.querySelector("#v38-kpi-flux")
      const planck = document.querySelector("#v38-planck-curve")

      if (classLabel) classLabel.textContent = spec.label
      if (kpiTemp) kpiTemp.textContent = spec.temp
      if (kpiFlux) kpiFlux.textContent = spec.flux
      if (planck) {
        planck.setAttribute("d", `M 0,38 Q ${spec.curveX * 0.5},${spec.curveY} ${spec.curveX},${spec.curveY} T 320,36`)
      }
    })
  })

  // Viewport Pulse & Realign Actions
  let v38PulseCounter = 2026
  document.querySelector("#v38-btn-pulse")?.addEventListener("click", () => {
    v38PulseCounter += 7
    // Perturb metric tensor calipers
    document.querySelectorAll("#v38-metric-calipers .hln-v38-caliper-row").forEach((row, idx) => {
      const baseW = [86, 78, 62, 54][idx] || 60
      const delta = ((v38PulseCounter * (idx + 3)) % 15) - 7
      const newW = Math.max(20, Math.min(96, baseW + delta))
      row.querySelector("i")?.style.setProperty("--meter-w", `${newW}%`)
    })

    const aperture = document.querySelector("#v38-aperture-box")
    if (aperture) {
      aperture.classList.add("is-pulsing")
      setTimeout(() => aperture.classList.remove("is-pulsing"), 360)
    }
  })

  document.querySelector("#v38-btn-realign")?.addEventListener("click", () => {
    if (sliderMass) {
      sliderMass.value = "42"
      sliderImpact.value = "58"
      updateV38Lensing()
    }
    if (sliderLambda) {
      sliderLambda.value = "545"
      sliderLambda.dispatchEvent(new Event("input"))
    }
    const layout = document.querySelector("#demo-layout-v38")
    if (layout) playMotion(layout, "panel", "enter", "reticle-lock")
  })

  // Interactive split-pane resize divider (v3)
  const resizeBox = document.querySelector("#resize-demo-box")
  const resizeHandle = document.querySelector("#resize-demo-handle")
  const paneA = document.querySelector("#resize-pane-a")
  const paneB = document.querySelector("#resize-pane-b")
  if (resizeBox && resizeHandle && paneA && paneB) {
    let dragging = false
    const updateSplit = (clientX) => {
      const rect = resizeBox.getBoundingClientRect()
      const ratio = Math.min(80, Math.max(20, Math.round(((clientX - rect.left) / rect.width) * 100)))
      resizeBox.style.gridTemplateColumns = `${ratio}fr auto ${100 - ratio}fr`
      paneA.textContent = `A: ${ratio}%`
      paneB.textContent = `B: ${100 - ratio}%`
    }
    resizeHandle.addEventListener("pointerdown", (e) => {
      dragging = true
      resizeHandle.setPointerCapture?.(e.pointerId)
    })
    resizeHandle.addEventListener("pointermove", (e) => {
      if (!dragging) return
      updateSplit(e.clientX)
    })
    resizeHandle.addEventListener("pointerup", () => {
      dragging = false
    })
  }

  // Topbar quick actions: Cycle Grid & Replay Telemetry Motion
  document.querySelector("#btn-toggle-grid")?.addEventListener("click", () => {
    const bgs = getBgPresetsForVersion(currentUiVersion)
    const currentIdx = bgs.findIndex((b) => b.id === root.dataset.hlnBgMotion)
    const nextPreset = bgs[(currentIdx + 1) % bgs.length]
    if (nextPreset) setBackgroundMotion(nextPreset.id)
  })

  document.querySelector("#btn-telemetry")?.addEventListener("click", () => {
    const layout = getActiveShowcaseLayout()
    playMotion(layout, "panel", "enter", entryVariantForVersion(currentUiVersion))
    playMotion(layout, "item", "enter", entryVariantForVersion(currentUiVersion))
  })

  document.querySelector("#select-grid-density")?.addEventListener("change", (e) => {
    const mode = e.target.value
    const bgs = getBgPresetsForVersion(currentUiVersion)
    if (mode === "minimal") {
      setBackgroundMotion("quiet")
    } else if (mode === "normal" && bgs[1]) {
      setBackgroundMotion(bgs[1].id)
    } else if (bgs[0]) {
      setBackgroundMotion(bgs[0].id)
    }
  })

  const sidebarToggle = document.querySelector("[data-toggle-sidebar]")
  const sidebar = document.querySelector("#paralos-sidebar")
  const syncSidebar = (collapsed, moveFocus = false) => {
    root.classList.toggle("sidebar-collapsed", collapsed)
    sidebarToggle?.setAttribute("aria-expanded", String(!collapsed))
    sidebar?.setAttribute("aria-hidden", String(collapsed))
    if (!moveFocus) return
    if (collapsed) sidebarToggle?.focus()
    else sidebar?.querySelector("button, input, select, textarea")?.focus()
  }
  if (window.matchMedia("(max-width: 820px)").matches) syncSidebar(true)
  sidebarToggle?.addEventListener("click", () => {
    const collapsed = root.classList.contains("sidebar-collapsed")
    syncSidebar(!collapsed, true)
  })
  document.querySelector("[data-sidebar-close]")?.addEventListener("click", () => syncSidebar(true, true))

  const settingsTrigger = document.querySelector(".status-user")
  const settingsTopbarTrigger = document.querySelector("#btn-open-settings")
  const settingsPopover = document.querySelector("#settings-popover")
  let settingsReturnFocus = settingsTrigger
  const syncSettingsExpanded = (expanded) => {
    settingsTrigger?.setAttribute("aria-expanded", String(expanded))
    settingsTopbarTrigger?.setAttribute("aria-expanded", String(expanded))
  }
  const closeSettings = () => {
    if (!settingsPopover) return
    settingsPopover.hidden = true
    syncSettingsExpanded(false)
    settingsReturnFocus?.focus()
  }
  const openSettings = (trigger = settingsTrigger) => {
    if (!settingsPopover) return
    settingsReturnFocus = trigger
    settingsPopover.hidden = false
    syncSettingsExpanded(true)
    settingsPopover.querySelector("[data-close-settings], select, input")?.focus()
    playMotion(settingsPopover, "panel", "enter")
  }
  settingsTrigger?.addEventListener("click", () => {
    if (settingsPopover.hidden) openSettings(settingsTrigger)
    else closeSettings()
  })
  settingsTopbarTrigger?.addEventListener("click", () => {
    if (settingsPopover.hidden) openSettings(settingsTopbarTrigger)
    else closeSettings()
  })
  document.querySelector("[data-close-settings]")?.addEventListener("click", closeSettings)
  settingsPopover?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault()
      closeSettings()
      return
    }
    if (event.key !== "Tab") return
    const focusable = [...settingsPopover.querySelectorAll("button:not([disabled]), select:not([disabled]), input:not([disabled])")]
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  })

  // Close legacy version dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const legacyGroup = document.querySelector("#version-legacy-group")
    if (legacyGroup && legacyGroup.open && !legacyGroup.contains(e.target)) {
      legacyGroup.open = false
    }
  })

  motionQuery.addEventListener?.("change", updateMotionStatus)
}

function initStochasticPointField() {
  try {
    if (typeof document === "undefined" || typeof window === "undefined") return
    let canvas = document.querySelector(".hln-stochastic-canvas")
    if (!canvas) {
      canvas = document.createElement("canvas")
      canvas.className = "hln-stochastic-canvas"
      canvas.setAttribute("aria-hidden", "true")
      canvas.style.cssText =
        "position:fixed !important;inset:0 !important;width:100vw !important;height:100vh !important;pointer-events:none !important;z-index:0 !important;display:block !important;"
      document.body.prepend(canvas)
    }
    const ctx = canvas.getContext?.("2d")
    if (!ctx) return

    let width = window.innerWidth || 1280
    let height = window.innerHeight || 800
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      width = window.innerWidth || 1280
      height = window.innerHeight || 800
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    const pointer = { x: -9999, y: -9999 }
    window.addEventListener(
      "pointermove",
      (e) => {
        pointer.x = e.clientX
        pointer.y = e.clientY
      },
      { passive: true }
    )

    // Halton low-discrepancy sequence so initial points cover the entire viewport with zero repeating tiles
    const halton = (index, base) => {
      let result = 0
      let f = 1 / base
      let i = index
      while (i > 0) {
        result += f * (i % base)
        i = Math.floor(i / base)
        f /= base
      }
      return result
    }

    const shapes = ["dot", "dot", "dot", "square", "diamond", "cross"]
    const count = 76
    const nodes = Array.from({ length: count }, (_, idx) => ({
      x: ((halton(idx + 1, 2) + Math.random() * 0.08) % 1) * width,
      y: ((halton(idx + 1, 3) + Math.random() * 0.08) % 1) * height,
      theta: Math.random() * Math.PI * 2,
      omega: (Math.random() - 0.5) * 0.028,
      speed: 0.2 + Math.random() * 0.48,
      size: 1.15 + Math.random() * 1.45,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.01 + Math.random() * 0.024,
      seedX: Math.random() * 100,
      seedY: Math.random() * 100,
      shape: shapes[idx % shapes.length],
    }))

    let cachedAccent = "#00d4ff"
    let frameTick = 0

    const step = () => {
      requestAnimationFrame(step)
      if (motionQuery.matches) {
        ctx.clearRect(0, 0, width, height)
        return
      }
      const bgMode = root.dataset.hlnBgMotion || "euclidean-grid"
      if (bgMode === "quiet") {
        ctx.clearRect(0, 0, width, height)
        return
      }

      if (frameTick % 30 === 0) {
        const computed = window.getComputedStyle(root).getPropertyValue("--hln-ui-accent").trim()
        if (computed) cachedAccent = computed
      }
      frameTick++

      ctx.clearRect(0, 0, width, height)
      const isLinearSparse = currentUiVersion === "v3.2"
      const activeCount = isLinearSparse ? 26 : bgMode === "swiss-dots" ? count : 58
      const connectDist =
        bgMode === "bezier-field" ||
        bgMode === "isometric-lattice" ||
        bgMode === "voronoi-poly" ||
        bgMode === "hex-field"
          ? 124
          : bgMode === "swiss-dots"
            ? 0
            : 102

      // Update each particle independently (non-periodic curl flow + individual Brownian steering)
      const t = frameTick * 0.006
      for (let i = 0; i < activeCount; i++) {
        const n = nodes[i]
        const curlAngle =
          Math.sin(n.x * 0.0031 + t + n.seedX) * Math.cos(n.y * 0.0029 - t * 0.8 + n.seedY) * 0.018
        n.omega = n.omega * 0.95 + (Math.random() - 0.5) * 0.018 + curlAngle * 0.25
        n.omega = Math.max(-0.048, Math.min(0.048, n.omega))
        n.theta += n.omega
        n.phase += n.phaseSpeed

        let vx = Math.cos(n.theta) * n.speed + Math.sin(n.phase * 0.73) * 0.14
        let vy = Math.sin(n.theta) * n.speed + Math.cos(n.phase * 0.89) * 0.14

        const dx = n.x - pointer.x
        const dy = n.y - pointer.y
        const distSq = dx * dx + dy * dy
        if (distSq > 1 && distSq < 14400) {
          const dist = Math.sqrt(distSq)
          const push = ((120 - dist) / 120) * 0.9
          vx += (dx / dist) * push
          vy += (dy / dist) * push
        }

        n.x += vx
        n.y += vy

        if (n.x < -18) n.x = width + 18
        else if (n.x > width + 18) n.x = -18
        if (n.y < -18) n.y = height + 18
        else if (n.y > height + 18) n.y = -18
      }

      // Draw proximity vector hairlines between nearby wandering nodes (when connectDist > 0)
      if (connectDist > 0) {
        ctx.strokeStyle = cachedAccent
        ctx.lineWidth = 0.75
        for (let i = 0; i < activeCount; i++) {
          const a = nodes[i]
          for (let j = i + 1; j < activeCount; j++) {
            const b = nodes[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            if (Math.abs(dx) > connectDist || Math.abs(dy) > connectDist) continue
            const d = Math.hypot(dx, dy)
            if (d < connectDist) {
              ctx.globalAlpha = (1 - d / connectDist) * (isLinearSparse ? 0.12 : 0.22)
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.stroke()
            }
          }
        }
      }

      // Draw independent non-repeating geometric vector particles
      ctx.fillStyle = cachedAccent
      ctx.strokeStyle = cachedAccent
      ctx.lineWidth = 1
      for (let i = 0; i < activeCount; i++) {
        const n = nodes[i]
        const alpha = (0.34 + 0.4 * (0.5 + 0.5 * Math.sin(n.phase))) * (isLinearSparse ? 0.55 : 0.9)
        ctx.globalAlpha = alpha
        const r = n.size
        const glyph = bgMode === "swiss-dots" ? "dot" : n.shape

        if (glyph === "square") {
          ctx.strokeRect(n.x - r, n.y - r, r * 2, r * 2)
        } else if (glyph === "diamond") {
          ctx.beginPath()
          ctx.moveTo(n.x, n.y - r * 1.35)
          ctx.lineTo(n.x + r * 1.35, n.y)
          ctx.lineTo(n.x, n.y + r * 1.35)
          ctx.lineTo(n.x - r * 1.35, n.y)
          ctx.closePath()
          ctx.stroke()
        } else if (glyph === "cross") {
          const c = r * 1.5
          ctx.beginPath()
          ctx.moveTo(n.x - c, n.y)
          ctx.lineTo(n.x + c, n.y)
          ctx.moveTo(n.x, n.y - c)
          ctx.lineTo(n.x, n.y + c)
          ctx.stroke()
        } else {
          ctx.beginPath()
          ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
    }

    requestAnimationFrame(step)
  } catch {
    // Gracefully ignore in non-canvas headless test environments
  }
}

function updateMotionStatus() {
  const motionStatus = document.querySelector("#motion-status")
  if (motionStatus) {
    motionStatus.textContent = motionQuery.matches
      ? "Reduced motion active"
      : "One-shot motion ready"
  }
}

document.addEventListener("DOMContentLoaded", () => {
  bindControls()
  initStochasticPointField()
  setUiVersion("v3")
  updateMotionStatus()
})
