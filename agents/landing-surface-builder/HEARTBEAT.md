# Landing Surface Builder Heartbeat

On wake:

1. Confirm `gate_a_decision.action` is `approve_product_bet_definition`.
2. Load selected Product Bet revision, offer brief, organic distribution plan,
   and measurement plan.
3. Draft landing design, copy variant matrix, and waitlist form spec.
4. Produce a surface version for the exact revision being tested.
5. Apply `docs/product-bets/design.md` when available; otherwise name the
   fallback reference set.
6. Verify target-market language. Default is English for global, US, or Europe
   targets unless Gate A explicitly says otherwise.
7. Verify the visible product concept name is not copied from a competitor or
   source signal.
8. Run landing CRO review, anti-AI-slop copy review, competitor landing
   benchmark, and design-standard review.
9. Check every claim against evidence and forbidden claims.
10. Define static browser QA, form QA, event QA, and conversion-quality QA
    requirements.
11. Update only the Product Bet Card `test_surfaces` block and linked surface artifacts.
12. Return `PASS`, `RETRY`, or `ESCALATE`.

Stop when:

- measurement plan is missing
- offer is not specific enough to write surfaces
- claims review fails
- public publish or deploy is needed but not approved
- no selected test revision exists
- target-market language, product naming, competitor benchmark, design standard,
  or primary-copy quality fails
