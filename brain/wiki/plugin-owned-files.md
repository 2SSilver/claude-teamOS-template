# Plugin-owned files: customisations are overwritten on update

## What it is

Files dropped into a project by a plugin installer are owned by the plugin. On update or reinstall, the plugin overwrites them with no warning and no diff. Any manual edits to those files are silently lost. Git offers no protection if the file is untracked or .gitignored by the plugin.

## When to apply

Before customising any file that was created by a plugin (e.g. `.claude/statusline.cjs`, `.claude/claudeclaw/settings.json`): check whether the plugin treats it as its own. If yes, take explicit ownership before editing.

Two safe strategies:
1. **Commit the file to git** — makes overwrites visible as a conflict or diff rather than silent loss. Restore from git after updates.
2. **Move customisation out of the plugin's reach** — put your logic in a wrapper or override file the plugin doesn't touch; reference it from the plugin's entry point.

## When not to apply

Plugin config files that are explicitly documented as user-editable (and where the plugin merges rather than overwrites) are safe to edit in place — but verify the merge behaviour first.

## Origin

claudeclaw daemon restart (2026-04-27): statusline.cjs customisations (rename, emoji removal) were lost after a plugin update silently overwrote the file.
