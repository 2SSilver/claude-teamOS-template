# Skills

Skills are reusable Claude behaviours packaged with instructions, scripts, and reference material. They extend Claude's capabilities for domain-specific or recurring tasks.

## Where skills live

| Location | Scope | Use for |
|----------|-------|---------|
| `.claude/skills/` (this folder) | All projects in this TeamOS | Team-wide capabilities (e.g. a shared persona, recurring analysis type) |
| `projects/<name>/.claude/skills/` | That project only | Project-specific capabilities |

## How to add a skill

1. Create a directory: `.claude/skills/<skill-name>/`
2. Add a `SKILL.md` file with:
   - Frontmatter: `name`, `description`, `allowed-tools` (if needed)
   - Trigger conditions — when Claude should use this skill
   - Instructions — what the skill does and how
3. Optionally add: `reference.md`, `examples.md`, `scripts/`, `templates/`

## Naming conventions

- Lowercase, hyphens only, max 64 characters
- Name should describe what the skill does, not what it is
- Examples: `interview-prep`, `okr-advisor`, `mcp-integration`

## Planning a new skill

Use `/create-plan` to plan the skill before creating it. Skills with scripts or complex logic benefit from a plan to avoid rework.

## Current skills

<!-- Add entries here as skills are added to the team. -->
