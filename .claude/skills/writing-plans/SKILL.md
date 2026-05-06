---
name: writing-plans
description: Use when you have a spec or requirements for a multi-step task, before touching code
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# Writing Plans

## Overview

Write comprehensive implementation plans that give an engineer everything they need: which files to touch, code, tests to check, how to verify. Bite-sized tasks. DRY. YAGNI. TDD. Frequent commits.

Assume the implementer is a skilled developer but knows almost nothing about the toolset or problem domain.

**Announce at start:** "I'm using the writing-plans skill to create the implementation plan."

**Save plans to:** `plans/YYYY-MM-DD-<feature-name>.md`

---

## Scope Check

If the spec covers multiple independent subsystems, suggest breaking into separate plans — one per subsystem. Each plan should produce working, testable software on its own.

---

## File Structure

Before defining tasks, map out which files will be created or modified and what each is responsible for.

- Design units with clear boundaries and well-defined interfaces — one responsibility per file
- Files that change together should live together — split by responsibility, not technical layer
- In existing codebases follow established patterns; include a split only if a file has grown unwieldy

---

## Bite-Sized Task Granularity

**Each step is one action (2–5 minutes):**
- "Write the failing test" — step
- "Run it to confirm it fails" — step
- "Write minimal code to make it pass" — step
- "Run tests and confirm they pass" — step
- "Commit" — step

---

## Plan Document Format

Every plan must use this structure:

```markdown
# Plan: <Title>

**Created:** YYYY-MM-DD
**Status:** Draft
**Request:** <What was asked for>

## Context
Why this plan exists and what problem it solves.

## Approach
High-level description of the chosen approach and any alternatives considered.

## Tasks

1. [ ] Task description
2. [ ] Task description
...

## Acceptance Criteria
How to know this is done.

## Notes
Assumptions, risks, open questions.
```

---

## Task Structure

````markdown
### Task N: [Component Name]

**Files:**
- Create: `exact/path/to/file.py`
- Modify: `exact/path/to/existing.py:123-145`
- Test: `backend/tests/exact/path/to/test_file.py`

- [ ] **Step 1: Write the failing test**

```python
def test_specific_behavior():
    result = function(input)
    assert result == expected
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest backend/tests/path/test_file.py::test_name -v`
Expected: FAIL with "function not defined"

- [ ] **Step 3: Write minimal implementation**

```python
def function(input):
    return expected
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pytest backend/tests/path/test_file.py::test_name -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add backend/tests/path/test_file.py backend/src/path/file.py
git commit -m "feat: add specific feature"
```
````

---

## No Placeholders

Every step must contain what the engineer actually needs. These are plan failures — never write them:
- "TBD", "TODO", "implement later", "fill in details"
- "Add appropriate error handling" / "add validation" / "handle edge cases"
- "Write tests for the above" (without actual test code)
- "Similar to Task N" (repeat the code — engineer may read tasks out of order)
- Steps describing what to do without showing how (code blocks required for code steps)
- References to types, functions, or methods not defined in any task

---

## Self-Review

After writing the complete plan, check it against the spec with fresh eyes:

1. **Spec coverage:** Can you point to a task for each requirement? List any gaps.
2. **Placeholder scan:** Search for any patterns from the No Placeholders section above. Fix them.
3. **Type consistency:** Do method signatures and property names match across tasks?
4. **Documentation coverage:** Is documentation such as architecture, product and context tasked to be updated.

Fix issues inline. If a requirement has no task, add the task.

---

## Execution Handoff

After saving the plan, offer:

> "Plan saved to `plans/<filename>.md`. Ready to execute — use the `executing-plans` skill to implement task-by-task, or ask to run it inline here."

Also update `context/todo.md`: add the plan title as a new item under **In progress**. Format: `- [ ] <Plan title> \`high\``. If an equivalent item already exists in To do or In progress, move it to In progress instead of adding a duplicate.

