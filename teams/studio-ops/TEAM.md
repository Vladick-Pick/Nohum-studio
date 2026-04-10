---
name: Studio Ops
slug: studio-ops
description: Protect operating cadence, runtime reliability, migration safety, and instruction quality while the org evolves.
manager: ../../agents/chief-of-staff/AGENTS.md
includes:
  - ../../agents/chief-of-staff/AGENTS.md
  - ../../agents/agent-mechanic/AGENTS.md
  - ../../skills/studio-ops-agent-reliability/SKILL.md
  - ../../skills/writing-skills/SKILL.md
  - ../../skills/verification-before-completion/SKILL.md
  - ../../skills/systematic-debugging/SKILL.md
  - ../../skills/executing-plans/SKILL.md
tags:
  - nohum
  - venture-factory
  - bootstrap-layer
---

## Manager

`Chief of Staff`

## Member Agents

- `Agent Mechanic`

## Core Skills

Runtime base skills:
- `paperclip`
- `paperclip-create-agent`
- `paperclip-knowledge`

Vendored local skills:
- `studio-ops-agent-reliability`
- `writing-skills`
- `verification-before-completion`
- `systematic-debugging`
- `executing-plans`

## Mission

Protect operating cadence, runtime reliability, migration safety, and instruction quality while the org evolves.

## Owned Process Surfaces

- `agent_harness_quality`
- `skill_instruction_quality`
- `runtime_reliability`

## Main Outputs

- operating reviews
- runtime reliability fixes
- migration checklists
- instruction and skill maintenance

## Upstream Inputs

- CEO operating priorities
- company health and migration incidents

## Downstream Handoffs

- all teams through cadence, reliability, and post-import wiring support

## Team Notes

- `teams/` remains a bootstrap/package layer; live runtime behavior must still be represented through reporting lines, artifacts, and skills.
- Every cross-team handoff must point to a canonical artifact, never comments-only status.
- Every active role in the company may emit `agent-self-review`; Studio Ops owns intake, ranking, and implementation for those changes.
