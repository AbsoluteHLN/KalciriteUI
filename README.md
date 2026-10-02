# KalciriteUI — ProjectHLN UI System

Canonical, framework-neutral visual foundation for ProjectHLN clients: theme
engines, semantic `--hln-ui-*` tokens, motion core, and component grammars.

## Try it in the browser

The multi-engine preview workbench is served by GitHub Pages:

**https://absolutehln.github.io/KalciriteUI/**

It opens the *artist-Paralos* workbench — switch UI cores (v1 / v2 / v2.3 /
v2.5 / v3 / v3.2), themes, fonts, vector backgrounds and motions live in the
browser. Each engine is fully independent: its own stylesheet, theme/font/
background/motion catalog, nothing leaks across versions.

You can also open `artist-Paralos-main/index.html` directly from a checkout,
or serve the folder with any static server:

```bash
python -m http.server 4173
# http://127.0.0.1:4173/artist-Paralos-main/
```

> Webfonts load from public CDNs; offline they fall back to the system font
> chains defined by each engine.

## Layout

```text
ui-source/              canonical source tree + versioned bundles (v1…v3.5)
  v3/dist/              built bundles, e.g. hln-ui-system-v3.css
  src/                  editable source of truth (contract: contract.md)
artist-Paralos-main/    live preview workbench (browser QA, multi-engine)
```

Each version ships its own build + verification scripts:

```bash
node ui-source/v3/build.mjs
node ui-source/v3/verify.mjs
node --test ui-source/v3/node-contract.test.mjs
```

See [ui-source/README.md](ui-source/README.md) for the full version
architecture and [ui-source/contract.md](ui-source/contract.md) for the DOM /
token contract host applications must follow.
