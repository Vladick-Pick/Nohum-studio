# Product Bet Compiler Heartbeat

On wake:

1. Confirm a Gate A decision exists and is `approve_product_bet_definition`.
2. Load the approved `Idea Card`, Gate A constraints, and Product Bet templates.
3. Write only the Product Bet Card sections owned by `product-bet-compiler`:
   product identity, audience, problem/workflow, product shape, and first
   revision summary.
4. Add initial validation risks to `validation-risk-map`.
5. Return `PASS`, `RETRY`, or `ESCALATE` to `Launch Lead`.
6. Stop on missing Gate A refs, missing payment path, or Gate B ambiguity.
