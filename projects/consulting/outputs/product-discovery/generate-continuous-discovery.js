const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Stefan";
pres.title = "Continuous Discovery Habits — Introduction Course";

// ─── Palette: Teal Trust ──────────────────────────────────────────────────
const C = {
  darkBg:    "023B45",
  primary:   "028090",
  secondary: "00A896",
  accent:    "02C39A",
  lightBg:   "F0FAFA",
  bodyText:  "1A1A2E",
  white:     "FFFFFF",
  muted:     "5A7A80",
  lightCard: "E0F4F4",
  midTeal:   "057A8A",
  paleTeal:  "B2E4E8",
};

const makeShadow = () => ({ type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.10 });

// ─── Helpers ─────────────────────────────────────────────────────────────

function addHeader(s, title, subtitle) {
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.75, fill: { color: C.darkBg }, line: { color: C.darkBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.75, w: 10, h: 0.05, fill: { color: C.accent }, line: { color: C.accent } });
  s.addText(title, { x: 0.45, y: 0.08, w: 9.1, h: 0.58, fontSize: 24, bold: true, color: C.white, fontFace: "Georgia", margin: 0 });
  if (subtitle) {
    s.addText(subtitle, { x: 0.45, y: 0.85, w: 9.1, h: 0.3, fontSize: 11, color: C.muted, fontFace: "Calibri", italic: true, margin: 0 });
  }
}

function lightSlide() {
  const s = pres.addSlide();
  s.background = { color: C.lightBg };
  return s;
}

function darkSlide() {
  const s = pres.addSlide();
  s.background = { color: C.darkBg };
  return s;
}

function addQuoteBox(s, text, x, y, w, h) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: C.lightCard }, line: { color: C.primary, width: 1 } });
  s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.07, h, fill: { color: C.primary }, line: { color: C.primary } });
  s.addText(text, { x: x + 0.18, y, w: w - 0.25, h, fontSize: 13, color: C.primary, fontFace: "Calibri", italic: true, valign: "middle", margin: 0 });
}

function addCard(s, x, y, w, h, header, body, headerColor) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: C.white }, line: { color: C.paleTeal, width: 1 }, shadow: makeShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h: 0.32, fill: { color: headerColor || C.primary }, line: { color: headerColor || C.primary } });
  s.addText(header, { x: x + 0.12, y: y + 0.04, w: w - 0.2, h: 0.28, fontSize: 12, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  if (body) {
    s.addText(body, { x: x + 0.12, y: y + 0.38, w: w - 0.2, h: h - 0.48, fontSize: 11, color: C.bodyText, fontFace: "Calibri", valign: "top", margin: 0 });
  }
}

function addConnectorLine(s, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const cx = (x1 + x2) / 2 - len / 2;
  const cy = (y1 + y2) / 2;
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  s.addShape(pres.shapes.LINE, { x: cx, y: cy, w: len, h: 0, rotate: angle, line: { color: C.primary, width: 1.5 } });
}

// ─── SLIDE 01: Title ────────────────────────────────────────────────────────
{
  const s = darkSlide();
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent }, line: { color: C.accent } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.545, w: 10, h: 0.08, fill: { color: C.accent }, line: { color: C.accent } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.08, w: 0.4, h: 5.465, fill: { color: C.primary }, line: { color: C.primary } });

  s.addText("Continuous\nDiscovery Habits", {
    x: 0.7, y: 0.8, w: 8.8, h: 2.4,
    fontSize: 52, bold: true, color: C.white, fontFace: "Georgia", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 3.3, w: 3.5, h: 0.06, fill: { color: C.accent }, line: { color: C.accent } });
  s.addText("An introduction to Teresa Torres' framework\nfor building products customers love", {
    x: 0.7, y: 3.5, w: 8.5, h: 0.9,
    fontSize: 16, color: C.paleTeal, fontFace: "Calibri", italic: true, margin: 0,
  });
  s.addText("with strategic framing from Tim Herbig", {
    x: 0.7, y: 4.5, w: 8.5, h: 0.4,
    fontSize: 13, color: C.muted, fontFace: "Calibri", italic: true, margin: 0,
  });
}

// ─── SLIDE 02: Who is Teresa Torres? ─────────────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Teresa Torres — Product Discovery Coach");

  s.addText([
    { text: "Author of ", options: {} },
    { text: "Continuous Discovery Habits", options: { italic: true } },
    { text: " (2021)", options: {} },
  ], { x: 0.5, y: 1.05, w: 5.8, h: 0.35, fontSize: 13, color: C.bodyText, fontFace: "Calibri", margin: 0 });

  const bullets2 = [
    "80,000+ copies sold worldwide",
    "Coached 7,000+ product people through Product Talk Academy",
    "15+ years working with product teams",
    "Founder of Product Talk — one of the most widely-read product blogs",
    "Clients range from early-stage startups to Fortune 500s",
  ];
  const bulletItems2 = bullets2.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < bullets2.length - 1 } }));
  s.addText(bulletItems2, { x: 0.5, y: 1.5, w: 5.8, h: 2.5, fontSize: 13, color: C.bodyText, fontFace: "Calibri", paraSpaceAfter: 4 });

  addQuoteBox(s, '"The best product teams are customer-centric. They talk to customers every week. They generate ideas based on real customer needs, and they test those ideas before they build them."  — Teresa Torres', 6.5, 1.05, 3.2, 2.5);

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.15, w: 9, h: 0.9, fill: { color: C.lightCard }, line: { color: C.paleTeal, width: 1 } });
  s.addText("Product Talk Academy  ·  producttalk.org  ·  Continuous Discovery Habits (2021)", {
    x: 0.6, y: 4.25, w: 8.8, h: 0.6, fontSize: 12, color: C.primary, fontFace: "Calibri", italic: true, valign: "middle", margin: 0,
  });
}

// ─── SLIDE 03: The Problem ───────────────────────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Discovery done once is discovery done wrong");

  // Left column header
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 4.2, h: 0.38, fill: { color: C.primary }, line: { color: C.primary } });
  s.addText("THE OLD WAY", { x: 0.6, y: 1.08, w: 4.0, h: 0.32, fontSize: 12, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });

  const oldWay = [
    "Research phase at start of project, then stop",
    "PMs write specs and hand off to designers and engineers",
    "Big bets on features built over months",
    "Customer feedback arrives too late to change course",
    "Teams optimise for output: shipping features",
  ];
  const oldItems = oldWay.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < oldWay.length - 1 } }));
  s.addText(oldItems, { x: 0.6, y: 1.5, w: 3.9, h: 2.3, fontSize: 12, color: C.bodyText, fontFace: "Calibri", paraSpaceAfter: 5 });

  // Right column header
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 1.05, w: 4.2, h: 0.38, fill: { color: "8B1A1A" }, line: { color: "8B1A1A" } });
  s.addText("THE RESULT", { x: 5.4, y: 1.08, w: 4.0, h: 0.32, fontSize: 12, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });

  const results = [
    "Features nobody uses",
    "Long, expensive feedback loops",
    "Teams solving the wrong problems",
    "Discovery treated as a one-time gate",
    "Assumptions calcify unchallenged",
  ];
  const resultItems = results.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < results.length - 1 } }));
  s.addText(resultItems, { x: 5.4, y: 1.5, w: 3.9, h: 2.3, fontSize: 12, color: C.bodyText, fontFace: "Calibri", paraSpaceAfter: 5 });

  addQuoteBox(s, "By the time a feature ships, the team has forgotten why they made half the decisions they made. The world has moved on.", 0.5, 4.0, 9, 0.85);
}

// ─── SLIDE 04: What is Continuous Discovery? ─────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Discovery is not a phase. It's a habit.");

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.9, fill: { color: C.primary }, line: { color: C.primary } });
  s.addText("Continuous discovery is the practice of conducting small research activities on a regular cadence — at minimum weekly — by the team who builds the product.", {
    x: 0.65, y: 1.1, w: 8.7, h: 0.82, fontSize: 14, color: C.white, fontFace: "Calibri", valign: "middle", margin: 0,
  });

  const chars = [
    { num: "1", label: "Continuous", desc: "Not a phase — a recurring habit embedded in how the team works every week" },
    { num: "2", label: "Team-led", desc: "Not delegated to a researcher — the trio who builds the product does the discovering" },
    { num: "3", label: "Outcome-focused", desc: "Research is always connected to a specific business outcome the team is trying to drive" },
  ];
  chars.forEach((c, i) => {
    const x = 0.5 + i * 3.1;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.15, w: 2.85, h: 2.4, fill: { color: C.white }, line: { color: C.paleTeal, width: 1 }, shadow: makeShadow() });
    s.addShape(pres.shapes.OVAL, { x: x + 1.1, y: 2.25, w: 0.65, h: 0.65, fill: { color: C.accent }, line: { color: C.accent } });
    s.addText(c.num, { x: x + 1.1, y: 2.3, w: 0.65, h: 0.55, fontSize: 18, bold: true, color: C.white, fontFace: "Georgia", align: "center", margin: 0 });
    s.addText(c.label, { x: x + 0.12, y: 3.05, w: 2.6, h: 0.4, fontSize: 13, bold: true, color: C.primary, fontFace: "Georgia", align: "center", margin: 0 });
    s.addText(c.desc, { x: x + 0.12, y: 3.5, w: 2.6, h: 0.95, fontSize: 11, color: C.bodyText, fontFace: "Calibri", align: "center", valign: "top", margin: 0 });
  });

  addQuoteBox(s, "You can't be customer-centric without being in continuous contact with customers.", 0.5, 4.72, 9, 0.65);
}

// ─── SLIDE 05: Output vs Outcome ─────────────────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Stop measuring what you ship. Start measuring what changes.");

  const rows = [
    ["Output mindset", "Outcome mindset"],
    ['"We shipped 12 features this quarter"', '"Checkout conversion increased by 8%"'],
    ['"We delivered the roadmap"', '"Customers are completing the task faster"'],
    ['"We finished on time"', '"We reduced support tickets by 30%"'],
  ];
  const tableData = rows.map((r, ri) => r.map((cell, ci) => ({
    text: cell,
    options: {
      bold: ri === 0,
      color: ri === 0 ? C.white : (ci === 0 ? "8B1A1A" : "1A5C4A"),
      fill: { color: ri === 0 ? (ci === 0 ? "8B1A1A" : C.primary) : (ri % 2 === 0 ? C.white : C.lightCard) },
      fontFace: ri === 0 ? "Georgia" : "Calibri",
      fontSize: ri === 0 ? 13 : 12,
      align: "left",
    },
  })));
  s.addTable(tableData, { x: 0.5, y: 1.05, w: 9, colW: [4.5, 4.5], rowH: 0.52, border: { pt: 0.5, color: C.paleTeal } });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.25, w: 9, h: 0.48, fill: { color: C.lightCard }, line: { color: C.paleTeal, width: 1 } });
  s.addText("An outcome is a change in customer behaviour that drives business results. It is not a feature, a project, or a deliverable.", {
    x: 0.65, y: 3.3, w: 8.7, h: 0.4, fontSize: 13, bold: false, color: C.bodyText, fontFace: "Calibri", italic: false, valign: "middle", margin: 0,
  });

  addQuoteBox(s, "When a team is assigned an outcome instead of a feature, they are free to discover the best solution — rather than executing a predetermined one.", 0.5, 3.9, 9, 0.88);
}

// ─── SLIDE 06: Tim Herbig's Progress Wheel ───────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Discovery without strategy is just exploring. Strategy without discovery is just guessing.", "Tim Herbig — Real Progress (2024)");

  // Three nodes in a triangle — in-code Progress Wheel diagram
  // Strategy: top-center | OKRs: bottom-right | Discovery: bottom-left
  const nodes = [
    { label: "STRATEGY",  x: 3.4, y: 1.3,  w: 1.8, h: 0.6, color: C.darkBg },
    { label: "OKRs",      x: 5.8, y: 3.1,  w: 1.8, h: 0.6, color: C.primary },
    { label: "DISCOVERY", x: 1.0, y: 3.1,  w: 1.8, h: 0.6, color: C.primary },
  ];

  // Connector lines (centre-to-centre)
  const cx = n => n.x + n.w / 2;
  const cy = n => n.y + n.h / 2;

  // Strategy ↔ OKRs
  s.addShape(pres.shapes.LINE, { x: cx(nodes[0]), y: cy(nodes[0]), w: cx(nodes[1]) - cx(nodes[0]), h: cy(nodes[1]) - cy(nodes[0]), line: { color: C.accent, width: 2 } });
  // Strategy ↔ Discovery
  s.addShape(pres.shapes.LINE, { x: cx(nodes[2]), y: cy(nodes[2]), w: cx(nodes[0]) - cx(nodes[2]), h: cy(nodes[0]) - cy(nodes[2]), line: { color: C.accent, width: 2 } });
  // OKRs ↔ Discovery
  s.addShape(pres.shapes.LINE, { x: cx(nodes[2]), y: cy(nodes[2]), w: cx(nodes[1]) - cx(nodes[2]), h: 0, line: { color: C.accent, width: 2 } });

  // Line labels
  s.addText("Directs priorities", { x: 4.85, y: 2.0, w: 1.6, h: 0.35, fontSize: 9, color: C.primary, fontFace: "Calibri", italic: true, align: "center", margin: 0 });
  s.addText("Informs direction", { x: 1.55, y: 2.0, w: 1.6, h: 0.35, fontSize: 9, color: C.primary, fontFace: "Calibri", italic: true, align: "center", margin: 0 });
  s.addText("Focuses research", { x: 3.4,  y: 3.5, w: 1.8, h: 0.35, fontSize: 9, color: C.primary, fontFace: "Calibri", italic: true, align: "center", margin: 0 });

  // Node shapes
  nodes.forEach(n => {
    s.addShape(pres.shapes.RECTANGLE, { x: n.x, y: n.y, w: n.w, h: n.h, fill: { color: n.color }, line: { color: n.color }, shadow: makeShadow() });
    s.addText(n.label, { x: n.x, y: n.y + 0.1, w: n.w, h: 0.4, fontSize: 13, bold: true, color: C.white, fontFace: "Georgia", align: "center", margin: 0 });
  });

  // Right-side explanation — three spaced blocks
  const pts = [
    { bold: "Strategy → OKRs", rest: "Strategy prevents OKRs from becoming generic metrics — defines the playing field and gives OKRs meaningful context." },
    { bold: "OKRs → Discovery", rest: "Clearly defined OKRs focus discovery on the most critical uncertainties. Without them, discovery sprawls." },
    { bold: "Discovery → Strategy", rest: "Validated problems from discovery refine strategic direction. The wheel turns in both directions." },
  ];
  pts.forEach((p, i) => {
    const ry = 1.3 + i * 1.02;
    s.addShape(pres.shapes.RECTANGLE, { x: 7.72, y: ry, w: 2.1, h: 0.92, fill: { color: C.lightCard }, line: { color: C.paleTeal, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 7.72, y: ry, w: 0.07, h: 0.92, fill: { color: C.accent }, line: { color: C.accent } });
    s.addText(p.bold, { x: 7.88, y: ry + 0.06, w: 1.85, h: 0.28, fontSize: 11, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
    s.addText(p.rest, { x: 7.88, y: ry + 0.36, w: 1.85, h: 0.5, fontSize: 10, color: C.bodyText, fontFace: "Calibri", margin: 0 });
  });

  addQuoteBox(s, '"Just because a user problem exists does not mean that you need to solve it." — Tim Herbig', 0.5, 4.62, 9, 0.72);
}

// ─── SLIDE 07: The Product Trio ──────────────────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Discovery is a team sport, not a PM's job");

  // In-code Venn diagram — three overlapping ovals
  const vx = 0.5, vy = 1.1, ow = 2.4, oh = 2.0;
  const overlaps = 0.7;
  // PM - top left
  s.addShape(pres.shapes.OVAL, { x: vx, y: vy, w: ow, h: oh, fill: { color: C.primary, transparency: 45 }, line: { color: C.primary, width: 1.5 } });
  // Designer - top right
  s.addShape(pres.shapes.OVAL, { x: vx + ow - overlaps, y: vy, w: ow, h: oh, fill: { color: C.secondary, transparency: 45 }, line: { color: C.secondary, width: 1.5 } });
  // Engineer - bottom centre
  s.addShape(pres.shapes.OVAL, { x: vx + (ow - overlaps) / 2, y: vy + oh * 0.55, w: ow, h: oh, fill: { color: C.midTeal, transparency: 45 }, line: { color: C.midTeal, width: 1.5 } });

  s.addText("Product\nManager", { x: vx + 0.1, y: vy + 0.35, w: 1.5, h: 0.7, fontSize: 11, bold: true, color: C.darkBg, fontFace: "Calibri", align: "center", margin: 0 });
  s.addText("Designer", { x: vx + ow - overlaps + 0.85, y: vy + 0.35, w: 1.5, h: 0.7, fontSize: 11, bold: true, color: C.darkBg, fontFace: "Calibri", align: "center", margin: 0 });
  s.addText("Engineer", { x: vx + (ow - overlaps) / 2 + 0.5, y: vy + oh * 0.55 + 1.1, w: 1.5, h: 0.7, fontSize: 11, bold: true, color: C.darkBg, fontFace: "Calibri", align: "center", margin: 0 });
  s.addText("DISCOVERY", { x: vx + (ow - overlaps) / 2 + 0.35, y: vy + 0.95, w: 1.4, h: 0.55, fontSize: 12, bold: true, color: C.darkBg, fontFace: "Georgia", align: "center", margin: 0 });

  // Right-side content
  const roleDescs = [
    { role: "Product Manager", desc: "Owns the outcome. Connects business strategy to customer needs." },
    { role: "Design Lead", desc: "Visualises opportunities and solutions. Leads interview sessions." },
    { role: "Tech Lead", desc: "Assesses feasibility. Brings technical creativity to ideation." },
  ];
  roleDescs.forEach((r, i) => {
    addCard(s, 5.4, 1.1 + i * 1.2, 4.2, 1.05, r.role, r.desc, C.primary);
  });

  addQuoteBox(s, "The trio should discover together, not sequentially. This is what makes the team move fast without moving wrong.", 0.5, 4.7, 9, 0.65);
}

// ─── SLIDE 08: What is an Opportunity? ───────────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Opportunities live in your customers — not in your backlog");

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.6, fill: { color: C.lightCard }, line: { color: C.paleTeal, width: 1 } });
  s.addText("An opportunity is any customer need, pain point, or desire that, if addressed, could help the team achieve its desired outcome.", {
    x: 0.65, y: 1.1, w: 8.7, h: 0.52, fontSize: 13, color: C.bodyText, fontFace: "Calibri", valign: "middle", margin: 0,
  });

  const types = [
    { label: "Needs", color: C.primary,   desc: "What customers are trying to accomplish. The jobs they want done. Often the most stable category — needs change slowly." },
    { label: "Pain Points", color: C.midTeal, desc: "Friction, frustration, or barriers they experience today. High emotional charge — these are the opportunities customers feel most strongly." },
    { label: "Desires", color: C.secondary, desc: "Things they wish existed. Gaps they feel but haven't fully articulated. Often the most creative and differentiated opportunity space." },
  ];
  types.forEach((t, i) => {
    addCard(s, 0.5 + i * 3.1, 1.85, 2.85, 2.15, t.label, t.desc, t.color);
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.18, w: 9, h: 0.45, fill: { color: C.primary }, line: { color: C.primary } });
  s.addText("Opportunities are not solutions — they are the reason a solution would be valuable.", {
    x: 0.65, y: 4.22, w: 8.7, h: 0.38, fontSize: 13, bold: true, color: C.white, fontFace: "Calibri", valign: "middle", margin: 0,
  });

  addQuoteBox(s, "Common mistake: jumping straight to solutions before the opportunity is clearly understood. Teams that skip this step build the right thing for the wrong reason.", 0.5, 4.75, 9, 0.65);
}

// ─── SLIDE 09: The Opportunity Space — in-code tree ───────────────────────
{
  const s = lightSlide();
  addHeader(s, "Mapping the full landscape of customer needs");

  // Tree diagram — clean horizontal tree, left 4.3" of slide
  const treeNW = 1.15, treeNH = 0.42;
  // Outcome node centred in left area (x=0.3 to x=4.3)
  const outX = 1.88, outY = 1.1;
  s.addShape(pres.shapes.RECTANGLE, { x: outX, y: outY, w: treeNW, h: treeNH, fill: { color: C.darkBg }, line: { color: C.darkBg }, shadow: makeShadow() });
  s.addText("Outcome", { x: outX, y: outY, w: treeNW, h: treeNH, fontSize: 11, bold: true, color: C.white, fontFace: "Georgia", align: "center", valign: "middle", margin: 0 });

  // 3 Opportunity nodes — spread horizontally, max x ends at 4.1
  const oppData = [
    { x: 0.3,  label: "Opp A" },
    { x: 1.65, label: "Opp B" },
    { x: 3.0,  label: "Opp C" },
  ];
  const oppY = 1.85;
  const outCX = outX + treeNW / 2, outCY = outY + treeNH;
  oppData.forEach(o => {
    const nCX = o.x + treeNW / 2;
    s.addShape(pres.shapes.LINE, { x: outCX, y: outCY, w: nCX - outCX, h: oppY - outCY, line: { color: C.primary, width: 1.2 } });
    s.addShape(pres.shapes.RECTANGLE, { x: o.x, y: oppY, w: treeNW, h: treeNH, fill: { color: C.primary }, line: { color: C.primary }, shadow: makeShadow() });
    s.addText(o.label, { x: o.x, y: oppY, w: treeNW, h: treeNH, fontSize: 10, color: C.white, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
    // Sub-need
    const subY = oppY + treeNH + 0.35, subW = 1.0, subX = o.x + (treeNW - subW) / 2;
    s.addShape(pres.shapes.LINE, { x: nCX, y: oppY + treeNH, w: 0, h: subY - (oppY + treeNH), line: { color: C.secondary, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x: subX, y: subY, w: subW, h: 0.38, fill: { color: C.lightCard }, line: { color: C.secondary, width: 1 } });
    s.addText("Sub-need", { x: subX, y: subY, w: subW, h: 0.38, fontSize: 9, color: C.primary, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
  });

  // Right column — properties
  const props = [
    { label: "Nested", desc: "Broad opportunities contain sub-opportunities, which can be broken down further." },
    { label: "Discovered, not invented", desc: "Opportunities come from customers, not from internal brainstorming sessions." },
    { label: "Evolving", desc: "New interviews surface new opportunities. The space changes over time." },
    { label: "Strategy-filtered", desc: "Only opportunities connected to the current outcome and strategic direction belong in the tree." },
  ];
  props.forEach((p, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 4.5, y: 1.05 + i * 1.0, w: 5.1, h: 0.85, fill: { color: C.white }, line: { color: C.paleTeal, width: 1 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 4.5, y: 1.05 + i * 1.0, w: 0.07, h: 0.85, fill: { color: C.accent }, line: { color: C.accent } });
    s.addText(p.label, { x: 4.68, y: 1.07 + i * 1.0, w: 4.8, h: 0.28, fontSize: 12, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
    s.addText(p.desc, { x: 4.68, y: 1.38 + i * 1.0, w: 4.8, h: 0.45, fontSize: 11, color: C.bodyText, fontFace: "Calibri", margin: 0 });
  });
}

// ─── SLIDE 10: OST Overview — in-code four-layer tree ──────────────────────
{
  const s = lightSlide();
  addHeader(s, "One diagram to connect outcome, opportunities, solutions, and tests");

  // 4-layer OST diagram — left 5 inches
  const lx = 0.3;

  // Layer 1: Outcome (1 node)
  s.addShape(pres.shapes.RECTANGLE, { x: lx + 1.1, y: 1.05, w: 2.3, h: 0.5, fill: { color: C.darkBg }, line: { color: C.darkBg }, shadow: makeShadow() });
  s.addText("OUTCOME", { x: lx + 1.1, y: 1.05, w: 2.3, h: 0.5, fontSize: 12, bold: true, color: C.white, fontFace: "Georgia", align: "center", valign: "middle", margin: 0 });

  // Layer 2: Opportunities (3 nodes)
  const oppY = 1.85;
  const oppXs = [lx + 0.05, lx + 1.55, lx + 3.05];
  oppXs.forEach(ox => {
    s.addShape(pres.shapes.LINE, { x: lx + 2.25, y: 1.55, w: ox + 0.85 - (lx + 2.25), h: oppY - 1.55, line: { color: C.primary, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x: ox, y: oppY, w: 1.5, h: 0.42, fill: { color: C.primary }, line: { color: C.primary } });
    s.addText("Opportunity", { x: ox, y: oppY, w: 1.5, h: 0.42, fontSize: 10, color: C.white, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
  });

  // Layer 3: Solutions (1 per opportunity)
  const solY = 2.6;
  oppXs.forEach(ox => {
    s.addShape(pres.shapes.LINE, { x: ox + 0.75, y: oppY + 0.42, w: 0, h: solY - (oppY + 0.42), line: { color: C.secondary, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x: ox + 0.1, y: solY, w: 1.3, h: 0.38, fill: { color: C.secondary }, line: { color: C.secondary } });
    s.addText("Solution", { x: ox + 0.1, y: solY, w: 1.3, h: 0.38, fontSize: 10, color: C.white, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
  });

  // Layer 4: Assumptions
  const assY = 3.3;
  oppXs.forEach(ox => {
    s.addShape(pres.shapes.LINE, { x: ox + 0.75, y: solY + 0.38, w: 0, h: assY - (solY + 0.38), line: { color: C.accent, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x: ox + 0.15, y: assY, w: 1.2, h: 0.35, fill: { color: C.lightCard }, line: { color: C.accent, width: 1.5 } });
    s.addText("Assumption", { x: ox + 0.15, y: assY, w: 1.2, h: 0.35, fontSize: 9, color: C.primary, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
  });

  // Layer labels on right
  const layers = [
    { y: 1.05, label: "Layer 1", color: C.darkBg, desc: "Desired outcome — defines scope" },
    { y: 1.85, label: "Layer 2", color: C.primary, desc: "Opportunities — customer needs" },
    { y: 2.6,  label: "Layer 3", color: C.secondary, desc: "Solutions — ideas to test" },
    { y: 3.3,  label: "Layer 4", color: C.accent, desc: "Assumptions & experiments" },
  ];
  layers.forEach(l => {
    s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: l.y, w: 0.9, h: 0.4, fill: { color: l.color }, line: { color: l.color } });
    s.addText(l.label, { x: 5.1, y: l.y, w: 0.9, h: 0.4, fontSize: 10, bold: true, color: C.white, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
    s.addText(l.desc, { x: 6.1, y: l.y + 0.03, w: 3.5, h: 0.38, fontSize: 11, color: C.bodyText, fontFace: "Calibri", valign: "middle", margin: 0 });
  });

  addQuoteBox(s, "The OST is never finished. It is a map of what the team currently knows — and doesn't know. It replaces the feature roadmap during discovery.", 0.3, 3.9, 9.3, 0.75);
}

// ─── SLIDE 11: OST Layer 1 — The Outcome ─────────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Start with the outcome — everything else follows", "OST Layer 1");

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.55, fill: { color: C.darkBg }, line: { color: C.darkBg } });
  s.addText("The outcome is the business need the team has been asked to address. It defines the scope of discovery and determines which opportunities are relevant.", {
    x: 0.65, y: 1.1, w: 8.7, h: 0.47, fontSize: 12, color: C.white, fontFace: "Calibri", valign: "middle", margin: 0,
  });

  const critera = ["Measurable — changes in a way the team can detect", "Connected to customer behaviour — not internal activity", "Owned by the team — not handed down as a feature request", "Derived from strategy — reflects the playing field the business has chosen"];
  const cItems = critera.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < critera.length - 1, color: C.bodyText } }));
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.75, w: 4.2, h: 1.75, fill: { color: C.white }, line: { color: C.paleTeal, width: 1 }, shadow: makeShadow() });
  s.addText("A good outcome is:", { x: 0.65, y: 1.82, w: 3.9, h: 0.35, fontSize: 12, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
  s.addText(cItems, { x: 0.65, y: 2.2, w: 3.9, h: 1.22, fontSize: 11, fontFace: "Calibri", paraSpaceAfter: 3, margin: 0 });

  const exRows = [
    ["Weak (output-framed)", "Strong (outcome-framed)"],
    ["Launch onboarding flow v2", "Increase 30-day retention from 40% to 55%"],
    ["Build reporting dashboard", "Increase weekly active usage by power users"],
    ["Redesign checkout", "Reduce cart abandonment by 15%"],
  ];
  const exTable = exRows.map((r, ri) => r.map((cell, ci) => ({
    text: cell,
    options: {
      bold: ri === 0,
      color: ri === 0 ? C.white : (ci === 0 ? "8B1A1A" : "1A5C4A"),
      fill: { color: ri === 0 ? (ci === 0 ? "8B1A1A" : C.primary) : (ri % 2 === 0 ? C.white : C.lightCard) },
      fontFace: ri === 0 ? "Georgia" : "Calibri",
      fontSize: ri === 0 ? 11 : 11,
    },
  })));
  s.addTable(exTable, { x: 4.9, y: 1.75, w: 4.7, colW: [2.35, 2.35], rowH: 0.44, border: { pt: 0.5, color: C.paleTeal } });

  addQuoteBox(s, "If the team can't explain why this outcome matters strategically, that's a signal the strategy work needs to happen first.", 0.5, 3.65, 9, 0.65);
}

// ─── SLIDE 12: OST Layer 2 — Opportunities ────────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Opportunities are discovered — not invented", "OST Layer 2");

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.52, fill: { color: C.lightCard }, line: { color: C.paleTeal, width: 1 } });
  s.addText("Opportunities emerge from customer interviews. Each interview surfaces real stories — and within those stories are the needs, pain points, and desires that form the opportunity space.", {
    x: 0.65, y: 1.1, w: 8.7, h: 0.44, fontSize: 12, color: C.bodyText, fontFace: "Calibri", valign: "middle", margin: 0,
  });

  s.addText("How to evaluate an opportunity:", { x: 0.5, y: 1.75, w: 4.0, h: 0.35, fontSize: 13, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
  const evals = [
    { q: "Is it real?", a: "Based on actual customer behaviour, not stated preference" },
    { q: "Is it big enough?", a: "How many customers have this need? How often does it occur?" },
    { q: "Is it connected to the outcome?", a: "Would solving this plausibly drive the metric?" },
    { q: "Is it on the playing field?", a: "Does it align with the team's strategic direction? (Herbig)" },
  ];
  evals.forEach((e, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.15 + i * 0.62, w: 4.2, h: 0.55, fill: C.white, line: { color: C.paleTeal, width: 1 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.15 + i * 0.62, w: 0.5, h: 0.55, fill: { color: C.primary }, line: { color: C.primary } });
    s.addText(`${i + 1}`, { x: 0.5, y: 2.15 + i * 0.62, w: 0.5, h: 0.55, fontSize: 14, bold: true, color: C.white, fontFace: "Georgia", align: "center", valign: "middle", margin: 0 });
    s.addText(e.q, { x: 1.1, y: 2.17 + i * 0.62, w: 3.5, h: 0.25, fontSize: 11, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
    s.addText(e.a, { x: 1.1, y: 2.42 + i * 0.62, w: 3.5, h: 0.25, fontSize: 10, color: C.bodyText, fontFace: "Calibri", margin: 0 });
  });

  s.addText("Building the opportunity space:", { x: 5.0, y: 1.75, w: 4.5, h: 0.35, fontSize: 13, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
  const steps = [
    "Run weekly customer interviews",
    "After each interview, capture opportunities surfaced",
    "Add to the OST under the relevant parent opportunity",
    "Over time, the map fills in and patterns emerge",
  ];
  const stepItems = steps.map((t, i) => ({ text: t, options: { bullet: { type: "number" }, breakLine: i < steps.length - 1, color: C.bodyText } }));
  s.addText(stepItems, { x: 5.0, y: 2.15, w: 4.5, h: 2.0, fontSize: 12, fontFace: "Calibri", paraSpaceAfter: 6, margin: 0 });

  addQuoteBox(s, "Internal ideas can surface hypotheses — but opportunities must be validated by customer evidence before they earn a place in the tree.", 0.5, 4.65, 9, 0.65);
}

// ─── SLIDE 13: OST Layer 3 — Solutions ────────────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Generate many solutions. Commit to none — yet.", "OST Layer 3");

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.52, fill: { color: C.primary }, line: { color: C.primary } });
  s.addText("For each opportunity you target, generate at least three distinct solutions before evaluating any of them.", {
    x: 0.65, y: 1.1, w: 8.7, h: 0.44, fontSize: 13, bold: true, color: C.white, fontFace: "Calibri", valign: "middle", margin: 0,
  });

  const whys = [
    { label: "One solution", sub: "is a bet", color: "8B1A1A" },
    { label: "Two solutions", sub: "is a dilemma", color: C.midTeal },
    { label: "Three solutions", sub: "opens creative comparison", color: "1A5C4A" },
  ];
  whys.forEach((w, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + i * 3.1, y: 1.75, w: 2.85, h: 1.0, fill: { color: C.white }, line: { color: C.paleTeal, width: 1 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + i * 3.1, y: 1.75, w: 2.85, h: 0.08, fill: { color: w.color }, line: { color: w.color } });
    s.addText(w.label, { x: 0.62 + i * 3.1, y: 1.88, w: 2.6, h: 0.38, fontSize: 13, bold: true, color: C.bodyText, fontFace: "Georgia", align: "center", margin: 0 });
    s.addText(w.sub, { x: 0.62 + i * 3.1, y: 2.28, w: 2.6, h: 0.35, fontSize: 12, color: w.color, fontFace: "Calibri", italic: true, align: "center", margin: 0 });
  });

  s.addText("How to generate good solutions:", { x: 0.5, y: 2.92, w: 9, h: 0.35, fontSize: 13, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
  const tips = [
    "Time-box ideation — 15 to 20 minutes per opportunity",
    "Include the full trio — engineers see technical possibilities designers miss, and vice versa",
    "Think across modalities: UI change, notification, onboarding, pricing, workflow, integration",
  ];
  const tipItems = tips.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < tips.length - 1, color: C.bodyText } }));
  s.addText(tipItems, { x: 0.5, y: 3.32, w: 9, h: 1.0, fontSize: 12, fontFace: "Calibri", paraSpaceAfter: 5, margin: 0 });

  addQuoteBox(s, "If you have only one solution under an opportunity in the OST, you haven't really ideated yet.", 0.5, 4.58, 9, 0.7);
}

// ─── SLIDE 14: OST Layer 4 — Assumptions & Experiments ────────────────────
{
  const s = lightSlide();
  addHeader(s, "What must be true for this solution to work?", "OST Layer 4");

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.48, fill: { color: C.lightCard }, line: { color: C.paleTeal, width: 1 } });
  s.addText("An assumption is any belief the team holds that, if false, would cause the solution to fail.", {
    x: 0.65, y: 1.1, w: 8.7, h: 0.4, fontSize: 13, bold: false, color: C.bodyText, fontFace: "Calibri", valign: "middle", margin: 0,
  });

  const assTypes = [
    { label: "Desirability", desc: "Do customers want this?", color: C.primary },
    { label: "Viability",    desc: "Does it work for the business?", color: C.midTeal },
    { label: "Feasibility",  desc: "Can the team build it?", color: C.secondary },
    { label: "Usability",    desc: "Can customers use it effectively?", color: C.darkBg },
  ];
  assTypes.forEach((a, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + i * 2.3, y: 1.65, w: 2.1, h: 1.05, fill: { color: C.white }, line: { color: C.paleTeal, width: 1 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + i * 2.3, y: 1.65, w: 2.1, h: 0.3, fill: { color: a.color }, line: { color: a.color } });
    s.addText(a.label, { x: 0.55 + i * 2.3, y: 1.67, w: 2.0, h: 0.28, fontSize: 11, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
    s.addText(a.desc, { x: 0.55 + i * 2.3, y: 2.0, w: 2.0, h: 0.62, fontSize: 11, color: C.bodyText, fontFace: "Calibri", margin: 0 });
  });

  const steps14 = [
    "List all assumptions behind each of your top solutions",
    "Identify the riskiest assumption — the one that, if false, kills the solution",
    "Design the smallest possible test to evaluate it",
    "Run the test, collect evidence, update the OST",
  ];
  s.addText("Testing process:", { x: 0.5, y: 2.85, w: 9, h: 0.35, fontSize: 13, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
  const stepItems14 = steps14.map((t, i) => ({ text: t, options: { bullet: { type: "number" }, breakLine: i < steps14.length - 1 } }));
  s.addText(stepItems14, { x: 0.5, y: 3.22, w: 9, h: 0.95, fontSize: 12, color: C.bodyText, fontFace: "Calibri", paraSpaceAfter: 4, margin: 0 });

  addQuoteBox(s, "Test your riskiest assumption first. If it fails, you've saved the cost of building the wrong thing.", 0.5, 4.45, 9, 0.7);
}

// ─── SLIDE 15: Continuous Interviewing ────────────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Talk to at least one customer every week. No exceptions.");

  // Cadence bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.7, fill: { color: C.primary }, line: { color: C.primary } });
  s.addText("Minimum: 1 interview / week per trio    ·    Ideal: 2–3 / week    ·    Duration: 30–60 min", {
    x: 0.65, y: 1.13, w: 8.7, h: 0.54, fontSize: 13, bold: true, color: C.white, fontFace: "Calibri", align: "center", valign: "middle", margin: 0,
  });

  const blocks = [
    { label: "Who recruits?", body: "Build an ongoing opt-in pool of customers willing to talk regularly — a continuous interview pipeline. Don't recruit from scratch each week.", color: C.primary },
    { label: "Who attends?", body: "All three members of the product trio. Not observers behind glass. Not a researcher relaying findings. The full trio on every call.", color: C.midTeal },
  ];
  blocks.forEach((b, i) => {
    addCard(s, 0.5 + i * 4.8, 1.95, 4.5, 1.2, b.label, b.body, b.color);
  });

  s.addText("Why weekly?", { x: 0.5, y: 3.82, w: 9, h: 0.35, fontSize: 13, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
  const whys15 = ["Insights stay fresh — decisions are based on recent reality", "Patterns emerge faster — the team builds genuine customer intuition", "Assumptions are challenged before they become baked-in decisions"];
  const whyItems15 = whys15.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < whys15.length - 1 } }));
  s.addText(whyItems15, { x: 0.5, y: 4.2, w: 9, h: 1.0, fontSize: 12, color: C.bodyText, fontFace: "Calibri", paraSpaceAfter: 4, margin: 0 });
}

// ─── SLIDE 16: Story-Based Questions ──────────────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Ask about the past. Never ask about the future.");

  addQuoteBox(s, '"Tell me about the last time you [experienced this situation]."', 0.5, 1.05, 9, 0.72);

  // Left — follow-up probes
  s.addText("Follow-up probes:", { x: 0.5, y: 1.95, w: 4.2, h: 0.35, fontSize: 13, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
  const probes = ['"What happened right before that?"', '"What did you do next?"', '"How did you feel at that point?"', '"What were you hoping would happen?"'];
  const probeItems = probes.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < probes.length - 1, italic: true, color: C.bodyText } }));
  s.addText(probeItems, { x: 0.5, y: 2.35, w: 4.2, h: 1.8, fontSize: 12, fontFace: "Calibri", paraSpaceAfter: 6, margin: 0 });

  // Right — avoid
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 1.95, w: 4.2, h: 0.35, fill: { color: "8B1A1A" }, line: { color: "8B1A1A" } });
  s.addText("AVOID THESE", { x: 5.4, y: 1.98, w: 4.0, h: 0.28, fontSize: 12, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  const avoids = [
    { q: '"Would you use a feature that…?"', r: "hypothetical — not real behaviour" },
    { q: '"How often do you…?"', r: "generalisation, not specific story" },
    { q: '"What do you want?"', r: "solution-seeking, not need-seeking" },
  ];
  avoids.forEach((a, i) => {
    s.addText([
      { text: a.q, options: { italic: true, color: "8B1A1A" } },
      { text: `  — ${a.r}`, options: { color: C.muted } },
    ], { x: 5.3, y: 2.45 + i * 0.48, w: 4.2, h: 0.42, fontSize: 11, fontFace: "Calibri", margin: 0 });
    if (i < avoids.length - 1) s.addShape(pres.shapes.LINE, { x: 5.3, y: 2.87 + i * 0.48, w: 4.2, h: 0, line: { color: C.paleTeal, width: 0.5 } });
  });

  addQuoteBox(s, "Stories reveal behaviour as it actually happened. When customers describe what they did, they can't retrofit the answer they think you want to hear.", 0.5, 4.55, 9, 0.72);
}

// ─── SLIDE 17: The Interview Snapshot ─────────────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Synthesise immediately. Don't let insights get lost.");

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.52, fill: { color: C.lightCard }, line: { color: C.paleTeal, width: 1 } });
  s.addText("An interview snapshot is a single-page document completed immediately after each interview. It captures the story and the opportunities it surfaced.", {
    x: 0.65, y: 1.1, w: 8.7, h: 0.44, fontSize: 12, color: C.bodyText, fontFace: "Calibri", valign: "middle", margin: 0,
  });

  const snapSteps = [
    { n: "1", label: "Customer context", desc: "Who they are, their role, their situation" },
    { n: "2", label: "The story", desc: "A brief narrative of the experience from the interview, in sequence" },
    { n: "3", label: "Opportunities surfaced", desc: "Needs, pain points, or desires that emerged from the story" },
    { n: "4", label: "Key quotes", desc: "Direct quotes from the customer that carry the most signal" },
    { n: "5", label: "OST additions", desc: "Which opportunities to add or update in the tree" },
  ];
  snapSteps.forEach((st, i) => {
    const x = 0.5 + (i % 3) * 3.1, y = i < 3 ? 1.75 : 2.95;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.9, h: 1.05, fill: { color: C.white }, line: { color: C.paleTeal, width: 1 }, shadow: makeShadow() });
    s.addShape(pres.shapes.OVAL, { x: x + 0.12, y: y + 0.2, w: 0.45, h: 0.45, fill: { color: C.primary }, line: { color: C.primary } });
    s.addText(st.n, { x: x + 0.12, y: y + 0.2, w: 0.45, h: 0.45, fontSize: 13, bold: true, color: C.white, fontFace: "Georgia", align: "center", valign: "middle", margin: 0 });
    s.addText(st.label, { x: x + 0.65, y: y + 0.18, w: 2.1, h: 0.32, fontSize: 11, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
    s.addText(st.desc, { x: x + 0.65, y: y + 0.5, w: 2.1, h: 0.5, fontSize: 10, color: C.bodyText, fontFace: "Calibri", margin: 0 });
  });

  addQuoteBox(s, "Complete the snapshot within one hour of the interview. Many teams block 15 minutes immediately after the call. A library of snapshots is one of the most valuable assets a product team can build.", 0.5, 4.42, 9, 0.82);
}

// ─── SLIDE 18: Assumption Testing ─────────────────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Don't build. Test.");

  const testSteps = [
    { q: "What must be true for this solution to work?", label: "1. List assumptions" },
    { q: "Which assumption, if false, kills this solution?", label: "2. Rank by risk" },
    { q: "What is the smallest way to evaluate it?", label: "3. Design the test" },
    { q: "What evidence would change our mind?", label: "4. Set a threshold" },
    { q: "Did we get that evidence?", label: "5. Run and evaluate" },
  ];
  testSteps.forEach((st, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05 + i * 0.6, w: 9, h: 0.54, fill: { color: i % 2 === 0 ? C.white : C.lightCard }, line: { color: C.paleTeal, width: 0.5 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05 + i * 0.6, w: 2.1, h: 0.54, fill: { color: C.primary }, line: { color: C.primary } });
    s.addText(st.label, { x: 0.58, y: 1.08 + i * 0.6, w: 2.0, h: 0.46, fontSize: 11, bold: true, color: C.white, fontFace: "Calibri", valign: "middle", margin: 0 });
    s.addText(st.q, { x: 2.75, y: 1.08 + i * 0.6, w: 6.6, h: 0.46, fontSize: 12, color: C.bodyText, fontFace: "Calibri", valign: "middle", margin: 0 });
  });

  s.addText("Types of tests:", { x: 0.5, y: 4.1, w: 2.0, h: 0.35, fontSize: 12, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
  const types18 = [
    { label: "Fake door", desc: "Does anyone click on something that doesn't exist yet?" },
    { label: "Concept test", desc: "Show a sketch to 5 customers — does it make sense?" },
    { label: "Data analysis", desc: "Does the assumed behaviour pattern exist in the data?" },
    { label: "Wizard of Oz", desc: "Manually simulate the experience before automating" },
  ];
  types18.forEach((t, i) => {
    s.addText([
      { text: `${t.label}: `, options: { bold: true, color: C.primary } },
      { text: t.desc, options: { color: C.bodyText } },
    ], { x: 2.65 + (i % 2) * 3.65, y: 4.1 + Math.floor(i / 2) * 0.52, w: 3.5, h: 0.48, fontSize: 11, fontFace: "Calibri", margin: 0 });
  });
}

// ─── SLIDE 19: Prioritising Opportunities — in-code 2×2 ─────────────────
{
  const s = lightSlide();
  addHeader(s, "You can't solve everything. Choose well.");

  // 2×2 Matrix — left
  const mx = 0.5, my = 1.1, mw = 4.0, mh = 3.6;
  const qw = mw / 2, qh = mh / 2;

  // Quadrant fills
  const quads = [
    { x: mx,      y: my,      fill: C.primary,  label: "TARGET\nOPPORTUNITY", lcolor: C.white },
    { x: mx + qw, y: my,      fill: C.lightCard, label: "Monitor", lcolor: C.muted },
    { x: mx,      y: my + qh, fill: C.lightCard, label: "Deprioritise", lcolor: C.muted },
    { x: mx + qw, y: my + qh, fill: C.lightCard, label: "Table for now", lcolor: C.muted },
  ];
  quads.forEach(q => {
    s.addShape(pres.shapes.RECTANGLE, { x: q.x, y: q.y, w: qw, h: qh, fill: { color: q.fill }, line: { color: C.paleTeal, width: 1 } });
    s.addText(q.label, { x: q.x + 0.1, y: q.y + qh / 2 - 0.25, w: qw - 0.2, h: 0.5, fontSize: 12, bold: true, color: q.lcolor, fontFace: "Georgia", align: "center", margin: 0 });
  });
  // Dot in target quadrant — bottom-right of the quadrant, away from text
  s.addShape(pres.shapes.OVAL, { x: mx + qw * 0.7, y: my + qh * 0.72, w: 0.28, h: 0.28, fill: { color: C.accent }, line: { color: C.accent } });

  // Axis labels — Y axis left of matrix, X axis below matrix
  // Y-axis: centre at (mx - 0.22, my + mh/2); textbox w=mh h=0.3 rotated 270
  s.addText("High ↑ Importance ↓ Low", { x: mx - 0.22 - mh / 2, y: my + mh / 2 - 0.15, w: mh, h: 0.3, fontSize: 10, color: C.primary, fontFace: "Calibri", bold: true, rotate: 270, align: "center", margin: 0 });
  s.addText("Low ← Satisfaction (current) → High", { x: mx, y: my + mh + 0.1, w: mw, h: 0.3, fontSize: 10, color: C.primary, fontFace: "Calibri", bold: true, align: "center", margin: 0 });

  // Right — evaluation criteria
  s.addText("How to evaluate an opportunity:", { x: 4.8, y: 1.1, w: 4.8, h: 0.38, fontSize: 13, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
  const criteria19 = [
    { label: "Opportunity size", desc: "How many customers are affected? How frequently does this occur?" },
    { label: "Business value", desc: "How strongly is this opportunity connected to the team's outcome metric?" },
    { label: "Satisfaction gap", desc: "How poorly is this need currently being met? High gap = high opportunity." },
  ];
  criteria19.forEach((c, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 4.8, y: 1.55 + i * 0.92, w: 4.8, h: 0.82, fill: { color: C.white }, line: { color: C.paleTeal, width: 1 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 4.8, y: 1.55 + i * 0.92, w: 0.07, h: 0.82, fill: { color: C.accent }, line: { color: C.accent } });
    s.addText(c.label, { x: 4.98, y: 1.58 + i * 0.92, w: 4.5, h: 0.28, fontSize: 12, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
    s.addText(c.desc, { x: 4.98, y: 1.87 + i * 0.92, w: 4.5, h: 0.42, fontSize: 11, color: C.bodyText, fontFace: "Calibri", margin: 0 });
  });

  addQuoteBox(s, "The key move: identify ONE target opportunity per cycle. This creates clarity and prevents spreading effort too thin.", 0.5, 4.55, 9, 0.72);
}

// ─── SLIDE 20: Full Discovery Loop — in-code circular ─────────────────────
{
  const s = lightSlide();
  addHeader(s, "The cycle that never stops");

  // 8 steps in two rows (4+4), connected with arrows
  const loopSteps = [
    "Set Outcome\n(Strategy + OKRs)",
    "Interview\nCustomers",
    "Map to\nOpportunity Space",
    "Select Target\nOpportunity",
    "Generate\n3+ Solutions",
    "Test\nAssumptions",
    "Build if\nValidated",
    "Measure\nOutcome Impact",
  ];
  const cols = 4;
  const stepW = 1.95, stepH = 0.72, startX = 0.5, row1Y = 1.1, row2Y = 2.6;
  const gap = 0.1;
  const totalW = cols * stepW + (cols - 1) * gap;
  const offsetX = (9.0 - totalW) / 2;

  loopSteps.forEach((label, i) => {
    const row = Math.floor(i / cols);
    const col = row === 0 ? i : (cols - 1 - (i - cols));
    const x = startX + offsetX + col * (stepW + gap);
    const y = row === 0 ? row1Y : row2Y;
    const isFirst = i === 0;
    const bgColor = isFirst ? C.darkBg : (i < 4 ? C.primary : C.midTeal);
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: stepW, h: stepH, fill: { color: bgColor }, line: { color: bgColor }, shadow: makeShadow() });
    s.addText(label, { x: x + 0.08, y, w: stepW - 0.08, h: stepH, fontSize: 10, bold: false, color: C.white, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
    s.addText(`${i + 1}`, { x: x + stepW - 0.22, y: y + 0.03, w: 0.18, h: 0.2, fontSize: 8, color: C.accent, fontFace: "Calibri", bold: true, align: "right", margin: 0 });
    // Row 1 horizontal arrows →
    if (row === 0 && i < cols - 1) {
      s.addShape(pres.shapes.LINE, { x: x + stepW, y: y + stepH / 2, w: gap, h: 0, line: { color: C.accent, width: 2 } });
    }
    // Row 2 horizontal arrows ← (right-to-left)
    if (row === 1 && i < loopSteps.length - 1) {
      s.addShape(pres.shapes.LINE, { x: x - gap, y: y + stepH / 2, w: gap, h: 0, line: { color: C.accent, width: 2 } });
    }
  });
  // Down arrow right side — row1 end to row2 end
  const rightX = startX + offsetX + (cols - 1) * (stepW + gap) + stepW;
  const sideGapH = row2Y - (row1Y + stepH);
  s.addShape(pres.shapes.LINE, { x: rightX + 0.18, y: row1Y + stepH, w: 0, h: sideGapH, line: { color: C.accent, width: 2.5 } });
  s.addText("↓", { x: rightX + 0.05, y: row1Y + stepH + sideGapH / 2 - 0.2, w: 0.35, h: 0.4, fontSize: 20, color: C.accent, fontFace: "Calibri", align: "center", margin: 0 });
  // Up arrow left side — row2 start back to row1 start
  s.addShape(pres.shapes.LINE, { x: startX + offsetX - 0.22, y: row2Y, w: 0, h: -sideGapH, line: { color: C.accent, width: 2.5 } });
  s.addText("↑", { x: startX + offsetX - 0.38, y: row1Y + stepH + sideGapH / 2 - 0.2, w: 0.35, h: 0.4, fontSize: 20, color: C.accent, fontFace: "Calibri", align: "center", margin: 0 });

  const props20 = [
    "Runs in parallel with delivery — not before or after",
    "The outcome may evolve as strategy evolves; the loop adapts",
    "Each cycle makes the team sharper — better interviews, better OSTs, faster tests",
  ];
  const propItems20 = props20.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < props20.length - 1 } }));
  s.addText(propItems20, { x: 0.5, y: 3.85, w: 9, h: 0.85, fontSize: 12, color: C.bodyText, fontFace: "Calibri", paraSpaceAfter: 4, margin: 0 });
}

// ─── SLIDE 21: Cybersecurity Perspective ──────────────────────────────────
{
  const s = lightSlide();
  addHeader(s, "Security products have users too — discover what they actually need", "Domain Perspective");

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.05, w: 9, h: 0.52, fill: { color: C.primary }, line: { color: C.primary } });
  s.addText("Security products are built for threat models — not for the humans who operate them. Continuous discovery fixes this.", {
    x: 0.65, y: 1.1, w: 8.7, h: 0.44, fontSize: 13, color: C.white, fontFace: "Calibri", bold: true, valign: "middle", margin: 0,
  });

  // Customer type table
  const custRows = [
    ["Customer type", "Examples", "Key discovery focus"],
    ["Internal operators", "SOC analysts, incident responders", "Alert fatigue, investigation workflow friction"],
    ["External buyers", "CISOs, IT managers", "Risk visibility, audit trails, reporting pain"],
    ["End users", "Employees using security-facing products", "Auth friction, unclear policies, compliance burden"],
  ];
  const custTable = custRows.map((r, ri) => r.map((cell, ci) => ({
    text: cell,
    options: {
      bold: ri === 0,
      color: ri === 0 ? C.white : C.bodyText,
      fill: { color: ri === 0 ? C.darkBg : (ri % 2 === 0 ? C.white : C.lightCard) },
      fontFace: ri === 0 ? "Georgia" : "Calibri",
      fontSize: 11,
    },
  })));
  s.addTable(custTable, { x: 0.5, y: 1.7, w: 9, colW: [2.2, 2.8, 4.0], rowH: 0.42, border: { pt: 0.5, color: C.paleTeal } });

  const specialPts = [
    { label: "Consent & data sensitivity", desc: "Interviews about security workflows may surface sensitive details. Obtain explicit consent; anonymise snapshots." },
    { label: "Shadow IT = highest signal", desc: "When users work around security tooling, that is your most important discovery finding — not a compliance failure." },
    { label: "Threat modeling ≈ assumption testing", desc: "Both ask 'what must be true for this to be safe/effective?' and identify where the critical risk lives." },
    { label: "Add a 5th assumption type: Security", desc: "Could a malicious actor exploit this solution pathway? Add this to Desirability, Viability, Feasibility, Usability." },
  ];
  specialPts.forEach((p, i) => {
    const x = 0.5 + (i % 2) * 4.6, y = 3.55 + Math.floor(i / 2) * 0.72;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.4, h: 0.65, fill: { color: C.white }, line: { color: C.paleTeal, width: 1 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.07, h: 0.65, fill: { color: C.accent }, line: { color: C.accent } });
    s.addText(p.label, { x: x + 0.17, y: y + 0.04, w: 4.1, h: 0.25, fontSize: 11, bold: true, color: C.primary, fontFace: "Calibri", margin: 0 });
    s.addText(p.desc, { x: x + 0.17, y: y + 0.3, w: 4.1, h: 0.3, fontSize: 10, color: C.bodyText, fontFace: "Calibri", margin: 0 });
  });
}

// ─── SLIDE 22: Getting Started + Key Takeaways ───────────────────────────
{
  const s = darkSlide();
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent }, line: { color: C.accent } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.545, w: 10, h: 0.08, fill: { color: C.accent }, line: { color: C.accent } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.08, w: 0.4, h: 5.465, fill: { color: C.primary }, line: { color: C.primary } });

  s.addText("Start small. Start now.\nDon't wait for perfect.", { x: 0.65, y: 0.2, w: 9.1, h: 1.1, fontSize: 28, bold: true, color: C.white, fontFace: "Georgia", margin: 0 });

  const actions = [
    { n: "1", label: "Anchor to strategy", desc: "Connect the team's outcome to the company's strategic narrative. Unclear link = do that work first." },
    { n: "2", label: "Schedule one interview", desc: "Don't design a programme. Book one 30-minute call with a customer this week." },
    { n: "3", label: "Draw an OST", desc: "Even two or three opportunities. Making the tree visible changes how the team thinks." },
    { n: "4", label: "Name three assumptions", desc: "Pick your most confident solution. List three things that must be true for it to work." },
    { n: "5", label: "Hold the weekly rhythm", desc: "Block 30 minutes per week as discovery time. Protect it like a standup." },
  ];
  actions.forEach((a, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.65, y: 1.42 + i * 0.68, w: 9.1, h: 0.62, fill: { color: "02222A" }, line: { color: C.primary, width: 0.5 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.65, y: 1.42 + i * 0.68, w: 0.45, h: 0.62, fill: { color: C.accent }, line: { color: C.accent } });
    s.addText(a.n, { x: 0.65, y: 1.42 + i * 0.68, w: 0.45, h: 0.62, fontSize: 16, bold: true, color: C.darkBg, fontFace: "Georgia", align: "center", valign: "middle", margin: 0 });
    s.addText(a.label, { x: 1.2, y: 1.45 + i * 0.68, w: 2.2, h: 0.28, fontSize: 12, bold: true, color: C.accent, fontFace: "Calibri", margin: 0 });
    s.addText(a.desc, { x: 1.2, y: 1.72 + i * 0.68, w: 8.4, h: 0.28, fontSize: 11, color: C.paleTeal, fontFace: "Calibri", margin: 0 });
  });

  s.addText("Further reading: Continuous Discovery Habits — Teresa Torres  ·  Real Progress — Tim Herbig  ·  producttalk.org", {
    x: 0.65, y: 5.3, w: 9.1, h: 0.28, fontSize: 9, color: C.muted, fontFace: "Calibri", align: "center", italic: true, margin: 0,
  });
}

// ─── Write final file ─────────────────────────────────────────────────────
pres.writeFile({ fileName: "continuous-discovery-intro.pptx" })
  .then(() => console.log("Done: continuous-discovery-intro.pptx (22 slides)"))
  .catch(e => console.error(e));

