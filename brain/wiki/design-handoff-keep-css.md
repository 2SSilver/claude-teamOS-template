# Design Handoff: Keep the CSS System

## What it is

When a design handoff delivers a complete, working CSS system (custom properties, utility classes, component styles), keep it as-is rather than converting it to Tailwind or another utility framework. Conversion adds work, introduces visual drift risk, and provides no user-visible gain.

## When to apply

- The delivered CSS is complete and production-quality (not a rough sketch)
- The visual output is correct and stable
- The primary goal is building features, not owning the design system

## When not to apply

- The CSS system is partial, inconsistent, or poorly structured — conversion to a framework may be worth the upfront cost
- The team already has a Tailwind codebase and needs component parity

## The incremental path

Keep the delivered CSS intact. Add Tailwind (or any other system) incrementally for new components where it genuinely helps. The two coexist without conflict. This avoids a big-bang conversion while preserving optionality.

## Anti-pattern to avoid

"We should convert to Tailwind so everything is consistent." Consistency is a means, not an end. If the delivered system is already consistent, conversion creates churn for no benefit.

**Origin:** Waowle UI M0 — Claude Design handoff delivered a complete Frosted Touch CSS system. Converting to Tailwind was considered and rejected; the design system was kept intact.
