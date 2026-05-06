---
title: Parallel MCP batch operations
---

# Parallel MCP batch operations

Run many independent MCP tool calls in a single message for speed — the harness executes them concurrently.

## What it is

When multiple MCP operations have no dependency on each other, include all tool calls in a single response. The Claude Code harness runs them in parallel rather than sequentially. For bulk Google Drive operations this is the difference between seconds and minutes.

Observed reliable at 80+ concurrent `moveItem` + `deleteItem` calls with no rate limiting or errors.

## When to apply

- Bulk file moves, renames, or deletes where each call is independent
- Any set of read operations across multiple files or resources
- Fetching metadata for a batch of items before processing
- Any MCP operation where order doesn't matter

## When not to apply

- When call B needs the result of call A — sequence these, don't batch
- When side effects must be ordered (e.g. create folder before moving files into it)

## Pattern

1. Build the full list of operations up front (IDs, destinations, etc.)
2. Emit all tool calls in a single message
3. Handle any failures from the batch result before proceeding

## Origin

Observed 2026-04-23 during bulk Google Drive sorting (83 + 40 books across two folders).
