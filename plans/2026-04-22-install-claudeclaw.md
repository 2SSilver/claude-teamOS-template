# Plan: Install claudeclaw plugin

**Created:** 2026-04-22
**Status:** Complete
**Request:** Install moazbuilds/claudeclaw from the Claude Code plugin marketplace

## Context

claudeclaw turns Claude Code into a background assistant daemon — it adds heartbeats (periodic check-ins), cron jobs, and optional Telegram/Discord integrations. This gives the teamme workspace persistent, scheduled AI task execution beyond interactive sessions.

## Approach

Follow the standard three-step install: add from marketplace, install the plugin, then run the setup wizard (`/claudeclaw:start`) which handles all configuration interactively. No manual config file editing required.

## Tasks

1. [x] Create a Telegram bot via @BotFather:
   - Open Telegram and message @BotFather
   - Send `/newbot` and follow the prompts (choose a name and username)
   - Copy the bot token provided
2. [x] Get your Telegram chat ID:
   - Start a conversation with your new bot (send it any message)
   - Visit `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates` in a browser to retrieve your chat ID from the response
3. [x] Add the plugin from the marketplace:
   ```bash
   claude plugin marketplace add moazbuilds/claudeclaw
   ```
4. [x] Install the plugin:
   ```bash
   claude plugin install claudeclaw
   ```
5. [x] Open a Claude Code session and run the setup wizard:
   ```
   /claudeclaw:start
   ```
6. [x] Complete the wizard:
   - Model: sonnet (agentic routing: planning→opus, implementation→sonnet)
   - Heartbeat: every 60 min
   - Telegram: @Waowle_bot, allowed user 8628493505
   - Discord: skipped
   - Security: moderate
7. [x] Send a test message from Telegram to verify the integration works
8. [x] Verify the daemon is running and the web dashboard is accessible
9. [x] Log a decision in `context/decisions.md` noting claudeclaw is active with Telegram integration

## Acceptance Criteria

- `claude plugin install claudeclaw` completes without error
- `/claudeclaw:start` wizard runs and exits cleanly
- Daemon is running in the background
- A message sent via Telegram receives a response from the bot
- At least one heartbeat fires successfully

## Notes

- Bot token and chat ID are needed before running the wizard — gather these first (Tasks 1–2)
- Requires a device or VPS to keep the daemon running; if running locally, daemon stops when the machine sleeps
- Pushover MCP is already configured in `.mcp.json` — claudeclaw's notification system is separate from this
- Discord can be added later if needed
