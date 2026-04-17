# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

> **First time here?** Read `kickoff.md` before anything else.

---

## Writing Convention

Always use the team name (or "the team") and "Claude" in documentation. Avoid pronouns like "I", "you", "me", "my" in CLAUDE.md files — it avoids ambiguity about who is speaking.

---

## How the Team and Claude Work Together

### Planning Protocol

**Always plan before implementation:**
- Discuss strategy before writing code or making changes
- Ask clarifying questions one at a time so the team can give complete answers
- Get approval on the approach before starting
- Focus on understanding requirements and flow first

**Multi-level planning:**
- Plan at the high level (overall goals and flow)
- Then plan at the task level (specific file or feature details)
- Implement only after both levels are agreed

**Check understanding:**
- After completing each task, confirm what was done and ask if there are questions
- It is important that the team understands all changes made together

### Feedback Format

**Direct and specific:**
- Give clear, direct feedback and critiques
- No hedging or vague suggestions
- Specific examples over vague advice: "Cut argument A" not "make it shorter"
- Be opinionated and flag divergence from best practice

**Format preferences:**
- Bullet points for feedback and summaries

### Start Flow

At the start of each session, run `/prime`. Claude will:
1. Read CLAUDE.md (already loaded automatically)
2. Read all context files
3. Check for recent plans and outputs
4. Summarize the team's mission, priorities, and recent work
5. Ask what to work on

---

## Project Structure

```
.
├── CLAUDE.md              # This file — always loaded, always current
├── kickoff.md             # First-run setup checklist
├── .mcp.json              # MCP server configuration
├── .claude/
│   ├── commands/          # Slash commands (available to all projects)
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
├── projects/              # Sub-projects within this TeamOS
│   ├── README.md          # How to add and structure a project
│   └── example-project/   # Minimal example showing the pattern
├── plans/                 # Implementation plans (root-level, cross-project)
├── outputs/               # Team-level deliverables
├── reference/             # Shared templates, examples, reference material
└── scripts/               # Shared automation scripts
```

---

## Commands

Available commands are in `.claude/commands/` and work from any project within this TeamOS.

| Command | Purpose |
|---------|---------|
| `/prime` | Initialize a session by loading context, summarizing mission and priorities, confirming readiness |
| `/create-plan [request]` | Create a detailed implementation plan before doing work |
| `/implement [plan-path]` | Execute an approved plan step by step |
| `/brain-wiki [topic]` | Consult the wiki before starting a new approach or design decision |
| `/brain-extract` | Extract reusable insights from current session work into a raw note |
| `/brain-summarize [scope]` | Summarize reusable lessons from a session or project phase |
| `/brain-promote [note-path]` | Promote a raw note into a structured wiki page |

---

## Brain Behavior

The `brain/` directory is the team's durable knowledge layer — shared across all projects.

**Before designing a new approach** for a non-trivial problem, check `brain/wiki/` for relevant patterns. Use `/brain-wiki <topic>` to do this explicitly. If a matching page exists, apply it as the starting point.

**After significant work** — end of a project phase, a substantial deliverable, or a session with clear lessons — Claude will offer to run `/brain-extract` or `/brain-summarize` to capture what was learned.

```
session work → brain/raw/ → (promote when pattern is clear) → brain/wiki/
```

**Promotion criteria** — promote a raw note to wiki when:
- The same pattern has appeared in two or more projects
- The insight would change how to approach a new problem
- The lesson took significant effort to learn and would be expensive to relearn

---

## Decision Logging

Every project (and the TeamOS root) maintains a `context/decisions.md` file. Claude appends entries inline as decisions are made — no manual action required. `/prime` reads this file at session start.

**Write a decision entry when:**
- An approach or strategy is chosen over alternatives
- A structural, architectural, or scoping choice is made
- A process or workflow decision is agreed
- An explicit "we'll go with X" moment occurs with meaningful reasoning

**Do not capture:** minor implementation details, reversible one-line choices, things already fully described in a plan.

**Format** — append newest-first under `## Decisions` in `context/decisions.md`:

```
**YYYY-MM-DD — [Short decision title]**
- **Decision:** One sentence stating what was decided.
- **Reason:** One or two sentences on why.
```

TeamOS-level decisions go into the root `context/decisions.md`. Project-level decisions go into the project's own `context/decisions.md`.

---

## Memory

This TeamOS uses a single memory layer:

**Auto-memory** — session continuity across conversations. Stored at `~/.claude/projects/.../memory/`. Claude reads and writes this automatically to maintain context between sessions.

> **Optional (personal use only):** [claude-mem](https://github.com/thedotmack/claude-mem) adds a semantic observation layer (SQLite + Chroma, searchable via MCP). It is AGPL-3.0 licensed and routes observations through the Claude API — review carefully before enabling in a team or enterprise context.

---

## Workspace Maintenance Rule

**Whenever Claude makes changes to this workspace, Claude must consider whether CLAUDE.md needs updating.**

After any change — adding commands, scripts, workflows, new structure — ask:
1. Does this add functionality the team needs to know about?
2. Does it modify the structure documented above?
3. Should a new command or skill be listed?

If yes to any, update the relevant sections. This file must always reflect the current state of the workspace.
