# Ruff Modern Python Conventions

## What it is

Ruff enforces Python 3.10+ syntax that differs from patterns in most FastAPI tutorials and older codebases. Code written against tutorial examples will produce lint errors that need fixing before a task is done.

## Common surprises

| Tutorial / older form | Ruff-preferred form | Rule |
|-----------------------|---------------------|------|
| `Optional[X]` | `X \| None` | UP045 |
| `Union[X, Y]` | `X \| Y` | UP007 |
| `from typing import AsyncGenerator` | `from collections.abc import AsyncGenerator` | UP035 |
| `from typing import Generator` | `from collections.abc import Generator` | UP035 |
| `List[X]`, `Dict[X, Y]` | `list[X]`, `dict[X, Y]` | UP006 |

## TypeScript parallel

TypeScript has a similar pattern: values only used inside event handlers (never in JSX) should be `useRef`, not `useState`. Using `useState` for these triggers `TS6133` (declared-but-never-read) because the state value never appears in the render tree.

## When to apply

- Always — ruff runs before every commit (`ruff check backend/src`)
- Write in the modern form from the start; don't wait for the lint step to catch it

## How to avoid surprises mid-plan

When writing implementation plans, use the ruff-preferred forms in all code examples. Plans written with `Optional[X]` will produce lint errors during execution that weren't anticipated.

**Origin:** Waowle UI Phase 3A — 12 ruff errors found during Task 8 lint step, all caused by `Optional[X]` and `from typing import AsyncGenerator` used in plan code examples. Fixed inline but avoidable.
