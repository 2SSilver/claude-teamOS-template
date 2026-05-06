# 2026-04-22 — TeamOS Kickoff Setup

**Project context:** teamme — foundation phase, initial environment setup

## What was done

Completed the full TeamOS kickoff checklist in a single session:
- Populated all `context/` files (team, project, strategy, current data)
- Set up `cs` and `cr` bash aliases via `~/.bash_aliases` (sourced from `.bashrc`)
- Configured statusline: model name + context percentage with progress bar
- Trimmed `.mcp.json` to active servers only (Perplexity + Pushover); removed GitHub and GDrive placeholders
- Reviewed all commands in `.claude/commands/` — no changes needed
- Created `CLAUDE.local.md` for personal overrides (gitignored)
- Logged first decision in `context/decisions.md`
- Removed "First time here?" line from `CLAUDE.md`

## Observations

- The kickoff checklist worked well as a linear guide — no step was confusing or needed rework
- The `~/.bash_aliases` pattern is cleaner than appending directly to `.bashrc` — bash already sources it by default, so no extra wiring needed
- Adding `cd /path/to/teamOS &&` to the aliases was the right call — the aliases are workspace-specific and should always land in the right directory
- Statusline agent handled configuration cleanly without needing manual JSON editing
- MCP cleanup (remove placeholders early) is a good habit — unconfigured servers with placeholder keys create noise and potential confusion
- `CLAUDE.local.md` is useful even if empty — creates the file so the pattern is established and ready to fill in

## Patterns noticed

- **Checklist-driven setup sessions work well with Claude** — go step by step, mark done, move to next. No need for a plan file for procedural setup work; the checklist itself is the plan.
- **Alias naming should reflect function, not structure** — `cs`/`cr` (what it does) beats `to`/`tor` (where it lives). This applies broadly: name things after their purpose.
- **Trim before you configure** — removing unused MCP servers before adding real keys keeps the config clean and avoids partial/broken states.

## Potential promote

- **Alias naming principle** — "name aliases after function, not location/structure" is a small but transferable rule. Low bar for promotion but worth flagging.
- **Checklist as plan** — for procedural/setup work, a well-structured checklist is a sufficient substitute for a formal plan file. Could be a wiki note on when to use a checklist vs. a plan.

## Open questions

- When to add GitHub PAT and GDrive credentials — depends on what gets built next
- Whether `CLAUDE.local.md` needs any content yet, or if it stays as a placeholder
- Whether the kickoff checklist itself should be updated based on anything that felt off today (nothing major, but the `to`/`tor` default naming might be worth updating in the template)
