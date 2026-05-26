# TeamOS Kickoff Checklist

Welcome to your new TeamOS. This file guides you through the initial configuration. Work through each step in order. When the team is done, run `/prime` — that is your daily starting point from here on.

Mark each step complete with `[x]` as you go.

---

## Step 1 — Install the superpowers plugin (required)

This TeamOS depends on the `superpowers` plugin for `/create-plan` and `/implement`. Install it once at user scope (each team member running Claude Code locally must install it).

- [ ] Open Claude Code in this directory
- [ ] Add the marketplace and install the plugin:
  ```
  /plugin marketplace add claude-plugins-official
  /plugin install superpowers@claude-plugins-official
  ```
- [ ] Confirm install: `/list-skills` should list `superpowers:writing-plans`, `superpowers:executing-plans`, and the other superpowers skills under the **Plugin skills** section.

> Source: https://github.com/anthropics/claude-plugins-official

---

## Step 2 — Fill in Team Context

Open each file in `context/` and replace the `<!-- TODO -->` placeholders with real content.

- [ ] `context/team-info.md` — team name, members, roles, ways of working
- [ ] `context/project-info.md` — engagement or project name, client/stakeholder, scope, timeline
- [ ] `context/strategy.md` — goals, priorities, success metrics for this quarter or phase
- [ ] `context/current-data.md` — current status, live metrics, key numbers worth tracking

Leave `context/decisions.md` as-is — Claude will populate it as decisions are made.

---

## Step 3 — Configure MCPs

Open `.mcp.json` at the repo root. Replace any `YOUR_API_KEY` placeholders with real keys.

- [ ] Review the MCP server entries in `.mcp.json`
- [ ] Add API keys for the servers the team will use
- [ ] Remove any servers the team does not need
- [ ] If adding a new server not listed, follow the format in the file

> MCP servers give Claude access to external tools (search, web scraping, calendars, etc.). Only configure what the team actually needs.

Common servers to consider:
- **Perplexity** — web-grounded search and research (`PERPLEXITY_API_KEY`)
- **GitHub** — interact with repos and issues
- **Slack** — read channels, post messages, search conversations
- **Google Drive / Notion** — access shared documents and knowledge bases

---

## Step 4 — Add Reference Material

The `reference/` folder is for shared templates, examples, and documents Claude should be able to read.

- [ ] Add any reference documents relevant to the team's work (e.g. templates, frameworks, standards)
- [ ] If the team uses a recurring output format (reports, digests, decks), add a template here
- [ ] Update `reference/README.md` (or create one) with a brief index of what's here and why

---

## Step 5 — Review and Adjust Commands

The commands in `.claude/commands/` are ready to use out of the box. Review them to understand what's available.

- [ ] Read through each `.md` file in `.claude/commands/` — they are short and self-explanatory
- [ ] Note: `/create-plan` and `/implement` are thin wrappers — they hand off to the `superpowers` plugin installed in Step 1
- [ ] If a command needs adjustment for the team's context (e.g. different context file names), edit it now
- [ ] If the team needs a custom command (e.g. a domain-specific digest or analysis), create one in `.claude/commands/`

---

## Step 6 — Install Skills (if needed)

Skills are reusable Claude behaviours packaged with instructions, scripts, and references.

- [ ] Run `/list-skills` to see everything currently available — workspace, user-global, and plugin sources
- [ ] If the team needs a domain-specific skill (e.g. a persona, a recurring analysis type), use `skill-scaffolder` to structure one in `.claude/skills/`, or use `superpowers:writing-skills` for the TDD-driven authoring methodology
- [ ] Skills placed in `.claude/skills/` at the TeamOS root are available to all projects

---

## Step 7 — Create First Project (if applicable)

If the team is working on a specific project or engagement, set it up now.

- [ ] Duplicate the starter template: `cp -r template/example-project/ projects/my-project-name/`
- [ ] Fill in `projects/<your-project>/CLAUDE.md` with project-specific guidance
- [ ] Fill in `projects/<your-project>/context/` files
- [ ] Read `projects/README.md` for the full pattern and conventions

> Not every TeamOS needs sub-projects. If the team is working on a single body of work, the root structure is sufficient.

---

## Step 8 — Set Up Shell Aliases (optional but recommended)

Shell aliases make it fast to launch a TeamOS session.

- [ ] Open `shell-aliases.md` and follow the instructions to add aliases to your shell config
- [ ] Recommended: a `to` alias (TeamOS open) that launches Claude with `/prime`
- [ ] Reload your shell: `source ~/.zshrc` (or `~/.bashrc`)

---

## Step 9 — Add Personal Overrides (optional)

If a team member has personal preferences that should not be committed to the repo (e.g. own tone preferences, personal shortcuts, local-only instructions), create a `CLAUDE.local.md` at the repo root. Claude Code loads it automatically alongside `CLAUDE.md`, and it is gitignored by default.

- [ ] Create `CLAUDE.local.md` at the repo root (optional — only if needed)
- [ ] Add any personal, non-team instructions there

---

## Step 10 — Configure Auto-Memory (optional)

Claude's auto-memory system stores session context between conversations.

- [ ] The memory directory is created automatically at `~/.claude/projects/.../memory/` on first use — no setup needed
- [ ] If the team wants to customize what Claude remembers, review the memory files after a few sessions

---

## Step 11 — Run `/prime` for the First Time

- [ ] Open Claude Code in this directory
- [ ] Run `/prime`
- [ ] Verify Claude correctly summarizes the team's mission, priorities, and context
- [ ] If anything looks wrong, go back and fix the relevant context file

---

## Step 12 — Log the First Decision

Every significant choice gets logged in `context/decisions.md`. Log one now to confirm the system is working.

- [ ] Ask Claude to log the first decision — e.g. "Log a decision: we chose X approach for Y reason"
- [ ] Verify the entry appears in `context/decisions.md` in the correct format

---

## Done

The TeamOS is configured. From here:

- **Start every session** with `/prime`
- **Plan before building** with `/create-plan [request]` (uses `superpowers:writing-plans`)
- **Execute plans** with `/implement [plan-path]` (uses `superpowers:executing-plans`)
- **Capture knowledge** with `/brain-extract` or `/brain-summarize` at the end of significant work
- **Update this file** if the kickoff process needs improving for the next team

Delete or archive this checklist once complete, or keep it as a reference for onboarding new team members.

- [ ] Ask Claude to remove the `> **First time here?** Read \`kickoff.md\` before anything else.` line from `CLAUDE.md` — it is no longer needed once setup is complete.
