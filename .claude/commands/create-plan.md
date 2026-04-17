Create a detailed implementation plan for the following request: $ARGUMENTS

## Steps

1. Read CLAUDE.md and context files if not already loaded this session
2. Ask clarifying questions one at a time until the request is fully understood — do not proceed until the approach is confirmed
3. Create a plan document at `plans/YYYY-MM-DD-<short-description>.md` using today's date
4. The plan document must follow this structure:

```markdown
# Plan: <Title>

**Created:** YYYY-MM-DD
**Status:** Draft | Approved | In Progress | Complete
**Request:** <What was asked for>

## Context
Why this plan exists and what problem it solves.

## Approach
High-level description of the chosen approach and any alternatives considered.

## Tasks
Numbered list of concrete steps to implement. Each task should be specific enough that Claude can execute it without ambiguity.

1. [ ] Task description
2. [ ] Task description
...

## Acceptance Criteria
How the team and Claude will know this is done.

## Notes
Any assumptions, risks, or open questions.
```

5. Present the plan for review before marking it as Approved
6. Update CLAUDE.md if the plan introduces new structure, commands, or workflows
