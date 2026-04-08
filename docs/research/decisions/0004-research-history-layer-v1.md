# Decision 0004: Research History Layer v1 (One Card + Derived Layers)

## Status

Accepted

## Context

Decision 0003 already froze `one idea -> one card` as the execution model.

What remained underspecified was the history layer shape:

- which fields make one case traceable across time
- how duplicate tracking links one card to another
- where final-decision reason codes are normalized
- whether reporting/index layers can override card semantics

Without this, the system can drift into parallel truths:

- one truth in the canonical `Idea Card`
- another truth in derived sheets, dashboards, or ad hoc summaries

That breaks auditability and re-open logic.

## Options

1. Keep only free-text history on the card and no normalized history fields.
Pros: fastest to write.
Cons: weak dedupe, weak reporting, weak reopen discipline.

2. Make derived history layers co-primary with the card.
Pros: easier downstream reporting ergonomics.
Cons: semantic drift risk, conflict resolution ambiguity, dual-write burden.

3. Keep the `Idea Card` as primary truth and define a normalized history field set plus controlled reason codes; treat all derived layers as secondary.
Pros: one source of truth, deterministic backfill, clearer conflict handling.
Cons: tighter field discipline required in the card.

## Decision

We choose option 3.

The deciding reason is auditability with one canonical source of truth while still allowing derived views.

## Consequences

Makes easier:

- deterministic history indexing from card fields
- duplicate linkage through stable case ids
- consistent final-verdict analysis through controlled reason codes
- reopening logic tied to explicit revisit metadata

Makes harder:

- card authors must keep normalized history fields complete
- finalization checklist is stricter before closing a case

Revisit if:

- research scale materially outgrows card-derived indexing performance
- a future phase adds a dedicated history service with stronger guarantees than document-derived rollups

## Scope And Non-Goals

In scope:

- canonical history fields in the `Idea Card` contract/template
- controlled decision reason-code taxonomy
- duplicate linkage and revisit metadata

Out of scope:

- Paperclip core changes
- plugin-dependent storage or indexing layers
- replacing the canonical card with a derived artifact
