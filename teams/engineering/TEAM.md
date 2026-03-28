---
name: Engineering
slug: engineering
description: Build, review, verify, and release ventures through a full engineering system rather than a single overloaded builder role.
manager: ../../agents/vp-engineering/AGENTS.md
includes:
  - ../../agents/vp-engineering/AGENTS.md
  - ../../agents/software-architect/AGENTS.md
  - ../../agents/backend-architect/AGENTS.md
  - ../../agents/frontend-developer/AGENTS.md
  - ../../agents/ai-engineer/AGENTS.md
  - ../../agents/senior-developer/AGENTS.md
  - ../../agents/devops-automator/AGENTS.md
  - ../../agents/sre/AGENTS.md
  - ../../agents/security-engineer/AGENTS.md
  - ../../agents/code-reviewer/AGENTS.md
  - ../../agents/qa-director/AGENTS.md
  - ../../agents/qa-engineer/AGENTS.md
  - ../../agents/release-engineer/AGENTS.md
  - ../../skills/brainstorming/SKILL.md
  - ../../skills/writing-plans/SKILL.md
  - ../../skills/subagent-driven-development/SKILL.md
  - ../../skills/test-driven-development/SKILL.md
  - ../../skills/systematic-debugging/SKILL.md
  - ../../skills/verification-before-completion/SKILL.md
  - ../../skills/requesting-code-review/SKILL.md
  - ../../skills/receiving-code-review/SKILL.md
  - ../../skills/using-git-worktrees/SKILL.md
  - ../../skills/finishing-a-development-branch/SKILL.md
  - ../../skills/dispatching-parallel-agents/SKILL.md
  - ../../skills/plan-eng-review/SKILL.md
  - ../../skills/review/SKILL.md
  - ../../skills/qa/SKILL.md
  - ../../skills/qa-only/SKILL.md
  - ../../skills/ship/SKILL.md
  - ../../skills/land-and-deploy/SKILL.md
  - ../../skills/investigate/SKILL.md
  - ../../skills/document-release/SKILL.md
tags:
  - nohum
  - venture-factory
  - bootstrap-layer
---

## Manager

`VP of Engineering`

## Member Agents

- `Software Architect`
- `Backend Architect`
- `Frontend Developer`
- `AI Engineer`
- `Senior Developer`
- `DevOps Automator`
- `SRE`
- `Security Engineer`
- `Code Reviewer`
- `QA Director`
- `QA Engineer`
- `Release Engineer`

## Core Skills

Runtime base skills:
- `paperclip`

Vendored local skills:
- `brainstorming`
- `writing-plans`
- `subagent-driven-development`
- `test-driven-development`
- `systematic-debugging`
- `verification-before-completion`
- `requesting-code-review`
- `receiving-code-review`
- `using-git-worktrees`
- `finishing-a-development-branch`
- `dispatching-parallel-agents`
- `plan-eng-review`
- `review`
- `qa`
- `qa-only`
- `ship`
- `land-and-deploy`
- `investigate`
- `document-release`

## Mission

Build, review, verify, and release ventures through a full engineering system rather than a single overloaded builder role.

## Main Outputs

- architecture notes
- implementation changes
- review and QA verdicts
- release checklist and rollout plan

## Upstream Inputs

- approved Gate B packet and handoff dossier
- UX and product definition artifacts

## Downstream Handoffs

- Support Team and SRE for post-release monitoring
- Launch Lead and CEO for release status

## Team Notes

- `teams/` remains a bootstrap/package layer; live runtime behavior must still be represented through reporting lines, artifacts, and skills.
- Every cross-team handoff must point to a canonical artifact, never comments-only status.
