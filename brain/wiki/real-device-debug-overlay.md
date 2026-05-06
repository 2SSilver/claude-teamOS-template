# Debug overlay for real-device diagnosis

## What it is

When a web app misbehaves on a physical device and browser DevTools isn't available (no cable, no remote debug setup), add a temporary fixed-position overlay that prints key runtime values — viewport dimensions, hook results, feature flags — directly on screen. It confirms in seconds whether the CSS, JavaScript, and device state match expectations, ruling out entire classes of cause without any external tooling.

```tsx
{/* TEMP — remove after diagnosis */}
<div style={{
  position: 'fixed', top: 0, right: 0, zIndex: 9999,
  background: 'red', color: 'white', padding: '4px 8px', fontSize: 11
}}>
  w={window.innerWidth} mobile={String(isMobile)}
</div>
```

Remove before committing. Deploy the build, load on device, read the overlay.

## When to apply

- A layout or JS behaviour works in DevTools emulation but is wrong on a real device
- Suspicion that CSS isn't applying (wrong breakpoint), or a hook isn't returning the expected value
- Any mobile-specific bug where attaching DevTools would take longer than a deploy cycle

## When not to apply

- If remote debugging is already set up (USB + chrome://inspect) — use DevTools directly
- Server-side rendering environments where `window` is not available
- Production deployments — always clean up before merging

## Origin

Waowle UI M3 (2026-04-27) — Samsung S22+ showed broken layout; overlay confirmed `w=384 mobile=true`, ruling out CSS/JS mismatch and focusing investigation on layout logic.
