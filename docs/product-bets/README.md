# Product Bet Validation Loop

Product Bet Validation Loop is the dormant post-Gate-A, pre-build validation
layer for NoHum.

It starts only after an `Idea Card` passes Gate A and the CEO records a
`gate_a_decision` with `action: approve_product_bet_definition`.

It turns an approved market opportunity into a testable product revision,
hardens that revision with internal AI critique, packages it into a waitlist
landing surface, drives free or low-cost organic traffic to that surface, waits
for a bounded observation window, and routes real behavior into `build`,
`revise`, `fork`, `test_more`, or `kill`.

This module is imported with the company org library, but it has no immediate
runtime tasks. It activates only through CEO/Launch Lead task creation after
Gate A.

## Doctrine

```text
Idea Card owns market truth.
Gate A opens product definition, not build.
Product Bet owns product shape and validation after Gate A.
Landing is a measurement surface, not the product.
Organic traffic is an experiment engine, not a strategy memo.
Gate B owns build permission.
```

## Runtime Contract

```text
Frozen Idea Card
-> CEO Gate A Decision
-> CEO creates one Product Bet Validation Sprint
-> Launch Lead opens shared Product Bet Card
-> L1 Product Bet Assembly
-> L2 Internal Hardening records concept_revision / fork_candidate
-> Launch Lead selects one test_revision
-> L3 Surface Readiness creates versioned surface_version
-> surface_conversion_quality_review
-> visual_conversion_review
-> validation hosting check
-> board_review_preview_available
-> CEO/Board surface publication approval
-> Product Bet Measurement Specialist instruments the approved surface
-> Organic Traffic Strategist drives approved traffic attempts
-> Observation Window evaluates time, traffic, source quality, and intent
-> Evidence Router routes build/revise/fork/test_more/kill
-> CEO/Board records Gate B Decision when build is recommended
```

The root package imports Product Bet agents, skills, docs, and templates. It
does not import Product Bet runtime tasks. Runtime work is created by CEO and
Launch Lead after Gate A.

## Boundary

Product Bet Validation does not replace Research.

Research owns pre-Gate-A market truth through the canonical Idea Card.

Product Bet Validation does not approve build.

Gate B remains the build approval boundary.

## Shared-Card And Validation Pattern

The module reuses the Research pattern:

```text
one canonical card
-> specialist-owned sections
-> manager sufficiency review
-> versioned revisions and forks
-> validation surface
-> surface quality and visual conversion gates
-> board preview and publication approval
-> organic traffic loop
-> observation window
-> gate recommendation
```

Specialists do not send loose notes to Launch Lead. They update their owned
section in the Product Bet Card and link detailed packs.

Every meaningful change to buyer, offer, pricing, channel, or product shape is
recorded as a `concept_revision`. Every viable alternate direction is recorded
as a `fork_candidate`. Gate B always references the exact
`product_bet_revision_ref` that was tested.

## Nested Loops

Product Bet Validation is not a linear task list. It runs five bounded loops:

| Loop | Primary owner | Result |
|---|---|---|
| `assembly_loop` | `launch-lead` | Product Bet Card sections pass Launch Lead sufficiency review |
| `internal_hardening_loop` | `pre-market-autoreasoner` | objections, variants, `concept_revision`, `fork_candidate`, recommended test revision |
| `surface_readiness_loop` | `landing-surface-builder` + `launch-lead` review + UI/UX visual review | versioned `surface_version`, waitlist form, copy, claims QA, `surface_conversion_quality_review: PASS`, `visual_conversion_review: PASS` |
| `measurement_traffic_observation_loop` | `product-bet-measurement-specialist` and `organic-traffic-strategist` | event contract, tracking QA, traffic attempts, observation window state |
| `evidence_routing_loop` | `evidence-router` | route to build/revise/fork/test_more/kill and Gate B recommendation when warranted |

Launch Lead must not create downstream measurement, traffic, observation,
Evidence Router, Product Launch, or Engineering tasks until upstream loop gates
are satisfied or the task is explicitly a blocked-state/approval request.

Misordered downstream work does not become valid by waiting. If surface,
measurement, traffic, observation, or Evidence Router tasks were created before
Assembly/Hardening and `selected_test_revision`, the route is
`PROCESS_RESET_REQUIRED`: cancel or supersede that runtime path and restart
from Product Bet Assembly.

Synthetic audience output belongs only to `internal_hardening_loop`. It is a
critique/hypothesis-generation tool, not market validation and not product
acceptance.

Surface work has its own buyer-quality gate before preview or publication. The
surface must be English-first for global/US/Europe targets, use a NoHum product
concept name that is not copied from a competitor/source signal, benchmark
retained competitor landings, apply `docs/product-bets/design.md` when present,
avoid visible validation/test framing in primary sales copy, and keep waitlist
friction proportional to the validation question.

That buyer-quality gate is necessary but not sufficient. Before board-review
preview or publication approval, Launch Lead must also route
`visual_conversion_review: PASS` to UI Designer and UX Architect. This prevents
browser-QA-passing or copy-compliant surfaces from being treated as credible
market tests when the first viewport, visual hierarchy, CTA path, or mobile scan
would repel a real buyer.

The visual review has three hard-fail axes that block preview, publication,
measurement, traffic, observation, and Evidence Router work:
`first_view_containment`, `test_framing_absence`, and
`form_completion_friction`.

## Product Bet Agents

| Agent | Owns | Writes |
|---|---|---|
| `launch-lead` | process owner, card owner, sufficiency review | Gate A context, revision ledger, section review |
| `product-bet-compiler` | product identity, shape, and validation risks | identity, audience, problem/workflow, validation risk map |
| `competitor-deep-dive-analyst` | product-grade competitor teardown | competitor deep dive block and pack |
| `economics-modeler` | unit economics and scenarios | financial model, break-even, `$5k` paths |
| `offer-positioning-strategist` | USP, offer, pricing frame | offer positioning block and brief |
| `organic-traffic-strategist` | organic traffic strategy and operations | pain language, channel map, traffic attempts, source report |
| `pre-market-autoreasoner` | internal hardening | autoreason report, revisions, fork candidates |
| `landing-surface-builder` | validation surface factory | landing design, waitlist form, surface version, QA |
| `product-bet-measurement-specialist` | observation and instrumentation | measurement plan, observation window status |
| `evidence-router` | evidence and routing | validation evidence events, validation decision, Gate B recommendation |

## Gate A Decision Contract

Research provides facts. CEO records the management contract.

```yaml
gate_a_decision:
  action: approve_product_bet_definition
  idea_card_ref:
  research_case_id:
  approved_direction:
    market:
    buyer_segment:
    competitor_pattern:
    product_category:
  constraints:
    max_definition_time:
    max_test_budget_cents:
    allowed_external_actions:
    forbidden_claims:
    legal_platform_risks:
    stack_constraints:
  next_owner: launch_lead
```

## Product Bet Validation Outputs

Each approved Gate A candidate should produce:

- Product Bet Card
- competitor deep dive pack
- financial model
- offer brief
- organic traffic strategy
- pain language map
- search intent map
- community prospecting map
- free value wedge
- validation risk map
- autoreason report
- concept revisions and fork candidates
- selected test revision
- landing design
- copy variant matrix
- waitlist form spec
- test GTM surface pack
- surface version and QA
- surface conversion quality review
- visual conversion review
- board-review preview URL and surface publication approval request
- measurement plan
- observation window
- traffic attempts and traffic source report
- validation evidence events
- validation cycle report
- Gate B recommendation
- Gate B decision after CEO/board review

## Derived Memory And Cost Control

Product Bet Validation keeps the Product Bet Card and linked artifacts as the
primary truth. Derived memory surfaces may index channel, offer, surface, and
decision learning, but they cannot introduce new facts or override the card.

Tool and API costs are not implicit permission to spend. The Gate A decision
sets `max_test_budget_cents`, each evidence event records `cost_cents`, and
live prices must be reverified before spend-bearing runs.

## Observation Window

The module must not decide too early and must not wait forever.

Default policy:

```yaml
observation_window:
  min_runtime_hours: 72
  max_runtime_days: 14
  min_unique_visitors: 300
  preferred_unique_visitors: 1000
  min_channel_count: 2
  waitlist_submits:
    weak: 10
    promising: 30
    strong: 50
  CTA_click_rate:
    weak: 1%
    promising: 3%
    strong: 5%
  waitlist_conversion:
    weak: 1%
    promising: 3%
    strong: 5%
```

Decision interpretation:

- not enough time -> keep waiting
- not enough traffic -> run another organic traffic attempt
- enough traffic but weak CTA or waitlist -> revise offer, landing, or channel
- strong qualified waitlist signal -> Gate B build recommendation may be written
- contradictory behavior -> fork or test more
- no signal after the bounded window -> kill or park with learning

## Gate B Hard Criteria

Gate B recommendation cannot be `build` unless all hard criteria pass or the
CEO/board explicitly accepts the risk:

| Criterion | Required artifact |
|---|---|
| Frozen Idea Card linked | Product Bet Card |
| Gate A decision linked | Product Bet Card |
| Product Bet revision linked | Revision Ledger |
| Competitor deep dive complete | Competitor Deep Dive Pack |
| Product shape concrete | Product Bet Card |
| ICP/buyer/user/payer specific | Product Bet Card |
| Offer and USP clear | Offer Brief |
| Organic/free traffic path exists | Organic Traffic Strategy and Organic Distribution Test Plan |
| Financial model complete | Financial Model |
| Break-even modeled | Financial Model |
| `$5k MRR` and `$5k net contribution` paths modeled | Financial Model |
| Validation risks mapped | Validation Risk Map |
| Top risks tested or accepted | Validation Evidence Events |
| Selected test revision exists | Product Bet Card and Concept Revision |
| Landing/waitlist surface ready | Landing Design, Waitlist Form Spec, Surface Version |
| Surface conversion quality passed | Surface Conversion Quality Review |
| Visual conversion quality passed | Visual Conversion Review |
| Board/publication boundary resolved | Board-review preview URL and surface publication approval or explicit blocker |
| Test surfaces ready/tested | Test GTM Surface Pack and Surface QA |
| Organic traffic attempts complete | Traffic Attempts and Traffic Source Report |
| Observation window complete | Observation Window |
| Analytics events working | Measurement Plan and Surface QA |
| Claims/policy safe | Claims Review |
| Stack fit checked | Product Bet Card |
| Build scope bounded | Gate B Recommendation |
| Kill criteria defined | Gate B Recommendation |

## Files

- [Product Bet Validation Playbook](../playbooks/product-bet-definition-playbook.md)
- [Product Bet Card](../templates/product-bets/product-bet-card.md)
- [Competitor Deep Dive Pack](../templates/product-bets/competitor-deep-dive-pack.md)
- [Financial Model](../templates/product-bets/financial-model.md)
- [Offer Brief](../templates/product-bets/offer-brief.md)
- [Organic Traffic Strategy](../templates/product-bets/organic-traffic-strategy.md)
- [Pain Language Map](../templates/product-bets/pain-language-map.md)
- [Search Intent Map](../templates/product-bets/search-intent-map.md)
- [Community Prospecting Map](../templates/product-bets/community-prospecting-map.md)
- [Thread Scorecard](../templates/product-bets/thread-scorecard.md)
- [Free Value Wedge](../templates/product-bets/free-value-wedge.md)
- [Organic Distribution Test Plan](../templates/product-bets/organic-distribution-test-plan.md)
- [Validation Risk Map](../templates/product-bets/validation-risk-map.md)
- [Autoreason Report](../templates/product-bets/autoreason-report.md)
- [Concept Revision](../templates/product-bets/concept-revision.md)
- [Fork Candidate](../templates/product-bets/fork-candidate.md)
- [Landing Design](../templates/product-bets/landing-design.md)
- [Copy Variant Matrix](../templates/product-bets/copy-variant-matrix.md)
- [Waitlist Form Spec](../templates/product-bets/waitlist-form-spec.md)
- [Test GTM Surface Pack](../templates/product-bets/test-gtm-surface-pack.md)
- [Surface Version](../templates/product-bets/surface-version.md)
- [Surface QA](../templates/product-bets/surface-qa.md)
- [Surface Conversion Quality Review](../templates/product-bets/surface-conversion-quality-review.md)
- [Visual Conversion Review](../templates/product-bets/visual-conversion-review.md)
- [Anti AI Slop Review](../templates/product-bets/anti-ai-slop-review.md)
- [Measurement Plan](../templates/product-bets/measurement-plan.md)
- [Traffic Attempt](../templates/product-bets/traffic-attempt.md)
- [Traffic Source Report](../templates/product-bets/traffic-source-report.md)
- [Observation Window](../templates/product-bets/observation-window.md)
- [Validation Cycle Report](../templates/product-bets/validation-cycle-report.md)
- [Validation Evidence Event](../templates/product-bets/validation-evidence-event.md)
- [Gate B Recommendation](../templates/product-bets/gate-b-recommendation.md)
- [Gate B Decision](../templates/product-bets/gate-b-decision.md)
- [Automation Map](automation-map.md)
- [Product Bet Memory](product-bet-memory.md)
- [Tool Cost Registry](tool-cost-registry.md)
