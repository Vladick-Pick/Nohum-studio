# Landing Surface Builder Heartbeat

On wake:

1. Confirm `gate_a_decision.action` is `approve_product_bet_definition`.
2. Load selected Product Bet revision, offer brief, Gate A constraints,
   competitor benchmark, design standard, and available traffic/channel
   assumptions.
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
10. Define static browser QA, form QA, claims QA, and conversion-quality QA
    requirements. Do not require a measurement plan before the first surface
    draft; event instrumentation is handed to Product Bet Measurement Specialist
    after surface and visual gates pass.
11. If a board/public URL is needed, use
    `docs/runbooks/validation-surface-hosting.md` for the hosting blocked-state
    handoff. Do not substitute a raw IP URL when `claricont.com` hosting is
    available.
12. Update only the Product Bet Card `test_surfaces` block and linked surface artifacts.
13. Return `PASS`, `RETRY`, or `ESCALATE`.

Stop when:

- offer is not specific enough to write surfaces
- claims review fails
- public publish or deploy is needed but not approved
- no selected test revision exists
- target-market language, product naming, competitor benchmark, design standard,
  or primary-copy quality fails
- `first_view_containment`, `test_framing_absence`, or
  `form_completion_friction` fails
