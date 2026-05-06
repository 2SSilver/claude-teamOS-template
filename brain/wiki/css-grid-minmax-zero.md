# CSS Grid: use `minmax(0, 1fr)` not `1fr` to prevent overflow

## What it is

`1fr` in CSS Grid is shorthand for `minmax(auto, 1fr)` — the minimum size is `auto`, which resolves to the min-content of the column's items. If any item has a large intrinsic min-content (e.g. an xterm canvas, a wide `<pre>`, a long unbreakable string), the column expands beyond the intended fraction and causes horizontal overflow. `minmax(0, 1fr)` sets the minimum to zero, forcing the column to respect the grid container's width regardless of content size.

```css
/* overflows when content has large min-content */
grid-template-columns: 260px 1fr;

/* safe — column is capped at remaining space */
grid-template-columns: 260px minmax(0, 1fr);
```

## When to apply

- Any grid column that should fill remaining space without overflowing its container
- Layouts containing terminal emulators (xterm), code blocks, wide images, or `white-space: nowrap` content
- Mobile layouts where viewport overflow would cause horizontal scroll

## When not to apply

- When the column's content should size the column (e.g. an `auto`-track sidebar that sizes to its label text)
- Row tracks — the same issue can occur with `1fr` rows but is less common in practice

## Origin

Waowle UI M3 (2026-04-27) — xterm canvas was inflating the main column beyond viewport width on mobile; `minmax(0, 1fr)` fixed the overflow without touching the terminal component.
