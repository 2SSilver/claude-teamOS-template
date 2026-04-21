---
name: skill-writer
description: Guide users through creating Agent Skills for Claude Code. Use when the user wants to create, write, author, or design a new Skill, or needs help with SKILL.md files, frontmatter, or skill structure.
allowed-tools: Read, Write, Edit, Glob, Bash
---

# Skill Writer

This Skill helps create well-structured Agent Skills for Claude Code that follow best practices and validation requirements.

## When to use this Skill

Use this Skill when:
- Creating a new Agent Skill
- Writing or updating SKILL.md files
- Designing skill structure and frontmatter
- Troubleshooting skill discovery issues
- Converting existing prompts or workflows into Skills

## Instructions

### Step 1: Clarify scope — ask one question at a time

Before writing anything, ask clarifying questions one at a time and wait for a complete answer before asking the next:

1. What specific capability should this Skill provide?
2. When should Claude use this Skill? What would Stefan say to trigger it?
3. What tools or resources does it need?
4. Is this for personal use (`~/.claude/skills/`) or PAI-wide (`.claude/skills/` in the PAI project)?

Keep it focused: **one Skill = one capability**
- Good: "PDF form filling", "security digest generation"
- Too broad: "Document processing", "Data tools"

### Step 2: Confirm the plan before writing any files

After gathering requirements, present a short plan to Stefan covering:
- Proposed skill name
- Location
- Proposed file structure (single file or multi-file)
- Summary of what the SKILL.md will instruct Claude to do

**Wait for approval before creating any files or directories.**

### Step 3: Choose Skill location

**Personal Skills** (`~/.claude/skills/`):
- Individual workflows not shared across PAI projects
- Experimental or work-in-progress Skills
- Tools tied to personal preferences

**PAI-wide Skills** (`/Users/stefan.silver/projects/PAI/.claude/skills/`):
- Skills that should be available across all PAI projects
- The correct location for most new Skills in this workspace
- Examples already here: `skill-writer`, `sec-digest`, `prime`, `create-plan`, `implement`, `pptx`, `claude-api`, `simplify`

**Project-specific Skills** (`.claude/skills/` inside a project directory):
- Workflows specific to a single project
- Committed to git if that project is a repo

### Step 4: Create Skill structure

```bash
# PAI-wide (most common)
mkdir -p /Users/stefan.silver/projects/PAI/.claude/skills/skill-name

# Personal
mkdir -p ~/.claude/skills/skill-name
```

For multi-file Skills:
```
skill-name/
├── SKILL.md        (required)
├── reference.md    (optional — detailed docs, advanced options)
├── examples.md     (optional — extended examples)
├── scripts/        (optional — helper scripts)
└── templates/      (optional — file templates)
```

### Step 5: Write SKILL.md frontmatter

```yaml
---
name: skill-name
description: Brief description of what this does and when to use it
allowed-tools: Read, Write, Edit, Glob, Bash
---
```

**Field requirements**:

- **name**:
  - Lowercase letters, numbers, hyphens only
  - Max 64 characters
  - Must match directory name
  - Good: `pdf-processor`, `git-commit-helper`
  - Bad: `PDF_Processor`, `Git Commits!`

- **description**:
  - Max 1024 characters
  - Include BOTH what it does AND when to use it
  - Use specific trigger words Stefan would say
  - Mention file types, operations, and context

- **allowed-tools**:
  - Always include this field — default (no field) gives unrestricted access
  - Use the minimum set of tools the Skill genuinely needs
  - Common sets:
    - Read-only: `Read, Grep, Glob`
    - File-creating: `Read, Write, Edit, Glob, Bash`
    - Research only: `Read, Glob, mcp__perplexity__perplexity_search`

### Step 6: Write effective descriptions

**Formula**: `[What it does] + [When to use it] + [Key triggers]`

Good examples from existing PAI skills:

```yaml
# sec-digest: specific domain, specific output, clear trigger
description: Generate a cyber security news digest covering the past month.

# pptx: explicit file type, multiple operations, clear trigger phrases
description: Use this skill any time a .pptx file is involved — creating, reading, editing, combining, or extracting content from presentations.
```

Tips:
- Include specific file extensions (.pdf, .xlsx, .json)
- Mention common trigger phrases ("analyze", "extract", "generate", "create a deck")
- List concrete operations
- Add "Use when..." clause

### Step 7: Structure the Skill content

```markdown
# Skill Name

Brief overview of what this Skill does.

## When to use this Skill

Conditions that should trigger this Skill.

## Instructions

Step-by-step guidance for Claude:
1. First step with clear action
2. Second step with expected outcome
3. Handle edge cases

## Examples

Concrete usage examples.

## Best practices

- Key conventions to follow
- Common pitfalls to avoid
```

### Step 8: Add supporting files (optional)

Create additional files for progressive disclosure:

- **reference.md**: Detailed options, advanced configuration
- **examples.md**: Extended examples and edge cases
- **scripts/**: Helper scripts
- **templates/**: File templates or boilerplate

Reference them from SKILL.md:
```markdown
For advanced usage, see [reference.md](reference.md).
```

### Step 9: Validate the Skill

Check these before finalising:

**File structure:**
- [ ] SKILL.md exists in correct location
- [ ] Directory name matches frontmatter `name`

**YAML frontmatter:**
- [ ] Opening `---` on line 1
- [ ] Closing `---` before content
- [ ] Valid YAML (no tabs, correct indentation)
- [ ] `name` follows naming rules
- [ ] `description` is specific and < 1024 chars
- [ ] `allowed-tools` is set

**Content quality:**
- [ ] Clear step-by-step instructions
- [ ] Concrete examples provided
- [ ] Edge cases handled
- [ ] Dependencies listed if any

### Step 10: Test the Skill

1. Restart Claude Code to load the new Skill
2. Ask a question that matches the description trigger
3. Verify Claude activates the Skill automatically
4. Confirm Claude follows the instructions correctly

If the Skill doesn't activate:
- Add more specific trigger words to the description
- Include file types or operations
- Add an explicit "Use when..." clause

## Common patterns

### Read-only Skill

```yaml
---
name: code-reader
description: Read and analyze code without making changes. Use for code review, understanding codebases, or documentation.
allowed-tools: Read, Grep, Glob
---
```

### Research Skill (Perplexity)

```yaml
---
name: threat-researcher
description: Research cyber threats, CVEs, and security advisories using live web data. Use when Stefan asks about specific threats, vulnerabilities, or security news.
allowed-tools: Read, Write, mcp__perplexity__perplexity_search, mcp__perplexity__perplexity_research
---
```

### File-creating Skill

```yaml
---
name: report-writer
description: Generate structured markdown reports from raw notes or data. Use when Stefan asks to write up, summarise, or format findings into a report.
allowed-tools: Read, Write, Edit, Glob, Bash
---
```

## Validation checklist

Before finalising a Skill:

- [ ] Name is lowercase, hyphens only, max 64 chars
- [ ] Description is specific and < 1024 chars
- [ ] Description includes "what" and "when"
- [ ] `allowed-tools` is explicitly set
- [ ] YAML frontmatter is valid
- [ ] Instructions are step-by-step
- [ ] Examples are concrete and realistic
- [ ] Dependencies are documented
- [ ] File paths use forward slashes
- [ ] Skill activates on relevant queries

## Output format

When creating a Skill:

1. Ask clarifying questions one at a time
2. Present a plan (name, location, structure) and wait for approval
3. Create the directory
4. Create the SKILL.md with proper frontmatter and `allowed-tools`
5. Add supporting files if agreed
6. Confirm the result and provide testing instructions
