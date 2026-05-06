# Ghost clicks on Android: `touch-action: manipulation`

## What it is

Chrome Android fires a synthetic `click` event ~300ms after a `touchend` to support double-tap zoom detection. If the DOM shifts during that 300ms window (e.g. a sidebar slides open, a backdrop appears), the synthetic click lands on whatever element is *now* under the original touch coordinates — not the element the user tapped. This causes ghost clicks: buttons activate, overlays close, or items select for no apparent reason. The fix is `touch-action: manipulation` on the interactive element — this tells the browser the element does not support double-tap zoom, eliminating the 300ms delay and the ghost click entirely.

```css
.tree-item,
.sb-item,
button {
  touch-action: manipulation;
}
```

Add `e.stopPropagation()` to click handlers on the same elements as belt-and-suspenders: it prevents any ghost event that does fire from bubbling to a parent handler.

## When to apply

- Any tappable element in a React (or any JS-driven) web app that modifies the DOM on interaction
- Especially: sidebar items, drawer toggles, modal close buttons, any element whose tap causes a layout shift
- Chrome Android / Samsung devices — this is the primary affected platform

## When not to apply

- Elements that genuinely need double-tap behaviour (rare in app UIs)
- Native mobile apps — this is a web-platform-only quirk

## Why DevTools won't catch it

Browser DevTools device emulation does not simulate the 300ms delay. Ghost clicks are only reproducible on real hardware. If a tap-interaction works in DevTools but misbehaves on device, ghost click is the first thing to rule out.

## Origin

Waowle UI M3 (2026-04-27) — sidebar was closing immediately after opening on Samsung S22+; traced to backdrop receiving the ghost click 300ms after the Files button was tapped.
