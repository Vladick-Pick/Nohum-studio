# Research Execution System

This document turns NoHum research from policy into execution.

Research Foundation v1 remains the contract base that makes the `Idea Scout` import safe.

## Operating Model Split

### Current State

- `Idea Scout` returns TrustMRR sourcing batches to `Research Lead`
- `Research Lead` selects `0..N` raw leads and normalizes each shortlisted lead through its own canonical `Idea Card`
- specialists update the same idea card rather than handing off through a separate synthesis role
- current research behavior must remain valid after this import

### Target State

- `Idea Scout` remains the bounded TrustMRR sourcing role
- `Research Lead` remains the owner of shortlist selection, intake quality, specialist review, routing, and semantic substrate
- each candidate moves through one shared canonical document from intake to final decision
- no extra enrichment-only role or synthesis-only role is inserted between `Idea Scout` and the specialist lane

Draft note:

- the `one idea -> one shared document` workflow is active
- the exact section structure inside the canonical idea card is still a working draft and will be tightened when each specialist contract is finalized

Research-local contracts narrow the generic company handoff language:

- artifact quality uses `PASS | RETRY | ESCALATE`
- research meaning uses `positive | negative | inconclusive`
- retry is for weak artifacts, not disliked conclusions

See:

- [Intake and Handoffs](./contracts/intake-and-handoffs.md)
- [Shared Adapters](./contracts/shared-adapters.md)

## Stage Order

1. `Idea Scout` sources a TrustMRR batch and returns it to `Research Lead`.
2. `Research Lead` decides whether none, one, or multiple candidates deserve intake.
3. For each selected candidate, `Research Lead` creates one canonical `Idea Card`, preserves the scout raw data blocks inside it, and sets only an intake-stage verdict: `REJECT`, `HOLD`, or `RESEARCH`.
4. `Competitor Scout` updates the competition section of that `Idea Card` and may attach supporting competitor evidence cards.
5. `Demand Validator` updates the demand section of that `Idea Card` and may attach supporting traffic validation sheets or evidence-gap logs.
6. `Revenue Validator` updates the monetization section of that `Idea Card` and records first-payment and `$5k MRR` reasoning in the same canonical document.
7. `Research Lead` reviews section quality, requests revisions when needed, and only then issues the final research decision: `KILL`, `KILL FOR NOW`, or `QUEUE`.

## Competition Review Discipline

`Research Lead` reviews competition work in two dimensions:

- artifact quality: `PASS | RETRY | ESCALATE`
- content result: `positive | negative | inconclusive`

For `Competition`, `PASS` means the section is complete enough to use.
It does not mean the market is attractive.

`Competition` should usually be returned as `RETRY` when:

- direct competitors are asserted without enough official-site proof
- retained competitors are obviously adjacent, too broad, or not clearly live
- pricing claims have no official pricing proof and no explicit `pricing hidden` note
- traffic or VOC claims are narrative-only
- contradictions and unresolved items are missing

`Competition` should be treated as reviewable only when:

- every retained direct competitor has one linked evidence card
- directness is verified against official product pages
- the main card contains a normalized positioning and workflow summary derived from competitor sites
- `SimilarWeb` is used for retained competitors whenever the source is usable
- empty VOC sources are recorded explicitly rather than skipped silently

## Demand Review Discipline

`Research Lead` reviews demand work in two dimensions:

- artifact quality: `PASS | RETRY | ESCALATE`
- content result: `positive | negative | inconclusive`

For `Demand`, `PASS` means the section is complete enough to use.
It does not mean the market is attractive.

`Demand` should usually be returned as `RETRY` when:

- demand classes are collapsed into one weak source
- search claims treat SERP snapshots as exact search-volume proof
- competitor traffic is recollected instead of reused from the competition packet
- problem/category chatter is mostly promo noise and the noise is not called out
- the section claims demand pass without either `Search Demand` or `Observed Usage Demand`

`Demand` should be treated as reviewable only when:

- reused competition evidence is cited explicitly where used
- problem/category SERP queries are shown
- problem/category Reddit or X queries are shown when conversation claims are made
- contradictions and unresolved items are explicit
- the hard-gate decision is grounded in at least `2` demand classes, with one from `Search Demand` or `Observed Usage Demand`

## Monetization Review Discipline

`Research Lead` reviews monetization work in two dimensions:

- artifact quality: `PASS | RETRY | ESCALATE`
- content result: `positive | negative | inconclusive`

For `Monetization`, `PASS` means the section is complete enough to use.
It does not mean the business is attractive.

`Monetization` should usually be returned as `RETRY` when:

- pricing claims lack public pricing proof or an explicit `pricing hidden` note
- scenario math hides churn or conversion assumptions
- assumed churn or conversion is presented as observed fact
- the section claims `$5k MRR` plausibility without connecting ARPS, first payment, and subscription-retention logic
- baseline metrics are used without marking whether they are observed or inferred

`Monetization` should be treated as reviewable only when:

- preserved `TrustMRR` baseline is cited explicitly
- reused upstream `SimilarWeb` is identified when traffic is used in the model
- public competitor pricing anchors are shown
- first-payment friction is explained
- contradictions, unknowns, and false-precision risks are explicit

## Agent Execution Matrix

| Agent | Primary job | Mandatory NoHum skills | Primary tools | Runtime access | Required outputs |
|---|---|---|---|---|---|
| `Idea Scout` | TrustMRR sourcing batches and rough first-pass screening | `venture-policy`, `research-source-registry`, `research-trustmrr-sourcing` | `paperclip`, `paperclip-knowledge`, browser research | `TRUSTMRR_API_KEY`, `APIFY_TOKEN`, host-managed model auth | TrustMRR sourcing batch, duplicate notes, shortlist-ready candidate rows |
| `Research Lead` | intake, specialist review, queue quality, final verdict | `venture-policy`, `research-scorecard`, `research-trustmrr-intake`, `research-source-registry`, `research-evidence-fallbacks`, `research-canonical-package`, `research-competitor-analysis`, `research-demand-validation`, `research-revenue-validation` | `paperclip`, `paperclip-knowledge`, browser research, optional memory | `BRAVE_API_KEY`, host-managed model auth | per-idea `Idea Card`, research routing notes, section review comments, scorecard, decision log, queue recommendation |
| `Competitor Scout` | direct competitor discovery and category proof | `venture-policy`, `research-scorecard`, `research-source-registry`, `research-competitor-discovery`, `research-competitor-analysis`, `competitor-analysis` | browser research, `paperclip`, `paperclip-knowledge` | `OPENROUTER_API_KEY`, `APIFY_TOKEN`, optional `BRAVE_API_KEY` | competition section updates inside the `Idea Card`, supporting competitor evidence cards when needed |
| `Demand Validator` | demand-class proof and ambiguity control | `venture-policy`, `research-scorecard`, `research-source-registry`, `research-demand-validation`, `research-traffic-validation`, `research-evidence-fallbacks` | browser research, `paperclip`, `paperclip-knowledge`, optional analytics read when a concrete datasource exists | `APIFY_TOKEN`, optional `BRAVE_API_KEY` | demand section updates inside the `Idea Card`, supporting traffic validation or ambiguity notes when needed |
| `Revenue Validator` | monetization reality and first-payment path | `venture-policy`, `research-scorecard`, `research-source-registry`, `research-revenue-validation`, `research-evidence-fallbacks`, `pricing-strategy`, `monetization-strategy` | browser research, `paperclip`, `paperclip-knowledge` | `BRAVE_API_KEY` | monetization section updates inside the `Idea Card`, supporting pricing and economics notes when needed |

## Tool Discipline

- `paperclip` owns issue state, assignments, and comments.
- `paperclip-knowledge` owns durable research packets and canonical package publication.
- browser research is for source collection and citation only.
- optional analytics read is support evidence for demand, not a substitute for public proof.
- shared substrate contracts are defined in `docs/research/contracts/shared-adapters.md`

## Access Discipline

- research roles do not need deploy, repo-write, or payment-operation access
- `Revenue Validator` does not need live provider credentials to reason about public pricing
- all research claims must cite a source class, freshness, and confidence

## Artifact Chain

Research must move through these artifacts in order:

1. trustmrr sourcing batch
2. one `Idea Card` per selected idea
3. specialist section updates inside that `Idea Card`
4. supporting evidence cards or validation sheets when needed
5. evidence gap log when proof is incomplete
6. final decision block inside the same `Idea Card`, populated only after specialist review

If the next owner cannot act from the artifact alone, the handoff is incomplete.

## Foundation Completion Gate

This import is considered complete only when the following are frozen for research:

- intake schema
- domain enrichment schema
- adapter ownership
- retry/escalate semantics
- incident routing
- current-vs-target role split
- duplicate policy for TrustMRR-sourced leads
