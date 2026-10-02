# artist-Paralos-preview
Visual QA and multi-engine skin workbench for the ProjectHLN / KalciriteUI system.

Open `index.html` directly, or serve the folder with any static server:

```powershell
python -m http.server 4173
```

## UI Versions (v1 / v2 / v2.3 / v2.5 / v3)

The top bar's **UI CORE** switcher selects the active UI engine:

- **v1 Full** -> `styles/hln-ui-system.css` (6 canonical themes, 5 fonts, 6 backgrounds, 3 motions)
- **v2 Minimal** -> `styles/hln-ui-system-v2.css` (9 themes, 6 fonts, 7 backgrounds, 9 motions)
- **v2.3 Tactical** -> `styles/hln-ui-system-v2.3.css` (6 tactical themes, 6 fonts, 12 vector backgrounds, 14 motions)
- **v2.5 Editorial** -> `styles/hln-ui-system-v2.5.css` (9 editorial/tactical themes, 8 fonts, 13 vector backgrounds, 17 motions)
- **v3 Geometric** -> `styles/hln-ui-system-v3.css` (9 Euclidean vector-flat themes, 8 geometric fonts, 10 mathematical backgrounds, 13 geometric motions)

Each version is an independent engine with its own theme, font, background, and motion catalogs. Selecting a version swaps the stylesheet and re-renders that version's controls dynamically.

### Refresh & Verify All UI Bundles

```powershell
node E:\Projects\KalciriteUI\ui-source\v2.3\build.mjs
node E:\Projects\KalciriteUI\ui-source\v2.5\build.mjs
node E:\Projects\KalciriteUI\ui-source\v3\build.mjs

Copy-Item E:\Projects\KalciriteUI\ui-source\v1\hln-ui-system.css E:\Projects\KalciriteUI\artist-Paralos-main\styles\hln-ui-system.css -Force
Copy-Item E:\Projects\KalciriteUI\ui-source\v2\dist\hln-ui-system-v2.css E:\Projects\KalciriteUI\artist-Paralos-main\styles\hln-ui-system-v2.css -Force
Copy-Item E:\Projects\KalciriteUI\ui-source\v2.3\dist\hln-ui-system-v2.3.css E:\Projects\KalciriteUI\artist-Paralos-main\styles\hln-ui-system-v2.3.css -Force
Copy-Item E:\Projects\KalciriteUI\ui-source\v2.5\dist\hln-ui-system-v2.5.css E:\Projects\KalciriteUI\artist-Paralos-main\styles\hln-ui-system-v2.5.css -Force
Copy-Item E:\Projects\KalciriteUI\ui-source\v3\dist\hln-ui-system-v3.css E:\Projects\KalciriteUI\artist-Paralos-main\styles\hln-ui-system-v3.css -Force
```
