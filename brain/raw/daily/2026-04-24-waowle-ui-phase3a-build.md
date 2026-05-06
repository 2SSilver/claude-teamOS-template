# 2026-04-24 — Waowle UI Phase 3A: Scaffold + Full Backend Build

**Project context:** waowle-ui, Phase 3A (M1 Live Backend). Two sessions: one for frontend scaffold + planning, one for full TDD backend + frontend wiring. All 13 tasks completed, 24 tests passing, lint and type checks clean. Browser smoke test deferred.

---

## What was done

**Session 1 (morning):**
- Initialised waowle-ui project from template; populated all context files
- Scaffolded frontend from a Claude Design handoff — kept the Frosted Touch CSS design system as-is (decision: don't convert to Tailwind)
- Selected tech stack: FastAPI + React/TypeScript/Vite + SQLite → Cloud SQL on GCP
- Wrote Phase 3A implementation plan (13 tasks)
- Updated roadmap with M0–M5 milestones

**Session 2 (afternoon):**
- Task 1–3: backend dependencies, Vite proxy, todo.md format spec
- Task 4–5: config module + startup validation (TDD), safe_path utility (TDD)
- Task 6–8: file tree endpoint, task endpoints (parse + write todo.md), WebSocket terminal — all TDD
- Task 9–12: frontend wiring — shared API utility, Sidebar file tree, kanban PATCH, WebSocket terminal pane
- Task 13: dev.sh server command, .env setup, final test suite run (24 passed, ruff clean, mypy clean)
- Browser smoke test explicitly deferred — requires two running processes simultaneously

---

## Observations

**The module reload chain discovery was the most significant technical finding.** When testing FastAPI apps with pytest where config is bound at module level, reloading only `main` is not enough — stale `WORKSPACE_ROOT` bindings in route files cause test failures. The fix is to reload the full chain: `config → routes.tasks → routes.files → routes.terminal → main`. This was discovered when `test_patch_task_persists_to_disk` failed intermittently with the wrong `TODO_MD_PATH`.

**Ruff enforces modern Python syntax that differs from "standard" FastAPI examples.** The plan used `Optional[X]` and `from typing import AsyncGenerator` — both flagged by ruff (UP045, UP035). Correct forms: `X | None` and `from collections.abc import AsyncGenerator`. TypeScript had a parallel issue: `useState` for a value only used in event handlers (not JSX) triggers `TS6133`; the correct pattern is `useRef`.

**TDD with FastAPI TestClient and monkeypatch works well but has a wrinkle.** Using `tmp_path` + `monkeypatch.setenv()` per-test gives real isolation. The wrinkle: you can't use `@pytest.fixture` in the normal way because the reload chain needs to run inside the test function after monkeypatch is applied. Helper functions (`_make_workspace`, `_todo_fixture`, `_app`) passed `tmp_path` and `monkeypatch` as direct args is the practical pattern.

**The plan's test structure vs actual differed in a consistent way.** Every test file ended up using helper functions instead of `@pytest.fixture`. This wasn't a deviation caused by problems — it was a deliberate choice made after the first test file, then applied consistently. The plan was written before this pattern was established.

**Two TypeScript "declared-but-never-read" fixes worth noting:**
- `tasksLoading` state: dropped entirely — loading state wasn't rendered, so it was dead code
- `histIdx`: changed from `useState(-1)` to `useRef(-1)` — the value is only used inside event handlers, not in JSX, so a ref is semantically correct and doesn't cause re-renders

**Keeping the CSS design system intact was the right call.** The Claude Design handoff produced a complete Frosted Touch CSS system. The alternative (converting to Tailwind) would have taken significant time with no visible gain. The decision: keep it; Tailwind can be added for new components later if needed. This is a good pattern for design handoffs in general.

**Browser smoke test was always the weak point.** The plan marked it as a manual step requiring two running processes. It stayed deferred. This is where the Phase 3A gaps (mock projects, terminal broken) were actually caught — but only in the *next* session.

---

## Patterns noticed

**TDD loop in this stack:** write failing test → run to confirm fail → implement minimal code → run to confirm pass → lint → commit. This cycle ran 5 times across Tasks 4–8. Each cycle took ~15 minutes. The loop is reliable; the main friction is the module reload chain setup per test file.

**Plan deviations are a signal.** 7 deviations documented (all minor), but the most instructive was deviation #2 (module reload chain) — it reveals a real property of the FastAPI + pytest + monkeypatch setup that affects every future test file in this project.

**FastAPI router registration must match test reload chain.** Every time a new router is added to `main.py`, the `_app()` helper in every test file must be updated to reload it. This is a maintenance burden that scales with route count. Worth watching.

**The `asyncio_mode = "auto"` pytest config removes boilerplate.** Without it, every async test needs `@pytest.mark.asyncio`. Adding it to `pyproject.toml` once means async tests just work.

---

## Potential promote

- **FastAPI + pytest module reload chain pattern** → wiki: describe the `_app()` helper pattern, why reloading only `main` is insufficient, and the full chain order. This is non-obvious and will bite anyone building this stack.
- **TDD loop for FastAPI endpoints** — the specific cycle (helper setup → TestClient → assert status → assert body). Clean, repeatable. Could be a short wiki note alongside the reload chain pattern.
- **Ruff modern Python conventions** — `X | None` over `Optional[X]`, `collections.abc` over `typing` for `AsyncGenerator`. Both are enforced by default ruff config. Could be a coding standards reference note.
- **Design handoff strategy: keep vs convert** — when a design system is delivered as CSS, don't reflexively convert to Tailwind. The decision framework: is there a real gain? Can Tailwind be added incrementally for new components? If both yes/no respectively: keep the CSS.

---

## Open questions

- The `_app()` reload chain pattern works but is repetitive across test files. Is there a way to share it (conftest.py?) without losing the per-test monkeypatch isolation?
- WebSocket tests use `client.websocket_connect()` which is synchronous in TestClient. Will this hold for more complex async WS scenarios (e.g. streaming large output)? `pytest-asyncio` + `httpx` AsyncClient might be needed later.
- The plan used `Optional[X]` consistently throughout — ruff caught it during Task 8. Should the plan template include a note about ruff-preferred syntax to avoid this surprise mid-task?
- `MarkdownEditor` resets draft when `tasks` prop changes (known limitation noted). When does Phase 3B address this with a save button + debounced write?
