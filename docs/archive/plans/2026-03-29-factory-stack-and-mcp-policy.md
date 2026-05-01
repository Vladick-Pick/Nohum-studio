# Factory Stack And MCP Policy Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Lock NoHum Studio to one canonical factory tech stack and one canonical MCP set for default ventures.

**Architecture:** Add one decision doc plus one operational stack doc, then thread that contract through policy skills, readiness docs, the operating spec, and MCP access guidance. The result should remove framework and provider ambiguity from Gate B and launch execution.

**Tech Stack:** Markdown docs, NoHum policy skills, Paperclip package docs

---

### Task 1: Add canonical stack artifacts

**Files:**
- Create: `docs/decisions/0005-factory-default-stack-and-mcp.md`
- Create: `docs/factory-default-stack.md`

**Step 1:** Write the decision record for the fixed default stack and MCP set.

**Step 2:** Write the operational stack document with exact defaults, exclusions, and exception process.

### Task 2: Surface the contract at the repo root

**Files:**
- Modify: `README.md`

**Step 1:** Add a `Factory Default Stack` section.

**Step 2:** Add the new docs to the repository map.

### Task 3: Update operating policy

**Files:**
- Modify: `docs/operating-spec.md`
- Modify: `skills/venture-policy/SKILL.md`
- Modify: `skills/launch-gates/SKILL.md`
- Modify: `skills/launch-product-definition/SKILL.md`
- Modify: `skills/payment-signal-policy/SKILL.md`

**Step 1:** Lock the operating spec to the canonical stack and default payment/measurement providers.

**Step 2:** Make venture policy reject stack-incompatible ideas by default.

**Step 3:** Make Gate B require the canonical stack or an approved exception.

**Step 4:** Make launch product definition emit stack-fit and payment/measurement outputs.

**Step 5:** Make payment policy explicitly Lava.top-first while keeping normalized internal event fields.

### Task 4: Update launch and readiness docs

**Files:**
- Modify: `docs/readiness/gate-b-readiness.md`
- Modify: `docs/readiness/launch-readiness.md`
- Modify: `docs/playbooks/build-playbook.md`
- Modify: `docs/playbooks/gate-b-playbook.md`
- Modify: `docs/playbooks/launch-playbook.md`

**Step 1:** Add explicit stack checks to Gate B readiness.

**Step 2:** Add explicit provider checks to launch readiness.

**Step 3:** Update build and launch playbooks so teams stop making architecture choices mid-lane.

### Task 5: Lock MCP policy

**Files:**
- Modify: `docs/mcp-access-matrix.md`
- Modify: `docs/team-skill-matrix.md`
- Modify: `docs/skill-policy.md`

**Step 1:** Add the canonical MCP set and exception policy.

**Step 2:** Add factory stack assumptions to the team matrix.

**Step 3:** Tie skill policy to the canonical stack contract.

### Task 6: Verify docs stay internally consistent

**Files:**
- Verify only

**Step 1:** Run `git diff --check`.

**Step 2:** Search for leftover default-path ambiguity such as `Stripe`, `Supabase`, `Vite`, or `NestJS`.

**Step 3:** Re-read the changed docs and confirm they all point to the same stack and MCP set.
