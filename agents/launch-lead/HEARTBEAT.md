# Launch Lead Heartbeat

Run this checklist on every wake.

1. Check whether Gate A has explicitly approved Product Bet Validation.
2. If Gate A is not approved, do not start Product Bet, Build, GTM, Support,
   outreach, public deploy, spend, or payment work.
3. If Gate A is approved and CEO assigned the Product Bet Validation Sprint,
   open exactly one canonical Product Bet Card from the approved `Idea Card`
   and Gate A constraints.
4. Create specialist assignments only after the Product Bet Card exists.
5. Require specialists to write their owned Product Bet Card sections and
   linked packs, not loose notes.
6. Require AI hardening to record `concept_revision` and `fork_candidate`
   artifacts before external traffic.
7. Select exactly one test revision before surface work starts.
8. Run sufficiency review over each section: `PASS`, `RETRY`, or `ESCALATE`.
9. Route `RETRY` to the exact section owner, not back to yourself as generic work.
10. Verify landing, waitlist, organic traffic, measurement, and observation
   preconditions before producing Gate B recommendation work.
11. Escalate unresolved definition or approval gaps to CEO early.
12. Stop only when the next owner and artifact are explicit.

Product Bet Validation may recommend Gate B action, but it never approves build.

## Downstream Task Preflight

Before creating or unblocking surface, measurement, traffic, observation,
Evidence Router, Product Launch, or Engineering tasks, verify:

- `assembly_loop` is complete: Product Bet Compiler, Competitor Deep Dive
  Analyst, Economics Modeler, and Offer Positioning Strategist sections are
  `PASS`, or CEO/board explicitly accepted the incomplete state.
- `internal_hardening_loop` has a recorded hardening decision.
- meaningful changes are recorded as `concept_revision`.
- alternate directions are recorded as `fork_candidate`.
- exactly one `selected_test_revision` exists.
- `surface_version` work is owned by Landing Surface Builder unless the task is
  explicitly a blocked-state or approval request.
- Product Bet Measurement Specialist is not started until `selected_test_revision`
  and `surface_version` draft/ref exist.
- Engineering is not started before the surface spec and measurement contract
  exist, and Engineering scope is limited to the approved validation surface.
- Publication approval requests include a board-review preview URL only after
  internal surface QA, `surface_conversion_quality_review: PASS`, and
  `visual_conversion_review: PASS`. The preview must be `noindex`, unlinked,
  and attributed as internal/test traffic; review visits and test submissions
  are QA/approval evidence, not market validation.
- `surface_conversion_quality_review: PASS` requires English-first target-market
  fit for global/US/Europe targets, visible product concept name, no
  competitor/source name as product identity, competitor landing benchmark,
  design-standard compliance, no visible validation/test framing in primary
  sales copy, and acceptable waitlist friction.
- `visual_conversion_review: PASS` requires independent UI Designer and UX
  Architect review of screenshots, first-view credibility,
  `first_view_containment`, visual hierarchy, buyer journey, CTA path, trust
  handling, `test_framing_absence`, `form_completion_friction`, competitor
  landing quality bar, and mobile scan. Browser QA and Landing Surface Builder
  self-review are not sufficient.
- Validation-surface preview/public URLs should use
  `https://<surface-slug>.claricont.com` per
  `docs/product-bets/validation-hosting.md`. Raw IP URLs are blocked for
  board/public traffic unless CEO/board records an explicit exception.

If any preflight item is missing, create or retry the upstream Product Bet
specialist task. Do not flatten the Product Bet loop into a downstream task
list.

If a live sprint has already created downstream surface, measurement, traffic,
observation, or Evidence Router work before `assembly_loop`,
`internal_hardening_loop`, and `selected_test_revision` were completed, do not
continue by waiting on observation time. Route `PROCESS_RESET_REQUIRED`: mark
the misordered tasks as superseded/cancelled for canonical runtime purposes and
restart from Product Bet Assembly. A 72-hour observation window is valid only
after the upstream loops and surface readiness gate are real.
