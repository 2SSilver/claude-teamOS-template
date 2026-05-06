# Plan: Product Coach Skill

**Created:** 2026-05-05
**Status:** Complete
**Request:** A strong, direct, guiding product coach skill drawing on Teresa Torres, Pawel Huryn, Marty Cagan, Tim Herbig, Ant Murphy, and David Pereira. Strong in OKRs, product management, discovery, delivery, and execution flow.

## Context

Stefan wants a product coaching presence available in every session — not a reference document, but an active coach that asks probing questions, guides through frameworks, challenges weak thinking, and pushes toward clarity and action. The coach should feel like a senior product advisor: direct, opinionated, and specific. It should know *when* to apply which framework and *why*, rather than dumping information on demand.

The six thinkers each contribute a distinct lens:
- **Teresa Torres** — Discovery habits, OST, weekly interviewing, assumption testing
- **Marty Cagan** — Empowered teams, discovery vs delivery, PM as CEO, outcomes over output
- **Tim Herbig** — Strategy → OKRs → Discovery loop (Progress Wheel), Real vs Alibi Progress
- **Ant Murphy** — Dual-track delivery, going deep (JTBD), strategy as collaborative and messy
- **David Pereira** — Pragmatism over dogma, simplicity, UnTrapping from process theater
- **Pawel Huryn** — Strategy Canvas (Winning Aspiration, Playing Field, Winning Moves, Can't/Won't test), risk-first thinking (value/usability/feasibility/ethical), ICE prioritisation

## Approach

Build a single skill file at `.claude/skills/product-coach.md` (teamme-level, available across all projects within this workspace). The skill:

1. **Activates** when Stefan discusses product problems, strategy, OKRs, discovery, delivery, roadmaps, prioritisation, or team dynamics — and when Stefan explicitly invokes it
2. **Coaches, not informs** — leads with a diagnostic question before giving frameworks; pushes back on weak framing; names the trap the team is in
3. **Is direct and opinionated** — says "That's an output, not an outcome" not "Consider whether this might be output-framed"
4. **Draws from the right thinker for the right problem** — OST for discovery, Progress Wheel for strategy-OKR gaps, Strategy Canvas for strategic coherence, Dual-Track for delivery planning
5. **Ends every coaching exchange with a forcing question** — something Stefan must answer before moving forward

Alternative considered: separate skill files per domain (OKRs, discovery, delivery). Rejected — the power of these frameworks is in how they connect; a single coach that understands the whole system is more valuable than siloed references.

## Tasks

1. [ ] Write the skill file at `.claude/skills/product-coach.md` with:
   - Trigger conditions (topic keywords and explicit invocation)
   - Coaching persona and voice (direct, guiding, opinionated, Socratic when needed)
   - Framework library organised by domain: Discovery, Strategy & OKRs, Delivery & Execution, Team & PM Craft
   - Coaching protocols for each domain (diagnostic question → framework → forcing question)
   - Key questions bank (one section per thinker, synthesised into coach voice)
   - Traps library — named failure modes the coach calls out on sight (alibi progress, output roadmaps, discovery-less delivery, feature factory, strategy-as-goal-setting, etc.)
   - Escalation signal — when the coach says "this needs a full session, not a question"

2. [ ] Write the frameworks reference file at `.claude/skills/product-coach-frameworks.md` containing:
   - Full OST guide (Torres) — four layers, key questions per layer, common mistakes
   - Progress Wheel (Herbig) — Strategy/OKR/Discovery loop, how to diagnose which link is broken
   - Strategy Canvas (Huryn) — Winning Aspiration, Playing Field, Winning Moves, Can't/Won't Test
   - Dual-Track Delivery (Murphy/Huryn) — how discovery and delivery run in parallel, handoff points
   - Empowered Team model (Cagan) — problem vs feature assignment, PM as CEO markers
   - Risk model (Huryn) — Value / Usability / Feasibility / Ethical — which to test first and why
   - OKR design guide — linking strategy to OKR to discovery outcome (Herbig + Huryn)
   - Prioritisation tools — ICE (Huryn), Now/Next/Later/Trash (Pereira), opportunity sizing (Torres)
   - Traps and anti-patterns — sourced from Pereira (UnTrapping), Cagan (feature factory), Herbig (alibi progress)

3. [ ] Update `CLAUDE.md` (teamme root) to list the product-coach skill in the commands/skills table

4. [ ] Update `context/todo.md` — move this task to In Progress on start, Done on completion

## Acceptance Criteria

- The skill activates naturally when product topics arise, without needing an explicit invocation
- When invoked, the coach leads with a diagnostic question — not a framework dump
- The coach names the specific trap or gap before prescribing a solution
- Every coaching response ends with a concrete next step or forcing question
- The frameworks reference file is complete enough to run a coaching session on any of the four domains without needing to search externally
- Stefan can use this across the consulting project and any future product work without modification

## Notes

- The skill file is the active coaching layer; the frameworks file is the reference depth. The skill should reference the frameworks file but not copy it inline — keep the skill file readable and action-oriented.
- Skill lives at `.claude/skills/` (teamme root) — available across all sub-projects within this workspace.
- No external API calls required — the coach runs entirely from the frameworks embedded in the skill files.
- Thinker attribution: the coach doesn't need to cite thinkers constantly, but should name the framework being applied ("Let's use the OST here", "This is a Progress Wheel problem") so Stefan can go deeper if he wants.
- The coach should be willing to say "I don't know enough about your context yet — tell me more about X" rather than defaulting to generic advice.
