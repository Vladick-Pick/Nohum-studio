# Idea Scout TrustMRR Plus SimilarWeb v1 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Lock the `Idea Scout` v1 sourcing contract around direct `TrustMRR API` operation plus bounded `SimilarWeb` enrichment through Apify.

**Architecture:** `Idea Scout` remains sourcing-only. Each candidate row carries a short scout summary, a full raw TrustMRR snapshot, a normalized SimilarWeb enrichment block, and separately derived heuristics. TrustMRR remains the source of record for startup data; SimilarWeb only strengthens traffic and channel evidence.

**Tech Stack:** Markdown docs, `TrustMRR API`, `Apify API`, `pro100chok/similarweb-scraper`

---

### Task 1: Freeze the sourcing batch schema

**Files:**
- Modify: `docs/templates/research/trustmrr-sourcing-batch.md`
- Modify: `docs/research/contracts/intake-and-handoffs.md`

**Steps:**
1. Replace the old minimal candidate row with the four-section structure:
   - `Scout Summary`
   - `Full TrustMRR Snapshot`
   - `SimilarWeb Enrichment`
   - `Derived Heuristics`
2. Preserve all useful raw fields returned by the TrustMRR detail endpoint.
3. Keep SimilarWeb as a bounded normalized subset, not a full raw dump.

### Task 2: Freeze direct tool usage

**Files:**
- Modify: `skills/research-trustmrr-sourcing/SKILL.md`
- Modify: `agents/idea-scout/TOOLS.md`
- Modify: `docs/research/contracts/shared-adapters.md`

**Steps:**
1. Document the exact TrustMRR endpoints the agent may call.
2. Document the exact Apify actor and the required input contract.
3. Separate mandatory TrustMRR hydration from optional SimilarWeb enrichment.
4. State required environment variables and rate-limit discipline.

### Task 3: Verify static consistency

**Files:**
- Verify modified docs only

**Steps:**
1. Run `git diff --check`.
2. Read the changed docs to confirm:
   - no schema contradictions
   - no lingering sourcing-only minimal row structure
   - no invented fields presented as guaranteed API output
