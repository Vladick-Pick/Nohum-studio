---
name: para-memory-files
description: >
  Maintain private, file-based working memory using a PARA-style structure. Use
  for longitudinal recall, research notes, planning breadcrumbs, and operator
  memory that should persist across sessions but does not belong in shared
  company knowledge yet.
---

# PARA Memory Files

This vendored NoHum copy provides the base memory discipline used by CEO and
research roles. It is distinct from `paperclip-knowledge`:

- `para-memory-files` is private or operator-scoped working memory
- `paperclip-knowledge` is canonical shared company memory

## Runtime Prerequisites

- a writable adapter memory root such as `$AGENT_HOME`
- stable local file access for the agent runtime

If a runtime does not provide a writable memory path, fall back to
`paperclip-knowledge` for any durable artifact that must survive the run.

## Suggested Structure

```text
$AGENT_HOME/
  life/
    projects/
    areas/
    resources/
    archives/
  memory/
    YYYY-MM-DD.md
  MEMORY.md
```

## Use It For

- research breadcrumbs and source recall
- manager context that should persist across heartbeats
- draft plans and working notes before they become canonical artifacts
- tacit knowledge about how the org or user tends to operate

## Rules

1. Write durable facts to disk instead of trusting session memory.
2. Keep daily notes as raw timeline; promote stable facts into structured folders.
3. Move reusable company artifacts into `paperclip-knowledge` once they become a handoff surface.
4. Do not let private memory become the only place where a cross-team decision exists.
5. Supersede stale notes rather than silently overwriting history.

## NoHum Rule

Research and executive roles may use this skill to maintain continuity, but any
artifact required for phase transitions, approvals, or cross-team execution must
leave private memory and become a canonical shared document.
