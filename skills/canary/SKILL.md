---
name: canary
description: Run a narrow post-deploy verification pass on the critical production path before treating a release as healthy.
---

## Purpose

Reduce release risk by verifying the most important live flows before broad rollout confidence is declared.

## Required Output

- canary plan and flows checked
- anomalies, alerts, or missing telemetry
- go / hold / rollback recommendation
- next owner if monitoring must continue

## Rules

- prioritize revenue, auth, onboarding, and support-sensitive flows
- use explicit production evidence, not assumptions from staging
- treat ambiguous signal as a hold unless an owner accepts the risk
- never collapse canary verification into a hand-wavy "looks good"

## Lineage

- adapted from `gstack/canary`
