---
name: competitor-pricing-scan
description: Use when scanning competitor and pricing evidence for a market signal or product bet.
---

# Competitor Pricing Scan

## Purpose

Find direct competitors and visible pricing surfaces with evidence refs.

## Required Output

- direct competitor count
- competitor URLs
- pricing URLs or pricing visibility notes
- category boundary
- excluded lookalikes
- confidence

## Rules

- Prefer official competitor sites over directories.
- Treat at least three direct competitors as a strong positive signal.
- If pricing is hidden, record that explicitly.
- Do not infer payment proof from competitor existence alone.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
