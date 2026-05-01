# Demand Validator V1 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Finalize `Demand Validator` as an Apify-first, reuse-first research role that proves demand without duplicating `Competitor Scout`.

**Architecture:** Treat the competition packet as the primary upstream source for competitor traffic, brand/domain chatter, and competitor context. Add only the missing demand-specific layers: SERP intent, search trends, problem/category discussion, and optional paid-acquisition proof. Tighten the demand section, agent instructions, review rules, and smoke-test notes around sources that actually run in the current environment.

**Tech Stack:** Markdown docs, agent contracts, Apify actors, existing Reddit/X actors, existing traffic validation sheet.

---

### Task 1: Freeze the Demand Validator source map

**Files:**
- Modify: `agents/demand-validator/AGENTS.md`
- Modify: `agents/demand-validator/TOOLS.md`
- Modify: `skills/research-demand-validation/SKILL.md`
- Modify: `skills/research-traffic-validation/SKILL.md`

**Step 1: Define reuse-first behavior**

Require `Demand Validator` to reuse:
- competitor `SimilarWeb`
- competitor brand/domain Reddit/X
- competitor review and site context

**Step 2: Define new demand-only collection**

Add:
- Google Search Results
- Google Trends
- problem/category Reddit
- problem/category X
- optional paid-acquisition checks

### Task 2: Freeze the shared artifact contract

**Files:**
- Modify: `docs/research/contracts/intake-and-handoffs.md`
- Modify: `docs/research/research-execution-system.md`
- Modify: `docs/templates/research/idea-card.md`
- Modify: `docs/templates/research/traffic-validation-sheet.md`

**Step 1: Expand the `Demand Section`**

Add normalized blocks for:
- verdict
- search demand
- observed usage demand
- problem conversation demand
- paid acquisition reality
- risks / evidence quality

**Step 2: Add review rules**

Clarify:
- what counts as `PASS | RETRY | ESCALATE`
- what counts as `positive | negative | inconclusive`
- why demand cannot pass on weak chatter alone

### Task 3: Record live source tests

**Files:**
- Create: `docs/plans/2026-04-07-demand-validator-source-smoke-test.md`

**Step 1: Record working actors**

Capture:
- Google Search Results
- Reddit problem/category search
- X problem/category search
- Facebook Ads actor validation

**Step 2: Record optional or constrained actors**

Capture:
- Google Trends validation constraints and sync-latency caveat
- Google Ads actor memory-limit caveat

### Task 4: Verify and publish

**Files:**
- No additional files

**Step 1: Run verification**

Run:
- `git diff --check`

**Step 2: Commit and push**

Commit the demand-validator contract update once docs and smoke-test notes are aligned.
