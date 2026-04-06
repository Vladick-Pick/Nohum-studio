# Decision 0003: One Idea, One Card, No Research Synthesizer

## Status

Accepted

## Context

The previous research flow inserted `Research Synthesizer` between the specialist lane and `Research Lead`.

That added an extra coordination hop:

- specialists produced separate packets
- `Research Synthesizer` normalized them into one queue package
- only then did `Research Lead` make the final decision

For Research v1 this added unnecessary complexity. The simpler and more controllable model is:

- one candidate
- one canonical idea card
- specialists update dedicated sections inside the same document
- `Research Lead` directly reviews quality and makes the final verdict

## Decision

Research v1 will use a `one idea -> one shared document` model.

Rules:

- `Idea Scout` returns a `TrustMRR Sourcing Batch`
- `Research Lead` selects `0..N` candidates from that batch
- each selected candidate gets its own canonical `TrustMRR Intake Card`
- the intake card must preserve the raw `Idea Scout` data blocks:
  - `Scout Summary`
  - `Full TrustMRR Snapshot`
  - `SimilarWeb Enrichment`
  - `Derived Heuristics`
- `Competitor Scout`, `Demand Validator`, and `Revenue Validator` update their own sections inside that same intake card
- `Research Lead` reviews those sections, requests revisions through issues/comments when needed, and makes the final verdict
- `Research Synthesizer` is not part of the active Research v1 execution path

## Consequences

Benefits:

- fewer coordination hops
- one canonical research artifact per candidate
- no ambiguity about which document is the source of truth
- `Research Lead` owns both intake quality and final decision quality

Tradeoffs:

- `Research Lead` takes on the final synthesis burden directly
- specialist sections must stay disciplined so the shared document does not become a junk drawer

## Implementation Notes

This decision changes:

- research execution docs
- intake and handoff contracts
- research team composition in import surfaces
- specialist role docs and heartbeat instructions

It does not forbid supporting evidence artifacts such as:

- competitor evidence cards
- traffic validation sheets
- evidence gap logs

But these are supporting attachments, not replacements for the canonical per-idea document.
