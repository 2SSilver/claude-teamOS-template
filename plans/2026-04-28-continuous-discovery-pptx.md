# Plan: Continuous Discovery Intro — PPTX Build & Upload

**Created:** 2026-04-28
**Status:** Complete
**Request:** Build a 22-slide PPTX presentation from the continuous-discovery-intro-content.md file using pptxgenjs, QA it visually, and upload to Google Drive (Waowle Output / Consulting folder).

---

## Context

The content file `projects/consulting/outputs/product-discovery/continuous-discovery-intro-content.md` is complete and approved. It covers Teresa Torres' Continuous Discovery Habits framework (22 slides), including Tim Herbig's Progress Wheel (Slide 06) and a cybersecurity domain perspective (Slide 21).

The PPTX needs to be built from scratch using pptxgenjs. Several slides include in-code diagrams (OST, progress wheel, opportunity space tree, discovery loop, 2x2 matrix) — these are built with shapes and lines rather than imported images, for pixel-perfect control. Slides without available generated images will use placeholder visual elements (styled shapes/icons) that preserve the design intent.

---

## Approach

**Build tool:** pptxgenjs (JavaScript, global install)
**Build script:** `projects/consulting/outputs/product-discovery/generate-continuous-discovery.js`
**Output file:** `projects/consulting/outputs/product-discovery/continuous-discovery-intro.pptx`

**Design spec (from content file):**
- Palette: Teal Trust — Primary `028090`, Secondary `00A896`, Accent `02C39A`, Dark bg `023B45`, Light bg `F0FAFA`, Body text `1A1A2E`
- Typography: Georgia Bold (headers, 36–44pt), Georgia (section headers, 22–26pt), Calibri (body, 14–16pt)
- Layout: "Sandwich" — dark slides 01 and 22, light all content slides
- All diagrams built in code: Slides 06, 09, 10, 19, 20

**Upload:** `mcp__google-drive__uploadFile` → Consulting folder (`188Bw1THzdLRjNQIDoHEQpH5UyNLzz9gC`)

---

## Tasks

### Setup
1. [ ] Verify pptxgenjs is installed globally (`npm list -g pptxgenjs`); install if missing
2. [ ] Verify LibreOffice and pdftoppm are available for QA image conversion
3. [ ] Create `generate-continuous-discovery.js` scaffold with palette constants, layout config, and helper functions (shadow factory, bullet helper, card builder)

### Slide build — Dark slides
4. [ ] Slide 01: Title — dark bg `023B45`, large Georgia title, subtitle in teal, decorative teal accent bar
5. [ ] Slide 22: Getting Started + Key Takeaways — dark bg, five action bullets, key takeaways, resources

### Slide build — Introduction chapter (Slides 02–07)
6. [ ] Slide 02: Who is Teresa Torres — two-column layout, bullet credentials left, pull quote right
7. [ ] Slide 03: The Problem — two-column before/after, styled header rows for "The old way" / "The result"
8. [ ] Slide 04: What is Continuous Discovery — definition callout box, three numbered characteristics, key principle quote
9. [ ] Slide 05: Output vs Outcome — three-row comparison table with teal header row, definition below
10. [ ] Slide 06: Tim Herbig's Progress Wheel — **in-code diagram**: three rounded-rectangle nodes (Strategy, OKRs, Discovery) arranged in triangle with bidirectional arrows and labels; supporting bullet content below
11. [ ] Slide 07: The Product Trio — **in-code Venn**: three overlapping ovals with role labels and shared "Discovery" centre zone; three role bullets below

### Slide build — Opportunity & OST chapter (Slides 08–14)
12. [ ] Slide 08: What is an Opportunity — three icon+label cards (Needs / Pain Points / Desires), key distinction quote
13. [ ] Slide 09: The Opportunity Space — **in-code tree**: root node → 3 opportunity branches → 2 sub-opportunity leaves; bullet properties + example hierarchy
14. [ ] Slide 10: OST Overview — **in-code OST diagram**: four-layer tree (Outcome → Opportunity ×3 → Solution ×2 each → Assumption); description bullets
15. [ ] Slide 11: OST Layer 1 — Outcome — two-column weak/strong examples table, measurable outcome definition
16. [ ] Slide 12: OST Layer 2 — Opportunities — four evaluation criteria, bullet list on building the space
17. [ ] Slide 13: OST Layer 3 — Solutions — "why three" callout, three generation tips, solutions-are-not-specs note
18. [ ] Slide 14: OST Layer 4 — Assumptions — four assumption types as icon+label cards, five-step process bullets, key principle quote

### Slide build — Habits chapter (Slides 15–19)
19. [ ] Slide 15: Continuous Interviewing — cadence bullets, who recruits box, who attends callout, why weekly four-bullet grid
20. [ ] Slide 16: Story-Based Questions — golden question in large styled quote box, follow-up probes, avoid list with badges
21. [ ] Slide 17: Interview Snapshot — five-step snapshot structure as numbered cards, habit note
22. [ ] Slide 18: Assumption Testing — five-step process table, four test types as styled rows
23. [ ] Slide 19: Prioritising Opportunities — **in-code 2×2 matrix**: four quadrants with axis labels; three evaluation dimensions; target opportunity definition

### Slide build — Synthesis chapter (Slides 20–21)
24. [ ] Slide 20: Full Discovery Loop — **in-code circular loop**: eight steps in a clockwise ring with arrows; three key properties below
25. [ ] Slide 21: Cybersecurity Perspective — three-row customer type table, four parallel concepts, four special considerations as numbered cards

### QA
26. [ ] Run `node generate-continuous-discovery.js` — fix any JS errors
27. [ ] Convert to PDF: `python3 scripts/office/soffice.py --headless --convert-to pdf continuous-discovery-intro.pptx`
28. [ ] Convert to images: `pdftoppm -jpeg -r 96 continuous-discovery-intro.pdf qa/slide`
29. [ ] Visual QA using subagent — inspect all 22 slides for: text overflow, overlapping elements, low contrast, misalignment, placeholder text
30. [ ] Fix all issues found in QA pass
31. [ ] Re-render affected slides and confirm fixes with a second subagent pass
32. [ ] Content QA: `python -m markitdown continuous-discovery-intro.pptx` — check for missing content, wrong order, leftover placeholders

### Upload
33. [ ] Upload `continuous-discovery-intro.pptx` (and PDF) to Google Drive Consulting folder (`188Bw1THzdLRjNQIDoHEQpH5UyNLzz9gC`) using `mcp__google-drive__uploadFile`
34. [ ] Confirm upload success and return the file URL

---

## Acceptance Criteria

- [ ] All 22 slides built, content matches the approved content .md file
- [ ] No text overflow, no overlapping elements, no low-contrast text
- [ ] All five in-code diagrams render correctly: Progress Wheel, Opportunity Space Tree, OST Four-Layer, 2×2 Matrix, Discovery Loop
- [ ] Visual QA passes with zero unresolved issues
- [ ] File uploaded to Google Drive Consulting folder and accessible
- [ ] `context/todo.md` updated: this plan moved to Done when complete

---

## Notes

- **Image prompts** — 10 slides have embedded image generation prompts in the content .md. For this build, visual intent will be represented in-code using styled shapes, icon placeholders, or colour-blocked sections. A follow-up pass with generated images can replace these later.
- **pptxgenjs pitfall**: Never reuse option objects across shape calls (object mutation). Use factory functions for shadows, fills, and borders.
- **No `#` prefix** on any hex colour value in pptxgenjs — causes file corruption.
- **Slide ordering note**: The content .md flags a potential reorder of Slides 11–18 (interview habits before OST layers). This plan builds the current approved order. If reorder is confirmed before build starts, adjust task groupings in the Habits and OST chapters.
- **Google Drive folder IDs**: Waowle Output root `1vcoYQjXqRX3nBWz47xzGbflysRgdsb-M`, Consulting subfolder `188Bw1THzdLRjNQIDoHEQpH5UyNLzz9gC`
