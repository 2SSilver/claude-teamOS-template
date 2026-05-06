---
title: Write slide content as .md before rendering — separate content from layout
---

# Write slide content as .md before rendering — separate content from layout

## What it is

When building a presentation programmatically (e.g. with pptxgenjs), author all slide content in a structured `.md` file first — one section per slide with title, body, and speaker notes. Only then write the rendering script. This separates content decisions (what to say) from layout decisions (how it looks), which makes both easier to get right.

## When to apply

- Any presentation built from scratch with pptxgenjs or similar
- When content needs review or approval before design work starts
- When the same content might be repurposed (slide deck + summary doc, etc.)

## When not to apply

- Editing an existing template where content is already locked
- Very short decks (2-3 slides) where the overhead isn't worth it

## How it works

1. Write `<name>-content.md` with a `## Slide N` section for each slide
2. Review and adjust content before touching code
3. Write the pptxgenjs script using the .md as the source of truth
4. Content QA with `python3 -m markitdown output.pptx` — compare against the .md

The `.md` file also serves as a fallback if the PPTX rendering needs to be redone or ported to another format.

## Origin

2026-04-22 — used to build the 12-slide teamOS showcase deck in one session. Content .md written first, then rendered with pptxgenjs. Kept content and design decisions clearly separate throughout.
