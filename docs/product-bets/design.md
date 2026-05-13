# Product Bet Validation Surface Design Standard

Owner: `launch-lead`

This is the default design standard for pre-Gate-B validation surfaces. It is
binding unless a later CEO/board-approved design standard supersedes it.

Visual token source: root `DESIGN.md`, generated with
`npx getdesign@latest add sentry`.

Use the root `DESIGN.md` as an aesthetic and component reference layer. Do not
copy the Sentry/Sentri brand, name, logo, mascot, customer proof, or product
claims. NoHum surfaces use the extracted design language as a quality floor, not
as a cloned brand identity.

Search keys: `PBD-00`, `PBD-01`, `PBD-02`, `PBD-03`, `PBD-04`, `PBD-05`,
`PBD-06`, `PBD-07`.

## PBD-00 Visual Token Source

Before writing or reviewing any validation surface UI, load root `DESIGN.md`.
It owns the default visual palette, typography, spacing, radius, and component
tokens for Product Bet validation surfaces.

If root `DESIGN.md` is unavailable in a runtime checkout, the surface cannot
pass `surface_conversion_quality_review` unless Launch Lead explicitly records a
fallback design reference set.

## PBD-01 Purpose

Validation surfaces must look and read like credible product offers for the
target buyer. They are not product builds, but they must be strong enough to
measure real buyer behavior.

The page may capture waitlist/early-access interest. It must not look like an
internal research survey.

## PBD-02 Language And Market

- Default language: English.
- Use another language only when Gate A explicitly names that market.
- For global, US, or Europe targets, English is required across hero, nav, CTA,
  form labels, FAQ, pricing/availability copy, metadata, and error/success
  states.

## PBD-03 Product Identity

Every surface needs:

```yaml
surface_identity:
  product_concept_name:
  source_reference_name:
  product_category:
  one_sentence_offer:
```

Rules:

- `product_concept_name` must be visible above the fold.
- Do not use a competitor name, source-signal name, or original Idea Card source
  label as the product name.
- Competitor/source names belong only in evidence, FAQ disclaimers, or comparison
  context.

## PBD-04 Primary Copy

Above the fold must answer in five seconds:

| Question | Required answer |
|---|---|
| Who is this for? | one specific buyer/user segment |
| What job does it solve? | one urgent workflow problem |
| What changes after using it? | concrete outcome or first value moment |
| What should I do next? | one CTA |

Forbidden in hero, nav, primary CTA, pricing/availability block, and main form:

- "validation surface"
- "we are testing demand"
- "research prompt"
- "this is only a test"
- internal Product Bet / Gate / sprint language

Boundary copy is still required, but it should live in restrained early-access,
FAQ, footer, or consent text. Do not destroy buyer motivation before the buyer
understands the value.

## PBD-05 Layout Standard

Default pattern:

1. Product name + category in header.
2. Hero with specific buyer, job, outcome, primary CTA, and one concrete visual
   proof/proxy.
3. Short "how it works" or setup preview.
4. Pain/workflow delta: old way vs new way.
5. Use cases scoped to the selected test revision.
6. Pricing/availability hint without checkout or fake discounting.
7. FAQ handling trust, scope, data, timing, and affiliation.
8. Waitlist form after value is established.

The waitlist form must not dominate the page before value is clear. Long forms
require Product Bet Measurement Specialist justification.

## PBD-06 Visual Quality

Validation pages should be simple, credible, and product-specific. Avoid generic
AI-SaaS compositions.

Use reference quality, not decoration:

- competitor landings retained by Competitor Deep Dive
- Land-book, SiteInspire, SaaSpo, Awwwards, Behance, Dribbble for mood/reference
- public design systems when useful for discipline: IBM Carbon, GitHub Primer,
  Shopify Polaris, Atlassian, Material, Fluent

Required checks:

- stable desktop and mobile layout
- no shifted/overlapping sections
- no text overflow
- CTA visible above the fold
- product name visible above the fold
- form usable on mobile
- layout supports the buyer job instead of generic gradient/orb decoration

## PBD-07 Surface Quality Gate

Before board-review preview, publication approval, measurement, traffic,
observation, or Evidence Router work, Launch Lead must have a
`surface_conversion_quality_review` with `status: pass`.

Minimum PASS:

- English-first for global / US / Europe targets
- visible NoHum product concept name
- source/competitor name not used as product identity
- retained competitor landing benchmark cited
- no visible test/research framing in primary sales copy
- waitlist truthfulness without over-disclosure in the hero
- mobile and desktop render coherent
- form friction proportional to the validation question
