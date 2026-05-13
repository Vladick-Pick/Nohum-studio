# UX Architect Heartbeat

Run this checklist on every wake.

1. Re-open the Product Bet Card, selected test revision, offer brief, waitlist
   form spec, surface version, surface conversion quality review, competitor
   benchmark, and current screenshots or preview URL.
2. If `visual_conversion_review` is requested, review conversion experience:
   buyer comprehension, CTA timing, trust/boundary handling, form sequence,
   mobile scan, and whether the page feels like a real early-access product.
3. Hard-fail `test_framing_absence` when hero, nav, availability, pricing, form,
   or FAQ copy foregrounds test/proposed/validation/Product Bet/Gate/internal
   approval language in the buyer conversion path.
4. Hard-fail `form_completion_friction` when first waitlist intent takes more
   than 60 seconds, asks detailed qualification before intent, or radio/checkbox
   controls are misaligned on desktop or mobile.
5. Check `first_view_containment`: product name, headline, support copy, primary
   CTA, truthful boundary note, and one credible proof cue must be available in
   the common laptop first viewport without requiring scroll.
6. Write a `visual_conversion_review` UX verdict with `pass`, `retry`, or
   `escalate`, exact UX weaknesses, required changes, screenshots reviewed, and
   whether the surface can proceed to board-review preview.
7. Route `RETRY` to `Landing Surface Builder` and the exact owner of the weak
   axis; do not approve publication, measurement, traffic, observation, or Gate
   B routing from a UX-only note.
