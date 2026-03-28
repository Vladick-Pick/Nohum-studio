---
name: document-release
description: Turn an approved release into a clear operator-facing and user-facing release document with scope, risk, and watchpoints.
---

## Purpose

Make the shipped scope legible to engineering, launch, and support without relying on chat memory.

## Required Output

- release note draft
- shipped scope summary
- known risks or follow-up watchlist
- rollback or support notes when relevant

## Rules

- document only approved scope that is actually landing now
- separate user-facing changes from operator-only rollout notes
- include known sharp edges, monitoring points, and support-sensitive behavior
- keep release documentation aligned with the exact reviewed change package

## Lineage

- adapted from `gstack/document-release`
