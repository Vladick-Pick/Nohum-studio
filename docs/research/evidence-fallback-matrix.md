# Evidence Fallback Matrix

Use this matrix when preferred evidence is missing.

| Missing proof | Acceptable fallback | Max confidence after fallback | Queue effect if still unresolved |
|---|---|---|---|
| official pricing page | checkout, plan picker, billing FAQ, reputable review directory price table | `medium` | visible pricing gate fails if nothing reliable appears |
| traffic estimate | review recency, marketplace installs, search trend, public customer proof, changelog cadence | `medium` | `traffic or usage` class becomes `unknown` if substitutes are also weak |
| review layer | testimonials, customer logos, community threads, integration footprint | `medium` | weakens demand confidence; cannot masquerade as strong buyer proof |
| public payment proof | pricing plus self-serve checkout plus comparable paid competitors | `medium` | monetization scored down; first-payment path may still fail |
| clear ICP | product copy, onboarding, templates, case studies | `medium` | competitor map and scorecard become unstable until clarified |
| conflict between sources | keep both, use lower plausible confidence, escalate contradiction | `low` to `medium` | unresolved contradiction blocks `QUEUE` if it touches a hard gate |

## Unknown Handling

- `unknown` is allowed inside the packet.
- `unknown` never counts as a passed gate.
- Too many `unknown` fields in demand, pricing, or monetization should drive `KILL FOR NOW`.

## Escalation Rule

Escalate to `Research Lead` when:

- a hard gate depends on fallback evidence only
- source contradiction changes the likely verdict
- the category looks interesting but cannot reach decision-grade proof
