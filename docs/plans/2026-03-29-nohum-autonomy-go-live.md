# NoHum Autonomy Go-Live Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Turn NoHum from a documented operating contour into an import-ready autonomous venture factory package.

**Architecture:** Materialize the missing execution layer as package artifacts: recurring manager tasks, queue-to-venture orchestration surfaces, engineering substrate templates and reviews, delegation audit surfaces, and observability/hygiene reports. Keep the machine aligned with the hard policy of one active venture plus one queued venture, and align the secret contract with host-managed model auth plus optional app-level `OPENROUTER_API_KEY`.

**Tech Stack:** Markdown package artifacts, recurring task templates, NoHum policy docs

---

## Scope

This plan covers only the missing autonomy surfaces:

1. venture template
2. always-on manager routines
3. queue-to-active venture automation
4. engineering execution substrate
5. manager delegation contracts
6. observability and company hygiene

## Subagent-Informed Gaps

- policy/docs still drift on model auth and secret baseline: `OPENAI_API_KEY` remains in runtime-facing docs even though `.paperclip.yaml` already dropped it
- cadence is described but not materialized beyond two weekly reviews
- queue-to-venture is defined as doctrine but still misses the queue winner record, phase transition log, and promotion task
- engineering substrate is defined as doctrine but still misses repo attach and release-readiness artifacts
- delegation contract lacks explicit SLA values and audit surfaces
- observability and smoke checks list what matters but not the required artifact, source, threshold, or approver

## Readiness Definition

NoHum may be called `autonomous enough` only when:

- every phase transition runs through a canonical artifact
- every manager has a recurring cadence task with explicit output
- queue promotion is deterministic and auditable
- engineering start conditions are deterministic and auditable
- delegation is encoded as `trigger -> assignee -> artifact -> escalation`
- factory health is reviewed separately from venture health
- codex-local roles rely on host-managed model auth, not a company-wide `OPENAI_API_KEY`
- `OPENROUTER_API_KEY` appears only in app-level contracts for ventures that actually ship LLM features

## Workstreams

### Workstream A: Venture Template And Transition Artifacts

Deliver:

- venture manifest
- launch brief
- handoff dossier
- payment events log
- feedback log
- build env contract
- queue winner record
- phase transition log

Owner chain:

- `Launch Lead`
- `VP of Engineering`
- `Support Lead`
- `Agent Mechanic`

### Workstream B: Manager Cadence

Deliver recurring tasks for:

- `CEO`
- `Chief of Staff`
- `Research Lead`
- `Launch Lead`
- `VP of Engineering`
- `Support Lead`
- `Agent Mechanic`
- weekly factory health review
- weekly org hygiene review

### Workstream C: Queue Machine

Deliver:

- Gate A decision template
- queue winner record
- queue-to-venture orchestrator task
- queue transition rules
- idempotent `venture_id` reuse rule

### Workstream D: Engineering Substrate

Deliver:

- repo attach record
- build env contract
- substrate readiness task
- release readiness pack contract
- repo/workspace canonical path rule

### Workstream E: Delegation

Deliver:

- one manager delegation contract map
- one audit task that checks whether managers delegate through artifacts
- supporting blocked-work and reroute templates

### Workstream F: Hygiene

Deliver:

- factory health metrics
- org hygiene checklist
- daily factory health task
- weekly org hygiene task
- weekly factory health report template
- weekly org hygiene report template

## Execution Package

### Phase 1: Runtime And Secret Contract

Files:

- `README.md`
- `docs/decisions/0004-secret-and-credential-architecture.md`
- `docs/mcp-access-matrix.md`
- `docs/server-post-import-checklist.md`
- `scripts/generate-detailed-org.mjs`

Required outcome:

- docs match runtime reality: host-managed model auth for `codex_local`
- `OPENAI_API_KEY` removed from company baseline and import checklist
- `OPENROUTER_API_KEY` appears only as optional app-level secret for LLM ventures

### Phase 2: Materialize Cadence

Files:

- `docs/operating-cadence.md`
- `tasks/daily-*/TASK.md`
- `tasks/weekly-*/TASK.md`

Required outcome:

- every manager named in cadence has a recurring task
- every recurring task names a durable output artifact
- weekly reviews separate board, portfolio, factory health, and org hygiene

### Phase 3: Queue And Venture Promotion

Files:

- `docs/automation/queue-to-venture-machine.md`
- `docs/templates/queue/queue-winner-record.md`
- `docs/templates/venture/phase-transition-log.md`
- `tasks/promote-queued-venture/TASK.md`

Required outcome:

- queue promotion is deterministic, auditable, and safe to rerun
- `venture_id` is created once and reused everywhere
- Gate A result cannot bypass artifact creation

### Phase 4: Engineering Substrate

Files:

- `docs/runbooks/engineering-substrate.md`
- `docs/templates/engineering/repo-attach-record.md`
- `docs/templates/engineering/build-env-contract.md`
- `docs/templates/engineering/release-readiness-pack.md`
- `tasks/substrate-readiness-review/TASK.md`

Required outcome:

- engineering starts only from canonical repo, workspace, env, and release pack surfaces
- repo attach and env contract become explicit artifacts, not chat context

### Phase 5: Delegation And Audit

Files:

- `docs/delegation/manager-delegation-contracts.md`
- `docs/templates/operations/blocked-work-packet.md`
- `docs/templates/operations/reroute-note.md`
- `tasks/delegation-contract-audit/TASK.md`

Required outcome:

- each manager contract includes SLA and escalation
- blocked or stale work routes through canonical packets
- delegation quality is auditable in live runtime

### Phase 6: Observability, Hygiene, And Smoke Runs

Files:

- `docs/observability/factory-health-metrics.md`
- `docs/observability/org-hygiene-checklist.md`
- `docs/templates/operations/factory-health-report.md`
- `docs/templates/operations/org-hygiene-report.md`
- `docs/server-post-import-checklist.md`

Required outcome:

- every factory metric has source, threshold, owner, and review task
- hygiene review leaves a durable report
- smoke section requires artifact + pass condition + approver

## Implementation Order

1. Fix secret and model-auth contract first so package docs stop drifting from runtime.
2. Publish recurring cadence tasks so the autonomy layer becomes schedulable.
3. Publish queue-to-venture artifacts and promotion task.
4. Publish engineering substrate templates and readiness review task.
5. Publish delegation SLA and audit surfaces.
6. Publish observability and hygiene report surfaces.
7. Wire new tasks and docs into existing checklist and repository map.

## Residual Risks

- `teams/` and `tasks/` remain package/bootstrap surfaces until they are imported and mirrored into the live company.
- Recurring tasks still depend on heartbeat reliability in the live runtime.
- Managers can still collapse into doing the work themselves unless delegation audits are enforced.
- The stack and secret contract must be synchronized in live runtime before the engineering substrate can operate cleanly.
- Live automation still depends on import discipline; package completeness alone does not guarantee server-side execution.
