# FastAPI + pytest TDD Pattern

## What it is

A repeatable TDD cycle for FastAPI endpoints using `pytest`, `TestClient`, and `monkeypatch`. Has two non-obvious parts: the test structure (helper functions, not fixtures) and the module reload chain (which must include every route file, not just `main`).

## The TDD cycle

Per endpoint group:
1. Write failing test — run to confirm it fails with the expected error
2. Implement minimal code — just enough to pass
3. Run tests — confirm pass
4. Run `ruff check` + `mypy` — fix any issues inline
5. Commit

Each cycle takes ~15 minutes. Don't combine multiple endpoint groups into one cycle.

## Test structure: helpers not fixtures

Use plain helper functions that receive `tmp_path` and `monkeypatch` as direct args — not `@pytest.fixture`:

```python
def _make_workspace(tmp_path, monkeypatch):
    (tmp_path / "data").mkdir()
    monkeypatch.setenv("APP_ROOT", str(tmp_path))
    return tmp_path

def _app():
    import importlib
    import backend.src.config as cfg
    import backend.src.routes.cron as cron_mod
    import backend.src.routes.tasks as tasks_mod
    import backend.src.routes.files as files_mod
    import backend.src.routes.projects as projects_mod
    import backend.src.main as m
    importlib.reload(cfg)
    importlib.reload(cron_mod)
    importlib.reload(tasks_mod)
    importlib.reload(files_mod)
    importlib.reload(projects_mod)
    importlib.reload(m)
    from backend.src.main import app
    return app
```

Note: reload **all** route modules registered in `main.py`, not only the one under test. A route you're not testing can still hold a stale `config` binding that corrupts a later test.

Why not `@pytest.fixture`: the reload chain must run *after* `monkeypatch` has set env vars, which happens inside the test function. Fixtures run before the test body can apply monkeypatching.

## The module reload chain (critical)

Config values (`APP_ROOT`, `TODO_MD_PATH`, etc.) are bound at module level in route files on import. Reloading only `main` leaves stale bindings in route modules, causing the second test in a suite to use the previous test's tmp_path.

**Rule:** Every route module that imports from `config` must appear in `_app()`'s reload chain, in dependency order:

```
config → route_a → route_b → route_c → main
```

When a new route is added to `main.py`, update `_app()` in every test file to include it.

## When to apply

Any FastAPI project using pytest + monkeypatch + module-level config vars.

## When not to apply

If config is injected via dependency injection (FastAPI `Depends`) rather than module-level globals, the reload chain is unnecessary — the fixture approach works cleanly.

**Origin:** Waowle UI Phase 3A — reload chain discovered when `test_patch_task_persists_to_disk` failed intermittently due to stale `TODO_MD_PATH`.
