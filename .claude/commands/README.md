# Commands

Commands are slash-invokable instructions that Claude executes on demand. They are distinct from skills (triggered automatically by context) and rules (always-on background context). A command is the right pattern for explicit, one-shot workflows that a team member deliberately initiates.

## Where commands live

| Location | Scope | Use for |
|----------|-------|---------|
| `.claude/commands/` (this folder) | All projects in this TeamOS | Team-wide workflows available everywhere |
| `projects/<name>/.claude/commands/` | That project only | Project-specific workflows |

## How to add a command

1. Create a `.md` file: `.claude/commands/<command-name>.md`
2. The filename becomes the slash command: `create-plan.md` → `/create-plan`
3. Write the command body — steps Claude should follow, context to read, output format
4. Update CLAUDE.md's Commands table to document it

## Naming conventions

- Lowercase, hyphens only, max 64 characters
- Name should describe what the command does
- Examples: `create-plan`, `prime`, `brain-extract`

## Commands vs skills vs rules

| Type | Triggered by | Lives in | Use for |
|------|-------------|----------|---------|
| Command | Explicit `/command` invocation | `.claude/commands/` | On-demand workflows |
| Skill | Claude matching context automatically | `.claude/skills/` | Domain-specific behaviours |
| Rule | Always loaded automatically | `.claude/rules/` | Persistent background instructions |

## Current commands

| Command | Purpose |
|---------|---------|
| `/prime` | Initialize a session — load context, summarize mission and priorities, confirm readiness |
| `/create-plan` | Create a detailed implementation plan before doing work |
| `/implement` | Execute an approved plan step by step |
| `/brain-wiki` | Consult the wiki before starting a new approach or design decision |
| `/brain-extract` | Extract reusable insights from current session work into a raw note |
| `/brain-summarize` | Summarize reusable lessons from a session or project phase |
| `/brain-promote` | Promote a raw note into a structured wiki page |
