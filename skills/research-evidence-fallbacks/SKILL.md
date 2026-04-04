---
name: research-evidence-fallbacks
description: Use when research evidence is missing or contradictory and you need the NoHum fallback matrix for unknowns, substitutes, and escalation.
---

# Research Evidence Fallbacks

Use this skill whenever a specialist cannot prove a claim with preferred sources.

## Purpose

Prevent narrative fill-in when the market is only partially observable.

## Fallback Rules

### Missing pricing page

Fallback to:

- checkout or plan picker
- billing docs or FAQ
- reputable review directory price references
- founder screenshots only if clearly recent

If no reliable pricing surface exists after fallback, visible pricing is not proven.

### Missing traffic estimate

Fallback to:

- review count and recency
- marketplace rankings or installs
- search trend and branded search evidence
- public customer proof
- active community or changelog cadence

If these are also weak, this demand class becomes `unknown`.

### Missing reviews

Fallback to:

- public testimonials
- customer logos with recent context
- integration footprint
- community problem threads

Do not present this as equivalent to strong review evidence.

### Missing payment or revenue proof

Fallback to:

- visible pricing
- clear self-serve checkout path
- evidence of real paid plans
- comparable competitor price anchors

If first payment still depends on a vague sales motion, score monetization down.

## Contradiction Rule

When sources disagree:

- keep the contradiction visible
- drop confidence to the lower plausible level
- do not let the optimistic source win by default

## Queue Effect

- a missing source can be substituted only when the fallback still proves the same claim class
- `unknown` may stay in the packet, but it cannot silently count as a passed gate
- if hard-gate coverage depends on too many `unknown` fields, route to `KILL FOR NOW`

## Escalation Packet

When handing an unresolved gap to `Research Lead`, include:

- missing claim
- sources checked
- strongest fallback found
- current confidence
- queue impact
- specific decision needed
