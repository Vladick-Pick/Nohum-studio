# Decision 0001: Research Foundation v1

## Status

Accepted

## Context

NoHum needs a reproducible research layer that can scale beyond one-off founder-driven exploration.

The immediate temptation is to add a dedicated intake agent first. That would be premature. The current research module still holds intake semantics, handoff semantics, and substrate ownership partly inside the `Research Lead` prompt and partly inside generic docs. That makes future scaling brittle and makes the next agent addition depend on fresh architectural decisions.

## Decision

We will ship `Foundation -> Idea Scout`, not `Idea Scout first`.

Research Foundation v1 separates module architecture from agent activation:

- freeze research-local contracts before introducing a new intake agent
- freeze TrustMRR as the only v1 intake universe for new candidate sourcing
- keep research isolated from global studio ops work in this phase
- keep `Research Lead` as the temporary intake executor in current state
- define the target state where `Idea Scout` takes over intake
- define shared research substrate contracts before any agent is allowed to own their implementation details informally

## Why Research Is Separate From Global Studio Ops

Research is the first production layer that needs to become repeatable and evidence-disciplined. Pulling in global studio ops at the same time would slow the module, widen the blast radius, and mix control-plane work with domain semantics.

This decision keeps the phase narrow:

- only research docs, roles, and contracts change
- no global studio ops redesign
- no build, launch, support, or payment scope

## Why `Research Lead` Keeps Intake In V1

The module already has an active intake path through `Research Lead`.

Replacing it immediately with a new agent would couple three changes into one import:

- new role creation
- execution order changes
- schema and ownership freezes

That is the wrong order. In Foundation v1, `Research Lead` keeps intake so the current flow stays valid while contracts are frozen.

## Exit Criteria For Foundation v1

Foundation v1 is complete only when the following are explicit and stable:

- intake schema
- domain enrichment schema
- adapter ownership
- retry/escalate semantics
- incident routing
- current-vs-target role split
- duplicate policy for TrustMRR-sourced leads

## What Counts As Activation After Foundation

The single company import may include `Idea Scout`, but `Idea Scout` is not
allowed to start work until the bootstrap sequence confirms the research lane
is ready.

The exact scope of `Idea Scout` is refined in Decision 0002.

That activation may:

- assign `Idea Scout` the first sourcing batch task
- attach scoped TrustMRR and SimilarWeb/Apify access
- move the research execution order from `Research Lead` temporary intake to
  `Idea Scout` owned intake

That activation may not reopen foundation-level questions already frozen here.
