# Competitor Browser Fallback Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a runnable browser-fallback layer for `Competitor Scout` site analysis so HTML-first extraction can recover pricing, CTA, workflow, and value-prop signals when static HTML is insufficient.

**Architecture:** Implement one self-contained CLI script under `scripts/` that performs bounded HTML-first extraction, detects unresolved required fields, and optionally invokes Playwright through `npx` as a recovery path. Update research docs and agent instructions so the fallback layer is a real workflow, not just a policy note.

**Tech Stack:** Python 3.11, `requests`, `bs4`, subprocess invocation of `npx -p playwright`, markdown docs.

---

### Task 1: Add the runnable extractor script

**Files:**
- Create: `scripts/competitor_site_analysis.py`

**Step 1: Build bounded page discovery**

Support:
- homepage
- pricing page
- product / features / how-it-works page
- up to two use-case pages

**Step 2: Build HTML-first extraction**

Recover:
- hero / value proposition
- target buyer / problem / workflow
- pricing visibility and plan hints
- CTA path
- proof blocks

**Step 3: Add unresolved-field detection**

Trigger fallback only when:
- pricing visibility is unresolved
- CTA path is unresolved
- workflow summary is unresolved
- value proposition is unresolved

**Step 4: Add browser fallback**

Invoke Playwright through `npx` and recover:
- visible headings
- visible CTA labels
- visible pricing snippets
- visible workflow snippets

**Step 5: Emit structured JSON**

Return:
- selected pages
- extracted fields
- unresolved fields
- fallback usage
- raw snippets

### Task 2: Wire docs and agent instructions

**Files:**
- Modify: `agents/competitor-scout/TOOLS.md`
- Modify: `skills/research-competitor-discovery/SKILL.md`
- Modify: `docs/templates/research/competitor-evidence-card.md`
- Modify: `docs/plans/2026-04-06-competitor-site-analysis-design.md`

**Step 1: Document the exact runtime command**

Add the script path, invocation examples, and Playwright prerequisite note.

**Step 2: Define expected fallback output**

Clarify what goes into:
- `Official Site And Pricing Summary`
- `Site Analysis Appendix`

### Task 3: Smoke test and record evidence

**Files:**
- Create: `docs/plans/2026-04-06-competitor-browser-fallback-smoke-test.md`

**Step 1: Run the extractor on a site where HTML-first works**

Record the command and key fields recovered.

**Step 2: Run the extractor on a site where fallback helps**

Record:
- unresolved fields before fallback
- what fallback recovered
- any operational caveats

**Step 3: Verify formatting and repo health**

Run:
- `python3 scripts/competitor_site_analysis.py --help`
- smoke-test commands
- `git diff --check`
