---
kind: company
name: NoHum Studio
description: Day-1 core and research import package for upgrading the live NoHum Studio runtime
slug: nohum-studio
schema: agentcompanies/v1
version: 1.7.0
goals:
  - Build and operate an AI-only venture factory that repeatedly sources, evaluates, launches, kills, and maintains fast-cycle microproducts.
includes:
  - agents/ceo/AGENTS.md
  - agents/launch-lead/AGENTS.md
  - teams/research/TEAM.md
  - teams/studio-ops/TEAM.md
  - projects/hypothesis-funnel/PROJECT.md
  - projects/studio-os/PROJECT.md
  - tasks/bootstrap-company-access-and-secrets/TASK.md
  - tasks/bootstrap-company/TASK.md
  - skills/community-search-market-signal-source/SKILL.md
  - skills/competitor-analysis/SKILL.md
  - skills/create-prd/SKILL.md
  - skills/github-market-signal-source/SKILL.md
  - skills/gtm-strategy/SKILL.md
  - skills/identify-assumptions-new/SKILL.md
  - skills/launch-gates/SKILL.md
  - skills/launch-gtm-readiness/SKILL.md
  - skills/launch-product-definition/SKILL.md
  - skills/market-proof-lite/SKILL.md
  - skills/market-signal-intake/SKILL.md
  - skills/market-sizing/SKILL.md
  - skills/marketplace-market-signal-source/SKILL.md
  - skills/monetization-strategy/SKILL.md
  - skills/payment-signal-policy/SKILL.md
  - skills/portfolio-review/SKILL.md
  - skills/pre-mortem/SKILL.md
  - skills/pricing-strategy/SKILL.md
  - skills/prioritize-assumptions/SKILL.md
  - skills/product-hunt-market-signal-source/SKILL.md
  - skills/release-notes/SKILL.md
  - skills/research-canonical-package/SKILL.md
  - skills/research-competitor-analysis/SKILL.md
  - skills/research-competitor-discovery/SKILL.md
  - skills/research-demand-validation/SKILL.md
  - skills/research-evidence-fallbacks/SKILL.md
  - skills/research-revenue-validation/SKILL.md
  - skills/research-scorecard/SKILL.md
  - skills/research-source-registry/SKILL.md
  - skills/research-traffic-validation/SKILL.md
  - skills/research-trustmrr-intake/SKILL.md
  - skills/research-trustmrr-sourcing/SKILL.md
  - skills/studio-ops-agent-reliability/SKILL.md
  - skills/systematic-debugging/SKILL.md
  - skills/trustmrr-market-signal-source/SKILL.md
  - skills/venture-policy/SKILL.md
  - skills/verification-before-completion/SKILL.md
  - skills/writing-skills/SKILL.md
  - docs/decisions/0004-secret-and-credential-architecture.md
  - docs/decisions/0005-factory-default-stack-and-mcp.md
  - docs/decisions/0006-studio-self-improvement-system.md
  - docs/factory-default-stack.md
  - docs/operating-spec.md
  - docs/operating-cadence.md
  - docs/skill-policy.md
  - docs/mcp-access-matrix.md
  - docs/automation/queue-to-venture-machine.md
  - docs/observability/process-surface-catalog.md
  - docs/observability/company-world-model.md
  - docs/observability/org-hygiene-checklist.md
  - docs/atlas/org-map.md
  - docs/research/README.md
  - docs/research/source-registry.md
  - docs/research/source-adapter-registry.md
  - docs/research/traffic-interpretation-bands.md
  - docs/research/evidence-fallback-matrix.md
  - docs/research/contracts/intake-and-handoffs.md
  - docs/research/contracts/shared-adapters.md
  - docs/research/decisions/0001-research-foundation-v1.md
  - docs/research/decisions/0002-idea-scout-sourcing-only.md
  - docs/research/decisions/0003-one-idea-one-card-no-synthesizer.md
  - docs/research/decisions/0004-research-history-layer-v1.md
  - docs/research/copyable-product-thesis.md
  - docs/research/research-execution-system.md
  - docs/templates/operations/blocked-work-packet.md
  - docs/templates/operations/agent-self-review.md
  - docs/templates/operations/company-world-model-report.md
  - docs/templates/operations/org-hygiene-report.md
  - docs/templates/operations/reroute-note.md
  - docs/templates/queue/gate-a-decision.md
  - docs/templates/queue/queue-winner-record.md
  - docs/templates/research/competitor-evidence-card.md
  - docs/templates/research/decision-memory-index.md
  - docs/templates/research/evidence-gap-log.md
  - docs/templates/research/eval-dataset-export.md
  - docs/templates/research/idea-card.md
  - docs/templates/research/market-signal.md
  - docs/templates/research/research-registry.md
  - docs/templates/research/traffic-validation-sheet.md
  - docs/templates/research/trustmrr-sourcing-batch.md
  - docs/templates/venture/phase-transition-log.md
  - docs/templates/venture/venture-manifest.md
  - docs/playbooks/research-playbook.md
  - docs/playbooks/queue-gate-a-playbook.md
  - docs/readiness/research-readiness.md
  - docs/readiness/gate-a-readiness.md
  - docs/handoffs/specialist-to-specialist.md
  - docs/handoffs/research-to-launch.md
  - docs/handoffs/retry-fail-escalation.md
  - docs/import-runbook.md
  - docs/server-post-import-checklist.md
  - docs/doctrine/obsidian-to-repo-map.md
requirements:
  secrets: []
---

NoHum Studio is a venture factory, not a single-product company.

This root package is the day-1 core and research import surface. It upgrades the
live Paperclip company without importing the entire future org, Product Bet
machine, build team, GTM team, support team, or historical design archive as
runtime work.

The package is intentionally layered:

- day-1 import layer: `COMPANY.md`, `.paperclip.yaml`, core/research agents,
  bootstrap tasks, and Research/Gate A artifacts
- optional library layer: downstream Product Bet, Build, GTM, Support, archived
  plans, references, and legacy dry runs that must not import as day-1 runtime
  work

## Day-1 Import Scope

- Control plane: `CEO`, `Chief of Staff`, `Agent Mechanic`
- Research: `Idea Scout`, `Research Lead`, `Competitor Scout`, `Demand Validator`, `Revenue Validator`
- Launch boundary owner: `Launch Lead`
- Studio Ops remains a bootstrap/control layer through `Chief of Staff` and `Agent Mechanic`

## Live Upgrade Rules

- existing live identities with exact parity are upgraded in place: `ceo`, `research-lead`, `launch-lead`
- downstream Product Bet, Build, GTM, and Support roles are not imported from the root package
- newly introduced non-core roles must arrive through a separate activation package and remain paused until runtime wiring is complete
- `teams/` is a bootstrap/package layer and must also be represented through reporting lines, docs, and skills
- cross-role phase transitions require canonical artifacts, never comments-only handoffs
