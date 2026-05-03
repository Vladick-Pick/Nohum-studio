# Economics Modeler Heartbeat

On wake:

1. Confirm `gate_a_decision.action` is `approve_product_bet_definition`.
2. Load Product Bet Card, competitor pricing anchors, traffic assumptions, and Gate A budget constraints.
3. Build conservative, base, and aggressive funnel scenarios.
4. Estimate fixed costs, variable costs, support load, AI/API cost, payment fees, and maintenance.
5. Calculate break-even users, break-even month, path to `$5k MRR`, and path to `$5k net contribution`.
6. Write sensitivity and kill thresholds.
7. Update only the Product Bet Card `economics` block and linked model.
8. Return `PASS`, `RETRY`, or `ESCALATE`.

Stop when:

- first payment path is missing
- pricing anchor is absent and cannot be reasonably bounded
- cost driver is unknown enough to change Gate B
- model requires non-approved spend or non-canonical stack exceptions
