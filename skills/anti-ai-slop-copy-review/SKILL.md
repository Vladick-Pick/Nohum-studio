---
name: anti-ai-slop-copy-review
description: Lint validation-surface copy for vague AI-style language, unsupported claims, fake proof, and promotional puffery.
---

# Anti AI Slop Copy Review

## Purpose

Use this as a copy-quality lint, not as an AI detector.

## Flag

- vague promotional puffery
- generic AI/SaaS phrasing
- unsupported superiority claims
- fake proof, fake logos, fake customers
- broken citations or suspicious source references
- template phrases that do not match buyer language
- claims that exceed Gate A forbidden-claim boundaries

## Required Output

Use `docs/templates/product-bets/anti-ai-slop-review.md`.

## Rule

Every failed line must be either removed, rewritten in customer language, or
downgraded to an explicitly limited claim.
