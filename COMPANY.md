---
kind: company
name: NoHum Studio
description: AI-only venture factory import package for upgrading the live NoHum Studio runtime
slug: nohum-studio
schema: agentcompanies/v1
version: 1.5.0
goals:
  - Build and operate an AI-only venture factory that repeatedly sources, evaluates, launches, kills, and maintains fast-cycle microproducts.
includes:
  - agents/ceo/AGENTS.md
  - agents/chief-of-staff/AGENTS.md
  - agents/agent-mechanic/AGENTS.md
  - agents/research-lead/AGENTS.md
  - agents/research-synthesizer/AGENTS.md
  - agents/competitor-scout/AGENTS.md
  - agents/demand-validator/AGENTS.md
  - agents/revenue-validator/AGENTS.md
  - agents/launch-lead/AGENTS.md
  - agents/product-definer/AGENTS.md
  - agents/growth-lead/AGENTS.md
  - agents/support-lead/AGENTS.md
  - agents/feedback-synthesizer/AGENTS.md
  - agents/delivery-engineer/AGENTS.md
  - agents/code-reviewer/AGENTS.md
  - agents/release-engineer/AGENTS.md
  - projects/hypothesis-funnel/PROJECT.md
  - projects/studio-os/PROJECT.md
  - tasks/bootstrap-company/TASK.md
  - tasks/weekly-board-review/TASK.md
  - tasks/portfolio-health-review/TASK.md
  - teams/research/TEAM.md
  - teams/launch/TEAM.md
  - teams/support-feedback/TEAM.md
  - teams/studio-ops/TEAM.md
  - skills/venture-policy/SKILL.md
  - skills/research-scorecard/SKILL.md
  - skills/launch-gates/SKILL.md
  - skills/payment-signal-policy/SKILL.md
  - skills/portfolio-review/SKILL.md
  - skills/research-competitor-analysis/SKILL.md
  - skills/research-demand-validation/SKILL.md
  - skills/research-revenue-validation/SKILL.md
  - skills/launch-product-definition/SKILL.md
  - skills/launch-gtm-readiness/SKILL.md
  - skills/delivery-implementation-loop/SKILL.md
  - skills/delivery-code-review-gate/SKILL.md
  - skills/studio-ops-agent-reliability/SKILL.md
  - docs/skill-policy.md
  - docs/team-skill-matrix.md
  - docs/mcp-access-matrix.md
  - docs/playbooks/research-playbook.md
  - docs/playbooks/queue-gate-a-playbook.md
  - docs/playbooks/venture-definition-playbook.md
  - docs/playbooks/gate-b-playbook.md
  - docs/playbooks/build-playbook.md
  - docs/playbooks/launch-playbook.md
  - docs/playbooks/operate-feedback-playbook.md
  - docs/readiness/research-readiness.md
  - docs/readiness/gate-a-readiness.md
  - docs/readiness/gate-b-readiness.md
  - docs/readiness/launch-readiness.md
  - docs/handoffs/specialist-to-specialist.md
  - docs/handoffs/research-to-launch.md
  - docs/handoffs/definition-to-build.md
  - docs/handoffs/launch-to-support.md
  - docs/handoffs/payment-ambiguity-to-board.md
  - docs/handoffs/retry-fail-escalation.md
  - docs/import-runbook.md
  - docs/server-post-import-checklist.md
  - docs/migration/v1-5-import-upgrade.md
requirements:
  secrets: []
---

NoHum Studio is a venture factory, not a single-product company.

This repository is the v1.5 source package for upgrading the current live NoHum Studio company rather than creating a different greenfield organization.

The package is intentionally layered:

- import-safe layer: `COMPANY.md`, `paperclip.manifest.json`, `.paperclip.yaml`, and stable agent identities
- richer bootstrap layer: team docs, playbooks, handoffs, readiness artifacts, skills, and migration runbooks

The company exists to repeatedly:

1. source product ideas in green markets
2. evaluate them with strict research and economics rules
3. launch only one active product at a time
4. kill weak ventures quickly
5. keep only revenue-positive portfolio assets alive

## V1.5 Operating Boundaries

- global / English-first
- one active venture plus one queued venture
- 14-day build-to-payment timebox
- fast-cycle / self-serve / low-touch products only
- strict board approvals for Gate A, Gate B, overrides, and ambiguous payment events
- budget discipline before growth

## Live Upgrade Rules

- existing live identities with exact parity are upgraded in place
- newly introduced specialists are imported as new agents and then paused during post-import wiring
- `teams/` is a bootstrap/package layer and must also be represented through reporting lines, docs, and skills
- cross-role phase transitions require canonical artifacts, never comments-only handoffs
