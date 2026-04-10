# NoHum Studio Operating Spec

## Purpose

NoHum Studio is an AI-only venture factory built on Paperclip.

It is designed to:

- autonomously source product opportunities
- evaluate them with explicit market and economics rules
- launch simple microproducts quickly
- kill weak ideas without sentimentality
- retain only ventures that show real external payment

This document preserves the working business design that the bootstrap package must instantiate.

## Core Runtime Model

- One `Studio company` inside Paperclip
- One `Hypothesis Funnel` project for raw ideas
- One `Studio OS` project for bootstrap machinery and operating routines
- One venture project per approved idea
- One product repo per launched venture, attached only after Gate B

The live runtime source of truth is the server-hosted Paperclip company after import. This repository is the bootstrap and recovery artifact.

## Stable Identity

Every venture uses an immutable ID:

- `venture_id = vh-YYYYMMDD-<slug>`

It must appear in:

- Funnel issue
- venture project
- labels
- attachments
- handoff dossier
- payment events
- feedback logs
- product repo naming

Every research case also uses an immutable ID:

- `research_case_id`

It is assigned when the canonical `Idea Card` opens and must appear in:

- the canonical `Idea Card`
- `Research Registry`
- `Decision Memory`
- `Eval Dataset`
- duplicate links and revisit references

## State Model

### Venture stage

- `raw`
- `research`
- `queued`
- `venture`
- `build`
- `launch`
- `portfolio`
- `retired`
- `killed`

### Project status

- `backlog`
- `planned`
- `in_progress`
- `completed`
- `cancelled`

### Payment review state

- `valid`
- `pending_review`
- `rejected`

## Top-Level Operating Policy

- global / English-first
- one active venture plus one queued venture
- 14 days from `build_start_at` to valid first external payment
- only fast-cycle / self-serve / low-touch products in v1
- default ventures must fit the canonical NoHum stack without architecture churn
- board participates 15-20 minutes daily
- company budget hard cap: $1k per month with board override only

## Studio Self-Improvement Policy

Default rule:

- `AI agents` perform recurring judgment and coordination work
- deterministic scripts perform replay, scoring, registry updates, world-model snapshots, and rollback preparation
- humans participate only on hard governance boundaries

Studio control metric:

- `time_to_first_valid_payment`

Strategic north-star:

- `time_from_queued_venture_to_stable_$5k_MRR`

Studio guardrails:

- `cost_per_valid_payment`
- `rollback_rate`
- `customer_harm_rate`
- `human_boundary_invocations`
- `runtime_drift`

The self-improvement topology is:

- `agent -> agent_self_review -> Chief of Staff selection -> Agent Mechanic mutation -> eval rings -> AI promotion or revert`

Routine production self-editing by agents is not allowed.

## Canonical Product Stack

Default-path ventures use:

- `Next.js 16` fullstack
- `React 19.2`
- `TypeScript`
- `Tailwind CSS`
- `Better Auth`
- `PostgreSQL`
- `Prisma`
- `Railway`
- `Lava.top`
- `Plausible`
- `Resend`
- `pg-boss`
- `Cloudflare R2`
- `Sentry`

NoHum does not pick among equivalent framework or provider alternatives per venture.

If a product needs a non-canonical stack, that is a board exception before Gate B, not an implementation-time preference.

## Org Model

### Board

Human strategic control.

Board-only decisions:

- Gate A
- Gate B
- overrides
- ambiguous payment resolution
- revisit approval
- retire decision
- budget exceptions
- irreversible legal or financial actions

### CEO

CEO is a thin allocator and operator, not a hands-on worker.

CEO responsibilities:

- keep factory policy intact
- control WIP
- allocate budget
- coordinate Gate A and Gate B
- wake and direct Research Lead and Launch Lead
- escalate blocked decisions to board
- approve cross-surface or governance-sensitive self-improvement changes

CEO must not do deep research, build products, or run launch execution directly unless the company is degraded and board decides to run in emergency mode.

### Research Lead

Research Lead owns:

- sourcing strategy and shortlist control
- canonical `Idea Card` discipline
- `Research Registry` and `Decision Memory` integrity
- market evidence
- scorecards
- economics
- queue recommendations

Research Lead may move ideas from `research` to `queued` when the contract is satisfied.

### Launch Lead

Launch Lead owns:

- product definition
- ICP / JTBD / pricing / MVP boundary
- Gate B preparation
- build and launch orchestration
- feedback intake and first post-launch synthesis

### Chief of Staff

Chief of Staff owns:

- company world model synthesis
- improvement backlog ranking across teams
- selection of low and medium risk process experiments
- operating cadence for self-improvement
- promotion decisions that do not cross human boundaries

### Agent Mechanic

Agent Mechanic owns:

- runtime reliability
- skill and instruction drift repair
- implementation of approved process mutations
- replay, rollback preparation, and experiment-memory write-back
- reusable prevention notes for recurring failure patterns

### Customer and Company World Models

The studio keeps two derived world models:

- `company_world_model`
  - internal operating reality, blockers, capability gaps, debt, drift, and budget posture
- `customer_world_model`
  - market, launch, payment, activation, retention, and support reality

They are derived from canonical artifacts. They do not replace canonical sources of truth.

## Self-Improvement Contract

### Canonical objects

- `process_surface`
- `process_experiment_record`
- `agent_self_review`
- `company_world_model`
- `customer_world_model`
- `promotion_decision`

### Eval rings

- `replay`
- `shadow`
- `limited_live`
- `canonical`

### Promotion decisions

- `roll_out`
- `continue_limited`
- `discuss`
- `do_not_roll_out`
- `revert`

### Human boundary rules

Human approval is still required for:

- legal changes
- financial policy changes
- credential or secret policy changes
- irreversible external actions
- company-policy changes
- high-reputation or board-sensitive changes

Governance-sensitive experiments may complete replay and live evaluation, but they may not promote themselves past the human boundary.

## Research Contract

### Shared venture-selection doctrine

Canonical doctrine source:

- `docs/research/copyable-product-thesis.md`

Runtime purpose:

- keep one shared venture-selection shape across sourcing, research verdicts, queue readiness, and Gate A-facing allocation decisions
- prevent manager-level drift where different roles optimize for different product shapes

Doctrine completion policy:

- research is not complete unless the canonical `Idea Card` contains a completed doctrine assessment with evidence-backed status for each doctrine criterion
- queue readiness is not complete unless the queue package carries the doctrine assessment summary and resolved contradictions
- doctrine assessment must include structured `value delta` evaluation, not prose-only claims

Structured value-delta requirement:

- current status-quo workflow and workaround
- with-product workflow
- current status-quo costs across time, money, risk, cognitive load, and emotional load when evidence allows
- expected delta and confidence level
- weaknesses or edge cases where delta may collapse

Conversion-story requirement:

- use `plausible conversion story` language, not a universal hard numeric threshold
- label conversion inputs as `observed`, `inferred`, or `assumed`
- reject fake precision and hidden assumptions

### Hard gates

An idea cannot move forward unless all of the following hold:

- at least 3 live direct competitors
- visible pricing on competitors
- at least 2 of 3 demand signal classes:
  - search
  - competitor traffic
  - community or payment evidence
- `time-to-MVP <= 5 days`
- plausible path to `$5k MRR <= 6 months`
- pricing model and path to first payment are understandable

### Weighted score

- demand evidence: 25
- monetization and $5k path: 25
- acquisition efficiency: 20
- competitive openness and switching ease: 15
- build and support simplicity: 15

Cutoff:

- `>= 70`

### Anti-gaming

Every subscore must include:

- evidence link
- short rationale
- confidence: low / medium / high
- freshness: fresh / stale / old

Freshness rule:

- `fresh <= 30 days`
- `stale = 31-90 days`
- `old > 90 days`

### Research history layer

- one canonical `Idea Card` per `research_case_id`
- `Research Registry`, `Decision Memory`, and `Eval Dataset` are derived surfaces only
- duplicate lookup must happen before opening a new canonical card
- final research verdict requires machine-readable reason codes plus revisit metadata when applicable
- after final verdict, derived history surfaces are synced from the canonical card
- if derived history drifts from the card, the card wins and derived layers are regenerated

## WIP Policy

Hard limits:

- `research <= 10`
- `queued <= 1`
- `active build/launch <= 1`

Queue decay:

- queued longer than 14 days => `needs_refresh`
- queued longer than 30 days => return to `research`

## Venture Lifecycle

### Stage transition contract

#### `raw -> research`

- entry: issue created and docs scaffolded
- exit: initial evidence pack
- approver: none
- guard: `research < 10`

#### `research -> queued`

- entry: hard gates passed
- entry: score >= 70 or explicit override
- entry: economics summary exists
- entry: doctrine assessment is complete in the canonical `Idea Card`
- entry: structured `value delta` block is complete and evidence-linked
- entry: conversion story is explicit and all conversion assumptions are labeled
- exit: final scorecard and recommendation
- approver: Research Lead
- guard: `queued < 1`

#### `queued -> venture` (Gate A)

- entry: queue package complete
- entry: queue package includes doctrine summary and value-delta rationale fit for board review
- exit: venture project + docs + root issues
- approver: board

#### `venture -> build` (Gate B)

- entry: Product Definition complete
- entry: handoff dossier complete
- entry: pricing / offer / ICP / JTBD / MVP boundary / channel fixed
- exit: product repo attached
- approver: board

#### `build -> launch`

- entry: product repo attached
- entry: `Lava.top` payment hook + `Plausible` measurement + feedback capture live
- exit: launch is live
- approver: Launch Lead

#### `launch -> portfolio`

- entry: valid first external payment
- entry: maintenance owner assigned
- exit: portfolio health record
- approver: system when payment is valid, board when payment is pending review

#### `portfolio -> retired`

- entry: board decides maintenance is no longer worth it
- triggers may include:
  - flat or declining revenue
  - support burden too high
  - strategy shift
  - replacement by stronger asset
- exit: retire memo
- approver: board

#### `any -> killed`

- entry: 14-day timebox expires without valid payment or economics collapses
- exit: kill memo + revisit rule
- approver: system for deadline kill, board for exceptional kill

## Build Timer and Freeze Rules

`build_start_at` is the timestamp when:

- `Attach Product Repo` succeeds
- and `venture.stage` becomes `build`

There is no general freeze mode in v1.

Only one exception exists:

- if a payment arrives before deadline but is marked `pending_review`, auto-kill pauses for up to 48 hours while board decides

## Payment Signal Contract

Default payment provider is `Lava.top` in v1.

The system still stores normalized payment events internally through a `Payment Signal Adapter`, but any alternative provider requires a board-approved stack exception before Gate B.

Normalized payment event fields:

- `venture_id`
- `provider`
- `provider_payment_id`
- `provider_customer_id`
- `customer_email`
- `amount`
- `currency`
- `status`
- `mode`
- `occurred_at`
- `price_ref`
- `refund_status`
- `activation_ref` optional
- `evidence_url` optional

### Valid first external payment

A payment counts only when:

- the event comes from live `Lava.top` payment evidence or its normalized equivalent in the adapter
- mode is live
- status is captured or paid
- payment is not marked test or internal
- payer is not in denylist:
  - founder emails
  - team emails
  - internal domains
  - known internal customer ids
- payment is not refunded or chargebacked in the short review window
- `price_ref` matches the published paid offer from the launch brief

The following do not count as pass:

- LOI
- deposit
- manual invoice without real checkout
- fake pre-order
- internal test purchase

When payer affiliation is unclear:

- mark payment `pending_review`
- board decides in daily review

## Budget Policy

Company hard cap:

- `$1k/month`

Research circuit breaker:

- `<= $15` external or tool spend per `venture_id` before `research -> queued`

If the cap is exhausted:

- stop work
- escalate to board
- do not silently continue

## Evidence and Attachment Policy

Default attachment contract:

- max size `10 MB`
- allowed types: pdf, markdown, plain text, json, csv, html, images
- filename starts with `venture_id`

Large scrape dumps are not canonical state. They must be summarized, split, or linked externally.

## Bootstrap Actions Required From Studio OS

1. `Create Raw Idea`
2. `Advance To Research`
3. `Promote To Venture`
4. `Attach Product Repo`
5. `Record Payment Signal`

All actions must be:

- idempotent
- race-safe
- keyed by `venture_id`

## Acceptance Criteria

- no duplicate entities on repeated bootstrap calls
- WIP limits block invalid transitions
- score cannot pass without evidence links
- stale queue entries refresh or fall back
- repo cannot attach before Gate B
- payment events produce `valid`, `pending_review`, or `rejected`
- ambiguous payment does not auto-promote to portfolio
- kill rule fires correctly
- retired ventures keep history
