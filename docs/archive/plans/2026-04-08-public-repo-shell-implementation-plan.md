# Public Repo Shell Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Turn the repository into a public-facing early design project with a clear manifesto, contribution model, and module map.

**Architecture:** Keep the detailed internal company package intact, but move the top-level public shell toward manifesto + orientation + governance. Route detailed runtime internals to dedicated docs instead of making the top-level `README` carry all of them.

**Tech Stack:** Markdown docs, repo-root contributor docs

---

### Task 1: Rewrite public README

**Files:**
- Modify: `README.md`

**Steps:**
1. Replace the current internal-package-first opening with the approved manifesto-first opening.
2. Add sections for what the project is, what it is not, current state, strongest module, who the repo is for, and start-here links.
3. Keep links to the detailed runtime/package docs, but move them lower in the file.

### Task 2: Add module maturity map

**Files:**
- Create: `MODULES.md`

**Steps:**
1. Create a concise maturity map for the major company modules.
2. Label each module as `Reference`, `In Progress`, or `Draft`.
3. Link each module to the most relevant docs.

### Task 3: Add collaboration docs

**Files:**
- Create: `CONTRIBUTING.md`
- Create: `GOVERNANCE.md`
- Create: `CODE_OF_CONDUCT.md`

**Steps:**
1. Define what kinds of contributions are useful.
2. Define what low-signal contributions to avoid.
3. Explain how architecture, workflow, and governance changes should be proposed.
4. Define the boundary between public repo collaboration and live runtime company decisions.
5. Add a concise conduct policy for public collaboration.

### Task 4: Verify

**Files:**
- Check all files above

**Steps:**
1. Run `git diff --check`.
2. Read the top of `README.md` to make sure the manifesto and early-project framing are clear.
3. Confirm the new docs are linked from `README.md`.
