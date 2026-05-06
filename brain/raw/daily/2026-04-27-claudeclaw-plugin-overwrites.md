# 2026-04-27 — claudeclaw plugin updates overwrite customised files

**Project context:** teamme / Remote Claude Code setup — claudeclaw daemon management

## What was done

Restarted the claudeclaw daemon after it was found dead. Noticed that statusline.cjs had reverted to the original ClaudeClaw-branded version, wiping prior customisations (rename to "Waowlee", emoji removal) that had been done in a previous session.

## Observations

- `.claude/statusline.cjs` is an untracked file owned by the claudeclaw plugin install. When the plugin updates or reinstalls, it overwrites the file with no warning and no diff.
- The plan from 2026-04-23 was marked Complete but all tasks were unchecked — the changes were either never written to disk or were overwritten before the session ended.
- Git offers no protection here because the file is untracked (and probably .gitignored by the plugin).

## Patterns noticed

- Plugin-managed files are a trap for customisation: the plugin treats them as its own, so any edits are ephemeral unless you take explicit ownership (commit the file, patch it post-install, or move the customisation somewhere the plugin won't touch).
- The same risk applies to any file dropped into `.claude/` by a plugin: jobs, settings, scripts, statusline. Always check if a file is plugin-managed before customising it.
- "Plan marked Complete but tasks unchecked" is a smell that the session ended before implementation was verified — the completion status was premature.

## Potential promote

- **Plugin-managed files — customisation survival pattern**: if you want to customise a file owned by a plugin, either (a) commit it to git so you can restore it after updates, or (b) move the customisation into a wrapper/override file the plugin doesn't touch, then reference that from the plugin's entry point. Worth promoting as a wiki pattern — likely to recur with any plugin-heavy setup.

## Open questions

- Does claudeclaw have a hook or post-install step where custom patches could be applied automatically?
- Should statusline.cjs be added to git (committed) so updates can be tracked and conflicts surfaced rather than silently overwritten?
- Is there a way to pin the claudeclaw plugin version to prevent unexpected overwrites during updates?
