# Projects

Each sub-project within this TeamOS has its own folder here. Projects inherit all global commands and skills but can add their own.

## When to create a sub-project

Create a sub-project when:
- The work has distinct context, stakeholders, or deliverables from other work
- A specific domain persona or skill is needed (e.g. a security expert, a domain analyst)
- The work will produce its own set of outputs, plans, and references

A single body of tightly related work does not need sub-projects — the TeamOS root is sufficient.

## How to add a project

1. Copy `example-project/` and rename it: `cp -r example-project/ my-project-name/`
2. Fill in `my-project-name/CLAUDE.md` with project-specific guidance
3. Fill in `my-project-name/context/` files
4. Add the project to the list below
5. If the project needs a domain-specific skill, create it in `my-project-name/.claude/skills/`

## Project structure

```
projects/<project-name>/
├── CLAUDE.md              # Project-specific guidance for Claude
├── context/
│   ├── project-info.md    # What this project is, scope, stakeholders
│   ├── strategy.md        # Project goals and priorities
│   ├── current-data.md    # Live status, metrics, blockers
│   └── decisions.md       # Project-level decision log
├── .claude/
│   └── skills/            # Project-specific skills
├── plans/                 # Project plans
├── outputs/               # Project deliverables
├── reference/             # Project-specific templates and references
├── scripts/               # Project-specific automation
└── shell-aliases.md       # Shell shortcuts for working in this project
```

## Building up a project over time

A project starts minimal. Build it up as the work develops:

- **Early:** fill in context files, log the first decisions, set up any needed skills
- **During:** use `/create-plan` before significant work, keep `current-data.md` updated, extract insights to `brain/raw/` after phases
- **End of phase:** run `/brain-summarize projects/<name>` to capture lessons, promote strong patterns to `brain/wiki/`

## Current projects

<!-- Add entries here as projects are created. -->
