# Smoke Test as Acceptance Gate

## What it is

A browser/integration smoke test is the real acceptance gate for any UI+API phase — not the unit test suite. Unit tests validate individual units in isolation; a smoke test validates the integrated whole. "All tests pass and the build is clean" does not mean the feature works.

## When to apply

- At the end of every phase or milestone that involves UI wiring, API integration, or env configuration
- Before declaring any feature "complete" or "ready to review"
- The smoke test checklist should be the last step in every implementation plan, not an afterthought

## When not to apply

- Pure backend work with no UI surface (unit + integration tests are sufficient)
- Don't substitute smoke testing for unit tests — they complement each other

## How to structure the checklist

Write it in the plan under Task N: Smoke Test. For each feature wired in the phase:
- One bullet per observable behaviour (not per endpoint)
- Include at least one persistence check (e.g. drag a kanban card → refresh → still moved)
- Include at least one failure/fallback case

## Why it gets skipped

Smoke tests often require two running processes (backend + frontend dev server) or a deployed environment. Plans that defer this to "later" create a window where bugs accumulate undetected across sessions. If the smoke test can't run in the same session as implementation, schedule it as the first task of the next session — not optional.

**Origin:** Waowle UI Phase 3A — 24 tests passed, TypeScript clean, three real failures only found in browser (mock data never replaced, WebSocket proxy misconfigured, wrong env var scope).
