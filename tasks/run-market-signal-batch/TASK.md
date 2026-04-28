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
