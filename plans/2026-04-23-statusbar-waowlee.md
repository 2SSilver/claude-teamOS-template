# Plan: Statusbar — Waowlee branding + usage progress bar

**Created:** 2026-04-23
**Status:** Complete
**Request:** Replace "● live" green text with a usage limit progress bar (different colour when in extra usage). Remove lobster emojis. Rename ClaudeClaw to "Waowlee" in the statusbar.

## Context

The statusbar is rendered by `.claude/statusline.cjs`. It currently shows a ClaudeClaw branded box with lobster emojis, a heartbeat timer, job count, and a green "● live" indicator. Stefan wants the live indicator replaced with a meaningful usage bar, and the branding cleaned up.

## Approach

Three independent changes to `statusline.cjs`:

1. **Usage bar** — replace `GREEN + "● live" + R` with a bar built from the usage limit fields in the statusbar input JSON. Colour logic: green (normal) → yellow (approaching limit, e.g. >80%) → red (at/over regular limit, i.e. in extra usage). The exact field names must be confirmed by logging the full input JSON in a live session before implementing (see Task 1).

2. **Remove lobster emojis** — strip `🦞` from the HEADER string.

3. **Rename** — replace every occurrence of `ClaudeClaw` with `Waowlee` in the HEADER string.

## Tasks

1. [ ] **Discover usage fields** — add a temporary `fs.writeFileSync('/tmp/statusbar-input.json', stdinData)` line to `statusline.cjs`, trigger a statusbar render (open a new session or run `/status`), then read `/tmp/statusbar-input.json` to see the full input schema. Remove the debug line after.

2. [ ] **Remove lobster emojis** — in the HEADER line, remove the two `🦞` (🦞) emoji sequences and the surrounding spaces.

3. [ ] **Rename ClaudeClaw → Waowlee** — in the HEADER string, replace `ClaudeClaw` with `Waowlee`.

4. [ ] **Build usage progress bar** — using the field names confirmed in Task 1, compute `usagePct` (0–100). Build a 10-block bar using the same `█` / `░` pattern as the context bar. Colour logic:
   - `usagePct < 80` → GREEN
   - `80 ≤ usagePct < 100` → YELLOW
   - Extra usage active (or `usagePct >= 100`) → RED (or MAGENTA if a distinct colour is preferred)

5. [ ] **Replace "● live" with the usage bar** — swap out the `GREEN + "● live" + R` push in the `info` array for the new usage bar string. If usage data is unavailable in the JSON, fall back to `GREEN + "● live" + R` so the statusbar doesn't break.

6. [ ] **Test all states** — run the script with mock JSON payloads covering: normal usage, >80%, extra usage active, and missing usage fields (fallback). Confirm output looks correct in the terminal.

## Acceptance Criteria

- Statusbar header reads "Waowlee" with no lobster emojis
- "● live" is replaced by a coloured progress bar showing usage limit %
- Bar is green below 80%, yellow 80–99%, red/distinct colour in extra usage
- If usage fields are absent from the input, falls back gracefully (no crash, shows "● live")
- All existing statusbar elements (context bar, heartbeat timer, job count, Telegram/Discord indicators) continue to work

## Notes

Usage bar dropped after investigation: Claude Code 2.1.117 does not pipe any session data to external statusline commands (stdin is always empty). The 5-hour rolling usage limit is not exposed to the statusline API — only `context_window.used_percentage` is in the spec, which measures current conversation context, not the usage cap. "● live" kept as-is until Anthropic exposes usage limit data externally.
