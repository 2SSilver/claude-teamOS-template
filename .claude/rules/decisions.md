# Decision Logging

Claude appends decision entries to `context/decisions.md` during sessions — no manual action required. `/prime` reads this file at session start.

**IMPORTANT: Write a decision entry when:**
- An approach or strategy is chosen over alternatives
- A structural, architectural, or scoping choice is made
- A process or workflow decision is agreed
- An explicit "we'll go with X" moment occurs with meaningful reasoning

**Do not capture:** minor implementation details, reversible one-line choices, things already fully described in a plan.

**Format** — append newest-first under `## Decisions` in `context/decisions.md`:

```
**YYYY-MM-DD — [Short decision title]**
- **Decision:** One sentence stating what was decided.
- **Reason:** One or two sentences on why.
```

TeamOS-level decisions go into root `context/decisions.md`. Project-level decisions go into the project's own `context/decisions.md`.
