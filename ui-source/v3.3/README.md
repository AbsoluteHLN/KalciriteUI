# KalciriteUI v3.3: OverleafPlus

An opt-in academic workspace edition layered after the unchanged v3.2 bundle.
It retains six theme IDs, stored preferences, icons and control geometry. Each
theme uses neutral surfaces and its existing v3.2 accent. The four research-role
tokens remain compatible aliases of that accent, not separate color families.

Build with `node ui-source/v3.3/build.mjs`. Node built-ins only; no dependencies.
The builder reads `src/overleafplus.css`, validates `src/palettes.json`, then emits
`dist/hln-ui-system-v3.3.css` and `dist/provenance.json`. Copy both outputs exactly
to the consuming app. Load the overlay after v3.2; opt in with
`data-hln-ui-variant="overleafplus-v33"`. Keep `data-hln-ui-version="v3.2"`.

Writing, analysis, review and media share the selected theme accent. Fine
rules, tabular figures and a clear task/content hierarchy carry the academic
identity. No invented charts or statistics. Motion is bounded to meaningful view
transitions, disclosure, tabs, dialogs, new messages and busy feedback, and obeys
reduced-motion. Layouts and business behavior remain the consuming app's concern.

See [contract.md](contract.md) for tokens, build guards and rollback.

v3.3.4 restores readable workspace type through `--hln-v33-type-*`: page title
26px, navigation/body 16px, auxiliary text 13-14px. It keeps the neutral palette,
font preferences, icons and document typography; it does not zoom the page.

v3.3.5 adds font roles sourced only from v3.2: `--hln-v33-font-ui` uses the
display sans stack; `--hln-v33-font-heading` uses the CJK song stack for page
headings. No font downloads or new families. The host retains document font
boundaries and owns responsive layout and drawer behavior.
