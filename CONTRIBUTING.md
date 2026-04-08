# Contributing to NoHum

NoHum is not a generic AI prompt repo.

It is an early open design project for a minimal-human venture factory. The useful contribution unit here is not “a cool idea.” It is an improvement to the organizational system.

## What Good Contributions Look Like

Good contributions usually improve one of these:

- ontology
- workflow graphs
- agent role boundaries
- task routing
- templates and canonical artifacts
- skills and tool discipline
- governance and approval boundaries
- evals, observability, and review rules
- module clarity and maturity

Examples:

- tightening a module contract so hidden ambiguity becomes explicit
- improving an `Idea Card` or launch artifact template
- making a handoff runnable rather than narrative-only
- improving an agent prompt so its ownership, scope, and outputs are clearer
- adding a useful readiness gate, failure mode, or rollback condition
- clarifying what is `Draft` vs `Reference`

## What Low-Signal Contributions Look Like

These are usually not helpful:

- “add one super-agent that does everything”
- vague autonomy claims without ontology or governance
- prompt fluff that adds style but no operational clarity
- changes that blur role boundaries
- speculative workflows that ignore economics, auditability, or human override
- edits that pretend a module is solved when it is still draft-level

## Before You Open a PR

For small clarifications or editorial fixes, open the PR directly.

For anything that changes module behavior or architecture, first open an issue or discussion that explains:

- what module you are changing
- what ambiguity, gap, or failure mode you are addressing
- what runtime effect the change is supposed to have
- whether the change affects ontology, workflow, agent roles, governance, or evals

## PR Expectations

Keep PRs narrow.

A good PR should:

- touch one module or one tightly related surface
- explain the reasoning behind the change
- describe the runtime consequence, not just the wording change
- update linked docs or templates if the contract moved
- avoid introducing a second source of truth

If you change a module-level contract, readiness gate, or governance boundary, say so explicitly in the PR description.

## Change Types

Use this rough guide:

- editorial/doc clarity: direct PR is fine
- template / prompt / task refinement: direct PR is fine if narrow
- module contract change: issue or discussion first
- governance or approval-boundary change: issue first, maintainer review required
- live runtime or real-company decision logic: out of scope for public PRs

## Current Contribution Priorities

The repo is strongest in `Research`.

The biggest open areas are:

- launch
- engineering/build
- marketing/GTM
- support/feedback
- finance/control

If you want to help, start by deepening one weak module instead of spreading small edits across many.

## Writing Style

Prefer writing that is:

- concrete
- operational
- explicit about failure modes
- hostile to ambiguity
- honest about maturity and limits

Prefer runtime language over inspirational language.

## Public Repo vs Live Runtime

This repository is for improving **how the company should work**.

It is not the place to directly operate:

- live venture choices
- live budgets
- live approvals
- secrets
- customer operations

See [GOVERNANCE.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/GOVERNANCE.md) for the boundary.
