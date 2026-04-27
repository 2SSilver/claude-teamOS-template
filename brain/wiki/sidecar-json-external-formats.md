# Sidecar JSON for State on External File Formats

## What it is

When you need to store extra state alongside files whose format you don't own and can't modify, a co-located `state.json` (or equivalent) in the same directory is a clean solution. The sidecar holds the extra fields; the original files remain untouched and continue to work with their native tooling.

## When to apply

- You're reading files owned by another tool (a CLI, a daemon, a third-party app)
- You need to track state that has no home in that format (e.g. "was this enabled before?", "when did this last run?")
- Writing to the original format would break the tool that owns it

Classic trigger: you need an undo capability (restore a removed field) and the original file can't carry the backup.

## When not to apply

- You control the file format — just add the field
- The directory is ephemeral or frequently recreated — sidecar won't survive
- Multiple processes write the sidecar concurrently without a lock — add a `threading.Lock` or use atomic writes

## Pattern

```
/jobs/
  daily-prime.md      # owned by external tool — never add fields here
  weekly-report.md
  run-log.json        # sidecar — your state, your schema
```

`run-log.json` schema is whatever you need; version it if it may evolve:

```json
{
  "daily-prime": {
    "original_schedule": "0 8 * * *",
    "last_run": "2026-04-27T08:00:00Z",
    "status": "ok"
  }
}
```

On enable/disable: read `original_schedule` from the sidecar to restore a field that was stripped from the original file. The sidecar is the source of truth for state that the format can't carry.

**Origin:** Waowle UI M5 — claudeclaw job files use YAML frontmatter but have no `enabled:` concept. Disabling a job removes the `schedule:` line; `run-log.json` stores the original value so enable can restore it.
