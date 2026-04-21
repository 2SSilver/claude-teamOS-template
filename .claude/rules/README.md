# Rules

Rules are always-on instructions that Claude loads automatically at the start of every session. Unlike commands (invoked explicitly) or skills (triggered by context), rules are permanent background context — they shape Claude's behaviour in every interaction without any invocation needed.

## Where rules live

| Location | Scope | Use for |
|----------|-------|---------|
| `.claude/rules/` (this folder) | All projects in this TeamOS | Team-wide persistent behaviour |
| `projects/<name>/.claude/rules/` | That project only | Project-specific persistent behaviour |

## How to add a rule

1. Create a `.md` file: `.claude/rules/<rule-name>.md`
2. Write the rule content — instructions that should always be active
3. Reference it in CLAUDE.md with `@.claude/rules/<rule-name>.md` to ensure it is loaded

## Naming conventions

- Lowercase, hyphens only, max 64 characters
- Name should describe the behaviour the rule governs
- Examples: `decisions`, `tone`, `output-format`

## Rules vs commands vs skills

| Type | Triggered by | Lives in | Use for |
|------|-------------|----------|---------|
| Rule | Always loaded automatically | `.claude/rules/` | Persistent background instructions |
| Command | Explicit `/command` invocation | `.claude/commands/` | On-demand workflows |
| Skill | Claude matching context automatically | `.claude/skills/` | Domain-specific behaviours |

## Current rules

| Rule | Purpose |
|------|---------|
| `decisions.md` | Instructs Claude to append decision entries to `context/decisions.md` during sessions |
