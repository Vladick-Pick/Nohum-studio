# Competitor Site Analysis Design

## Goal

Define a reproducible `Competitor Scout` site-analysis layer that extracts product truth, workflow truth, pricing truth, and conversion-surface structure from retained competitors without turning the agent into a visual design critic.

## Decision

Use `HTML-first structured extraction` as the default mode.

Use `browser fallback` only when one of the required truths cannot be recovered from the fetched HTML:

- pricing visibility
- CTA path
- workflow summary
- core product framing

Do not crawl the whole site.

Use a bounded page set:

- homepage
- pricing page
- product / features / how-it-works page
- up to two high-signal use-case pages if needed

## Why

- Most marketing and pricing sites expose enough structure in server-rendered or hydrated HTML.
- HTML-first is cheaper, faster, and easier to scale across multiple competitors.
- Browser rendering should be treated as a recovery path, not the default, because it is slower and more operationally fragile.
- `Competitor Scout` needs content and conversion structure, not a full UI teardown.

## Required Output

For each retained competitor, the site-analysis layer must produce:

- `value_proposition`
- `target_buyer`
- `problem_solved`
- `jtbd_hypothesis`
- `product_type`
- `expected_outcome`
- `how_it_works_summary`
- `core_steps`
- `moment_of_use`
- `pricing_visibility`
- `plans_found`
- `billing_model`
- `free_trial_or_free_plan`
- `cta_to_first_payment`
- `hero_message`
- `primary_cta`
- `secondary_cta`
- `proof_blocks`
- `faq_or_objection_handling`
- `page_structure_notes`

## Non-Goals

- visual design critique
- brand or aesthetic judgment
- full-site crawl
- storing raw HTML in the main idea card

## Storage Rule

- normalized site-analysis conclusions live in the `Competitor Evidence Card`
- the main `Idea Card` only carries the summarized competition conclusions
- raw page captures or extracted page snippets may be linked from the evidence card when needed
