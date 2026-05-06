# 2026-04-23 — teamme session: Drive sorting, pptx QA pipeline, statusbar

**Project context:** teamme / foundation phase. Remote Claude Code setup, tooling, and workspace hygiene.

## What was done

- Moved 5 books from todo list via google-drive MCP (carryover from prior session)
- Sorted 83 books from "Unsorted books" + 40 books from "Agile eBook" into subject folders; trashed 4 duplicates
- Produced a curation list of 43 potentially redundant books; Stefan deleted 23 of them
- Installed LibreOffice + poppler-utils; built pptx QA pipeline (pptx → PDF → 96 DPI JPGs → visual inspection)
- Created `scripts/office/soffice.py` wrapper to handle LibreOffice headless profile locking
- Updated pptx skill to use 96 DPI (from 150) for token efficiency
- Created Waowlee Output Drive folder structure + upload rule (`artifact-upload.md`)
- Uploaded teamos-overview.pptx to Waowlee Output / consulting
- Investigated Claude Code statusbar data pipeline — found stdin is always empty in v2.1.117
- Updated statusbar: removed lobster emojis, renamed ClaudeClaw → Waowlee; dropped usage bar (data not accessible)
- Fixed Claude Code auto-update error (sudo npm install)

## Observations

- **Google Drive MCP is very capable for bulk operations** — running 80+ parallel moveItem calls in a single message worked without errors or rate limiting. This pattern (parallel MCP tool calls) is reliable for large Drive operations.
- **Always list destination folders before moving** — the first step in both sorting jobs was `listFolder` on the parent (Work folder) to get all existing subject folders with their IDs. Without this, you're guessing at folder names and IDs. Folder IDs never change; names can.
- **Work with folder IDs, not names** — Drive operations use IDs exclusively. Names are human-readable labels. Building a mental (or written) map of folder name → ID before starting a batch job eliminates errors mid-run.
- **Duplicate detection requires comparing titles not IDs** — found 4 duplicate pairs (Accelerate, Escaping the Build Trap, Go To Market Strategy, Design Thinking Playbook) by reading filenames in the listing. There's no built-in dedup in the MCP; it's a manual pattern-match step.
- **deleteItem moves to trash, not permanent delete** — Google Drive's "delete" is actually trash. Files are recoverable. This is safe for bulk cleanup but the user should know the trash isn't auto-emptied.
- **Book curation needs domain knowledge, not just listing** — the curation pass (43 candidates) required knowing which books overlap in topic, which are dated, and which are niche. This can't be automated; it's a judgment call that Claude can assist with but not replace.
- **Poppler is required for the pptx QA pipeline** — LibreOffice can convert to PDF headlessly but can't produce images directly. pdftoppm is the missing link. This is a dependency that's easy to forget.
- **96 DPI is the right default for visual QA** — good enough to see layout/overlap/contrast issues, meaningfully cheaper than 150 DPI. 72 DPI would probably also work.
- **Claude Code v2.1.117 does not pipe data to external statusline commands** — stdin is always empty. `readFileSync("/dev/stdin")` returns empty even during active sessions. The SSE port listed in env vars is not accessible from the statusline subprocess.
- **The built-in statusline bar shows context window %, not usage limit** — easy to conflate. The 5-hour rolling usage limit is completely inaccessible from the statusline API (not in stdin, not in env, not via socket). Only `context_window.used_percentage` is in the spec.
- **Unicode emoji in JS source files causes Edit tool failures** — the 🦞 lobster emojis were stored as `🦞` escape sequences, not literal emoji. The Edit tool couldn't match the string with literal emoji. Had to use Node.js string replacement as a workaround.
- **Book curation pattern worked well** — presenting a numbered list with one-line motivations per book, grouped by reason (redundant, overloaded topic, niche/dated), let Stefan make fast decisions without needing to know every book. 43 suggested, 23 deleted.

## Patterns noticed

- **Parallel MCP calls scale well** — 80+ moveItem + deleteItem calls in one message, all succeeded. Worth testing limits further but this is reliable for practical batch sizes.
- **Debug-before-implement on unknown APIs** — added a file logger to discover the statusbar input schema before writing feature code. This saved writing code against a wrong assumption. The right instinct was to instrument first.
- **Token cost for visual QA scales with pixel count, not file format** — the user assumed PDF would be expensive. Clarifying that format doesn't matter (only dimensions) reframed the decision immediately. DPI is the right lever.
- **"Unsorted" folders in Drive are common** — this is likely a recurring cleanup task as books accumulate. Could be worth a periodic curation command or reminder.
- **Waowlee Output folder as artifact destination** — establishing a canonical place for outputs with per-project subfolders is a good habit. The rule `artifact-upload.md` codifies this so it doesn't depend on memory.
- **Drive sorting workflow: search → list parent → categorise → batch move** — this three-step pattern worked cleanly for both sorting jobs. The key is loading the full target folder listing once at the start, then holding the ID map in context for the entire batch. Don't re-query mid-batch.
- **Folder name → ID map should be saved for recurring Drive work** — the consulting folder ID, Waowlee Output ID, and all subject folder IDs were looked up during the session. These don't change. Saving them (as we did in `artifact-upload.md`) avoids re-discovery next session.

## Potential promote

- **pptx QA pipeline pattern** → wiki page: `pptx-qa-pipeline.md`. The full pipeline (LibreOffice → PDF → pdftoppm → visual inspection with subagent) with correct DPI reasoning and soffice.py wrapper rationale. Strong promote candidate.
- **Parallel MCP batch operations pattern** → wiki: `parallel-mcp-batch.md`. When doing bulk Drive operations, run all calls in a single message for speed. Observed reliable up to 80+ concurrent calls.
- **Claude Code statusline data limitations** → wiki or reference note: `claude-code-statusline-limits.md`. v2.1.117 does not pipe data to external statusline commands. Only data available: claudeclaw state.json, credentials file (static plan info). Context window % ≠ usage limit.
- **Google Drive sorting workflow** → wiki: `google-drive-bulk-sort.md`. Pattern: list parent folder once to build ID map → categorise all files → batch move in parallel. Include: folder ID persistence, duplicate detection, deleteItem = trash not permanent. Strong promote candidate — this will recur.
- **Drive folder ID reference** → reference memory or wiki appendix. The Work folder, all subject folders, Waowlee Output and its subfolders. Static data, high reuse value.

## Open questions

- Will a future Claude Code version fix the statusline data pipe? The `context_window.used_percentage` field is in the documented spec — suggests it was intended to work. Worth re-checking after updates.
- Is there an undocumented Claude.ai API endpoint for usage data that could be polled (with caching) from the statusline? The OAuth token is available in `.credentials.json`.
- The "Unsorted books" and "Agile eBook" folders are now empty (or near-empty). Are there other unsorted folders in the Drive worth checking?
- The `Analysis` folder in Drive now only has 0 files (Spend Analysis and Enterprise Architecture were deleted). Consider whether to keep the folder.
