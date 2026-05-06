---
title: context/todo.md for cross-session task persistence
---

# context/todo.md for cross-session task persistence

Use `context/todo.md` to persist actionable tasks that need to survive context compaction or session restarts.

## What it is

A plain markdown checklist file read by `/prime` at the start of every session. Tasks written here carry forward automatically — they don't live in conversation context, which gets compacted. Claude marks items done as they are completed during a session.

```markdown
- [ ] Task to do
- [x] Completed task
```

For complex tasks with supporting data, use a table inline under the item (see the Google Drive book-move task as an example — it included file IDs and destination folder IDs directly in the todo entry).

## When to apply

- Any task that can't be finished in the current session and must carry over
- Tasks that need to survive `/clear` or a new session
- Structured handoff information (file IDs, URLs, parameters) that would be painful to re-discover

## When not to apply

- In-session bookkeeping — use the Task tool instead
- Tasks with no clear completion state (those belong in `context/strategy.md` or as ongoing notes)
- Large multi-step work — create a plan file in `plans/` and just reference it from the todo

## Key behaviour

- `/prime` reads this file at session start and surfaces unchecked items
- Claude updates checkboxes inline as work completes — no manual action needed
- Checked items stay in the file (history) until manually pruned

## Origin

Used throughout teamme sessions; formalised as a pattern 2026-04-23.
