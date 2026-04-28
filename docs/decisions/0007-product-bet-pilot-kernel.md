# Decision 0007: Product Bet Pilot Kernel

## Decision

The NoHum Product Factory architecture is approved as north-star doctrine, not as immediate implementation scope.

Immediate implementation is restricted to:

- Phase `-1`: safety and package hygiene
- Phase `0`: Product Bet Pilot kernel

Phase `0` must not add:

- new agents
- new teams
- manifest expansion
- Product Hunt automation
- Autolab runners
- numeric Bayesian routers
- product substrate changes
- GTM automation

Product Bet Pilot is a lightweight pre-Gate-A decision kernel.

It may route product bets to:

- `KILL`
- `REVISE`
- `FORK`
- `TEST_MORE`
- `RESEARCH_REQUIRED`
- `GATE_A_CANDIDATE`

It does not replace Research. It does not approve build. It does not create a new venture lifecycle.

`GATE_A_CANDIDATE` is a recommendation for existing Gate A governance review. It is not Gate B, and it is not build approval.

Phase `0` uses interval EV bands rather than precise Bayesian probabilities.

Canonical state rule:

- `product_bet` is the canonical pre-Gate-A decision unit
- `evidence_event` is an evidence/audit log
- `decision_update` is a decision/audit log
- `GATE_A_CANDIDATE` is a recommendation/projection
- `venture_id`, Gate A, and Gate B remain canonical after allocation

Product substrate changes are deferred to Phase `5`. No SaaS starter, payment rail, analytics provider, or canonical stack change is allowed in Phase `0`.

## Why

NoHum already has a mature Research module, existing Gate A and Gate B governance, and a canonical stack. The factory should learn from real product-bet decisions before adding more agents, state machines, tools, or substrate complexity.

The first implementation goal is to improve kill, revise, research, test, and Gate A recommendation quality. It is not to build the full Product Factory.

## Implication

- Phase `0` artifacts must preserve the existing Research and Gate A/Gate B boundaries.
- `BUILD_CANDIDATE` must not be used as a Phase `0` outcome.
- New Product Factory modules require a later decision after the pilot demonstrates learning velocity.
