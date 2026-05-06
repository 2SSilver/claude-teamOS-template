---
title: Check gitignore immediately after creating any config file with credentials
---

# Check gitignore immediately after creating any config file with credentials

## What it is

Any time a new config file is created that contains API keys, tokens, or credentials, check whether it is covered by `.gitignore` before the next `git add`. Tools like claudeclaw, MCP servers, and OAuth flows routinely write secrets to files that are not gitignored by default. A single `git add .` can expose them permanently in history.

## When to apply

- After installing any plugin, integration, or tool that writes a config file
- After generating any file containing tokens, passwords, or keys
- Before the first commit following a new integration

## When not to apply

- Files that are already clearly gitignored by pattern (e.g. `.env`, `*.pem`)
- Files in directories already covered by an existing gitignore rule

## How to check

```bash
git check-ignore -v <path/to/config/file>
# "NOT IGNORED" means add it manually
```

Then add the directory or file to `.gitignore` and verify with `git status`.

## Origin

2026-04-22 — caught during claudeclaw setup: `.claude/claudeclaw/settings.json` contained the Telegram bot token and was not gitignored out of the box.
