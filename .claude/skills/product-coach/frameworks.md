# Product Coach — Frameworks Reference

Deep reference for the product-coach skill. Use this when a coaching session requires a full framework walkthrough, not just a prompt.

---

## 1. Opportunity Solution Tree (Teresa Torres)

### What it is
A living visual map connecting the team's desired outcome to the opportunities they are pursuing, the solutions they are considering, and the assumptions they are testing. It is never finished — it grows and shifts as interviews surface new needs and tests return new evidence.

### Four layers

**Layer 1 — Outcome (root)**
The business need the team has been asked to address. A well-formed outcome:
- Is measurable and detectable
- Reflects a change in customer behaviour (not internal activity)
- Is owned by the team — not handed down as a feature request
- Traces to company strategy

| Weak | Strong |
|------|--------|
| Launch onboarding v2 | Increase 30-day retention from 40% to 55% |
| Build reporting dashboard | Increase weekly active usage among power users |
| Redesign checkout | Reduce cart abandonment by 15% |

**Layer 2 — Opportunities**
Customer needs, pain points, or desires that, if addressed, could help achieve the outcome. Opportunities are:
- Discovered from customer interviews, not invented in brainstorms
- Real (based on actual behaviour, not stated preference)
- Connected to the outcome (solving this could move the metric)
- On the playing field (aligned with strategic direction)
- Nested — broad opportunities contain sub-opportunities

Evaluation checklist for any opportunity:
1. Is it real? (Evidence from interviews, not assumption)
2. Is it big enough? (How many customers, how often?)
3. Does it connect to the outcome?
4. Is it on the strategic playing field?

**Layer 3 — Solutions**
Hypotheses for how to address a target opportunity. Rules:
- Generate at least three distinct solutions per opportunity before evaluating any
- Include the full product trio — engineers see technical possibilities designers miss
- Think across modalities: UI, notification, onboarding, pricing, workflow, integration
- Solutions are not project plans — they become real only when assumptions have been tested

**Layer 4 — Assumptions & Tests**
Every solution rests on assumptions. Before building:
1. List all assumptions behind each solution
2. Identify the riskiest (if false, the solution fails)
3. Design the smallest possible test to evaluate it
4. Set a threshold: what evidence would change the team's mind?
5. Run the test — update the OST with results

### Common mistakes
- Populating opportunities from internal brainstorms (they're hypotheses, not discoveries)
- Only one solution per opportunity (the team hasn't ideated)
- No assumption tests in Layer 4 (building on blind faith)
- OST treated as a one-time document instead of a living map
- Outcome at the top is output-framed (feature, not behaviour change)

---

## 2. Continuous Interviewing (Teresa Torres)

### The cadence
- Minimum: one customer interview per week per product trio
- All three members attend — not observers, not a researcher relaying findings
- Each interview: 30–60 minutes, focused on a specific topic or opportunity area
- Build an ongoing opt-in customer pool — recruit once, interview continuously

### Story-based technique
Ask about the past. Never ask about the future.

**Golden question:** "Tell me about the last time you [experienced this situation]."

**Follow-up probes:**
- "What happened right before that?"
- "What did you do next?"
- "How did you feel at that point?"
- "What were you hoping would happen?"

**Avoid:**
- "Would you use a feature that…?" (hypothetical)
- "How often do you…?" (generalisation)
- "What do you want?" (solution-seeking)

Stories reveal actual behaviour. When customers describe what they *did*, they cannot retrofit the answer they think the interviewer wants.

### Interview snapshot
Complete within one hour of the interview:
1. Customer context — who, role, situation
2. The story — narrative of what happened
3. Opportunities surfaced — needs, pain points, desires
4. Key quotes — direct quotes with the most signal
5. OST additions — which opportunities to add or update

---

## 3. Progress Wheel (Tim Herbig)

### What it is
A unified model showing how strategy, OKRs, and discovery must reinforce each other — not operate in isolation.

```
        STRATEGY
       ↙         ↖
  DISCOVERY  →  OKRs
```

### How the links work
- **Strategy → OKRs:** Strategy defines the playing field and winning aspiration. Without it, OKRs become generic metrics that could apply to any team.
- **OKRs → Discovery:** Clear OKRs focus discovery. Every interview and test should serve the metric. Without OKRs, discovery sprawls.
- **Discovery → Strategy:** When strategy feels unclear, validated problems from discovery should inform and refine it. Discovery doesn't just serve strategy — it feeds back into it.

### Diagnosing which link is broken

| Symptom | Broken link | Fix |
|---------|-------------|-----|
| OKRs feel arbitrary, no team buy-in | Strategy → OKRs | Strategy hasn't made real choices |
| Discovery unfocused, researching everything | OKRs → Discovery | OKR not specific enough to filter research |
| Strategy feels theoretical, no one acts on it | Discovery → Strategy | No feedback loop from validated learning |
| All three feel disconnected | All | Treat them as one system, not three rituals |

### Real Progress vs Alibi Progress
- **Real Progress:** Strategic choices inform what is measured. Metrics guide what is researched. Insights strengthen strategy in a cyclical loop. Value is created.
- **Alibi Progress:** Frameworks are implemented correctly. Ceremonies run. Documents are polished. No real change in customer behaviour or business outcome.

The test: could the team explain — in plain language — how their last sprint moved their OKR? If not, they are in Alibi Progress.

---

## 4. Product Strategy Canvas (Pawel Huryn)

### What strategy is (and is not)
Strategy is a set of reinforcing choices. It is not a goal, a plan, a roadmap, or an OKR.

A strategy must be:
- **Decisive** — it says no to things, which is how it creates focus
- **Layered** — it connects product strategy to company strategy
- **Executable** — it translates into daily decision-making, not just a slide deck

### Four components

**1. Winning Aspiration**
What does winning look like for this team? Answers the question: why will team members wake up every morning and choose to work on this?

**2. Playing Field**
Who are we serving? What jobs are we solving for them? What market alternatives exist? This is where the team draws the boundary around what they will and will not pursue.

**3. Winning Moves**
How will the team serve their playing field better than alternatives? What capabilities, approaches, or decisions differentiate the team's solution?

**4. Can't/Won't Test**
Could a competitor copy this strategy? If yes — it is not a strategy, it is a feature list. A real strategy exploits something competitors are structurally unable or unwilling to replicate.

### Strategy is discovered, not crafted
Strategy starts broad (market trends, customer clusters, unmet needs) and stabilises as the team accumulates evidence. It is iterative and messy — not a clean document produced in a workshop. The whole team contributes; executives set direction but strategy emerges through validated learning.

---

## 5. Dual-Track Delivery (Ant Murphy + Pawel Huryn)

### The model
Discovery and delivery run in parallel — always. The discovery track continuously surfaces and validates opportunities. The delivery track builds what has been de-risked by discovery.

```
Discovery track: [Interview] → [Map opportunities] → [Ideate solutions] → [Test assumptions] → [Validated idea]
                                                                                                      ↓
Delivery track:                                                                              [Build] → [Ship] → [Measure]
```

### Handoff point
The handoff from discovery to delivery is not "design complete". It is "riskiest assumptions tested". Something moves to the delivery track when the team has enough evidence to build with confidence — not perfect confidence, but enough to justify the investment.

### Common failure mode
Discovery runs at project start, then stops when development begins. Result: assumptions calcify. The team builds on a snapshot of understanding that is already stale. Course correction arrives late and expensively.

### Dual-track markers (what good looks like)
- Discovery interviews still running in week 6 of a 10-week initiative
- Findings from discovery actively changing delivery scope
- Team can name assumptions that were tested and killed before any code was written
- Delivery output is measured against the OST outcome, not against the sprint plan

---

## 6. Empowered Team Model (Marty Cagan)

### The distinction
| Feature team | Empowered team |
|-------------|---------------|
| Given a list of features to build | Given a problem to solve with a success metric |
| Measured by shipping | Measured by outcome |
| Discovery done by someone else | Discovery done by the trio together |
| PM coordinates and communicates | PM owns value and viability decisions |
| Low success rate (~20–30%) | High success rate when well-structured |

### PM as CEO
The PM is the CEO of the product area. This means:
- Deep knowledge of the customer (interviews, not reports)
- Deep knowledge of the data (not just dashboard glances)
- Deep knowledge of the business model (why this outcome matters financially)
- Deep knowledge of the technology (not a coder, but understands what is hard and what is possible)
- Accountability for outcomes, not just delivery

### Three markers of a feature factory
1. Roadmap is a list of features with dates attached
2. Success is measured by shipped items, not by metric movement
3. Discovery is conducted by a researcher or strategist outside the team, with findings handed over

### Cross-functional composition
The product trio: PM (value + viability), Designer (usability), Engineer (feasibility). All three participate in discovery from the start. The engineer is not handed a spec — they co-discover the solution.

---

## 7. Risk Model (Pawel Huryn)

### Four risks to validate before building

| Risk | Question | How to test |
|------|----------|-------------|
| **Value** | Will customers use or pay for this? | Fake door, concept test, sales conversations |
| **Usability** | Can customers understand and use it effectively? | Prototype test, task-based usability test |
| **Feasibility** | Can the team build this with available resources and time? | Spike, technical prototype, engineer review |
| **Ethical / GTM** | Should the team build this — is it responsible and marketable? | Legal review, compliance check, GTM readiness |

### Sequence
Test Value first. If no one wants it, nothing else matters. Then Usability, then Feasibility. Ethical risks should be surfaced alongside Value and Usability — they can kill a solution just as fast.

### The riskiest assumption
For each solution, identify the single assumption that, if false, makes the whole solution worthless. Design the smallest possible test for that assumption. If it fails, discard or pivot before investing in further development.

---

## 8. OKR Design Guide (Tim Herbig + Pawel Huryn)

### What OKRs are (and are not)
OKRs are not strategy. Strategy precedes OKRs and makes them non-generic. An OKR without a strategy behind it is just a number someone agreed to target.

### Well-formed OKR structure

**Objective:** Directional and inspiring. Answers: what are we trying to change, and why does it matter?
- Not: "Improve the onboarding experience"
- Yes: "Make it so easy to get started that customers reach their first value moment before they'd think to leave"

**Key Result:** A measurable change in customer behaviour. Not an internal activity metric.
- Not: "Ship 3 onboarding improvements"
- Not: "Run 10 user interviews"
- Yes: "Increase the % of new users completing setup within 24 hours from 32% to 55%"

### OKR → Discovery connection
Every discovery activity should trace to a KR. If the team cannot explain how an interview or test is connected to moving a KR, that activity may not belong in the current sprint.

The OKR sets the filter for which opportunities matter. A customer need only enters the OST if addressing it could plausibly move the KR.

### Common OKR failure modes
- KRs measure output (shipped features, completed ceremonies)
- KRs measure internal activity (meetings held, reports written)
- Objective is inspiring but KRs don't connect to it
- OKRs set by leadership without team input — team cannot influence the metric
- Too many OKRs — team cannot focus; everything is a priority

---

## 9. Prioritisation Tools

### ICE Framework (Pawel Huryn)
Score each opportunity or initiative on:
- **Impact:** How much does solving this move the outcome? (1–10)
- **Confidence:** How certain are we of that impact? (1–10)
- **Effort:** How much work is required? (1–10, lower = better)

ICE score = (Impact × Confidence) / Effort

Use ICE as a conversation tool, not a decision engine. The discussion that follows scoring is more valuable than the number. Low confidence scores reveal hidden assumptions worth testing.

### Now / Next / Later / Trash (David Pereira)
Four-column roadmap:
- **Now:** In active delivery this quarter
- **Next:** Committed for next quarter (validated, sequenced)
- **Later:** Directional — not committed, may change
- **Trash:** Explicitly killed — not deferred, not "maybe someday"

The Trash column is the health indicator. If it is empty, the team is not making real choices. If everything is in Later, the roadmap is a wish list, not a plan.

Rule: backlog items age like milk, not wine. If something has been in Next for two quarters without moving to Now, it is Trash or a strategic failure to commit.

### Opportunity Sizing (Teresa Torres)
Evaluate each opportunity before committing to it:
1. **Size** — how many customers are affected, how often?
2. **Business value** — how strongly connected is this to the team's outcome?
3. **Satisfaction gap** — how poorly is this need currently being met? (High gap = high opportunity)

Rather than ranking all opportunities in a list, identify a single **target opportunity** — one opportunity the team focuses on for the current cycle. This disciplines the team to move with focus rather than spreading across the full opportunity space.

---

## 10. Traps and Anti-Patterns

### Alibi Progress (Tim Herbig)
Teams follow frameworks perfectly and produce impressive-looking artefacts — strategy decks, OKR documents, well-structured OSTs — but generate no real customer value. The test: can the team show a measurable change in customer behaviour that resulted from their last cycle of work?

### Feature Factory (Marty Cagan)
A team optimised for shipping features rather than driving outcomes. Roadmap is output-based. Success is measured by velocity and delivery. Discovery is a formality or doesn't exist. The product becomes a graveyard of features nobody uses.

### Output Roadmap
A roadmap where every item is a feature with a date. No outcomes attached. No connection between what is being built and what change in customer behaviour is expected. Prioritisation is based on stakeholder requests, not opportunity sizing.

### Discovery-less Delivery
The team ran discovery at the start of the project and stopped when development began. By sprint 4, the team is building on assumptions that are six weeks stale. No mechanism exists to update the plan based on new evidence.

### Strategy-as-Goal-Setting
OKRs are written but no real strategic choices were made. The team cannot answer: what are we explicitly not pursuing? What would a competitor find difficult to copy? The OKRs could apply to any team in the company — they reflect no distinctive position.

### Waterfall Discovery
Discovery is treated as a phase (research → design → build → ship → learn). When the research phase ends, discovery ends. Insights from the research phase become assumptions by the time they are built — but no one checks.

### Solo Discovery
The PM or a researcher interviews customers and shares the findings with the team via a report or presentation. The team builds second-hand intuition. Signal is lost in translation. The trio does not develop the customer empathy that comes from being in the room.

### Assumption Burial
A solution advances to delivery because the team agrees it's a good idea — but no one has explicitly surfaced and tested its riskiest assumption. The assumption is implicitly treated as true. Failure arrives late, expensively, and surprises everyone.

### Backlog Hoarding (David Pereira)
A backlog of 200+ items, refined weekly, growing faster than it is actioned. Every item is treated as potentially valuable — nothing is killed. The team spends energy grooming instead of shipping. The backlog becomes a source of guilt, not direction.

### Process Theater (David Pereira)
Standups, retros, sprint reviews, PI planning, all running smoothly. The calendar looks like a high-functioning agile team. But the ceremonies are not producing insight or alignment — they are producing compliance. The team is performing agile, not using it to deliver value.
