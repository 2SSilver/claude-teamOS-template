# 2026-04-27 — Waowle UI M3: Phone Responsiveness

**Project context:** Waowle UI, M3 milestone — retrofitting mobile layout onto an existing desktop-only React app. Tested on Samsung Galaxy S22+ (Chrome Android).

---

## What was done

Built full phone responsiveness for Waowle UI in one session: `useIsMobile` hook, `BottomNav` component, CSS media query block, App wiring, Sidebar drawer. Then smoke-tested on real hardware and fixed 7 post-implementation issues iteratively.

---

## Observations

**100vh is broken on Chrome Android.** `100vh` = the full screen including hidden browser chrome (URL bar, nav bar). Elements at the bottom are cut off. `100dvh` (Dynamic Viewport Height) tracks the actually visible area. This was the first bug found — bottom nav totally invisible.

**`1fr` in CSS Grid is `minmax(auto, 1fr)`, not `minmax(0, 1fr)`.** The auto min-content of an xterm canvas inflated the column beyond viewport width. The fix is always to use `minmax(0, 1fr)` when a grid column must not overflow.

**Inline React styles can't be overridden by CSS media queries.** Had `style={{ flex: split }}` on panes — the mobile media query `.main-top { flex: 0 0 40% }` had no effect. Had to conditionally apply the inline style only on desktop: `style={isMobile ? undefined : { flex: split }}`. Classic mistake.

**Samsung ghost clicks are real and specific.** Chrome Android has a 300ms delay before firing a synthetic `click` after a `touchend`. If the DOM shifts during that 300ms window (e.g. sidebar opening), the synthetic click lands on whatever is under the pointer in the new layout — not the original target. Caused sidebar to close immediately after opening because the backdrop appeared and received the ghost click. Fix: `touch-action: manipulation` on interactive elements (kills double-tap delay) + `e.stopPropagation()` as belt-and-suspenders.

**Sidebar shouldn't close on project select.** First pass had `onSelect` call `setSidebarOpen(false)`. That prevented file browsing — you'd switch project, sidebar closes, can't navigate tree. Removed the close-on-project-select; only close on actual file open.

**Debug overlay is a fast diagnostic on real hardware.** When something is wrong on a physical device and you can't attach devtools, a fixed-position red `div` showing `window.innerWidth` and the hook value is the fastest way to confirm whether the CSS/JS is even running. Confirmed `w=384 mobile=true` on S22+, ruling out a whole class of causes.

**xterm terminal resize on mobile needed ResizeObserver.** The splitter is removed on mobile and pane heights are fixed, but the terminal still needs to call `fit.fit()` and send a resize message when its container changes (e.g. on mount or orientation change). Was already using ResizeObserver — just needed to not break it with the mobile layout changes.

**`touch-action` goes on the element receiving the touch, not the parent.** Had to add it to `.tree-item` and `.sb-item` individually, not just `.sidebar`.

---

## Patterns noticed

**Phone-first debugging checklist for React web apps:** (1) Is `100dvh` used instead of `100vh`? (2) Are grid columns `minmax(0, 1fr)` not `1fr`? (3) Are inline styles conditional on `isMobile`? (4) Are touch targets `min-height: 44px`? (5) Is `touch-action: manipulation` on all tappable items?

**Plan-then-fix-then-document cadence.** Plan was written and executed for the core feature, then 7 real-device fixes were found in smoke test. All fixes were documented in the plan's "Post-implementation fixes" section for traceability rather than pretending the plan was perfect. This is the right cadence — plan covers the 80%, smoke test finds the rest, plan gets updated.

**Ghost click is the #1 mobile UX bug that's invisible in desktop devtools.** DevTools device emulation does not simulate the 300ms delay. The only way to find ghost clicks is on real hardware.

**Sidebar UX: close on file open, not on project switch.** Users switch project to browse files; closing the sidebar on project switch breaks that flow. The right rule: close sidebar only when the user has made a selection that implies they're done navigating (i.e., actually opening a file).

---

## Potential promote

1. **`100dvh` vs `100vh` on mobile** — This bites everyone eventually. Short wiki page: when to use `dvh`, browser support note, the exact Chrome Android failure mode. High promote value, recurs across any mobile web project.

2. **Ghost clicks on Android / `touch-action: manipulation`** — The 300ms delay + layout shift = synthetic click on wrong element. Not widely known outside mobile dev. Worth a wiki page with the root cause, `touch-action: manipulation` as the fix, and `stopPropagation` as belt-and-suspenders. Very high promote value.

3. **CSS Grid `minmax(0, 1fr)` vs `1fr`** — The fact that `1fr = minmax(auto, 1fr)` surprises most CSS devs. Short page with the xterm canvas example as a concrete illustration.

4. **Inline React styles block media query overrides** — Common React gotcha. Useful pattern: `style={isMobile ? undefined : { flex: split }}` — conditionally nullify inline style on mobile.

5. **Fixed-position debug overlay for real-device debugging** — Simple pattern, high diagnostic value when devtools isn't available.

---

## Open questions

- Should `useIsMobile` threshold (767px) be a shared constant? If other components ever need to branch on mobile, duplicated magic numbers will diverge.
- Is there a case for vitest/jest on the frontend? `useIsMobile` and `BottomNav` are untested. The current stance is "backend tests cover the important logic" but the hook has a subtle SSR guard (`typeof window !== 'undefined'`) that would benefit from a test.
- `100dvh` browser support — confirmed working on Chrome Android; need to verify Safari iOS before claiming full phone support.
- M4 direction is TBD. Dashboard? Settings? Remote access?
