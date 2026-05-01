---
kind: task
name: Run Research Source Batch
description: Research source intake for Idea Card candidate discovery
schema: agentcompanies/v1
assignee: idea-scout
project: hypothesis-funnel
---

## Purpose

Collect and normalize a bounded source batch for Research Lead intake.

This task feeds `Idea Card` decisions. It does not create product bets.

## Inputs

- source adapter registry
- tool access matrix
- approved source list
- Decision Memory snapshot when available

## Preconditions

- Source access matrix has been reviewed for the cycle.
- No external action beyond read-only source intake is approved by default.

## Steps

1. Check source access and policy for each configured source.
2. Run `READY` sources.
3. Mark unavailable sources as `MISSING_ACCESS`, `APPROVAL_REQUIRED`, or
   `BLOCKED_BY_POLICY`.
4. Normalize captured signals with the market-signal template.
5. Deduplicate obvious repeats against Decision Memory.
6. Write source access and blocked-source reports for Research Lead.

## Required Output

- research source batch
- source access report
- blocked source report
- shortlist notes for Research Lead

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
- no product bet is created
- no external posting, spend, outreach, or payment action occurred
