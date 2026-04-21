# TeamOS Kickoff Checklist

Welcome to your new TeamOS. This file guides you through the initial configuration. Work through each step in order. When you are done, run `/prime` — that is your daily starting point from here on.

Mark each step complete with `[x]` as you go.

---

## Step 1 — Fill in Team Context

Open each file in `context/` and replace the `<!-- TODO -->` placeholders with real content.

- [ ] `context/team-info.md` — team name, members, roles, ways of working
- [ ] `context/project-info.md` — engagement or project name, client/stakeholder, scope, timeline
- [ ] `context/strategy.md` — goals, priorities, success metrics for this quarter or phase
- [ ] `context/current-data.md` — current status, live metrics, key numbers worth tracking

Leave `context/decisions.md` as-is — Claude will populate it as decisions are made.

---

## Step 2 — Configure MCPs

Open `.mcp.json` at the repo root. Replace any `YOUR_API_KEY` placeholders with real keys.

- [ ] Review the MCP server entries in `.mcp.json`
- [ ] Add API keys for the servers the team will use
- [ ] Remove any servers the team does not need
- [ ] If adding a new server not listed, follow the format in the file

> MCP servers give Claude access to external tools (search, web scraping, calendars, etc.). Only configure what the team actually needs.

Common servers to consider:
- **Perplexity** — web-grounded search and research (`PERPLEXITY_API_KEY`)
- **Firecrawl** — scrape web pages and documents (`FIRECRAWL_API_KEY`)
- **GitHub** — interact with repos and issues
- **Linear / Jira** — task and issue tracking

---

## Step 3 — Add Reference Material

The `reference/` folder is for shared templates, examples, and documents Claude should be able to read.

- [ ] Add any reference documents relevant to the team's work (e.g. templates, frameworks, standards)
- [ ] If the team uses a recurring output format (reports, digests, decks), add a template here
- [ ] Update `reference/README.md` (or create one) with a brief index of what's here and why

---

## Step 4 — Review and Adjust Commands

The commands in `.claude/commands/` are ready to use out of the box. Review them to understand what's available.

- [ ] Read through each `.md` file in `.claude/commands/` — they are short and self-explanatory
- [ ] If a command needs adjustment for the team's context (e.g. different context file names), edit it now
- [ ] If the team needs a custom command (e.g. a domain-specific digest or analysis), create one in `.claude/commands/`

---

## Step 5 — Install Skills (if needed)

Skills are reusable Claude behaviours packaged with instructions, scripts, and references.

- [ ] Check if any PAI-wide skills apply (e.g. `pptx` for presentation work)
- [ ] If the team needs a domain-specific skill (e.g. a persona, a recurring analysis type), create one in `.claude/skills/`
- [ ] Skills placed in `.claude/skills/` at the TeamOS root are available to all projects

> Use `/create-plan` to plan a new skill, then implement it. Or use the `skill-writer` skill if available.

---

## Step 6 — Create First Project (if applicable)

If the team is working on a specific project or engagement, set it up now.

- [ ] Duplicate the starter template: `cp -r template/example-project/ projects/my-project-name/`
- [ ] Fill in `projects/<your-project>/CLAUDE.md` with project-specific guidance
- [ ] Fill in `projects/<your-project>/context/` files
- [ ] Read `projects/README.md` for the full pattern and conventions

> Not every TeamOS needs sub-projects. If the team is working on a single body of work, the root structure is sufficient.

---

## Step 7 — Set Up Shell Aliases (optional but recommended)

Shell aliases make it fast to launch a TeamOS session.

- [ ] Open `shell-aliases.md` and follow the instructions to add aliases to your shell config
- [ ] Recommended: a `to` alias (TeamOS open) that launches Claude with `/prime`
- [ ] Reload your shell: `source ~/.zshrc` (or `~/.bashrc`)

---

## Step 8 — Add Personal Overrides (optional)

If you have personal preferences that should not be committed to the repo (e.g. your own tone preferences, personal shortcuts, local-only instructions), create a `CLAUDE.local.md` at the repo root. Claude Code loads it automatically alongside `CLAUDE.md`, and it is gitignored by default.

- [ ] Create `CLAUDE.local.md` at the repo root (optional — only if needed)
- [ ] Add any personal, non-team instructions there

---

## Step 9 — Configure Auto-Memory (optional)

Claude's auto-memory system stores session context between conversations.

- [ ] The memory directory is created automatically at `~/.claude/projects/.../memory/` on first use — no setup needed
- [ ] If the team wants to customize what Claude remembers, review the memory files after a few sessions

> For personal use: [claude-mem](https://github.com/thedotmack/claude-mem) adds a semantic observation layer. It is AGPL-3.0 licensed and routes data through the Claude API. Review carefully before enabling in a team or enterprise context.

---

## Step 10 — Run `/prime` for the First Time

- [ ] Open Claude Code in this directory
- [ ] Run `/prime`
- [ ] Verify Claude correctly summarizes the team's mission, priorities, and context
- [ ] If anything looks wrong, go back and fix the relevant context file

---

## Step 11 — Log the First Decision

Every significant choice gets logged in `context/decisions.md`. Log one now to confirm the system is working.

- [ ] Ask Claude to log your first decision — e.g. "Log a decision: we chose X approach for Y reason"
- [ ] Verify the entry appears in `context/decisions.md` in the correct format

---

## Done

The TeamOS is configured. From here:

- **Start every session** with `/prime`
- **Plan before building** with `/create-plan [request]`
- **Execute plans** with `/implement [plan-path]`
- **Capture knowledge** with `/brain-extract` or `/brain-summarize` at the end of significant work
- **Update this file** if the kickoff process needs improving for the next team

Delete or archive this checklist once complete, or keep it as a reference for onboarding new team members.
