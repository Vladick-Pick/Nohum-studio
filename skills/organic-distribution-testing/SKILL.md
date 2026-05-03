---
name: organic-distribution-testing
description: Run Product Bet organic traffic tests through search, communities, directories, and free-value wedges.
---

# Organic Distribution Testing

## Purpose

Prove whether a Product Bet can earn relevant free or near-free traffic before
build.

This is not a marketing strategy memo. It is a traffic experiment loop.

## Required Flow

1. Load the selected Product Bet revision, offer brief, landing surface version,
   measurement plan, and Gate A external-action constraints.
2. Build a pain language map from competitor pages, reviews, community
   language, search snippets, and product alternatives.
3. Build a search intent map that separates problem intent, category intent,
   competitor-alternative intent, template/tool intent, and low-intent content
   intent.
4. Build a community prospecting map for Reddit, Hacker News, Product Hunt,
   IndieHackers, X, niche forums, directories, marketplaces, and GitHub when
   relevant.
5. Score candidate threads and surfaces with audience match, problem intent,
   buying/tool intent, reputation risk, spam risk, and tracking ability.
6. Select one primary free channel and one or two secondary channels for the
   validation cycle. Do not spread thinly across every channel.
7. Define a free value wedge when a useful calculator, checker, template,
   mini-tool, sample report, teardown, or benchmark can earn attention without
   building the real product.
8. Create an organic distribution test plan with expected signal, thresholds,
   observation window, approval-required actions, and blocked states.
9. Prepare traffic assets for approved channels: comparison page brief,
   directory blurbs, community replies, X posts, HN comments, free-tool copy, or
   SEO page briefs.
10. Run only approved traffic attempts. If approval or account access is
    missing, write `APPROVAL_REQUIRED` or `MISSING_ACCESS`; do not improvise.
11. Record each attempt with UTM, surface version, source URL, action type,
    status, result metrics, qualitative feedback, and evidence event ref.
12. Write traffic source report and route next action: wait, more traffic,
    revise channel, revise offer, open fork, or evidence review.

## Default Channels

- problem/category search
- competitor alternative and comparison pages
- Reddit, Hacker News, IndieHackers, niche forums
- directories and marketplaces
- X/build-in-public when approved
- free tool, template, calculator, checker, generator, or sample report

## Channel Selection Rules

Use these defaults unless Gate A constraints override them:

| Channel | Use when | Skip when | Main artifact |
|---|---|---|---|
| Problem search | users search the job or workaround | SERP is generic or enterprise-heavy | `search-intent-map` |
| Competitor alternatives | known competitors have visible search demand | wedge is not competitor-comparable | comparison page brief |
| Directories | category has discovery surfaces | listing requires fake traction or paid placement | directory blurbs |
| Reddit / forums | pain appears in real user language | rules or reputation risk are unclear | thread scorecard |
| Hacker News | technical/prosumer audience fits | product is non-technical or promotional angle is weak | HN lead/thread scorecard |
| Product Hunt | launch/category discovery is useful | commercial API/use approval is missing | discovery notes only |
| X | audience cluster is reachable through public threads | account access or posting approval is missing | post/thread variants |
| Engineering as marketing | free wedge can be valuable standalone | wedge requires real product backend | free value wedge |

## Attempt Types

Every attempt must be recorded as `traffic_attempt`:

- `SEO_page`: publish or prepare a problem/use-case/comparison page.
- `directory_submission`: submit approved listing or record blocked state.
- `community_reply`: answer an existing high-intent thread.
- `community_post`: publish a value-first post when rules and approval allow.
- `HN_comment`: comment on relevant HN thread with value-first framing.
- `X_post`: publish approved thread or reply.
- `free_tool_distribution`: distribute a calculator/template/checker/sample
  report surface.
- `other`: use only with explicit rationale.

## Thresholds

Use the observation window policy for minimum traffic and waitlist thresholds.

Default minimum before evidence review:

- `min_runtime_hours`: `72`
- `min_unique_visitors`: `300`
- `preferred_unique_visitors`: `1000`
- `min_channel_count`: `2`
- `waitlist_submits.promising`: `30`
- `waitlist_submits.strong`: `50`

These are not universal truth. A Gate A decision may set stricter or looser
thresholds, but the threshold must be written before traffic starts.

## Routing

| Observed result | Route |
|---|---|
| enough time, too little traffic | `run_more_traffic` |
| traffic from wrong audience | `revise_channel` |
| traffic exists but CTA weak | `revise_offer` or `revise_landing` |
| comments show misunderstood value prop | `revise_offer` |
| one alternate segment responds better | `open_fork` |
| promising waitlist signal | `review_evidence` |
| max window expired with no signal | `kill` or `park_with_learning` |

## Permission Boundary

No spam, no fake engagement, no astroturfing, and no action outside Gate A
constraints without approval.

## Required Outputs

- `pain-language-map.md`
- `search-intent-map.md`
- `community-prospecting-map.md`
- `thread-scorecard.md`
- `free-value-wedge.md` when relevant
- `organic-distribution-test-plan.md`
- `traffic-attempt.md` per attempt
- `traffic-source-report.md`
