# Research Execution System

This document turns NoHum research from policy into execution.

## Stage Order

1. `Research Lead` normalizes the raw lead through an intake card.
2. `Competitor Scout` builds the direct competitor map and per-competitor evidence cards.
3. `Demand Validator` proves demand classes, including the traffic-or-usage class.
4. `Revenue Validator` proves pricing reality and the path to first payment plus `$5k MRR`.
5. `Research Synthesizer` turns the specialist packets into one canonical queue package.
6. `Research Lead` issues the final decision: `KILL`, `KILL FOR NOW`, or `QUEUE`.

## Agent Execution Matrix

| Agent | Primary job | Mandatory NoHum skills | Primary tools | Runtime access | Required outputs |
|---|---|---|---|---|---|
| `Research Lead` | intake, queue quality, final verdict | `venture-policy`, `research-scorecard`, `research-trustmrr-intake`, `research-source-registry`, `research-evidence-fallbacks`, `research-canonical-package`, `research-competitor-analysis`, `research-demand-validation`, `research-revenue-validation` | `paperclip`, `paperclip-knowledge`, browser research, optional memory | `BRAVE_API_KEY`, host-managed model auth | intake card, research routing notes, scorecard, decision log, queue recommendation |
| `Competitor Scout` | direct competitor discovery and category proof | `venture-policy`, `research-scorecard`, `research-source-registry`, `research-competitor-discovery`, `research-competitor-analysis`, `competitor-analysis` | browser research, `paperclip`, `paperclip-knowledge` | `BRAVE_API_KEY` | competitor evidence cards, category shape note, pricing visibility proof |
| `Demand Validator` | demand-class proof and ambiguity control | `venture-policy`, `research-scorecard`, `research-source-registry`, `research-demand-validation`, `research-traffic-validation`, `research-evidence-fallbacks` | browser research, `paperclip`, `paperclip-knowledge`, optional analytics read when a concrete datasource exists | `BRAVE_API_KEY` | class-by-class demand packet, traffic validation sheet, ambiguity notes |
| `Revenue Validator` | monetization reality and first-payment path | `venture-policy`, `research-scorecard`, `research-source-registry`, `research-revenue-validation`, `research-evidence-fallbacks`, `pricing-strategy`, `monetization-strategy` | browser research, `paperclip`, `paperclip-knowledge` | `BRAVE_API_KEY` | pricing reality snapshot, first-payment path, `$5k MRR` path, economics caveats |
| `Research Synthesizer` | normalize packets into one queue package | `venture-policy`, `research-scorecard`, `research-source-registry`, `research-evidence-fallbacks`, `research-canonical-package`, `prioritize-assumptions` | `paperclip`, `paperclip-knowledge`, optional memory | host-managed model auth | canonical queue package, hard-gates matrix, weighted score, open-risk summary |

## Tool Discipline

- `paperclip` owns issue state, assignments, and comments.
- `paperclip-knowledge` owns durable research packets and canonical package publication.
- browser research is for source collection and citation only.
- optional analytics read is support evidence for demand, not a substitute for public proof.

## Access Discipline

- research roles do not need deploy, repo-write, or payment-operation access
- `Revenue Validator` does not need live provider credentials to reason about public pricing
- all research claims must cite a source class, freshness, and confidence

## Artifact Chain

Research must move through these artifacts in order:

1. trustmrr intake card
2. competitor evidence cards
3. traffic validation sheet
4. demand and revenue packets
5. evidence gap log when proof is incomplete
6. canonical queue package

If the next owner cannot act from the artifact alone, the handoff is incomplete.
