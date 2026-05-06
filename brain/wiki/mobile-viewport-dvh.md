# Use `100dvh` not `100vh` on mobile web

## What it is

`100vh` on Chrome Android equals the *large viewport* — the full screen height including the browser's URL bar and navigation bar, even when those bars are visible and occupying space. This pushes any element pinned to the bottom (e.g. a bottom nav, a footer) off-screen or behind the browser chrome. `100dvh` (Dynamic Viewport Height) tracks the *actually visible* area and shrinks when the browser bars are shown. Use `dvh` for any full-height layout that must fit the visible screen.

## When to apply

- Any mobile web layout that uses `height: 100vh` on the root element or a full-height container
- Any UI with a bottom-anchored element (bottom nav, sticky footer, floating action button)
- Any `position: fixed; bottom: 0` element that must stay visible on Android Chrome

## When not to apply

- Desktop-only layouts where `vh` and `dvh` are identical
- Cases where you intentionally want the large viewport (e.g. a hero image that should bleed under the browser bars on scroll)
- Safari iOS before 15.4 — `dvh` is unsupported; use a JS fallback or `env(safe-area-inset-bottom)` as a complement

## Origin

Waowle UI M3 (2026-04-27) — bottom nav was completely hidden on Samsung Galaxy S22+ / Chrome Android; confirmed root cause was `100vh` > visible area.
