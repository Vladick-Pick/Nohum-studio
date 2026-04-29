---
kind: task
name: Run Market Signal Batch
description: Automated source intake for Product Bet Factory v0
schema: agentcompanies/v1
assignee: market-signal-scout
project: hypothesis-funnel
---

## Purpose

Collect and normalize a bounded market-signal batch from configured sources.

## Inputs

- cycle config
- source adapter registry
- tool access matrix
- approved source list

## Preconditions

- Product Bet Pilot templates are available.
- Source access matrix has been reviewed for the cycle.
- No external action beyond read-only source intake is approved by default.

## Steps

1. Check source access and policy for each configured source.
2. Run `READY` sources.
3. Mark unavailable sources as `MISSING_ACCESS`, `APPROVAL_REQUIRED`, or
   `BLOCKED_BY_POLICY`.
4. Normalize captured signals with the market-signal template.
5. Write source access and blocked-source reports.

## Required Output

- market-signal batch
- source access report
- blocked source report

## Idempotency

Use stable cycle IDs and source refs. If rerun, append a new source access
report instead of overwriting prior blocked-source evidence.

## Failure Modes

- missing source token -> `MISSING_ACCESS`
- source requires approval -> `APPROVAL_REQUIRED`
- source terms block automation -> `BLOCKED_BY_POLICY`

## Acceptance Criteria

- every configured source has `READY`, `MISSING_ACCESS`, `APPROVAL_REQUIRED`,
  or `BLOCKED_BY_POLICY`
- every captured signal has a source ref
- no external posting, spend, outreach, or payment action occurred
