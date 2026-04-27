# Wiki

Curated, reusable knowledge promoted from `raw/`. Each page captures a pattern, framework, or lesson that applies across projects.

## Page conventions

- **File name:** `topic-slug.md` — lowercase, hyphenated, no dates
- **Title:** one-line description of the pattern or concept
- **Body:** what the pattern is, when to apply it, when not to apply it
- **Origin:** brief note on where the insight came from (optional but useful)

Keep pages short. A wiki page is a decision aid, not documentation. If a page exceeds ~300 words, split it or cut it.

## What belongs here

- Frameworks the team returns to across different projects
- Approaches that have worked or failed in a way that generalises
- Criteria for decisions that come up repeatedly

## What does not belong here

- Project-specific context
- Unrefined thinking (that lives in `raw/`)
- Reference material that is better read at the source

## Current pages

- [name-by-function-not-structure.md](name-by-function-not-structure.md) — Name aliases and shortcuts by what they do, not where they live
- [gitignore-secrets-after-config.md](gitignore-secrets-after-config.md) — Check gitignore immediately after creating any config file with credentials
- [content-first-presentation-workflow.md](content-first-presentation-workflow.md) — Write slide content as .md before rendering — separate content from layout
- [pptx-qa-pipeline.md](pptx-qa-pipeline.md) — Convert pptx → PDF → 96 DPI JPGs for visual inspection via LibreOffice + pdftoppm
- [parallel-mcp-batch.md](parallel-mcp-batch.md) — Run independent MCP tool calls in a single message for concurrent execution
- [google-drive-bulk-sort.md](google-drive-bulk-sort.md) — Bulk sort a Drive folder: list once, categorise, batch move in parallel
- [context-todo-persistence.md](context-todo-persistence.md) — Use context/todo.md to persist tasks across sessions; read by /prime automatically
- [smoke-test-acceptance-gate.md](smoke-test-acceptance-gate.md) — Browser smoke test is the real acceptance gate; unit tests passing is not enough
- [fastapi-pytest-tdd.md](fastapi-pytest-tdd.md) — FastAPI + pytest TDD cycle: helper functions over fixtures, full module reload chain
- [design-handoff-keep-css.md](design-handoff-keep-css.md) — When a design handoff delivers a complete CSS system, keep it; don't convert to Tailwind
- [ruff-modern-python.md](ruff-modern-python.md) — Ruff enforces X|None over Optional[X] and collections.abc over typing — write it right from the start
- [plugin-owned-files.md](plugin-owned-files.md) — Plugin-owned files are overwritten on update; commit them or move customisations out of the plugin's reach
- [vite-remote-access.md](vite-remote-access.md) — Vite 5.3+ silently blocks browser requests on remote hosts; fix with allowedHosts: 'all' + host: '0.0.0.0'
- [mobile-viewport-dvh.md](mobile-viewport-dvh.md) — Use `100dvh` not `100vh` on mobile; `100vh` on Chrome Android includes hidden browser chrome and cuts off bottom elements
- [android-ghost-click-touch-action.md](android-ghost-click-touch-action.md) — Android 300ms tap delay causes ghost clicks after DOM shifts; fix with `touch-action: manipulation`
- [css-grid-minmax-zero.md](css-grid-minmax-zero.md) — `1fr` = `minmax(auto, 1fr)` and can overflow; use `minmax(0, 1fr)` for columns that must not exceed available space
- [real-device-debug-overlay.md](real-device-debug-overlay.md) — Temporary fixed-position overlay prints runtime values on-screen when DevTools isn't available on a real device
- [sidecar-json-external-formats.md](sidecar-json-external-formats.md) — Co-locate a sidecar JSON file to store state alongside files whose format you don't own
- [css-grid-responsive-columns.md](css-grid-responsive-columns.md) — Hide grid columns responsively: change grid-template-columns AND display:none the cells together
