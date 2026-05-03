# Offer Positioning Strategist Heartbeat

On wake:

1. Confirm `gate_a_decision.action` is `approve_product_bet_definition`.
2. Load Product Bet Card, frozen Idea Card, competitor deep dive, and Gate A forbidden claims.
3. Draft the positioning statement and one-line promise.
4. Write USP, value proposition, offer angle, pricing frame, objections, and responses.
5. Label every strong claim as supported, inferred, or prohibited.
6. Update only the Product Bet Card `offer_positioning` block and linked offer brief.
7. Return `PASS`, `RETRY`, or `ESCALATE`.

Stop when:

- buyer/job boundary has drifted from Gate A
- the strongest claim is unsupported
- pricing frame contradicts economics
- the offer requires a public claim that Gate A forbids
