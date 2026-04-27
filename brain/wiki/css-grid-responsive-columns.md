# CSS Grid Responsive Column Hiding

## What it is

To hide columns in a CSS grid layout at a breakpoint, you must do two things together: change `grid-template-columns` to remove the hidden tracks, and set `display: none` on the cells. Either alone produces broken layout — hidden cells still occupy their tracks if the column definition remains, and changing columns without hiding cells causes items to flow into the wrong slots.

## When to apply

Responsive tables or grid lists where some columns are too wide or irrelevant on small screens (e.g. hide "Last run" and "Duration" on mobile, keep "Name" and "Schedule").

## The pattern

```css
/* Desktop: 6 columns */
.row {
  display: grid;
  grid-template-columns: 92px 2fr 1.3fr 0.9fr 0.7fr 88px;
}

/* Mobile: hide columns 4 and 5 */
@media (max-width: 767px) {
  .row {
    grid-template-columns: 56px 2fr 1.4fr 60px; /* 4 columns only */
  }
  .cell-last-run,
  .cell-duration { display: none; }
}
```

`display: none` removes the item from grid auto-placement, so subsequent items shift left to fill the now-correct number of tracks.

## Header cells with no class

If header cells are bare `<div>` elements with no class, target them by position:

```css
.row-head > div:nth-child(4),
.row-head > div:nth-child(5) { display: none; }
```

Both the header row and data rows share the same `.row` grid, so changing `grid-template-columns` once handles both.

## When not to apply

- If columns need to reorder (not just hide) — use named grid areas instead
- If the number of columns varies at runtime — compute the template in JS and set it via inline style

**Origin:** Waowle UI M5 — cron job list, 6 columns on desktop, 4 on mobile.
