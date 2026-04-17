# Claude TeamOS

A structured Claude Code workspace for teams. Use this template to spin up a fully configured AI-assisted operating system for a new team, engagement, or project.

## What is TeamOS?

TeamOS is a Claude Code workspace that gives your team:

- **Shared context** — team mission, project scope, strategy, and live status that Claude reads at every session
- **Knowledge brain** — a structured system for capturing and promoting reusable insights across projects
- **Consistent commands** — `/prime`, `/create-plan`, `/implement`, and brain commands available to all team members
- **Decision log** — Claude automatically records significant decisions as they are made
- **Project structure** — a pattern for organizing sub-projects within the team

## Quickstart

1. Click **Use this template** (or clone this repo)
2. Open `kickoff.md` and follow the steps
3. Run `/prime` in Claude Code — that's your starting point for every session

## Structure

```
.
├── CLAUDE.md              # Core guidance — read by Claude at every session
├── kickoff.md             # First-run setup checklist
├── .mcp.json              # MCP server configuration
├── .claude/
│   ├── commands/          # Slash commands (prime, create-plan, implement, brain-*)
│   └── skills/            # Team-wide skills
├── brain/                 # Durable knowledge: wiki/ and raw/
├── context/               # Team info, project info, strategy, current data, decisions
├── projects/              # Sub-projects (each with their own context and outputs)
├── plans/                 # Implementation plans
├── outputs/               # Team deliverables
├── reference/             # Shared templates and reference material
└── scripts/               # Shared automation
```

## Commands

| Command | What it does |
|---------|-------------|
| `/prime` | Load context, summarize team mission and priorities, confirm readiness |
| `/create-plan [request]` | Plan before building — produces a reviewed, approved plan in `plans/` |
| `/implement [plan-path]` | Execute an approved plan step by step |
| `/brain-wiki [topic]` | Check the team's wiki for existing patterns before designing something new |
| `/brain-extract` | Capture reusable insights from the current session into `brain/raw/` |
| `/brain-summarize [scope]` | Summarize lessons from a phase or project |
| `/brain-promote [note]` | Promote a raw note into a structured wiki page |

## Maintained by

This template is maintained at [github.com/stefansilver/claude-teamOS-template](https://github.com/stefansilver/claude-teamOS-template). Update the template repo when a TeamOS pattern improves — other teams benefit.
