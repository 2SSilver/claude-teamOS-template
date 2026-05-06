# Plan: Keep todo.md in sync with plan lifecycle

**Created:** 2026-04-27
**Status:** Complete
**Request:** Update context files, commands (create-plan, implement) and skills (writing-plans, executing-plans) so that todo.md is updated at the plan level — automatically, without manual effort.

## Context

`context/todo.md` is the team's task board and is read by `/prime` at every session start. It falls behind because the commands and skills that create and execute plans have no instruction to touch it. A plan can be created, executed, and completed without todo.md ever reflecting the change.

The fix is to add lightweight todo.md update steps at two moments in the plan lifecycle:
- **Plan created** → add item to "In progress"
- **Plan complete** → move item to "Done"

## Approach

Add one step to each of four files — two commands and two skills. No new files, no new structure, no automation layer. The step is a simple instruction to read `context/todo.md`, find or add the relevant line, and move it.

The todo item text is derived from the plan title (the `# Plan: <Title>` heading). Priority tag defaults to `high` unless the plan title implies otherwise — Claude uses judgement.

Considered but rejected: a hook or automated script that watches plan files and updates todo.md. Too complex, adds a failure mode, and the value of lightweight human-in-the-loop is that Claude can judge which item matches which plan entry.

## Tasks

1. [x] **Update `.claude/commands/create-plan.md`**

   Add a new step 7 after the existing step 6 ("Update CLAUDE.md if the plan introduces new structure..."):

   ```
   7. Update `context/todo.md`: add the plan title as a new item under **In progress**. Use the format `- [ ] <Plan title> \`high\`` (adjust priority tag if the plan is clearly medium or low). If an equivalent item already exists in To do or In progress, move it to In progress instead of adding a duplicate.
   ```

2. [x] **Update `.claude/commands/implement.md`**

   Add a new step 8 after the existing step 7 ("Ask if there are questions about the changes"):

   ```
   8. Update `context/todo.md`: find the item matching this plan and move it to **Done** — change `- [ ]` to `- [x]` and move the line under the `## Done` section.
   ```

3. [x] **Update `projects/waowle-ui/.claude/skills/writing-plans/SKILL.md`**

   In the **Execution Handoff** section (end of file), after the offer to execute, add:

   ```
   Also update `context/todo.md`: add the plan title as a new item under **In progress**. Format: `- [ ] <Plan title> \`high\``. If an equivalent item already exists in To do or In progress, move it to In progress instead of adding a duplicate.
   ```

4. [x] **Update `projects/waowle-ui/.claude/skills/executing-plans/SKILL.md`**

   In **Step 3: Complete**, after "Summarise what was accomplished", add:

   ```
   - Update `context/todo.md`: find the item matching this plan and move it to **Done** — change `- [ ]` to `- [x]` and move the line under the `## Done` section.
   ```

## Acceptance Criteria

- Running `/create-plan` results in a new `- [ ]` item appearing in `context/todo.md` under "In progress"
- Running `/implement` on a completed plan results in that item moving to `## Done` with `[x]`
- The same behaviour applies when the `writing-plans` and `executing-plans` skills are used inside the waowle project
- No duplicate items are created when a plan maps to something already in todo.md

## Notes

- `context/todo.md` path is relative to the teamme root. Since Stefan works from the teamme root for all sessions (per 2026-04-24 decision), this path works for both root commands and project-level skills.
- Claude is expected to match plan titles to existing todo items by intent, not exact string — "Waowlee UI — M2 Power Terminal (PTY)" matches a plan titled "M2 — Power Terminal (PTY)".
- No changes to CLAUDE.md needed — this is a behaviour tweak to existing commands and skills, not new structure.
