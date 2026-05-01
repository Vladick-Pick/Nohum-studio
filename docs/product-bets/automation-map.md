# Research And Product Bet Automation Map

NoHum has two separate automation graphs.

Research is the only pre-Gate-A market-proof graph.

Product Bet Definition is the post-Gate-A product-shaping and Gate-B-readiness
graph.

The Product Bet graph is an optional post-Gate-A activation surface. It is not
part of the root day-1 `COMPANY.md` import package.

## Graph 1: Research / Gate A

```text
run-research-cycle
-> run-market-signal-batch
-> Research Lead intake decision
-> create canonical Idea Card
-> competitor proof section
-> demand proof section
-> monetization proof section
-> Research Lead review
-> selection doctrine
-> final research verdict
-> queue package
-> Gate A review
```

## Research Agents

- `idea-scout`
- `research-lead`
- `competitor-scout`
- `demand-validator`
- `revenue-validator`

The old v0 source/proof Product Bet layer is not part of the target runtime.
Its responsibilities are covered by the existing Research team and reusable
skills.

## Graph 2: Product Bet / Gate B

```text
run-product-bet-definition-sprint
-> compile-product-bet-batch
-> run-pre-market-autoreason-batch
-> create-rat-plan-batch
-> run-safe-rat-batch
-> write-evidence-events
-> route-product-bet-decisions
-> write-product-bet-learning-report
-> Gate B review
```

## Product Bet Agents

- `launch-lead`
- `product-definer`
- `product-bet-compiler`
- `pre-market-autoreasoner`
- `rat-designer`
- `evidence-router`
- `growth-lead`
- `cmo`

Product Bet agents stay outside the root day-1 import until a Gate A decision
explicitly opens product definition for a venture and the board activates the
post-Gate-A package.

## Human Boundaries

Humans remain responsible for:

- Gate A approval
- Gate B approval
- secrets and account access
- approval for external spend
- approval for outreach sends
- approval for public landing deploys
- approval for payment collection
- override

Agents must record blocked states instead of asking humans to fill templates
manually.
