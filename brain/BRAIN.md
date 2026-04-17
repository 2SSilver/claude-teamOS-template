# Brain

The brain is the team's durable knowledge layer above individual projects. It captures what is learned across sessions so insights don't disappear when a session ends.

## What lives where

**`raw/`** — low-friction inbox. Write here first. No polish required. Capture thinking while it's fresh.
- `raw/daily/` — date-stamped notes from sessions or work periods
- `raw/ideas/` — emerging ideas not yet tied to a project
- `raw/problems/` — recurring problems or friction worth solving
- `raw/sources/` — excerpts, links, or references worth keeping

**`wiki/`** — curated knowledge. Pages promoted from raw after a pattern is understood well enough to be reusable. Stable, structured, reviewed.

**`prompts/`** — extended prompt content for slash commands. Not standalone files — referenced by commands in `.claude/commands/`.

## Information flow

```
session work → raw/ → (promote when pattern is clear) → wiki/
```

Raw notes accumulate freely. When a raw note captures something genuinely reusable — a framework, a pattern, a hard-won lesson — promote it to wiki. Delete or archive raw notes once promoted.

## Memory vs. Brain

| Layer | Purpose | Where |
|-------|---------|-------|
| Auto-memory | Session continuity — team context, working preferences, project state | `~/.claude/projects/.../memory/` |
| Brain | Durable knowledge — reusable insights, patterns, frameworks | `brain/` |

Memory handles recall. Brain handles knowledge. They serve different needs and stay separate.

## Promotion criteria

Promote a raw note to wiki when:
- The same pattern has appeared in two or more projects
- The insight would change how to approach a new problem
- The lesson took significant effort to learn and would be expensive to relearn

Don't promote:
- Project-specific context that won't transfer
- Notes that are still developing
- Anything already documented better elsewhere

## How Claude uses the brain

Before designing a new approach for a problem, Claude checks `brain/wiki/` for relevant patterns. Use `/brain-wiki` to do this explicitly. If a matching page exists, apply it. If the approach extends or contradicts a wiki page, note that after the work is done.

After a significant piece of work, Claude uses `/brain-extract` or `/brain-summarize` to capture what was learned before the session ends.
