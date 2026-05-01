# Product Bet Definition

Product Bet Definition is the post-Gate-A product-shaping layer for NoHum.

It starts only after an `Idea Card` passes Gate A. It turns an approved market
opportunity into a concrete product image, offer, feature scope, red
hypotheses, test GTM program, evidence packet, and Gate B recommendation.

This module is not part of the root day-1 import package. It is an optional
post-Gate-A activation surface.

## Doctrine

```text
Idea Card owns market truth.
Gate A opens product definition, not build.
Product Bet owns product shape after Gate A.
Gate B owns build permission.
```

Before Gate A, Research owns sourcing, market proof, doctrine fit, and the
canonical `Idea Card`.

After Gate A, Product Bet Definition owns product shape, positioning, offer,
red hypotheses, test GTM, and the recommendation for Gate B.

## Boundary

Product Bet Definition does not replace Research.

Product Bet Definition does not approve build.

Product Bet Definition does not create a venture before Gate A.

Gate B remains the build approval boundary.

## Flow

```text
Gate A approved Idea Card
-> Product Bet Definition Sprint
-> Competitor Deep Dive
-> Product Identity / ICP / USP / Offer
-> Feature Scope / MVP / Non-goals
-> Red Hypotheses
-> Autoreason / Synthetic Audience
-> Test GTM Program
-> Landing / Surface Pack
-> Approved External Tests
-> Evidence Packet
-> Gate B Recommendation
-> Gate B
```

## Canonical State Rule

- `Idea Card` is the canonical pre-Gate-A market truth artifact
- `gate_a_decision` opens product definition, not build
- `product_bet` is the canonical post-Gate-A product definition artifact
- `red_hypotheses` is the killer-risk inventory for the product bet
- `evidence_packet` is the pre-Gate-B evidence and audit package
- `gate_b_recommendation` is a recommendation, not board approval
- `venture_id`, Gate A, and Gate B remain canonical governance boundaries

## Product Bet Definition Outputs

Each approved Gate A candidate should produce:

- product identity and one-line product promise
- ICP, buyer, user, payer, and excluded segments
- competitor deep dive with copyable patterns and differentiation gaps
- USP, offer angle, pricing hypothesis, packaging, and objections
- MVP features, non-MVP features, non-goals, integrations, and outputs
- red hypotheses with risk class and test method
- internal autoreason and synthetic audience findings
- test GTM program with assets, channels, metrics, and thresholds
- evidence packet with internal and external findings
- Gate B recommendation: `build`, `revise`, `test_more`, or `kill`

## Research Relationship

Research output is not a product bet.

Research output is a Gate A packet:

```yaml
gate_a_packet:
  idea_card_ref:
  research_case_id:
  final_research_verdict: QUEUE
  doctrine_summary:
  hard_gate_summary:
  strongest_evidence_refs:
  unresolved_risks:
  why_this_deserves_product_definition:
  gate_a_recommendation: approve_product_bet_definition
```

Gate A decision:

```yaml
gate_a_decision:
  input: idea_card
  action: approve_product_bet_definition | reject | hold | request_more_research
  approved_direction:
    market:
    buyer_segment:
    competitor_pattern:
    product_category:
  constraints:
    max_definition_time:
    max_test_budget:
    forbidden_claims:
    legal_platform_risks:
  next_owner: launch_lead
```

## Files

- [Product Bet Definition Playbook](../playbooks/product-bet-definition-playbook.md)
- [Product Bet Definition Template](../templates/product-bets/product-bet-card.md)
- [Red Hypothesis Map Template](../templates/product-bets/assumption-map.md)
- [Red Hypothesis Test Plan Template](../templates/product-bets/rat-plan.md)
- [Evidence Event Template](../templates/product-bets/evidence-event.md)
- [Gate B Recommendation Template](../templates/product-bets/decision-update.md)
- [Automation Map](automation-map.md)
