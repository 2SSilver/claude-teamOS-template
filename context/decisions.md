# Decisions

> Running log of significant decisions made during sessions. Claude appends entries inline as decisions are made. Read by `/prime` at session start.

---

## Format

```
**YYYY-MM-DD — [Short decision title]**
- **Decision:** One sentence stating what was decided.
- **Reason:** One or two sentences on why.
```

Entries are appended newest-first.

---

## Decisions

**2026-04-22 — teamOS showcase presentation built with pptxgenjs**
- **Decision:** Created a 12-slide PPTX presentation using pptxgenjs (local install) with Midnight Executive colour palette for Stefan to present teamOS to IT management consultants.
- **Reason:** pptxgenjs allows full programmatic control over layout, colours, and structure; output stored under projects/consulting/outputs/presentations/.

**2026-04-22 — claudeclaw active with Telegram integration**
- **Decision:** claudeclaw installed and running as a background daemon with Telegram bot (@Waowle_bot) and hourly heartbeat enabled.
- **Reason:** Provides persistent, scheduled AI task execution and remote access to Claude via Telegram — core infrastructure for the remote Claude Code setup goal.

**2026-04-22 — Shell aliases named cs/cr instead of to/tor**
- **Decision:** Use `cs` (Claude Safe) and `cr` (Claude Run) as the shell aliases for launching Claude Code sessions.
- **Reason:** The template suggested `to`/`tor` but `cs`/`cr` better reflect what the aliases actually do and feel more intuitive for daily use.
