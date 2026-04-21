# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

> **First time here?** Read `kickoff.md` before anything else.

---

## Core Principles

- Use the team name (or "the team") and "Claude" in all docs — no I/you/me/your pronouns
- IMPORTANT: Always plan before implementing — use `/create-plan` for non-trivial work; ask one clarifying question at a time; get approval before starting
- Feedback is direct and specific — no hedging; bullet points for summaries; "cut argument A" not "make it shorter"
- Run `/prime` at the start of every session
- IMPORTANT: After any workspace change (new commands, structure, scripts, workflows), update CLAUDE.md to reflect it

---

## Team Structure

Claude uses this table to know who to loop in or delegate tasks to.

| Name | Role | Contact (Slack / Teams) |
|------|------|------------------------|
| <!-- TODO: Name --> | <!-- TODO: Role --> | <!-- TODO: @handle --> |
| <!-- TODO: Name --> | <!-- TODO: Role --> | <!-- TODO: @handle --> |
| <!-- TODO: Name --> | <!-- TODO: Role --> | <!-- TODO: @handle --> |

---

## Project Structure

```
.
├── CLAUDE.md              # This file — always loaded, always current
├── kickoff.md             # First-run setup checklist
├── .mcp.json              # MCP server configuration
├── .claude/
│   ├── commands/          # Slash commands (available to all projects)
│   ├── rules/             # Always-on modular rules (loaded automatically)
│   └── skills/            # Team-wide and project-specific skills
├── brain/                 # Durable knowledge layer
│   ├── BRAIN.md           # Brain system documentation
│   ├── wiki/              # Curated, reusable patterns promoted from raw
│   ├── raw/               # Low-friction inbox: daily/, ideas/, problems/, sources/
│   └── prompts/           # Extended prompt content for commands
├── context/               # Team and project context (read by /prime)
│   ├── team-info.md       # Team composition, roles, ways of working
│   ├── project-info.md    # Engagement/project overview, scope, stakeholders
│   ├── strategy.md        # Goals, priorities, success metrics
│   ├── current-data.md    # Current status, live metrics, key numbers
│   └── decisions.md       # Decision log (newest-first)
├── projects/              # Sub-projects (copy from template/example-project/ to add one)
├── template/
│   └── example-project/   # Starter template for new sub-projects
├── plans/                 # Implementation plans (root-level, cross-project)
├── outputs/               # Team-level deliverables
├── reference/             # Shared templates, examples, reference material
└── scripts/               # Shared automation scripts
```

---

## Commands

Available in `.claude/commands/` and work from any project within this TeamOS.

| Command | Purpose |
|---------|---------|
| `/prime` | Initialize a session — load context, summarize mission and priorities, confirm readiness |
| `/create-plan [request]` | Create a detailed implementation plan before doing work |
| `/implement [plan-path]` | Execute an approved plan step by step |
| `/brain-wiki [topic]` | Consult the wiki before starting a new approach or design decision |
| `/brain-extract` | Extract reusable insights from current session work into a raw note |
| `/brain-summarize [scope]` | Summarize reusable lessons from a session or project phase |
| `/brain-promote [note-path]` | Promote a raw note into a structured wiki page |

---

## Brain

The `brain/` directory is the team's durable knowledge layer, shared across all projects. Before designing a new approach for a non-trivial problem, check `brain/wiki/` for relevant patterns — use `/brain-wiki <topic>` explicitly. After significant work, Claude will offer to run `/brain-extract` or `/brain-summarize` to capture what was learned.

See `brain/BRAIN.md` for promotion criteria and the full system documentation.

---

## Decision Logging

@.claude/rules/decisions.md

---

## Memory

Claude's auto-memory system (`~/.claude/projects/.../memory/`) stores session context between conversations automatically — no setup required.

> **Optional (personal use only):** [claude-mem](https://github.com/thedotmack/claude-mem) adds a semantic observation layer (SQLite + Chroma, searchable via MCP). AGPL-3.0 licensed — review carefully before enabling in a team or enterprise context.
