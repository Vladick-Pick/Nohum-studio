# Copyable Product Thesis Rollout Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Publish one canonical NoHum copyable product thesis and bind it to the `Idea Scout` and `Research Lead` research roles.

**Architecture:** Add a single research-level source-of-truth document, then wire that thesis into the research module index, role docs, and the sourcing/intake skills so both agents apply the same product filter at different stages. Keep the thesis shared, but spell out separate operating interpretations for scout and lead.

**Tech Stack:** Markdown docs, agent role docs, research skills

---

### Task 1: Publish the canonical thesis doc

**Files:**
- Create: `docs/research/copyable-product-thesis.md`

**Step 1: Write the thesis**

Document:
- shared `NoHum Copyable Product Thesis`
- `Hard Gates`
- `Strong Positive Signals`
- `Explicit Exclusions`
- `Idea Scout` operating interpretation
- `Research Lead` operating interpretation

**Step 2: Keep the language aligned with existing scorecard rules**

Preserve existing hard-gate language where it already exists in research contracts:
- `at least 3 live direct competitors`
- `plausible path to $5k MRR`
- `path to first payment`

### Task 2: Make the thesis visible from the research module

**Files:**
- Modify: `docs/research/README.md`

**Step 1: Add the thesis to the module map**

Add a link to `copyable-product-thesis.md` near the top-level research contracts and execution docs.

**Step 2: Clarify why it exists**

Note that the thesis is the shared product-selection filter used differently by `Idea Scout` and `Research Lead`.

### Task 3: Bind the thesis to the agent role docs

**Files:**
- Modify: `agents/idea-scout/AGENTS.md`
- Modify: `agents/research-lead/AGENTS.md`

**Step 1: Update `Idea Scout`**

State that the role is sourcing for products that look like `copyable default-path software products`, not generic internet businesses.

**Step 2: Update `Research Lead`**

State that the role uses the same thesis as the intake decision framework for moving candidates from sourcing into canonical intake.

**Step 3: Add the thesis to binding reference docs**

Include the new thesis doc in the role docs' reference-contract lists.

### Task 4: Align sourcing and intake skills

**Files:**
- Modify: `skills/research-trustmrr-sourcing/SKILL.md`
- Modify: `skills/research-trustmrr-intake/SKILL.md`

**Step 1: Update sourcing skill**

Explain that `Idea Scout` uses the thesis as a search-and-reject heuristic:
- prefers copyable software shapes
- deprioritizes obvious exclusions
- does not claim hard-gate proof it cannot establish

**Step 2: Update intake skill**

Explain that `Research Lead` uses the thesis as the intake decision framework:
- `skip`
- `hold`
- `create intake`

**Step 3: Keep role boundaries explicit**

`Idea Scout` does not prove the full thesis.
`Research Lead` does not skip canonical intake just because the sourcing batch looks strong.

### Task 5: Verify consistency

**Files:**
- Review only

**Step 1: Run doc hygiene check**

Run: `git diff --check`

**Step 2: Verify cross-references**

Check that the thesis is reachable from:
- `docs/research/README.md`
- `agents/idea-scout/AGENTS.md`
- `agents/research-lead/AGENTS.md`
- both research skills
