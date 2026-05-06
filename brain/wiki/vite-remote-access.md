# Vite 5 remote access: allowedHosts + host required

## What it is

Vite 5.3+ has DNS rebinding protection that silently drops browser requests whose `Host` header isn't in the allowlist. The server accepts the TCP connection but sends nothing back — the browser shows `ERR_EMPTY_RESPONSE`. `curl` bypasses the check and returns 200, which makes the server look healthy when it isn't. The fix is two settings in `vite.config.ts`: `server.allowedHosts: 'all'` and `server.host: '0.0.0.0'` (or pass `--host 0.0.0.0` at startup).

## When to apply

Any Vite project accessed from a non-localhost device: Tailscale IP, remote VPS, SSH port forwarding, or LAN IP. If the browser address bar shows anything other than `localhost` or `127.0.0.1`, this config is required.

```ts
server: {
  host: '0.0.0.0',
  allowedHosts: 'all',
  // ... proxy etc
}
```

Add this to the project template so it's set from the start.

## When not to apply

Public-facing servers or any environment where untrusted clients can reach the Vite port — `allowedHosts: 'all'` removes the host check entirely. For those cases, use a specific allowlist instead. For personal dev on a Tailscale-gated VPS, `'all'` is safe (Tailscale handles network-level access control).

## Origin

Waowle UI M2 smoke test (2026-04-27): Vite running on VPS, accessed via Tailscale — browser blocked, curl passed, one-line fix resolved it.
