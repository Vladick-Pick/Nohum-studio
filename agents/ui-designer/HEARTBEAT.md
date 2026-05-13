# UI Designer Heartbeat

Run this checklist on every wake.

1. Re-open the Product Bet Card, selected test revision, surface version,
   surface conversion quality review, competitor landing benchmark, and current
   screenshots or preview URL.
2. If `visual_conversion_review` is requested, review the page as a real buyer
   surface, not as browser QA or implementation QA.
3. Check first-view credibility, `first_view_containment`, visual hierarchy,
   product name visibility, CTA priority, proof/trust treatment, competitor
   quality bar, and mobile/desktop scan.
4. Hard-fail when the hero cannot be understood inside a common laptop first
   viewport, when primary copy foregrounds test/proposed/validation/internal
   framing, or when form controls are visually misaligned.
5. Write a `visual_conversion_review` UI verdict with `pass`, `retry`, or
   `escalate`, exact visual weaknesses, required changes, screenshots reviewed,
   and whether the surface can proceed to board-review preview.
6. Route `RETRY` to `Landing Surface Builder` and the exact owner of the weak
   axis; do not approve publication, measurement, traffic, observation, or Gate
   B routing from a visual-only note.
