# Decision 0002: Idea Scout Is Sourcing-Only

## Status

Accepted

## Context

Research Foundation v1 froze the research module before the dedicated scouting role existed.

The first draft of the next import over-scoped `Idea Scout` as a potential intake and enrichment owner. That would have created the wrong shape:

- sourcing and intake would be collapsed into one role
- `Research Lead` would lose visibility too early
- the system would drift away from the intended routing pattern

## Decision

`Idea Scout` is a sourcing-only role in v1.

The routing model is:

- `CEO` requests a new candidate through `Research Lead`
- `Research Lead` issues a sourcing brief to `Idea Scout`
- `Idea Scout` returns a `TrustMRR Sourcing Batch` to `Research Lead`
- `Research Lead` selects which raw leads deserve the canonical intake card
- deep validation remains with existing research specialists

## Consequences

- `Research Lead` keeps ownership of intake normalization
- there is no extra enrichment-only role inserted between `Idea Scout` and the specialist lane
- `Idea Scout` does not decide queue outcomes
- `Idea Scout` helps scale top-of-funnel discovery without changing the rest of the research decision chain
