# NoHum Studio Machine Build Plan

Date: 2026-03-28

This document is the next-step build plan for turning the current NoHum Studio contour into a real operating machine.

The current live company already proves that Paperclip can host the studio. The next phase is to stop relying on one-off setup and make the studio systematic.

## 1. Objective

Move from:

- live bootstrap contour
- three manager agents
- manual issue/project shaping
- instruction-heavy research

to:

- repeatable research loops
- explicit source and evidence contracts
- stable handoff artifacts
- predictable Gate A and Gate B behavior
- reusable venture bootstrap and launch machinery

## 2. Design Principle

Do not try to fully automate everything at once.

Build the machine in layers:

1. make research systematic
2. make artifact flow systematic
3. make venture bootstrap systematic
4. make build and payment signals systematic

Only then worry about deeper scale.

## 3. Workstream A: Research Machine v1

### Goal

Turn `Research Lead` from a smart generalist into the coordinator of a real research pod.

### Required subfunctions

The research pod needs separate responsibilities for:

- competitor discovery
- pricing and packaging validation
- traffic / usage validation
- payment / revenue proof validation
- synthesis into queue package format

### Recommended live topology

Keep `Research Lead` as the manager. Under it, later add specialized workers such as:

- `Competitor Scout`
- `Demand Validator`
- `Revenue Validator`
- `Research Synthesizer`

The first version can still run with fewer agents, but the responsibilities must be split explicitly even if they are temporarily grouped.

### Source registry

Research must stop depending on unspecified "the model found something".

Define source classes:

- competitor and pricing sources
- traffic / usage sources
- payment / revenue proof sources
- review / complaint / buyer intent sources
- official docs and ecosystem sources

For each class, define:

- default source list
- acceptable freshness
- confidence expectations
- when evidence is insufficient

### Trigger model

Research should not run in a constant uncontrolled loop.

Recommended v1 trigger model:

- `CEO` opens or wakes a sourcing batch when a queue slot is available
- `Research Lead` runs on its issue plus wake-on-demand
- queue refresh runs only when:
  - queued item is aging
  - evidence is stale
  - board requests reevaluation

This keeps spend and noise under control.

### Output contract

Research must always end in one of these outputs:

- `KILL`
- `KILL FOR NOW`
- `QUEUE`

For a `QUEUE` recommendation, the output must be a canonical queue package with:

- `venture_id`
- hard-gates matrix
- weighted score
- economics
- strongest runner-up comparison
- final decision

## 4. Workstream B: Knowledge and Artifact Flow

### Goal

Make it obvious where information lives and how it moves.

### Storage contract

Use three layers:

1. raw evidence
   - source links
   - notes
   - attachments
   - temporary validation artifacts

2. canonical research package
   - one normalized queue package per candidate that reaches decision quality

3. venture artifacts
   - `Research Dossier`
   - `Scoring & Economics`
   - `Product Definition`
   - `launch-brief`
   - `handoff-dossier`
   - `feedback-log`
   - `payment-events`

### Handoff contract

Research outputs must move in a fixed order:

`Hypothesis Funnel` -> queue package -> `Venture` project -> `Product Definition` -> `Gate B` -> build

The build side should not reread the full sourcing trail.

It should read:

- queue package
- venture docs
- handoff dossier

## 5. Workstream C: Venture Bootstrap Automation v1

### Goal

Stop creating venture lanes by hand.

### Required actions

Implement the following as `Studio OS` actions or routines:

- `Create Raw Idea`
- `Advance To Research`
- `Promote To Venture`
- `Attach Product Repo`
- `Record Payment Signal`

### Minimum automation behavior

Each action must be:

- idempotent
- keyed by `venture_id`
- safe to retry
- explicit about what it creates and updates

### First target

The first valuable automation is `Promote To Venture`.

It should create:

- venture project
- 6 root issues
- required venture docs
- correct initial assignments

That is the biggest current manual gap.

## 6. Workstream D: Build and Launch Execution Substrate

### Goal

Make `Launch Lead` capable of running a repeatable build-to-launch path once Gate A succeeds.

### What must exist before build

- venture-specific `Product Definition`
- venture-specific `launch-brief`
- venture-specific `handoff-dossier`
- payment implementation choice
- analytics destination
- feedback capture path

### What still needs to be built

- repo scaffold policy
- workspace attach routine
- concrete Gate B application workflow
- venture-specific launch checklist application

## 7. Workstream E: Payment Signal and Portfolio Loop

### Goal

Turn first payment from a vague business notion into a reliable system event.

### Required layer

Implement a provider-agnostic `Payment Signal Adapter`.

Normalized event fields must include:

- `venture_id`
- provider identifiers
- amount and currency
- live/test mode
- payment status
- refund status
- supporting evidence

### Decision rule

Do not guess.

Possible outcomes:

- `valid`
- `pending_review`
- `rejected`

This allows the `14-day` rule to be real instead of narrative.

## 8. What To Create Next In Studio OS

The next `Studio OS` work should be framed as machine-building tasks, not generic setup.

Create these tasks next:

1. `Define Research Machine v1`
   - owner: `CEO`
   - output: source registry, subagent topology, cadence, outputs, quality bar

2. `Design research evidence and storage contract`
   - owner: `Research Lead`
   - output: raw evidence vs canonical package vs venture artifact contract

3. `Define Promote To Venture routine`
   - owner: `CEO`
   - output: exact inputs, created entities, idempotency rules, assignments

4. `Define first payment signal normalization`
   - owner: `Launch Lead`
   - output: normalized payment event contract and review states

5. `Define venture document template contract`
   - owner: `Launch Lead`
   - output: minimal required fields for registry, launch brief, handoff dossier, feedback log, payment events

## 9. What To Avoid

Do not pretend the machine already exists.

Do not:

- keep everything on one `Research Lead`
- treat generic web search as a permanent research architecture
- create more venture lanes before the first lane has a clean artifact flow
- start build before budget and payment path are real
- confuse heartbeat polling with business logic

## 10. Sequencing Recommendation

Recommended order:

1. finish the first venture's research and product-definition artifacts cleanly
2. define `Research Machine v1`
3. define the storage and handoff contract
4. define `Promote To Venture`
5. define payment normalization
6. only then push toward repeated venture creation

## 11. System Reality

The truthful state today is:

- the contour is alive
- the company is usable
- one venture lane exists
- the machine is not finished

That is acceptable.

The next phase is not more bootstrap theater.

The next phase is to build the missing machine layers explicitly and intentionally.
