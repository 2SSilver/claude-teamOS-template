---
name: executing-plans
description: Use when you have a written implementation plan to execute task-by-task with review checkpoints
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# Executing Plans

## Overview

Load plan, verify it is approved, execute all tasks in order, mark progress as you go, report when complete.

**Announce at start:** "I'm using the executing-plans skill to implement this plan."

---

## The Process

### Step 1: Load and Review

1. Read the plan file
2. Verify plan status is "Approved" — if still "Draft", ask the user to review and approve before proceeding
3. Update the plan status to "In Progress"
4. Review critically — identify questions or concerns before starting
5. If concerns: raise them before executing. If none: proceed.

### Step 2: Execute Tasks

For each task:
1. Mark task as in progress in the plan file
2. Follow each step exactly as written (plans have bite-sized steps)
3. Run all verifications as specified
4. Mark task complete with `[x]`
5. Briefly confirm what was done

### Step 3: Complete

When all tasks are done and verified:
- Update the plan status to "Complete"
- Verify work against the acceptance criteria in the plan
- Summarise what was accomplished
- Update `context/todo.md`: find the item matching this plan and move it to **Done** — change `- [ ]` to `- [x]` and move the line under the `## Done` section.
- Use the `finishing-a-development-branch` skill to wrap up (tests, lint, PR)

---

## When to Stop and Ask

**Stop immediately when:**
- Hit a blocker (missing dependency, failing test, unclear instruction)
- Plan has critical gaps preventing progress
- A verification fails repeatedly
- You don't understand an instruction

Ask for clarification rather than guessing. Do not force through blockers.

---

## When to Revisit Earlier Steps

Return to Step 1 (review) when:
- The plan is updated based on your feedback
- Fundamental approach needs rethinking

---

## Remember

- Verify plan is "Approved" before starting
- Mark tasks in progress, then complete — never skip ahead
- Follow steps exactly — don't improvise
- Stop when blocked, don't guess
- Never start implementation on main/master without explicit consent

---

## Related Skills

- `writing-plans` — creates the plan this skill executes
- `finishing-a-development-branch` — completes the branch after all tasks done
- `using-git-worktrees` — set up an isolated workspace before starting
