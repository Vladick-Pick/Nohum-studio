# Product Bet Factory Automation Map

Automated Product Bet Factory v0 is the first agent-run pre-Gate-A cycle.

It builds on the Product Bet Pilot kernel and turns it from a manual template
loop into a Paperclip task graph.

## Flow

```text
run-automated-product-bet-cycle
-> run-market-signal-batch
-> run-market-proof-lite-batch
-> compile-product-bet-batch
-> run-pre-market-autoreason-batch
-> create-rat-plan-batch
-> run-safe-rat-batch
-> write-evidence-events
-> route-product-bet-decisions
-> write-product-bet-learning-report
```

## Agents

- `market-signal-scout`
- `market-proof-analyst`
- `product-bet-compiler`
- `pre-market-autoreasoner`
- `rat-designer`
- `evidence-router`

## Human Boundaries

Humans remain responsible for:

- secrets and account access
- approval for external spend
- approval for outreach sends
- approval for payment collection
- Gate A review
- override

Agents must record blocked states instead of asking humans to fill templates
manually.
