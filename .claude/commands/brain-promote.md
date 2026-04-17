Promote a raw note into a structured wiki page in `brain/wiki/`.

## Arguments

Pass the path to the raw note to promote: `/brain-promote brain/raw/daily/2026-04-17-example.md`

## Steps

1. Read the specified raw note
2. Read `brain/wiki/README.md` to understand page conventions
3. Scan existing wiki pages in `brain/wiki/` — check if a page on this topic already exists
   - If yes: propose merging or extending rather than creating a duplicate
4. Apply promotion criteria — the note qualifies if at least one of:
   - The pattern has appeared in two or more projects
   - The insight would change how to approach a new problem
   - The lesson took significant effort to learn and would be expensive to relearn
   - If the note doesn't clearly meet any criterion, flag this and ask whether to proceed
5. Distil the raw note into a wiki page:
   - Extract the reusable pattern, not the project-specific context
   - Strip session detail; keep only what transfers
   - Title: one-line description of the pattern
   - File name: `brain/wiki/<topic-slug>.md` (lowercase, hyphenated, no date)
   - Body structure:
     - **What it is** — describe the pattern in 2-4 sentences
     - **When to apply** — specific conditions that make this the right approach
     - **When not to apply** — explicit anti-cases or limits
     - **Origin** — one line on where this came from (optional)
6. Write the wiki page
7. Update the "Current pages" list in `brain/wiki/README.md` with a one-line entry
8. Report what was promoted and what was left out, and why

Do not copy the raw note verbatim. Wiki pages are distilled, not transcribed.
