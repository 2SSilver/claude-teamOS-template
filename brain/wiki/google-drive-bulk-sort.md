---
title: Google Drive bulk sort workflow
---

# Google Drive bulk sort workflow

Reliable pattern for sorting a large unsorted folder into an existing subject folder structure.

## What it is

A four-step workflow: discover the folder structure once, categorise all files, then move everything in a single parallel batch.

```
1. search() → find the unsorted folder ID
2. listFolder(parent) → build name→ID map for all destination folders  
3. Categorise each file by topic/subject (human judgment step)
4. moveItem() × N in parallel → move all files in one batch
```

The critical constraint: **load the ID map once at the start and hold it in context**. Do not re-query mid-batch. Folder IDs are permanent; names are not.

## When to apply

- Sorting an unsorted inbox folder into an existing taxonomy
- Reorganising a library where destination folders already exist
- Any bulk Drive operation with a known destination structure

## When not to apply

- When the destination folder structure doesn't exist yet — design the taxonomy first, create folders, then sort
- When files need content inspection before categorisation (requires reading each file first)

## Key details

- **deleteItem = trash, not permanent delete** — files are recoverable from Drive trash. Safe for bulk cleanup.
- **Duplicate detection is manual** — compare filenames in the listing. No built-in dedup in the MCP. Look for identical or near-identical titles.
- **Categorisation requires judgment** — listing tools can surface the files but subject assignment needs domain knowledge. Claude can suggest; the user should confirm for ambiguous cases.
- **Save folder IDs** — after a sort job, record the folder name→ID map somewhere persistent (memory, rule file). These IDs don't change and re-discovering them wastes a query next session.

## Origin

Observed 2026-04-23 sorting 83 books from "Unsorted books" and 40 from "Agile eBook" in Stefan's Google Drive.
