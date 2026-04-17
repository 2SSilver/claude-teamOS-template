Summarize reusable lessons from a session or body of work and write a raw note capturing what was learned.

This is a broader sweep than `/brain-extract` — use it at the end of a project phase, after a significant deliverable, or when stepping back from a period of work to consolidate what was learned.

## Arguments

Optionally pass a scope: `/brain-summarize projects/my-project` to focus on a specific project, or run without arguments to summarize the current session broadly.

## Steps

1. Determine scope and gather sources:
   - If an argument is given, read context files, plans, and outputs in that project folder — include `context/decisions.md` if it exists
   - If no argument, review what was discussed and worked on in this session — include `context/decisions.md` from the current project if it exists
   - Decisions are primary source material: they record what was chosen and why, which is exactly what lessons-learned captures
2. Identify lessons across three categories:
   - **What worked** — approaches, decisions, or tools that paid off
   - **What didn't work** — things that failed, caused friction, or required rework
   - **What to do differently** — concrete changes for next time
3. For each lesson, note whether it is:
   - Project-specific (stays in that project's context)
   - Potentially reusable (candidate for brain/wiki)
4. Write a summary raw note to `brain/raw/daily/YYYY-MM-DD-<scope-slug>-summary.md`
5. Raw note structure:
   - `# YYYY-MM-DD — <Scope> Summary`
   - `**Scope:**` — what this covers
   - `## What worked`
   - `## What didn't work`
   - `## What to do differently`
   - `## Promote candidates` — list anything worth promoting with a one-line reason
6. After writing, list the promote candidates and ask if any should be promoted now using `/brain-promote`

Be direct about what failed. Lessons from failure are more valuable than confirmations of success.
