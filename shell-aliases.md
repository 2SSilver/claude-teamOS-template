# Shell Aliases

Suggested shell aliases for working with this TeamOS. Add these to your `~/.zshrc` or `~/.bashrc` and run `source ~/.zshrc` to activate.

## TeamOS Aliases

```bash
# to — open this TeamOS with /prime (safe mode, permission prompts)
alias to='cd /path/to/your-teamOS && claude "/prime"'

# tor — open this TeamOS with /prime (autonomous mode, no permission prompts)
alias tor='cd /path/to/your-teamOS && claude --dangerously-skip-permissions "/prime"'
```

> **TODO:** Replace `/path/to/your-teamOS` with the actual path to this repo.

## Conventions

- `to` = **T**eam**O**S open
- `tor` = **T**eam**O**S open, **r**eckless (autonomous mode)

Use autonomous mode (`tor`) when running well-understood, repetitive tasks. Use safe mode (`to`) for exploratory or structural work.

## Per-Project Aliases

Each project in `projects/` has its own `shell-aliases.md` with project-specific shortcuts. Follow the same pattern there.
