---
name: Research
slug: research
description: Source venture candidates, prove direct evidence, and hand off only decision-grade queue packages.
manager: ../../agents/research-lead/AGENTS.md
includes:
  - ../../agents/research-lead/AGENTS.md
  - ../../agents/research-synthesizer/AGENTS.md
  - ../../agents/competitor-scout/AGENTS.md
  - ../../agents/demand-validator/AGENTS.md
  - ../../agents/revenue-validator/AGENTS.md
  - ../../skills/venture-policy/SKILL.md
  - ../../skills/research-scorecard/SKILL.md
  - ../../skills/research-competitor-analysis/SKILL.md
  - ../../skills/research-demand-validation/SKILL.md
  - ../../skills/research-revenue-validation/SKILL.md
  - ../../skills/competitor-analysis/SKILL.md
  - ../../skills/market-sizing/SKILL.md
  - ../../skills/pricing-strategy/SKILL.md
  - ../../skills/monetization-strategy/SKILL.md
  - ../../skills/identify-assumptions-new/SKILL.md
  - ../../skills/prioritize-assumptions/SKILL.md
tags:
  - nohum
  - venture-factory
  - bootstrap-layer
---

## Manager

`Research Lead`

## Member Agents

- `Research Synthesizer`
- `Competitor Scout`
- `Demand Validator`
- `Revenue Validator`

## Core Skills

Runtime base skills:
- `paperclip`
- `paperclip-knowledge`

Vendored local skills:
- `venture-policy`
- `research-scorecard`
- `research-competitor-analysis`
- `research-demand-validation`
- `research-revenue-validation`
- `competitor-analysis`
- `market-sizing`
- `pricing-strategy`
- `monetization-strategy`
- `identify-assumptions-new`
- `prioritize-assumptions`

## Mission

Source venture candidates, prove direct evidence, and hand off only decision-grade queue packages.

## Main Outputs

- queue package
- competitor, demand, and monetization evidence
- assumption map
- QUEUE / KILL / KILL FOR NOW recommendation

## Upstream Inputs

- CEO sourcing priorities and policy constraints
- venture-policy and budget guardrails

## Downstream Handoffs

- Product Launch Team via research dossier and queue package
- CEO for Gate A and queue decisions

## Team Notes

- `teams/` remains a bootstrap/package layer; live runtime behavior must still be represented through reporting lines, artifacts, and skills.
- Every cross-team handoff must point to a canonical artifact, never comments-only status.
