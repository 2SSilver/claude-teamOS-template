# 2026-04-27 — Waowle UI M5: Cron Jobs live + mobile layout

**Project context:** waowle-ui, M5 milestone. Wired CronView from mock data to a live backend reading real claudeclaw job files. Added enable/disable. Mobile layout fixes. Feature documentation.

## What was done

- Created first real cron job: `daily-prime.md` (runs `/prime` at 08:00 daily)
- Added `JOBS_DIR` to `config.py` derived from `TEAMME_ROOT`
- Built `routes/cron.py`: GET /api/crons, PATCH enable/disable — direct file I/O, no daemon dependency
- TDD: 12 tests, all green. Full suite 42/42
- Rewrote `CronView.tsx` to fetch from live API. Removed mock import, removed Run now + New cron buttons
- Updated `CronJob` TypeScript interface to match real API shape; removed stale CRONS mock from `data.ts`
- Product feature doc + architecture docs updated
- Mobile cron layout: hid Last run and Duration columns, hid prompt in Name cell, reduced status column width — 4-column grid on mobile vs 6-column desktop

## Observations

**Claudeclaw jobs directory was gitignored.** The `daily-prime.md` job file couldn't be committed because `.claude/claudeclaw` is in `.gitignore` at the teamme root. Intentional (personal workflow files), but worth noting — job files don't live in version control.

**Enable/disable required a sidecar.** Claudeclaw has no `enabled:` flag concept. It matches jobs by cron expression presence. So to disable: remove the `schedule:` line. To re-enable: restore it. That restore requires the original value, hence `run-log.json` storing `original_schedule`. This is the whole reason the sidecar exists — not for run history (that's future work).

**`importlib.reload` pattern for FastAPI test isolation.** Because config values (`JOBS_DIR`) are computed at module load time, tests need to reload the module after setting env vars via monkeypatch. The `_app()` helper in `test_cron.py` reloads `config`, all route modules, and `main` in sequence. This is now established as the project's test isolation pattern (also used in previous route tests).

**TypeScript type cleanup was required.** Changing the `CronJob` interface broke `data.ts` because the old mock data (`CRONS`) still referenced old field names. Removing the mock completely was the right call — nothing imported it. TSC caught it immediately.

**CSS grid + `display: none` works cleanly for responsive column hiding.** Changing `grid-template-columns` in the mobile media query + `display: none` on the hidden cells means the grid reflows correctly without JavaScript. The key: also hide the matching header cells (which have no class — used `:nth-child(4)` and `:nth-child(5)` on `.cron-head > div`).

**Feature doc field descriptions were added on request.** The initial feature doc described behaviour but not individual UI columns. Adding a "UI fields" table with per-column descriptions (what it shows, what states mean, when `—` appears) made it significantly more useful. Worth doing for future feature docs from the start.

## Patterns noticed

- **Sidecar JSON as lightweight state store** — when you can't add fields to a file format you don't own (claudeclaw's `.md` frontmatter), a co-located JSON sidecar is a clean pattern. `run-log.json` in the same directory as job files. Same idea could apply to other read-only external file formats.

- **Direct file I/O as a backend pattern** — this project's backend consistently reads files directly rather than going through a daemon or shared database. Keeps things stateless and dependency-free. Works well when the files are small and infrequently written.

- **YAGNI on milestones** — M4 (Baseline Settings) was cut entirely mid-planning because all four settings were "set once and forget" tasks better handled via IDE or `.env`. Deferring a milestone entirely (not just deprioritising features within it) kept momentum and avoided building infrastructure for hypothetical use.

- **Deferred feature with explicit backlog note** — "Run now" button removed from UI and its implementation deferred to backlog with a clear note in `roadmap.md` explaining why (requires spawning Claude Code subprocess). Cleaner than disabling the button or leaving it as a no-op.

## Potential promote

- **`display: none` + `grid-template-columns` for responsive column hiding** — the CSS pattern is simple and reusable. Could become a short wiki note. Especially the trick of using `:nth-child` on header cells that have no class.

- **Sidecar JSON for state on external file formats** — the pattern of co-locating a `state.json` (or `run-log.json`) alongside files you don't own the format of. Generic enough for a wiki entry.

- **`importlib.reload` for FastAPI + monkeypatch test isolation** — already captured as a pattern in previous sessions (fastapi-pytest-tdd.md in wiki?) — check if it needs updating to include the multi-module reload chain used here.

## Open questions

- `run-log.json` is currently only written by the backend's enable/disable endpoints (for `original_schedule`). Claudeclaw's own scheduled runs do NOT update this log. When the manual trigger gets built (backlog), it will write `last_run`, `status`, `duration`. Until then, those columns always show `—`. No action needed now but worth remembering.
- The `.claude/claudeclaw` gitignore means job files are personal and not version-controlled. If this setup ever moves to a team context, that assumption breaks. Fine for now.
- `pytest` not in PATH — need to use `.venv/bin/pytest` or activate the venv. Could add a shell alias or `make test` target to avoid this friction every session.
