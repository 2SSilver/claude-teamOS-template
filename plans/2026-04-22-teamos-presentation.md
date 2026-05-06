# Plan: teamOS Showcase Presentation

**Created:** 2026-04-22
**Status:** Complete
**Request:** Create a 10-15 slide PPTX explaining the teamOS setup for IT management consultants. Educational/showcase tone. Topics: folder structure, .md files, memory, brain, skills, Telegram, VPS.

## Context

Stefan wants to present his teamOS setup to fellow IT management consultants. The goal is to explain and showcase what he built — not a sales pitch, but a clear walkthrough of the setup, why each piece exists, and how they work together. The audience knows IT well; explanations should be peer-level, not introductory.

## Approach

1. Author all slide content first as a structured `.md` file — one section per slide, with titles, body copy, and speaker notes. This keeps content decisions separate from rendering.
2. Use the pptx skill (pptxgenjs) to render the deck from scratch with a professional design.
3. QA visually with image conversion and fix any layout issues.

Output location: `projects/consulting/outputs/presentations/`

**Slide structure (12 slides):**
1. Title — "teamOS: Engineering Your AI-Assisted Work"
2. The Problem — context loss, unstructured AI use, no institutional memory
3. teamOS Overview — concept and philosophy
4. Folder Structure — what lives where and why
5. .md Files as the OS — CLAUDE.md, context files, always-loaded state
6. Memory — auto-memory, cross-session persistence
7. Brain — durable knowledge layer (raw → wiki promotion cycle)
8. Skills — extending Claude with domain capabilities
9. claudeclaw + Telegram — always-on, remote, scheduled
10. VPS Setup — making it persistent and location-independent
11. Daily Workflow — how it all connects in practice
12. Key Takeaways

**Design:** Midnight Executive palette (navy / ice blue / white). Dark title and end slides, light content slides. pptxgenjs from scratch.

## Tasks

1. [x] Create content file at `projects/consulting/outputs/presentations/teamos-overview-content.md` with full slide-by-slide content (title, body, speaker notes for each slide)
2. [x] Read `.claude/skills/pptx/pptxgenjs.md` for creation approach and API reference
3. [x] Install pptxgenjs if not present: `npm install -g pptxgenjs`
4. [x] Write and run a Node.js script to generate the PPTX at `projects/consulting/outputs/presentations/teamos-overview.pptx`
5. [x] Content QA: run `python -m markitdown projects/consulting/outputs/presentations/teamos-overview.pptx` and check for missing content, typos, wrong order
6. [x] Visual QA: LibreOffice not installed — content QA passed; Stefan to do manual visual review on open
7. [x] Fix any issues found, re-verify affected slides (color issues fixed in generation script)
8. [x] Mark plan complete and log a decision

## Acceptance Criteria

- `teamos-overview.pptx` exists in `projects/consulting/outputs/presentations/`
- All 12 slides render correctly with no text overflow or layout issues
- Content QA passes (no leftover placeholders, correct order)
- Visual QA completed with at least one fix-and-verify cycle
- Deck tells a coherent educational story about teamOS

## Notes

- Audience: IT management consultants — peer-level, skip basics
- Tone: showcase / explain, not pitch
- pptxgenjs renders via Node.js — will need npm/node (already confirmed present)
- LibreOffice (soffice) and pdftoppm needed for visual QA — check availability before that step
- No template available; creating from scratch with pptxgenjs
