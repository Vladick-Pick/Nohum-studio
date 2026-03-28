# NoHum Machine Completion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Turn the current NoHum Studio contour into a repeatable venture machine instead of a manager-led semi-manual studio.

**Architecture:** Build the machine in layers. First make research systematic, then make artifact flow systematic, then automate venture promotion, then normalize payment events and build substrate. Do not open more venture lanes until the machine layer catches up.

**Tech Stack:** Paperclip live runtime, managed agent instructions, issue/project workflow, venture documents, Studio OS routines, server-hosted bootstrap repo.

---

### Task 1: Lock The Current State And Stop Scope Creep

**Files:**
- Review: `docs/runtime-state-2026-03-28.md`
- Review: `docs/readiness-map-2026-03-28.md`

**Step 1: Treat the current system as one active venture plus one machine-building lane**

No new venture candidate should consume a second operational lane until the machine tasks below are materially complete.

**Step 2: Use the current venture only as the calibration lane**

The current venture remains the test case for handoff, venture docs, and later Gate B application.

**Step 3: Keep all machine-building work in `Studio OS`**

Do not mix machine-building with venture execution except where the current venture is the concrete example.

### Task 2: Finish The Research Machine Layer

**Live Issues:**
- `NOH-15` `Define Research Machine v1`
- `NOH-16` `Design research evidence and storage contract`

**Step 1: Accept `NOH-15` and `NOH-16` as the baseline research machine contract**

These are now good enough to become the operating baseline.

**Step 2: Convert the baseline into live operating behavior**

Tomorrow, force all new research work to follow:

- the output classes `KILL`, `KILL FOR NOW`, `QUEUE`
- the storage layers `raw evidence -> canonical queue package -> venture docs`
- canonical `venture_id`

**Step 3: Define the first real research pod topology**

Tomorrow’s discussion should decide:

- whether to keep one `Research Lead` temporarily
- or immediately hire specialist subagents:
  - `Competitor Scout`
  - `Demand Validator`
  - `Revenue Validator`
  - `Research Synthesizer`

**Step 4: Decide the source registry**

Tomorrow’s output must explicitly name which sources count for:

- competitors
- pricing
- traffic / usage
- revenue / payment proof
- reviews / complaints / buyer intent

### Task 3: Finish Venture Bootstrap Automation Design

**Live Issue:**
- `NOH-17` `Define Promote To Venture routine`

**Step 1: Make `NOH-17` the highest-priority open machine task**

This is the biggest current manual gap.

**Step 2: Require the routine to define all created entities**

It must specify:

- venture project
- root issues
- required docs
- assignments
- idempotency

**Step 3: Make the current venture the test case**

The routine should be checked against `vh-20260328-visual-feedback-agency` and must explain whether the existing live venture already matches the intended contract.

### Task 4: Finish Venture Document Contract

**Live Issue:**
- `NOH-19` `Define venture document template contract`

**Step 1: Define the minimum required venture docs**

At minimum:

- `registry`
- `launch-brief`
- `handoff-dossier`
- `feedback-log`
- `payment-events`

**Step 2: Define the ownership of each doc**

Tomorrow’s output must specify:

- who creates it
- who updates it
- when it becomes required

**Step 3: Connect it to the current venture**

The contract should say what is missing right now in `vh-20260328-visual-feedback-agency`.

### Task 5: Finish Payment Event Logic

**Live Issue:**
- `NOH-18` `Define first payment signal normalization`

**Step 1: Accept the current document as the policy baseline**

This issue is already strong enough to use as policy.

**Step 2: Tomorrow decide the implementation target**

We need one explicit next answer:

- what provider comes first
- where raw payment events land
- who or what classifies them
- how they update `payment-events` and `registry.payment_review_state`

### Task 6: Tomorrow’s Exact Working Session

Tomorrow we should do exactly this, in order:

1. Review `NOH-17` and force a complete `Promote To Venture` routine
2. Review `NOH-19` and force a complete venture document template contract
3. Decide the first research pod topology
4. Decide the actual source registry for competitor, traffic, and revenue validation
5. Decide the first payment provider target
6. Turn those answers into the next `Studio OS` tasks

### Task 7: Tomorrow’s Output Requirement

Tomorrow’s session is successful only if we leave with:

- one accepted `Promote To Venture` contract
- one accepted venture document template contract
- one agreed research pod topology
- one agreed source registry
- one agreed first payment provider target
- one short next implementation backlog

### Task 8: Operating Rule Until Then

Until those pieces exist:

- do not call the system finished
- do not open more venture lanes
- do not treat generic model browsing as the final research architecture
- do not start build just because one candidate looks good

### Task 9: Resulting Next Phase

If tomorrow’s session succeeds, the next phase becomes straightforward:

1. hire or configure the first research subagents
2. operationalize the source registry
3. implement `Promote To Venture`
4. scaffold venture docs automatically
5. choose and wire the first payment adapter

That is the point where NoHum Studio stops being “a live contour with smart agents” and starts becoming a machine.
