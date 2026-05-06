# Skills

Skills are reusable Claude behaviours packaged with instructions, scripts, and reference material. They extend Claude's capabilities for domain-specific or recurring tasks.

## Where skills live

| Location | Scope | Use for |
|----------|-------|---------|
| `.claude/skills/` (this folder) | All projects in this TeamOS | Team-wide capabilities (e.g. a shared persona, recurring analysis type) |
| `projects/<name>/.claude/skills/` | That project only | Project-specific capabilities |

## Skill patterns

**Single-file skill** — one SKILL.md, everything inline. Right for focused, single-mode capabilities under ~150 lines.

**Multi-file workflow skill** — lean SKILL.md that routes to sub-files loaded on demand. Right when:
- The skill has 3+ distinct modes (e.g. review, guided sprint, work-backwards)
- Any single mode would need >30 lines of instructions to be high quality
- Rich reference material or worked examples belong with the workflow, not always loaded

**On-demand reading pattern** (not `@`-imports):
- `@`-imports pre-load everything at parse time — same as one big file, no benefit
- On-demand: SKILL.md instructs Claude to `read` a specific sub-file when a mode is triggered
- Example routing instruction: *"When running the Guided Sprint, read `guided-sprint.md` in this directory for detailed step-by-step instructions."*
- This keeps SKILL.md lean and loads rich detail only when needed

## How to add a skill

1. Create a directory: `.claude/skills/<skill-name>/`
2. Add a `SKILL.md` file with:
   - Frontmatter: `name`, `description`, `allowed-tools` (if needed)
   - Trigger conditions — when Claude should use this skill
   - Instructions — what the skill does and how
3. Optionally add: `reference.md`, `examples.md`, `scripts/`, `templates/`
4. For complex multi-mode skills, use the multi-file pattern above — plan with `/create-plan` first

## Naming conventions

- Lowercase, hyphens only, max 64 characters
- Name should describe what the skill does, not what it is
- Examples: `okr-advisor`, `mcp-integration`, `interview-prep`

## Current skills

### Domain

| Skill | Trigger |
|-------|---------|
| `product-coach` | Product strategy, OKRs, discovery, delivery, roadmaps, prioritisation, team dynamics |
| `pptx` | Any time a `.pptx` file is involved — creating, reading, editing, combining, or extracting content |

### Meta / tooling

| Skill | Trigger |
|-------|---------|
| `skill-writer` | Creating a new skill in this workspace — guides through SKILL.md structure and frontmatter |
| `writing-skills` | Creating or editing skills using the TDD-for-documentation methodology |

### Planning & execution

| Skill | Trigger |
|-------|---------|
| `writing-plans` | Writing a multi-step implementation plan from a spec or request |
| `executing-plans` | Executing an approved implementation plan task-by-task |
| `verification-before-completion` | Before marking any task or plan step complete |

### Development workflow

| Skill | Trigger |
|-------|---------|
| `brainstorming` | Before any creative work — features, components, new functionality |
| `test-driven-development` | When implementing any feature or bugfix, before writing implementation code |
| `systematic-debugging` | When encountering any bug, test failure, or unexpected behaviour |
| `subagent-driven-development` | When executing plans with independent tasks using subagents |
| `dispatching-parallel-agents` | When 2+ independent tasks can be worked on in parallel |
| `using-git-worktrees` | When starting feature work that needs isolation from the current workspace |

### Code review & branching

| Skill | Trigger |
|-------|---------|
| `requesting-code-review` | After completing tasks or features, before merging |
| `receiving-code-review` | When receiving code review feedback before implementing suggestions |
| `finishing-a-development-branch` | When implementation is complete and ready to merge or PR |
