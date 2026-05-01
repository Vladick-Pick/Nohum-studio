# Competitor Scout Perplexity Discovery v1 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a repeatable `Competitor Scout` discovery layer that uses `OpenRouter -> perplexity/sonar-pro-search` for exact-match direct competitor search and documents the verification tool stack around it.

**Architecture:** Update the existing competitor-discovery skill instead of creating a parallel skill. Pair it with a tighter `TOOLS.md` that defines the discovery order, the source-of-truth hierarchy, and exact API calls for `OpenRouter`, `SimilarWeb`, website verification, and VOC checks.

**Tech Stack:** Markdown docs, research skill docs, agent tool docs

---

### Task 1: Update competitor discovery skill

**Files:**
- Modify: `skills/research-competitor-discovery/SKILL.md`

**Step 1: Make OpenRouter discovery the primary v1 search path**

Add:
- `OPENROUTER_API_KEY`
- model: `perplexity/sonar-pro-search`
- web search enabled

**Step 2: Bake in the exact-match search standard**

Document:
- direct competitor `1:1`
- strict exclusion logic
- `TOP-5` retained competitors instead of `TOP-3`
- explicit `Excluded` block for near-matches

**Step 3: Require machine-usable output**

Make the discovery layer return:
- source product summary
- top-5 retained competitors
- excluded lookalikes
- evidence URLs
- verification status
- what remains unverified

### Task 2: Update Competitor Scout tool contract

**Files:**
- Modify: `agents/competitor-scout/TOOLS.md`

**Step 1: Document the discovery and verification stack**

List:
- `OpenRouter` via `perplexity/sonar-pro-search` for discovery
- `SimilarWeb` via Apify for traffic/country/channel verification
- official product and pricing pages for source-of-truth product verification
- `Trustpilot`, `Reddit`, `X` for VOC checks

**Step 2: Document source precedence**

State:
- `Perplexity` = discovery
- product/pricing pages = product and pricing truth
- `SimilarWeb` = traffic truth
- review and social surfaces = VOC truth

### Task 3: Add a live test instruction surface

**Files:**
- Modify: `agents/competitor-scout/TOOLS.md`
- Modify: `skills/research-competitor-discovery/SKILL.md`

**Step 1: Include exact OpenRouter request example**

Add a ready-to-run `curl` example using:
- `https://openrouter.ai/api/v1/chat/completions`
- `perplexity/sonar-pro-search`

**Step 2: Include one test procedure**

Document:
- required env vars
- minimal input fields from the canonical idea card
- what to inspect in the response
- note that live testing is blocked until `OPENROUTER_API_KEY` is set

### Task 4: Verify doc consistency

**Files:**
- Review only

**Step 1: Run doc hygiene**

Run: `git diff --check`

**Step 2: Re-read updated skill and tools docs**

Confirm:
- `TOP-5` is consistent
- source-of-truth hierarchy is explicit
- the prompt distinguishes direct competitors from adjacent tools
