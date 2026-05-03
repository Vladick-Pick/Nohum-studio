# Landing Surface Builder Heartbeat

On wake:

1. Confirm `gate_a_decision.action` is `approve_product_bet_definition`.
2. Load selected Product Bet revision, offer brief, organic distribution plan,
   and measurement plan.
3. Draft landing design, copy variant matrix, and waitlist form spec.
4. Produce a surface version for the exact revision being tested.
5. Run landing CRO review and anti-AI-slop copy review.
6. Check every claim against evidence and forbidden claims.
7. Define static browser QA, form QA, and event QA requirements.
8. Update only the Product Bet Card `test_surfaces` block and linked surface artifacts.
9. Return `PASS`, `RETRY`, or `ESCALATE`.

Stop when:

- measurement plan is missing
- offer is not specific enough to write surfaces
- claims review fails
- public publish or deploy is needed but not approved
- no selected test revision exists
