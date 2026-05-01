# Revenue Validator Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade `Revenue Validator` docs and shared contracts so the agent produces a scenario-based monetization section with explicit assumptions and review rules.

**Architecture:** Keep the specialist reuse-first. The agent reads preserved `TrustMRR`, reused `SimilarWeb`, competitor pricing, and demand context from the shared `Idea Card`, then writes a normalized monetization section that distinguishes observed data, inferred metrics, and assumed scenario variables.

**Tech Stack:** Markdown docs, existing research contracts, shared `Idea Card`, public pricing pages, reused `TrustMRR` and `SimilarWeb` snapshots

---

### Task 1: Freeze the approved design

**Files:**
- Create: `docs/plans/2026-04-07-revenue-validator-design.md`
- Create: `docs/plans/2026-04-07-revenue-validator-implementation.md`

**Step 1: Save the approved design**

Write the design note with the required output blocks, modeling rules, and review standard.

**Step 2: Save this implementation plan**

Store the implementation plan so the revenue-validator work is durable and reviewable.

### Task 2: Update the specialist skill and runtime guidance

**Files:**
- Modify: `skills/research-revenue-validation/SKILL.md`
- Modify: `agents/revenue-validator/TOOLS.md`
- Modify: `agents/revenue-validator/HEARTBEAT.md`
- Modify: `agents/revenue-validator/AGENTS.md`

**Step 1: Expand the skill**

Add reuse-first inputs, required output shape, source stack, and scenario-model rules.

**Step 2: Expand tools guidance**

Add source priority, modeling discipline, and disallowed monetization behavior.

**Step 3: Tighten heartbeat and outputs**

Make the agent explicitly validate baseline economics, pricing reality, first payment, and scenario assumptions.

### Task 3: Update the shared artifact contract

**Files:**
- Modify: `docs/templates/research/idea-card.md`
- Modify: `docs/research/contracts/intake-and-handoffs.md`
- Modify: `docs/research/research-execution-system.md`

**Step 1: Expand the `Monetization Section` template**

Replace the thin placeholder fields with the approved normalized blocks and scenario-case fields.

**Step 2: Add the monetization contract**

Document required fields, source rules, and review rules for `Research Lead`.

**Step 3: Add review discipline to the execution system**

Explain when monetization work is reviewable and when it must be returned as `RETRY` or `ESCALATE`.

### Task 4: Verify and commit

**Files:**
- Modify: the files above

**Step 1: Run doc verification**

Run `git diff --check` and inspect the affected docs.

**Step 2: Commit intentionally**

Create one commit for the revenue-validator contract upgrade after verification.
