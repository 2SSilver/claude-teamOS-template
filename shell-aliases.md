# Shell Aliases

Suggested shell aliases for working with this TeamOS. Add these to your `~/.zshrc` or `~/.bashrc` and run `source ~/.zshrc` to activate.

## TeamOS Aliases

```bash
# cs — open this TeamOS with /prime (safe mode, permission prompts)
alias cs='cd /path/to/your-teamOS && claude "/prime"'

# cr — open this TeamOS with /prime (reckless mode, no permission prompts)
alias cr='cd /path/to/your-teamOS && claude --dangerously-skip-permissions "/prime"'
```

> **TODO:** Replace `/path/to/your-teamOS` with the actual path to this repo.

## Conventions

- `cs` = **C**laude **S**afe (with permission prompts)
- `cr` = **C**laude **R**eckless (autonomous mode, no prompts)

Use reckless mode (`cr`) when running well-understood, repetitive tasks. Use safe mode (`cs`) for exploratory or structural work.

## Per-Project Aliases

Each project in `projects/` has its own `shell-aliases.md` with project-specific shortcuts. Follow the same pattern there.
