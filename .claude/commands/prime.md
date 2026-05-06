Initialize this session by loading full workspace context.

## Steps

1. Read CLAUDE.md (already loaded automatically — confirm understanding)
2. Read all context files:
   - `context/team-info.md`
   - `context/project-info.md`
   - `context/strategy.md`
   - `context/current-data.md`
   - `context/decisions.md` (if it exists — skip silently if not present)
   - `context/todo.md` (if it exists — skip silently if not present)
3. Check for any existing plans in `plans/` and outputs in `outputs/` to understand recent work
4. Kanban sync — verify the Waowle UI kanban reflects the current `context/todo.md`:
   - Run `curl -s http://localhost:8000/api/tasks 2>/dev/null` to check the backend
   - If the backend responds: confirm task count matches todo.md; note any discrepancy
   - If the backend is unreachable: note it silently (don't treat as a blocker)
   - Either way, present todos organized by kanban column in the summary (see format below)
5. Summarize understanding in this format:

**Team mission:** [one sentence]
**Current priorities:** [bullet list]
**Kanban state:**
- To do: [tasks] (or "empty")
- In progress: [tasks] (or "empty")
- Review: [tasks] (or "empty")
- Done (recent): [last 3 done items, or "empty"]
**Recent work:** [any plans or outputs found, or "None yet"]

6. Confirm readiness to assist and ask what to work on today
