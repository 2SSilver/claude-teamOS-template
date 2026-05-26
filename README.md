# Claude TeamOS

A structured Claude Code workspace for teams. Use this template to spin up a fully configured AI-assisted operating system for a new team, engagement, or project.

## What is TeamOS?

TeamOS is a Claude Code workspace that gives your team:

- **Shared context** — team mission, project scope, strategy, and live status that Claude reads at every session
- **Knowledge brain** — a structured system for capturing and promoting reusable insights across projects
- **Consistent commands** — `/prime`, `/create-plan`, `/implement`, `/list-skills`, and brain commands available to all team members
- **Decision log** — Claude automatically records significant decisions as they are made
- **Project structure** — a pattern for organizing sub-projects within the team

## Prerequisite

TeamOS depends on the [`superpowers`](https://github.com/anthropics/claude-plugins-official) plugin for `/create-plan` and `/implement`. Each team member running Claude Code locally installs it once at user scope:

```
/plugin marketplace add claude-plugins-official
/plugin install superpowers@claude-plugins-official
```

`kickoff.md` Step 1 walks through this.

## Quickstart

1. Click **Use this template** (or clone this repo)
2. Open `kickoff.md` and follow the steps — Step 1 installs the superpowers plugin
3. Run `/prime` in Claude Code — that's the starting point for every session

## Structure

```
.
├── CLAUDE.md              # Core guidance — read by Claude at every session
├── kickoff.md             # First-run setup checklist
├── .mcp.json              # MCP server configuration
├── .claude/
│   ├── commands/          # Slash commands (prime, list-skills, create-plan, implement, brain-*)
│   └── skills/            # Team-wide skills
├── brain/                 # Durable knowledge: wiki/ and raw/
├── context/               # Team info, project info, strategy, current data, decisions
├── projects/              # Sub-projects (each with their own context and outputs)
├── docs/superpowers/plans/   # Implementation plans (superpowers default location)
├── outputs/               # Team deliverables
├── reference/             # Shared templates and reference material
└── scripts/               # Shared automation
```

## Commands

| Command | What it does |
|---------|-------------|
| `/prime` | Load context, summarize team mission and priorities, confirm readiness |
| `/list-skills` | Print a live catalogue of every available skill (workspace, user-global, plugins) |
| `/create-plan [request]` | Plan before building — thin wrapper that invokes `superpowers:writing-plans` |
| `/implement [plan-path]` | Execute an approved plan — thin wrapper that invokes `superpowers:executing-plans` |
| `/brain-wiki [topic]` | Check the team's wiki for existing patterns before designing something new |
| `/brain-extract` | Capture reusable insights from the current session into `brain/raw/` |
| `/brain-summarize [scope]` | Summarize lessons from a phase or project |
| `/brain-promote [note]` | Promote a raw note into a structured wiki page |

## Maintained by

This template is maintained at [github.com/2SSilver/claude-teamOS-template](https://github.com/2SSilver/claude-teamOS-template). Update the template repo when a TeamOS pattern improves — other teams benefit.
