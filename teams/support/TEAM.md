---
name: Support
slug: support
description: Convert post-launch tickets, incidents, and customer contact into structured feedback and operating signal.
manager: ../../agents/support-lead/AGENTS.md
includes:
  - ../../agents/support-lead/AGENTS.md
  - ../../agents/support-responder/AGENTS.md
  - ../../agents/feedback-synthesizer/AGENTS.md
  - ../../agents/analytics-reporter/AGENTS.md
  - ../../skills/payment-signal-policy/SKILL.md
  - ../../skills/portfolio-review/SKILL.md
  - ../../skills/summarize-meeting/SKILL.md
  - ../../skills/sentiment-analysis/SKILL.md
  - ../../skills/metrics-dashboard/SKILL.md
  - ../../skills/analyze-feature-requests/SKILL.md
tags:
  - nohum
  - venture-factory
  - bootstrap-layer
---

## Manager

`Support Lead`

## Member Agents

- `Support Responder`
- `Feedback Synthesizer`
- `Analytics Reporter`

## Core Skills

Runtime base skills:
- `paperclip`
- `paperclip-knowledge`

Vendored local skills:
- `payment-signal-policy`
- `portfolio-review`
- `summarize-meeting`
- `sentiment-analysis`
- `metrics-dashboard`
- `analyze-feature-requests`

## Mission

Convert post-launch tickets, incidents, and customer contact into structured feedback and operating signal.

## Owned Process Surfaces

- `support_triage_and_feedback`

## Main Outputs

- support readiness checklist
- ticket summaries and escalation packets
- feedback synthesis report
- weekly operating report

## Upstream Inputs

- launch-to-support handoff
- release notes, known issues, pricing, and measurement context

## Downstream Handoffs

- Launch Lead, CMO, VP of Engineering, and CEO for fixes, messaging, and portfolio decisions

## Team Notes

- `teams/` remains a bootstrap/package layer; live runtime behavior must still be represented through reporting lines, artifacts, and skills.
- Every cross-team handoff must point to a canonical artifact, never comments-only status.
- Support roles should emit `agent-self-review` when escalation routing, synthesis quality, or feedback capture repeatedly degrade.
