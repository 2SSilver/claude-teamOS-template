# teamOS Presentation — Slide Content

**Audience:** IT Management Consultants
**Tone:** Educational / Showcase
**Slides:** 12

---

## Slide 1 — Title

**Title:** teamOS: Engineering Your AI-Assisted Work
**Subtitle:** How a structured setup turns Claude into a persistent, intelligent work partner
**Speaker notes:** Welcome and set context — this is a walkthrough of a personal system built to work with AI seriously, not just casually. Not a product pitch — a working setup anyone can replicate.

---

## Slide 2 — The Problem

**Title:** The Problem with Ad-Hoc AI Use
**Body:**
- Every session starts from zero — no memory of past decisions
- AI gives generic answers without understanding your context
- Knowledge lives in chat history, not your systems
- No continuity between tools, projects, or team members

**Speaker notes:** Most people use ChatGPT or Claude like a search engine. Each conversation is isolated. teamOS solves the continuity and context problem by giving Claude structured, persistent memory of who you are and what you're working on.

---

## Slide 3 — teamOS Overview

**Title:** What Is teamOS?
**Body:**
A structured workspace that gives Claude persistent context, memory, and capabilities — turning it from a chatbot into a working partner.

**Three pillars:**
- **Context** — Claude always knows the mission, current priorities, and recent decisions
- **Memory** — knowledge persists across sessions automatically
- **Capabilities** — skills extend Claude for specific domains and tasks

**Speaker notes:** teamOS is a folder structure + a set of conventions. No special software. Just Claude Code + git + a well-organised workspace.

---

## Slide 4 — Folder Structure

**Title:** Everything Has a Place
**Body:**

```
teamme/
├── CLAUDE.md          ← Always-loaded instructions
├── context/           ← Mission, strategy, status, decisions
├── brain/             ← Durable knowledge layer
│   ├── wiki/          ← Curated, reusable patterns
│   └── raw/           ← Low-friction capture
├── projects/          ← Sub-projects with own context
├── .claude/
│   ├── commands/      ← Slash commands
│   ├── skills/        ← Domain capabilities
│   └── rules/         ← Always-on behaviour rules
└── plans/             ← Implementation plans
```

**Speaker notes:** The folder structure is the foundation. Claude reads CLAUDE.md automatically every session. Context files give it current situational awareness. The structure is opinionated enough to work, flexible enough to adapt.

---

## Slide 5 — .md Files as the Operating System

**Title:** .md Files Are the Interface
**Body:**
- **CLAUDE.md** — Claude's standing instructions, loaded every session
- **context/team-info.md** — who's on the team, roles, contacts
- **context/project-info.md** — what the team is working on
- **context/strategy.md** — goals, priorities, success metrics
- **context/current-data.md** — live status, blockers, recent outputs
- **context/decisions.md** — running decision log, newest-first

Everything Claude needs to be useful is written down, versioned in git, and loaded automatically.

**Speaker notes:** The insight is that most of what makes a person a good colleague is context. These files give Claude that context persistently, not just for one conversation.

---

## Slide 6 — Memory

**Title:** Claude Remembers Across Sessions
**Body:**
Auto-memory stores key facts between conversations:
- Who you are and how you work
- Feedback and preferences ("don't do X", "always do Y")
- Project state and recent decisions
- Pointers to external resources

Memory is automatically written and indexed. Future sessions pick up where the last one left off.

**Speaker notes:** Without memory, every session is a cold start. With it, Claude adapts over time — it learns your preferences, your project context, and your way of working. This compounds significantly over weeks.

---

## Slide 7 — Brain

**Title:** The Knowledge Layer
**Body:**
The `brain/` directory is the team's durable knowledge store.

**Two zones:**
- **raw/** — low-friction capture: daily notes, ideas, problems, sources
- **wiki/** — curated, reusable patterns promoted from raw

**The cycle:**
1. Work produces insights
2. Insights captured in `brain/raw/`
3. Strong patterns promoted to `brain/wiki/`
4. Claude checks wiki before designing new approaches

**Speaker notes:** This is how the system gets smarter over time. The brain accumulates what works — patterns, decisions, lessons — and makes them available in future sessions without having to re-derive them.

---

## Slide 8 — Skills

**Title:** Extending Claude with Skills
**Body:**
Skills are domain-specific capability packs that Claude loads automatically when relevant.

**Examples in this setup:**
- **pptx** — create, edit, and QA PowerPoint files
- **mcp-integration** — configure external tool connections
- **skill-writer** — author new skills for the workspace
- **create-plan** — structured planning before implementation

Skills live in `.claude/skills/` and can be global (team-wide) or project-specific.

**Speaker notes:** Skills are the equivalent of hiring a specialist for a task. Instead of Claude guessing how to work with a pptx file, the pptx skill gives it specific, tested procedures for creation, editing, and QA.

---

## Slide 9 — claudeclaw + Telegram

**Title:** Always-On, From Anywhere
**Body:**
**claudeclaw** turns Claude Code into a persistent background daemon:
- Runs 24/7 on a VPS — no local machine required
- **Heartbeat** — scheduled check-ins (git status, blockers, reminders)
- **Cron jobs** — automated prompts on any schedule
- **Telegram bot** — message Claude like a colleague, from any device

**In practice:** send a Telegram message → Claude reads it, acts on it, replies.

**Speaker notes:** This is what makes the setup feel alive. Claude isn't just available when you open a terminal — it's running, watching, and can reach out to you. The presentation Stefan is giving right now was initiated via Telegram.

---

## Slide 10 — VPS Setup

**Title:** The Foundation: A Persistent Server
**Body:**
Running Claude Code on a VPS means:
- Sessions persist even when your laptop is closed
- Claude is accessible from phone, tablet, any device
- Scheduled tasks run reliably on a fixed schedule
- No local environment dependencies

**Minimal setup:**
- Any Linux VPS (Ubuntu LTS recommended)
- Claude Code installed + authenticated
- claudeclaw running as a background process
- Telegram bot for remote access

**Speaker notes:** A $5-10/month VPS is all it takes. The key shift is from "Claude on my laptop" to "Claude on a server I can reach from anywhere." This makes the whole system location-independent.

---

## Slide 11 — Daily Workflow

**Title:** What This Looks Like Day-to-Day
**Body:**

**Morning:**
- Heartbeat fires → Claude checks git status, flags blockers
- `/prime` loads full context → ready to work in seconds

**During the day:**
- Telegram messages for quick tasks while away from desk
- `/create-plan` before any non-trivial work
- Decisions logged automatically as they're made

**End of session:**
- `/brain-extract` captures what was learned
- Git commit records what changed

**Speaker notes:** The system reduces the overhead of working with AI to near zero. Context is always loaded. Memory persists. The structure handles the bookkeeping so you can focus on the work.

---

## Slide 12 — Key Takeaways

**Title:** What Makes This Work
**Body:**
- **Structure beats prompting** — a well-organised workspace beats clever prompts every time
- **Persistence compounds** — memory + brain make the system smarter over time
- **Skills beat improvisation** — specific procedures produce consistent results
- **Remote-first** — built to run from anywhere, always on
- **Git as the backbone** — everything versioned, nothing lost

**The setup is replicable.** The concepts apply whether you're solo or running a team.

**Speaker notes:** The core insight is that the bottleneck in AI-assisted work isn't the model — it's the structure around the model. teamOS is that structure. Anyone can build it.
