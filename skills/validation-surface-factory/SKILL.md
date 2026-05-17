---
name: validation-surface-factory
description: Create a versioned landing/waitlist validation surface from a selected Product Bet revision.
---

# Validation Surface Factory

## Purpose

Create a test surface that measures positioning clarity, CTA intent, and
waitlist/signup intent. This surface is not the product.

## Required Artifacts

- `landing-design.md`
- `copy-variant-matrix.md`
- `waitlist-form-spec.md`
- `surface-version.md`
- `surface-qa.md`
- `surface-conversion-quality-review.md`
- `visual-conversion-review.md` inputs for UI Designer / UX Architect
- `anti-ai-slop-review.md`

## Build Contract

The validation surface may be a static landing page, a no-code page, or a small
repo-native landing artifact. It must have:

- one tested product-bet revision
- one primary audience
- one visible product concept name that is not copied from the source signal or a
  competitor
- one target-market language; English-first for global / US / Europe targets
- one primary CTA
- one waitlist/signup form
- one no-charge policy when checkout/payment is not approved
- one surface version ID
- one measurement plan
- one approved traffic plan
- one preferred host under `https://<surface-slug>.claricont.com` unless
  CEO/board records an exception
- one validation hosting check that follows
  `docs/runbooks/validation-surface-hosting.md` before any board/public URL is
  treated as ready

Do not build product functionality behind the page. If the best validation path
requires a working demo, record it as a future-stage or board-decision blocker
instead of turning this module into a product build.

## Required Sections

The default landing should include:

| Section | Purpose |
|---|---|
| Hero | state buyer, job, outcome, and CTA within 5 seconds |
| Problem | mirror the pain language found in Research and traffic mining |
| Old way / new way | make the workflow delta concrete |
| How it works | describe the proposed flow without pretending the product is live |
| Sample output | show a plausible output when truthful and allowed |
| Use cases | keep to the approved buyer segment |
| Pricing or availability | reveal enough to test intent; no fake discounts |
| Waitlist CTA | clear promise of what joining means |
| FAQ / objections | address trust, scope, data, pricing, and timing |

## Copy Variant Contract

Create variants only where they test a real hypothesis:

- headline angle
- buyer segment
- pain framing
- promised first value
- CTA wording
- pricing/availability framing

Every variant must cite the `concept_revision` or `fork_candidate` it tests.

## Required Checks

- one primary CTA
- visible product concept name above the fold
- English-first page copy for global / US / Europe targets unless Gate A says
  otherwise
- competitor/source names are not used as product identity
- competitor landing benchmark completed before surface PASS
- no "validation", "test", "checking demand", or internal research framing in
  hero, nav, CTA, pricing/availability, or main form copy
- waitlist path present
- no fake customer logos
- no unsupported revenue, security, or integration claims
- events defined for page view, CTA click, waitlist submit, and UTM source
- browser/mobile/form QA before public traffic
- conversion-quality review before board-review preview, publication approval,
  measurement, traffic, observation, or Evidence Router work
- independent visual conversion review before board-review preview, publication
  approval, measurement, traffic, observation, or Evidence Router work
- no raw IP URL for board/public traffic when the validation domain is available
- validation hosting follows `docs/product-bets/validation-hosting.md` and
  `docs/runbooks/validation-surface-hosting.md`
- exact surface version cited by every traffic attempt

## QA Contract

Before traffic starts, verify:

- desktop layout does not hide CTA or form
- mobile layout keeps headline, CTA, and form readable
- waitlist form success and error states are defined
- event names match measurement plan
- UTM capture is defined
- claims review is `pass`
- surface version is frozen for the traffic attempt
- surface host is DNS/TLS/proxy/service verified before publication approval or
  traffic

## Output

Use:

- `docs/templates/product-bets/landing-design.md`
- `docs/templates/product-bets/copy-variant-matrix.md`
- `docs/templates/product-bets/waitlist-form-spec.md`
- `docs/templates/product-bets/surface-version.md`
- `docs/templates/product-bets/surface-qa.md`
- `docs/templates/product-bets/surface-conversion-quality-review.md`
- `docs/templates/product-bets/visual-conversion-review.md`

## Permission Boundary

Static preview and draft copy are allowed. Public deploy requires approval.
Payment collection is forbidden pre-Gate-B unless separately approved.
