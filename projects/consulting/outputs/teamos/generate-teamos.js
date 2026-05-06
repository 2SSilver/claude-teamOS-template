const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Stefan";
pres.title = "teamOS: Engineering Your AI-Assisted Work";

// Palette — Midnight Executive
const C = {
  navy: "1E2761",
  iceBlue: "CADCFC",
  white: "FFFFFF",
  lightBg: "F4F7FF",
  accent: "4A90D9",
  muted: "7A8CB8",
  dark: "0D1B4E",
  bodyText: "1A2A5E",
};

const makeShadow = () => ({ type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.12 });

// ─── SLIDE 1: Title ────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  // Top accent bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.iceBlue }, line: { color: C.iceBlue } });

  // Decorative side block
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.08, w: 0.35, h: 5.545, fill: { color: C.accent }, line: { color: C.accent } });

  // Title
  s.addText("teamOS", {
    x: 0.65, y: 1.0, w: 9, h: 1.2,
    fontSize: 64, bold: true, color: C.white, fontFace: "Calibri",
    margin: 0,
  });

  // Subtitle
  s.addText("Engineering Your AI-Assisted Work", {
    x: 0.65, y: 2.3, w: 8.5, h: 0.7,
    fontSize: 22, color: C.iceBlue, fontFace: "Calibri",
    margin: 0,
  });

  // Divider
  s.addShape(pres.shapes.RECTANGLE, { x: 0.65, y: 3.15, w: 4, h: 0.05, fill: { color: C.accent }, line: { color: C.accent } });

  // Tagline
  s.addText("How a structured setup turns Claude into a persistent,\nintelligent work partner", {
    x: 0.65, y: 3.35, w: 8, h: 0.9,
    fontSize: 14, color: C.iceBlue, fontFace: "Calibri", italic: true,
    margin: 0,
  });

  // Bottom bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.425, w: 10, h: 0.2, fill: { color: C.dark }, line: { color: C.dark } });
  s.addText("Stefan · teamme", {
    x: 0.65, y: 5.42, w: 9, h: 0.2,
    fontSize: 9, color: C.muted, fontFace: "Calibri", margin: 0,
  });
}

// ─── HELPER: Content slide with left accent ───────────────────────────────
function contentSlide(title, bodyFn) {
  const s = pres.addSlide();
  s.background = { color: C.lightBg };

  // Left accent
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.navy }, line: { color: C.navy } });

  // Title bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0.12, y: 0, w: 9.88, h: 0.85, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText(title, {
    x: 0.35, y: 0, w: 9.4, h: 0.85,
    fontSize: 26, bold: true, color: C.white, fontFace: "Calibri",
    valign: "middle", margin: 0,
  });

  bodyFn(s);

  // Footer
  s.addShape(pres.shapes.RECTANGLE, { x: 0.12, y: 5.45, w: 9.88, h: 0.175, fill: { color: C.iceBlue }, line: { color: C.iceBlue } });
  s.addText("teamOS", {
    x: 0.35, y: 5.45, w: 9, h: 0.175,
    fontSize: 8, color: C.navy, fontFace: "Calibri", margin: 0,
  });

  return s;
}

// ─── SLIDE 2: The Problem ─────────────────────────────────────────────────
contentSlide("The Problem with Ad-Hoc AI Use", (s) => {
  const bullets = [
    "Every session starts from zero — no memory of past decisions",
    "AI gives generic answers without understanding your context",
    "Knowledge lives in chat history, not your systems",
    "No continuity between tools, projects, or team members",
  ];

  s.addText(bullets.map((b, i) => ({
    text: b,
    options: { bullet: true, breakLine: i < bullets.length - 1, paraSpaceAfter: 10, fontSize: 18, color: C.bodyText, fontFace: "Calibri" },
  })), { x: 0.55, y: 1.1, w: 8.8, h: 3.8 });
});

// ─── SLIDE 3: teamOS Overview ─────────────────────────────────────────────
contentSlide("What Is teamOS?", (s) => {
  s.addText("A structured workspace that gives Claude persistent context, memory, and capabilities — turning it from a chatbot into a working partner.", {
    x: 0.55, y: 1.0, w: 8.8, h: 0.9,
    fontSize: 16, color: C.bodyText, fontFace: "Calibri", italic: true,
  });

  const pillars = [
    { label: "Context", body: "Claude always knows the mission, current priorities, and recent decisions" },
    { label: "Memory", body: "Knowledge persists automatically across every session" },
    { label: "Capabilities", body: "Skills extend Claude for specific domains and tasks" },
  ];

  const cardW = 2.8, cardH = 2.2, startX = 0.5, cardY = 2.1, gap = 0.2;
  pillars.forEach((p, i) => {
    const x = startX + i * (cardW + gap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: cardY, w: cardW, h: cardH, fill: { color: C.white }, line: { color: C.iceBlue, width: 1.5 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: cardY, w: cardW, h: 0.5, fill: { color: C.navy }, line: { color: C.navy } });
    s.addText(p.label, { x, y: cardY, w: cardW, h: 0.5, fontSize: 14, bold: true, color: C.white, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
    s.addText(p.body, { x: x + 0.15, y: cardY + 0.6, w: cardW - 0.3, h: 1.4, fontSize: 13, color: C.bodyText, fontFace: "Calibri" });
  });
});

// ─── SLIDE 4: Folder Structure ────────────────────────────────────────────
contentSlide("Everything Has a Place", (s) => {
  // Left: code block
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 1.0, w: 5.0, h: 4.2, fill: { color: C.dark }, line: { color: C.dark }, shadow: makeShadow() });
  s.addText(
    "teamme/\n├── CLAUDE.md\n├── context/\n├── brain/\n│   ├── wiki/\n│   └── raw/\n├── projects/\n├── .claude/\n│   ├── commands/\n│   ├── skills/\n│   └── rules/\n└── plans/",
    { x: 0.55, y: 1.1, w: 4.7, h: 3.9, fontSize: 12, color: C.iceBlue, fontFace: "Consolas", margin: 0 }
  );

  // Right: annotations
  const notes = [
    { y: 1.25, text: "← Always-loaded instructions" },
    { y: 1.65, text: "← Mission, strategy, decisions" },
    { y: 2.05, text: "← Durable knowledge layer" },
    { y: 2.95, text: "← Sub-projects" },
    { y: 3.35, text: "← Slash commands" },
    { y: 3.75, text: "← Domain capabilities" },
    { y: 4.15, text: "← Persistent behaviour rules" },
    { y: 4.6, text: "← Implementation plans" },
  ];
  notes.forEach((n) => {
    s.addText(n.text, { x: 5.5, y: n.y, w: 4.2, h: 0.35, fontSize: 11, color: C.muted, fontFace: "Calibri", margin: 0, italic: true });
  });
});

// ─── SLIDE 5: .md Files as the OS ─────────────────────────────────────────
contentSlide(".md Files Are the Interface", (s) => {
  const rows = [
    { file: "CLAUDE.md", desc: "Standing instructions — loaded automatically every session" },
    { file: "context/team-info.md", desc: "Team composition, roles, contacts" },
    { file: "context/project-info.md", desc: "What the team is working on and why" },
    { file: "context/strategy.md", desc: "Goals, priorities, success metrics" },
    { file: "context/current-data.md", desc: "Live status, blockers, recent outputs" },
    { file: "context/decisions.md", desc: "Running decision log, newest-first" },
  ];

  rows.forEach((r, i) => {
    const y = 1.05 + i * 0.7;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y, w: 8.9, h: 0.6, fill: { color: i % 2 === 0 ? C.white : "DDE8FD" }, line: { color: C.iceBlue, width: 0.5 } });
    s.addText(r.file, { x: 0.5, y: y + 0.05, w: 3.2, h: 0.5, fontSize: 12, bold: true, color: C.navy, fontFace: "Consolas", margin: 0 });
    s.addText(r.desc, { x: 3.9, y: y + 0.05, w: 5.2, h: 0.5, fontSize: 12, color: C.bodyText, fontFace: "Calibri", margin: 0 });
  });

  s.addText("Everything Claude needs is written down, versioned in git, and loaded automatically.", {
    x: 0.35, y: 5.1, w: 9, h: 0.3,
    fontSize: 11, color: C.muted, fontFace: "Calibri", italic: true, margin: 0,
  });
});

// ─── SLIDE 6: Memory ──────────────────────────────────────────────────────
contentSlide("Claude Remembers Across Sessions", (s) => {
  // Left column
  s.addText("Auto-memory stores key facts between conversations:", {
    x: 0.35, y: 1.0, w: 8.8, h: 0.5, fontSize: 16, color: C.bodyText, fontFace: "Calibri", margin: 0,
  });

  const memTypes = [
    { type: "user", desc: "Who you are, how you prefer to work" },
    { type: "feedback", desc: "\"Don't do X\" / \"Always do Y\" — learned preferences" },
    { type: "project", desc: "Current state, recent decisions, active priorities" },
    { type: "reference", desc: "Pointers to external systems and resources" },
  ];

  const cardW = 4.1, cardH = 1.45, startX = 0.35, gap = 0.25;
  memTypes.forEach((m, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gap);
    const y = 1.65 + row * (cardH + 0.2);
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: cardW, h: cardH, fill: { color: C.white }, line: { color: C.accent, width: 1.5 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.08, h: cardH, fill: { color: C.accent }, line: { color: C.accent } });
    s.addText(m.type, { x: x + 0.18, y: y + 0.1, w: cardW - 0.28, h: 0.4, fontSize: 14, bold: true, color: C.navy, fontFace: "Calibri", margin: 0 });
    s.addText(m.desc, { x: x + 0.18, y: y + 0.55, w: cardW - 0.28, h: 0.75, fontSize: 12, color: C.bodyText, fontFace: "Calibri", margin: 0 });
  });
});

// ─── SLIDE 7: Brain ───────────────────────────────────────────────────────
contentSlide("The Knowledge Layer", (s) => {
  // Two zone cards side by side
  const zones = [
    { label: "brain/raw/", color: C.accent, desc: "Low-friction capture:\ndaily notes, ideas,\nproblems, sources" },
    { label: "brain/wiki/", color: C.navy, desc: "Curated reusable patterns\npromoted from raw.\nChecked before new work." },
  ];
  zones.forEach((z, i) => {
    const x = 0.5 + i * 4.5;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.0, w: 4.0, h: 2.8, fill: { color: C.white }, line: { color: C.iceBlue, width: 1.5 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.0, w: 4.0, h: 0.55, fill: { color: z.color }, line: { color: z.color } });
    s.addText(z.label, { x, y: 1.0, w: 4.0, h: 0.55, fontSize: 15, bold: true, color: C.white, fontFace: "Consolas", align: "center", valign: "middle", margin: 0 });
    s.addText(z.desc, { x: x + 0.2, y: 1.65, w: 3.6, h: 1.95, fontSize: 13, color: C.bodyText, fontFace: "Calibri" });
  });

  // Arrow between them
  s.addShape(pres.shapes.RECTANGLE, { x: 4.55, y: 2.2, w: 0.4, h: 0.08, fill: { color: C.muted }, line: { color: C.muted } });
  s.addText("promote →", { x: 4.3, y: 2.05, w: 0.9, h: 0.35, fontSize: 9, color: C.muted, fontFace: "Calibri", align: "center", margin: 0 });

  // The cycle
  s.addText("The cycle: work produces insights → captured in raw/ → strong patterns promoted to wiki/ → Claude checks wiki before designing new approaches", {
    x: 0.35, y: 4.0, w: 9, h: 0.8,
    fontSize: 13, color: C.bodyText, fontFace: "Calibri", italic: true,
  });

  s.addText("This is how the system gets smarter over time.", {
    x: 0.35, y: 4.85, w: 9, h: 0.4,
    fontSize: 12, bold: true, color: C.navy, fontFace: "Calibri", margin: 0,
  });
});

// ─── SLIDE 8: Skills ──────────────────────────────────────────────────────
contentSlide("Extending Claude with Skills", (s) => {
  s.addText("Skills are domain-specific capability packs that Claude loads automatically when relevant.", {
    x: 0.35, y: 0.95, w: 9, h: 0.55,
    fontSize: 15, color: C.bodyText, fontFace: "Calibri", italic: true, margin: 0,
  });

  const skills = [
    { name: "pptx", desc: "Create, edit & QA PowerPoint files" },
    { name: "mcp-integration", desc: "Configure external tool connections" },
    { name: "skill-writer", desc: "Author new skills for the workspace" },
    { name: "create-plan", desc: "Structured planning before implementation" },
    { name: "brain-extract", desc: "Capture insights from session work" },
    { name: "prime", desc: "Load full workspace context on session start" },
  ];

  const colW = 4.3, rowH = 0.75, cols = 2;
  skills.forEach((sk, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 0.35 + col * (colW + 0.3);
    const y = 1.65 + row * (rowH + 0.1);
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: colW, h: rowH, fill: { color: C.white }, line: { color: C.iceBlue, width: 1 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.07, h: rowH, fill: { color: C.navy }, line: { color: C.navy } });
    s.addText(sk.name, { x: x + 0.18, y: y + 0.05, w: colW - 0.25, h: 0.35, fontSize: 13, bold: true, color: C.navy, fontFace: "Consolas", margin: 0 });
    s.addText(sk.desc, { x: x + 0.18, y: y + 0.38, w: colW - 0.25, h: 0.3, fontSize: 11, color: C.bodyText, fontFace: "Calibri", margin: 0 });
  });
});

// ─── SLIDE 9: claudeclaw + Telegram ──────────────────────────────────────
contentSlide("Always-On, From Anywhere", (s) => {
  s.addText("claudeclaw turns Claude Code into a persistent background daemon.", {
    x: 0.35, y: 0.95, w: 9, h: 0.45,
    fontSize: 15, color: C.bodyText, fontFace: "Calibri", italic: true, margin: 0,
  });

  const features = [
    { icon: "⚙", label: "Heartbeat", desc: "Scheduled check-ins — git status, blockers, reminders" },
    { icon: "⏰", label: "Cron jobs", desc: "Automated prompts on any schedule" },
    { icon: "💬", label: "Telegram bot", desc: "Message Claude like a colleague, from any device" },
    { icon: "🔄", label: "Persistent session", desc: "Shared context across heartbeat, cron, and Telegram" },
  ];

  features.forEach((f, i) => {
    const y = 1.55 + i * 0.88;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y, w: 8.9, h: 0.78, fill: { color: i % 2 === 0 ? C.white : "EAF1FE" }, line: { color: C.iceBlue, width: 0.5 }, shadow: makeShadow() });
    s.addText(f.icon + " " + f.label, { x: 0.5, y: y + 0.08, w: 2.5, h: 0.6, fontSize: 14, bold: true, color: C.navy, fontFace: "Calibri", margin: 0 });
    s.addText(f.desc, { x: 3.1, y: y + 0.08, w: 6.0, h: 0.6, fontSize: 13, color: C.bodyText, fontFace: "Calibri", margin: 0 });
  });
});

// ─── SLIDE 10: VPS Setup ──────────────────────────────────────────────────
contentSlide("The Foundation: A Persistent Server", (s) => {
  // Benefits list
  const benefits = [
    "Sessions persist even when your laptop is closed",
    "Accessible from phone, tablet, or any device",
    "Scheduled tasks run reliably on a fixed schedule",
    "No local environment dependencies",
  ];

  s.addText(benefits.map((b, i) => ({
    text: b,
    options: { bullet: true, breakLine: i < benefits.length - 1, paraSpaceAfter: 8, fontSize: 16, color: C.bodyText, fontFace: "Calibri" },
  })), { x: 0.55, y: 1.05, w: 5.5, h: 2.8 });

  // Setup card
  s.addShape(pres.shapes.RECTANGLE, { x: 6.3, y: 1.0, w: 3.3, h: 4.2, fill: { color: C.dark }, line: { color: C.navy }, shadow: makeShadow() });
  s.addText("Minimal Setup", { x: 6.3, y: 1.0, w: 3.3, h: 0.5, fontSize: 13, bold: true, color: C.iceBlue, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
  s.addText(
    "· Linux VPS (Ubuntu LTS)\n· Claude Code + auth\n· claudeclaw daemon\n· Telegram bot\n\n~$10/month",
    { x: 6.45, y: 1.6, w: 3.0, h: 3.3, fontSize: 13, color: C.white, fontFace: "Calibri", margin: 0 }
  );

  s.addText("The key shift: from 'Claude on my laptop' to 'Claude on a server I can reach from anywhere.'", {
    x: 0.35, y: 4.0, w: 5.7, h: 0.85,
    fontSize: 13, color: C.bodyText, fontFace: "Calibri", italic: true,
  });
});

// ─── SLIDE 11: Daily Workflow ─────────────────────────────────────────────
contentSlide("What This Looks Like Day-to-Day", (s) => {
  const phases = [
    {
      label: "Morning",
      color: C.accent,
      items: ["Heartbeat fires → Claude checks git, flags blockers", "/prime loads full context → ready in seconds"],
    },
    {
      label: "During the day",
      color: C.navy,
      items: ["Telegram for quick tasks away from desk", "/create-plan before any non-trivial work", "Decisions logged automatically"],
    },
    {
      label: "End of session",
      color: C.dark,
      items: ["/brain-extract captures what was learned", "Git commit records what changed"],
    },
  ];

  const cardW = 2.85, cardH = 3.5, startX = 0.4, gap = 0.22;
  phases.forEach((p, i) => {
    const x = startX + i * (cardW + gap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.0, w: cardW, h: cardH, fill: { color: C.white }, line: { color: C.iceBlue, width: 1.5 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.0, w: cardW, h: 0.55, fill: { color: p.color }, line: { color: p.color } });
    s.addText(p.label, { x, y: 1.0, w: cardW, h: 0.55, fontSize: 14, bold: true, color: C.white, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
    s.addText(p.items.map((item, j) => ({
      text: item,
      options: { bullet: true, breakLine: j < p.items.length - 1, paraSpaceAfter: 6, fontSize: 12, color: C.bodyText, fontFace: "Calibri" },
    })), { x: x + 0.15, y: 1.65, w: cardW - 0.3, h: cardH - 0.75 });
  });
});

// ─── SLIDE 12: Key Takeaways ──────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.iceBlue }, line: { color: C.iceBlue } });

  s.addText("Key Takeaways", {
    x: 0.5, y: 0.25, w: 9, h: 0.75,
    fontSize: 32, bold: true, color: C.white, fontFace: "Calibri", margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 3.5, h: 0.05, fill: { color: C.accent }, line: { color: C.accent } });

  const takeaways = [
    { headline: "Structure beats prompting", body: "A well-organised workspace beats clever prompts every time" },
    { headline: "Persistence compounds", body: "Memory + brain make the system smarter over time" },
    { headline: "Skills beat improvisation", body: "Specific procedures produce consistent, repeatable results" },
    { headline: "Remote-first", body: "Built to run from anywhere — always on, always reachable" },
    { headline: "The setup is replicable", body: "The concepts apply whether you're solo or running a team" },
  ];

  takeaways.forEach((t, i) => {
    const y = 1.3 + i * 0.78;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.07, h: 0.6, fill: { color: C.accent }, line: { color: C.accent } });
    s.addText(t.headline + " — ", { x: 0.72, y: y + 0.05, w: 8.5, h: 0.35, fontSize: 14, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
    s.addText(t.body, { x: 0.72, y: y + 0.35, w: 8.5, h: 0.3, fontSize: 12, color: C.iceBlue, fontFace: "Calibri", margin: 0 });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.425, w: 10, h: 0.2, fill: { color: C.dark }, line: { color: C.dark } });
  s.addText("teamOS · Stefan", {
    x: 0.5, y: 5.42, w: 9, h: 0.2,
    fontSize: 9, color: C.muted, fontFace: "Calibri", margin: 0,
  });
}

// ─── Write file ────────────────────────────────────────────────────────────
pres.writeFile({ fileName: "projects/consulting/outputs/presentations/teamos-overview.pptx" })
  .then(() => console.log("Done: teamos-overview.pptx"))
  .catch((e) => { console.error(e); process.exit(1); });
