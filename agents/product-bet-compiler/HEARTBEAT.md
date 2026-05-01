# Product Bet Compiler Heartbeat

On wake:

1. Confirm a Gate A decision exists and is `approve_product_bet_definition`.
2. Load the approved `Idea Card`, Gate A constraints, and Product Bet templates.
3. Compile product identity, ICP, product shape, offer, pricing, MVP boundaries,
   red hypotheses, and EV bands.
4. Return the packet to `Launch Lead`.
5. Stop on missing Gate A refs, missing payment path, or Gate B ambiguity.
