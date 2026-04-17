Execute the implementation plan at: $ARGUMENTS

## Steps

1. Read the plan file at the provided path
2. Verify the plan status is "Approved" — if still "Draft", ask for review and approval before proceeding
3. Update the plan status to "In Progress"
4. Execute each task in order:
   - Mark the task as in progress in the plan file
   - Perform the work described
   - Mark the task as complete with `[x]`
   - After each task, briefly confirm what was done
5. When all tasks are complete:
   - Update the plan status to "Complete"
   - Verify work against the acceptance criteria listed in the plan
   - Summarize what was accomplished
6. Update CLAUDE.md if any structural changes were made
7. Ask if there are questions about the changes
