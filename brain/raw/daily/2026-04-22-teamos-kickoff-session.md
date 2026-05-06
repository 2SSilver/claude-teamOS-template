# 2026-04-22 — teamOS kickoff session

**Project context:** teamme root, day one. Foundation phase — getting the environment standing, claudeclaw live, first real output shipped.

## What was done

- Completed claudeclaw install: daemon was already running (had been started earlier), confirmed Telegram integration live, marked plan complete
- Bun was missing — auto-installed via `curl -fsSL https://bun.sh/install | bash`; available at `~/.bun/bin/bun` even when not in PATH
- Created `projects/consulting/` from the template — registered in projects/README.md, context stubs in place
- Installed `pptx` skill globally from `anthropics/skills` via the claudeclaw install-skill script
- Attempted Google Workspace MCP auth (Gmail, Calendar, Drive) via tool calls — these are claude.ai connectors and require `/mcp` in the terminal UI, not API calls
- Caught that `.claude/claudeclaw/settings.json` (contains Telegram bot token) was not gitignored — added `.claude/claudeclaw/` to .gitignore
- Built 12-slide teamOS showcase PPTX with pptxgenjs (Midnight Executive palette, navy/ice blue/white)
- pptxgenjs installed locally (`npm install --prefix . pptxgenjs`) because global npm install failed on permissions

## Observations

- `mcp__claude_ai_*__authenticate` tools return "run /mcp and select X" — they don't actually trigger an OAuth flow from within Claude Code; the flow requires the terminal/UI
- npm global install permission errors are common on this setup; local `--prefix .` install is a reliable fallback
- Bun not being in PATH after install (shell not reloaded) is a common gotcha — use `~/.bun/bin/bun` directly in scripts
- 8-character hex colors in pptxgenjs (e.g. `CADCFC80` for opacity) silently fall back to black — use proper 6-char hex instead
- `.claude/claudeclaw/` containing secrets was not in .gitignore out of the box — easy to miss, easy to commit by accident
- LibreOffice not installed = no visual QA pipeline for PPTX. Content QA via markitdown works fine as a substitute but can't catch layout issues
- Entire presentation (plan → content .md → pptxgenjs script → generated file) took one session from scratch
- Claudeclaw heartbeat messages arrive in this Claude Code session even when sent via Telegram — the daemon and the interactive session share the same underlying model but are different processes

## Patterns noticed

- **Security catch pattern**: checking gitignore for secrets-containing files before first commit is a cheap, high-value habit. Should be a standard step after any new config file with credentials is created.
- **Local npm install as fallback**: when global npm fails on permissions, `npm install --prefix <project-root>` works cleanly and keeps deps scoped
- **Content .md → PPTX workflow**: writing all slide content as a structured .md file first, then rendering with pptxgenjs, separates concerns cleanly. Content decisions and layout decisions stay separate.
- **Telegram-first session**: this entire session was operated via Telegram + heartbeat messages. The plan/implement/review loop worked well asynchronously — no need to be at the terminal.

## Potential promote

- **"Check gitignore for secrets after creating config files"** — simple, universal rule. Promote candidate.
- **"Content-first PPTX workflow"** — write slide content as .md, then render. Reusable pattern for any presentation work.
- **"Local npm install fallback"** — when global fails, `--prefix` is the answer. Short but worth capturing.

## Open questions

- Does LibreOffice need to be installed system-wide, or can it be sandboxed? The pptx skill references `scripts/office/soffice.py` which doesn't exist in this setup yet.
- Will Google Workspace MCP auth persist across sessions once done via `/mcp`? Or does it need re-auth each session?
- The consulting project context files are empty stubs — what is the actual consulting work Stefan is planning to use this for?
