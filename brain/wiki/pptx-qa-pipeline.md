---
title: PPTX visual QA pipeline
---

# PPTX visual QA pipeline

Convert a generated `.pptx` to per-slide images for visual inspection without opening a GUI.

## What it is

LibreOffice converts the file to PDF headlessly, then `pdftoppm` splits the PDF into one JPG per slide. The images are passed to a subagent for fresh-eyes visual review. The pipeline catches layout issues (overlaps, text overflow, contrast) that content-only inspection misses.

```bash
python3 scripts/office/soffice.py --headless --convert-to pdf output.pptx
mkdir -p qa && pdftoppm -jpeg -r 96 output.pdf qa/slide
```

`scripts/office/soffice.py` wraps `soffice` with a temporary user profile to avoid lock conflicts when running multiple conversions in the same session.

## When to apply

Any time a presentation is generated programmatically and visual fidelity matters. Run immediately after generation, before declaring success. Use a subagent for inspection — the generating context will see what it expects, not what's there.

## When not to apply

- Text/content QA only → use `python3 -m markitdown output.pptx` instead (faster, no image cost)
- Interactive review → open in LibreOffice Impress directly

## Key parameters

- **96 DPI** is the right default — enough to see layout issues, meaningfully cheaper than 150 DPI (token cost scales with pixel count, not file format)
- Output to a `qa/` subdirectory so images are clearly separate from the presentation itself
- `pdftoppm` is from `poppler-utils` (`sudo apt-get install -y poppler-utils`) — easy to forget this dependency

## Origin

Established 2026-04-23 when setting up QA workflow for the pptx skill.
