---
name: paperclip-knowledge
description: >
  Publish and maintain durable company knowledge through Paperclip. Use for
  reusable audits, runbooks, reports, handoff notes, and structured artifacts
  that should outlive a single chat or heartbeat.
---

# Paperclip Knowledge

This vendored NoHum copy exists so knowledge-oriented roles can reference a real
local skill during import. It defines how NoHum agents should treat company
memory once runtime Paperclip API access is wired.

## Use It For

- audits
- runbooks
- research packets
- handoff notes
- integration or access notes
- reusable debugging summaries
- canonical launch, support, or operating artifacts

Do not use it for disposable scratch text.

## Operating Rules

1. Check whether a matching knowledge item already exists before creating a new one.
2. Update durable artifacts in place instead of fragmenting company memory.
3. Attach reusable artifacts back to the source issue when the work came from an issue.
4. Treat knowledge as shared company memory that other agents may update later.
5. Do not delete knowledge you do not own unless your runtime permissions explicitly allow it.

## Basic Workflow

1. List or search company knowledge.
2. Inspect the closest existing item.
3. Create a new item only if the concept is genuinely new.
4. Otherwise patch the existing item with the improved body or summary.
5. Link the resulting knowledge item in your issue update or handoff.

## NoHum Rule

If a phase transition depends on an artifact, that artifact belongs in canonical
knowledge or another durable surface. Do not rely on comments-only handoffs.
