# 2026-04-24 — Waowle UI Phase 3A Smoke Test + Fix Planning

**Project context:** waowle-ui, Phase 3A (M1 Live Backend) — smoke testing the real backend integration and planning fixes

---

## What was done

- Stefan ran the Phase 3A smoke test in the browser
- Three gaps found: mock project list still showing, file tree not collapsed, terminal Enter key silent
- Brainstormed root causes and approach
- Wrote implementation plan: `plans/2026-04-24-phase-3a-fixes.md` — 10 tasks, 29 steps
- Plan not yet executed — deferred to next session

---

## Observations

**Smoke test caught what unit tests could not.** All 24 backend tests passed, TypeScript built clean, and yet three features were broken or wrong in the browser. The test suite validated individual endpoints; it didn't validate that the frontend was actually wired to them or that env vars pointed to the right directories.

**The terminal silent failure pattern.** User could type in the terminal but pressing Enter did nothing. No error, no feedback. Root cause: Vite dev proxy `/api` entry proxies HTTP only — WebSocket upgrade requests silently fail. `TerminalPane.send()` guards on `ws.readyState === OPEN` and returns early without any user feedback. The result looks like "the input is broken" when actually the connection never opened.

**WORKSPACE_ROOT pointed to the wrong level.** It was set to `projects/waowle-ui/` — the right scope for a single-project file browser, but wrong once the sidebar needed to show all projects under teamme. The semantic mismatch was invisible until the smoke test. Rename to TEAMME_ROOT reflects what the variable actually means now.

**Mock data left in the sidebar.** Phase 3A replaced file tree, kanban, and terminal with real backend data — but the project list in the sidebar was left on hardcoded mock data (`waowle`, `api-gateway`, etc.). Easy to miss because it "looked fine" — the sidebar rendered, nothing crashed. The mock data was wrong, not missing.

**Projects should be dynamically discovered.** Stefan's instinct was correct: hardcoding the project list would rot as soon as he adds a project. The backend can scan `TEAMME_ROOT/projects/` and return real entries. One endpoint, always current.

**Module reload chain fragility in tests.** The _app() reload chain pattern (reload config → routes → main) is load-bearing. When a new route is added to main.py, every test file's _app() must include the new module in its reload chain or TEAMME_ROOT bindings go stale. This caused a hard-to-diagnose failure in Phase 3A (documented in the plan). Worth watching as the route count grows.

---

## Patterns noticed

**"All tests pass" ≠ "feature works"** — Tests validated isolated units. Browser smoke test validated the integrated whole. For UI/API integration work, the smoke test is the real acceptance gate, not the test suite.

**Silent failures need feedback** — The terminal guard (`if ws.readyState !== OPEN return`) silently ate the failure. A one-line console.warn or a "connecting…" UI state would have surfaced the root cause immediately.

**Env var names encode assumptions** — `WORKSPACE_ROOT` encodes "this is a workspace" (one project). `TEAMME_ROOT` encodes "this is the team root" (all projects live here). When the scope changes, rename the var — the name is documentation.

**Smoke test before closing a phase** — Phase 3A was declared "complete" without a browser smoke test. The smoke test should be the last required step of any phase, not optional.

**Brainstorm → root cause → plan flow** — Identifying root causes (not just symptoms) before planning made the plan clean. The three issues looked like three unrelated bugs; understanding root causes revealed they were all solvable independently with minimal scope.

---

## Potential promote

- **"Smoke test as acceptance gate" pattern** — worth a wiki page. Rule: no phase is done until the browser smoke test passes. Include: what to smoke test, how to design smoke test checklists, why unit tests don't substitute.
- **Vite WebSocket proxy recipe** — concrete, copy-pasteable. "Add `ws: true` to the proxy entry that handles your WebSocket path." Would have saved time here. Could be a short wiki page or a note in a broader Vite patterns page.
- **FastAPI test reload chain pattern** — the _app() pattern (reload config → routes → main) with the caveat about new routes needing to be added. Useful for anyone building FastAPI + pytest suites with module-level config.

---

## Open questions

- When TEAMME_ROOT grows to many projects, should `/api/projects` support filtering or pagination? Currently returns all subdirs of `projects/`. Probably fine for personal use.
- Should the terminal show a "connecting…" indicator while the WebSocket is in CONNECTING state? Right now it silently fails — with the Vite fix it'll just work, but the UX gap remains if the backend is down.
- The `template/` folder exists in teamme — do all files in it need to be browsable, or is it just a project scaffold source? The current plan treats it like a regular project folder (browsable file tree). May need to revisit if the Templates feature gets a proper UI.
- `activeMeta` can be undefined briefly on first render in App.tsx (before /api/projects resolves). The `?? ''` fallback hides this but doesn't communicate it to the user. Loading state for the project list may be worth adding in a later pass.
