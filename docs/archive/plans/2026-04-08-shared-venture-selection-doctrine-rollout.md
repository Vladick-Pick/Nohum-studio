# Shared Venture Selection Doctrine Rollout Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Turn the existing copyable-product thesis into one enforced venture-selection doctrine that is reflected in research artifacts, operating policy, and manager prompts.

**Architecture:** Keep `docs/research/copyable-product-thesis.md` as the single source of truth for the 11-point venture-selection doctrine. Propagate that doctrine into the canonical `Idea Card`, research contracts, the operating spec, and manager prompts so the same selection logic is used by `Idea Scout`, `Research Lead`, `CEO`, and `Launch Lead`.

**Tech Stack:** Markdown docs, NoHum agent prompts, Paperclip-compatible operational docs

---

### Task 1: Canonical doctrine hardening

**Files:**
- Modify: `docs/research/copyable-product-thesis.md`
- Modify: `docs/research/README.md`

**Steps:**
1. Rewrite the hard-gate section in `copyable-product-thesis.md` as an explicit normalized 11-point selection doctrine.
2. Keep existing meaning intact while making `value delta`, audience reachability, paying audience, conversion plausibility, and switching friction more legible.
3. Update `research/README.md` so the module explicitly states that the same doctrine is shared across sourcing, intake, and Gate A-facing queue work.

### Task 2: Research artifact and contract rollout

**Files:**
- Modify: `docs/templates/research/idea-card.md`
- Modify: `docs/research/contracts/intake-and-handoffs.md`

**Steps:**
1. Add a structured `Selection Doctrine` block to the canonical `Idea Card`.
2. Add normalized fields for `status quo`, `with product workflow`, and `value delta`.
3. Add an explicit 11-point doctrine checklist with evidence references and pass/fail/inconclusive status.
4. Update the research contract so `Research Lead` cannot produce a final research verdict without a completed doctrine assessment.

### Task 3: Operating policy enforcement

**Files:**
- Modify: `docs/operating-spec.md`

**Steps:**
1. Add a short shared venture-selection doctrine section that references the canonical thesis.
2. Make the doctrine a required part of research completion and queue readiness.
3. Require structured `value delta` and forbid prose-only treatment of that criterion.
4. Keep conversion logic as `plausible conversion story` rather than a single hard numeric threshold.

### Task 4: Manager prompt propagation

**Files:**
- Modify: `agents/ceo/AGENTS.md`
- Modify: `agents/research-lead/AGENTS.md`
- Modify: `agents/idea-scout/AGENTS.md`
- Modify: `agents/launch-lead/AGENTS.md`

**Steps:**
1. Update `CEO` so Gate A and allocation decisions use the shared doctrine explicitly.
2. Update `Research Lead` so intake and final verdicts explicitly work through the doctrine and the structured value-delta block.
3. Update `Idea Scout` so shortlist heuristics mirror the same doctrine without over-claiming proof.
4. Update `Launch Lead` so downstream definition keeps audience, job, and value delta intact rather than re-blurring them.

### Task 5: Verification and drift cleanup

**Files:**
- Check all modified files above

**Steps:**
1. Run `git diff --check`.
2. Search for `value delta`, `selection doctrine`, and `copyable-product-thesis` references across modified files.
3. Review for terminology drift between `CEO`, `Research Lead`, and the doctrine document.
4. Make one cleanup pass so the same 11-point logic reads consistently across docs.
