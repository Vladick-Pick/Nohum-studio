---
name: cso
description: Review a change, service, or rollout from a security and abuse-risk perspective before it reaches users.
---

## Purpose

Catch security, permissions, data exposure, and misuse risks before they become incidents.

## Required Output

- threat or abuse-case list
- affected assets, surfaces, or trust boundaries
- required mitigations or follow-up actions
- security verdict: acceptable, retry, or escalate

## Rules

- inspect auth, secrets, data access, permissions, logging, and operator pathways
- call out risks that are invisible on the happy path
- escalate high-impact uncertainty instead of papering over it
- do not treat "internal only" as a valid security argument by itself

## Lineage

- adapted from `gstack/cso`
