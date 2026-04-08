# Research Module

This directory is the versioned package surface for NoHum research.

The research module must evolve through GitHub commits and official Paperclip imports, not through ad hoc runtime edits on a VPS or private shadow docs.

## Purpose

Research exists to turn revenue-visible raw leads into decision-grade queue packages that survive Gate A scrutiny.

## How It Works

Research v1 uses a staged shared-document flow.

1. `Idea Scout` produces a `TrustMRR Sourcing Batch`.
2. `Research Lead` reviews the batch, checks `Decision Memory` for duplicates, and either asks for a new batch or creates one canonical `Idea Card` per selected candidate.
3. The `Idea Card` preserves scout raw data blocks:
   - `Scout Summary`
   - `Full TrustMRR Snapshot`
   - `SimilarWeb Enrichment`
   - `Derived Heuristics`
4. Specialists write into that same card:
   - `Competitor Scout` updates `Competition`
   - `Demand Validator` updates `Demand`
   - `Revenue Validator` updates `Monetization`
5. `Research Lead` reviews section quality and only after specialist review may write the final research verdict.
6. After the final research verdict, the same canonical `Idea Card` projects into derived history surfaces:
   - `Research Registry`
   - `Decision Memory`
   - `Eval Dataset Export`

Stage-discipline rule:

- intake stage uses only `REJECT | HOLD | RESEARCH`
- final stage uses only `QUEUE | KILL | KILL FOR NOW`
- final-stage language must not appear before specialist sections are complete enough to review

## Current State vs Target State

### Current State

- `Idea Scout` sources new TrustMRR batches for `Research Lead`.
- `Research Lead` still performs the canonical `Idea Card` step on shortlisted leads.
- specialists update the selected candidate's canonical `Idea Card` under `Research Lead` review.

### Target State

- `Idea Scout` remains the bounded top-of-funnel sourcing role
- `Research Lead` stays focused on shortlist selection, intake quality, specialist review, routing, and semantic substrate ownership
- each selected idea flows through one shared canonical document rather than separate specialist packets plus a synthesizer hop
- derived history surfaces are projected from that same canonical card instead of becoming a second source of truth

## Module Map

- [Copyable Product Thesis](./copyable-product-thesis.md)
- [Research Execution System](./research-execution-system.md)
- [Source Registry](./source-registry.md)
- [History Layer](./history-layer.md)
- [Paperclip Runtime Compatibility](./paperclip-runtime-compatibility.md)
- [Evidence Fallback Matrix](./evidence-fallback-matrix.md)
- [Traffic Interpretation Bands](./traffic-interpretation-bands.md)
- [Contracts: Intake and Handoffs](./contracts/intake-and-handoffs.md)
- [Contracts: Shared Adapters](./contracts/shared-adapters.md)
- [Decision 0001: Research Foundation v1](./decisions/0001-research-foundation-v1.md)
- [Decision 0002: Idea Scout Is Sourcing-Only](./decisions/0002-idea-scout-sourcing-only.md)
- [Decision 0003: One Idea, One Card, No Research Synthesizer](./decisions/0003-one-idea-one-card-no-synthesizer.md)
- [Decision 0004: Research History Layer v1](./decisions/0004-research-history-layer-v1.md)
- [TrustMRR Sourcing Batch Template](../templates/research/trustmrr-sourcing-batch.md)
- [Idea Card Template](../templates/research/idea-card.md)
- [Research Registry Template](../templates/research/research-registry.md)
- [Decision Memory Index Template](../templates/research/decision-memory-index.md)
- [Eval Dataset Export Template](../templates/research/eval-dataset-export.md)
- [Competitor Evidence Card Template](../templates/research/competitor-evidence-card.md)

## Shared Selection Filter

The research module uses one shared product-selection thesis:

- `Idea Scout` uses it as a search-and-reject heuristic at the sourcing stage
- `Research Lead` uses it as the intake decision framework before specialist research begins
- queue-facing research packages must preserve the same doctrine for `CEO` and board Gate A scrutiny

The canonical source is:

- [Copyable Product Thesis](./copyable-product-thesis.md), specifically the normalized `11-point` shared venture-selection doctrine

Operational meaning:

- the doctrine is not research-only; it is shared across `Idea Scout` shortlist shaping, `Research Lead` intake/final verdict quality, and Gate A-facing queue package quality
- queue quality is weak by default when doctrine evidence is missing, stale, contradictory, or prose-only

## Foundation Rule

Research Foundation v1 is complete only when these surfaces are frozen:

- intake schema
- domain enrichment schema
- adapter ownership
- retry/escalate semantics
- incident routing
- current-vs-target role split
- duplicate policy for TrustMRR-sourced leads
- research history surfaces and controlled reason-code taxonomy

These surfaces stay frozen so `Idea Scout` and the rest of the research lane can evolve without reopening module-level architecture.
