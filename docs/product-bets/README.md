# Product Bets

Product Bet Pilot is a lightweight pre-Gate-A decision kernel for NoHum.

It turns market signals into evidence-backed decisions before the studio allocates a scarce venture slot.

## Implementation Doctrine

The NoHum Product Factory architecture is approved as north-star doctrine.

Immediate implementation is restricted to:

1. Phase `-1`: safety and package hygiene
2. Phase `0`: Product Bet Pilot kernel

Product Bet Pilot may route product bets to:

- `KILL`
- `REVISE`
- `FORK`
- `TEST_MORE`
- `RESEARCH_REQUIRED`
- `GATE_A_CANDIDATE`

It does not replace Research. It does not approve build. It does not create a new venture lifecycle. It does not create new agents or teams.

`GATE_A_CANDIDATE` is a recommendation for existing Gate A review.

`GATE_A_CANDIDATE` is not Gate B.

`GATE_A_CANDIDATE` is not build approval.

Phase `0` uses interval EV bands, not precise Bayesian probabilities.

Canonical state rule:

- `product_bet` is the canonical pre-Gate-A decision unit
- `evidence_event` is an evidence/audit log
- `decision_update` is a decision/audit log
- `GATE_A_CANDIDATE` is a recommendation/projection
- `venture_id` and Gate A/Gate B remain canonical after allocation

Success is judged by decision quality and learning velocity, not artifact count.

## Flow

```text
market_signal
-> product_bet_card
-> assumption_map
-> rat_plan
-> evidence_event
-> decision_update
```

The pilot may run before full Research, on top of existing research evidence, or between Research and Gate A. It must not bypass the Research module or Gate A/Gate B governance.

## Phase 0 Scope

Weekly target:

- `20-30` market signals
- `10` product bets
- `5` RAT plans
- `2-3` evidence events
- `5` decision updates
- `1` weekly learning report
- `0-1` `GATE_A_CANDIDATE`

No-goals:

- no new agents
- no new teams
- no manifest update
- no Product Hunt automation
- no Autolab runner
- no numeric Bayesian router
- no product substrate change
- no GTM automation
- no paid ads by default
- no build approval

## Files

- [Product Bet Pilot Playbook](../playbooks/product-bet-pilot-playbook.md)
- [Market Signal Template](../templates/product-bets/market-signal.md)
- [Product Bet Card Template](../templates/product-bets/product-bet-card.md)
- [Assumption Map Template](../templates/product-bets/assumption-map.md)
- [RAT Plan Template](../templates/product-bets/rat-plan.md)
- [Evidence Event Template](../templates/product-bets/evidence-event.md)
- [Decision Update Template](../templates/product-bets/decision-update.md)
- [Run Product Bet Pilot Task](../../tasks/run-product-bet-pilot/TASK.md)
