# Plan: Create consulting project

**Created:** 2026-04-22
**Status:** Complete
**Request:** Create a new sub-project called "consulting" by copying the project template.

## Context

teamme uses a projects/ directory for distinct bodies of work with their own context, stakeholders, and deliverables. A consulting project needs its own space to track context, decisions, plans, and outputs separately from the root TeamOS workspace.

## Approach

Copy `template/example-project/` to `projects/consulting/`, then register it in `projects/README.md`. Context files are left as template stubs — filling them in is a follow-up TODO.

## Tasks

1. [x] Copy template: `cp -r template/example-project/ projects/consulting/`
2. [x] Update `projects/README.md` — add consulting to the current projects list
3. [x] Add TODO note in `projects/consulting/context/project-info.md` reminding Stefan to fill in project details (scope, stakeholders, goals)
4. [x] Verify directory structure matches the expected project layout

## Acceptance Criteria

- `projects/consulting/` exists with full template structure
- `projects/README.md` lists consulting as a current project
- Context files exist as stubs with a visible TODO prompt
- No template placeholder content left in CLAUDE.md without a TODO marker

## Notes

- Context files intentionally left as stubs — filling them in is deferred
- Discord integration is not configured; no project-specific skills needed yet
