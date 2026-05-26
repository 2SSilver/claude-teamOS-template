List every Skill currently available in this workspace, grouped by source, with their descriptions extracted live from each `SKILL.md` frontmatter.

## Steps

Run the python block below verbatim, then return its stdout to the user as-is (it is already formatted markdown — no editorialisation or summary). Do not paraphrase descriptions; they are the source of truth from each skill's frontmatter.

```bash
python3 <<'PY'
import os, re, glob

HOME = os.path.expanduser("~")
WORKSPACE_SKILLS = os.path.join(os.getcwd(), ".claude/skills")
USER_SKILLS = os.path.join(HOME, ".claude/skills")
PLUGIN_ROOT = os.path.join(HOME, ".claude/plugins/cache")

def parse_frontmatter(path):
    try:
        with open(path) as f:
            text = f.read()
    except OSError:
        return {}
    m = re.match(r'^---\s*\n(.*?\n)---\s*\n', text, re.DOTALL)
    if not m:
        return {}
    fm = {}
    for line in m.group(1).splitlines():
        m2 = re.match(r'^([A-Za-z_][\w-]*):\s*(.*)$', line)
        if not m2:
            continue
        key, val = m2.group(1), m2.group(2).strip()
        if (val.startswith('"') and val.endswith('"')) or \
           (val.startswith("'") and val.endswith("'")):
            val = val[1:-1]
        fm[key] = val
    return fm

def list_skills(dir_):
    if not os.path.isdir(dir_):
        print("_(directory not present)_"); return
    files = sorted(glob.glob(os.path.join(dir_, "*/SKILL.md")))
    if not files:
        print("_(no skills)_"); return
    for sf in files:
        fm = parse_frontmatter(sf)
        name = fm.get("name") or os.path.basename(os.path.dirname(sf))
        desc = fm.get("description") or "_(no description)_"
        print(f"- **{name}** — {desc}")

print("# Available Skills\n")
print("## Workspace skills")
print(f"_Source: `{WORKSPACE_SKILLS}/`_\n")
list_skills(WORKSPACE_SKILLS)

print("\n## User-global skills")
print("_Source: `~/.claude/skills/`_\n")
list_skills(USER_SKILLS)

print("\n## Plugin skills")
if os.path.isdir(PLUGIN_ROOT):
    for sd in sorted(glob.glob(os.path.join(PLUGIN_ROOT, "*/*/*/skills"))):
        marketplace, plugin, version = os.path.relpath(sd, PLUGIN_ROOT).split(os.sep)[:3]
        print(f"\n### {plugin}@{marketplace} (v{version})")
        list_skills(sd)
else:
    print("_(no plugins installed)_")
PY
```

## Notes

- The catalogue is generated from live filesystem state on every invocation, so it never drifts from what is actually installed.
- Plugin skills are discovered by globbing `~/.claude/plugins/cache/<marketplace>/<plugin>/<version>/skills/`. This is the active install path used by Claude Code; the `marketplaces/` directory contains all available-but-not-necessarily-installed plugins and is intentionally ignored.
- If the user asks for the full content of a specific skill, read its `SKILL.md` — the catalogue only surfaces the frontmatter summary.
