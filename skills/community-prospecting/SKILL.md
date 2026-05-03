---
name: community-prospecting
description: Find and score Reddit, Hacker News, Product Hunt, X, and niche community surfaces for value-first Product Bet traffic tests.
---

# Community Prospecting

## Purpose

Find places where target users already discuss the problem, alternatives, or
workflow. Prepare value-first engagement options without spam.

## Sources

- Reddit search and subreddit pages
- Hacker News Algolia search
- Product Hunt launch and alternatives pages
- X search when available
- IndieHackers and niche forums
- competitor community mentions

## Query Patterns

Use combinations of:

- pain phrase from the Product Bet Card
- current workaround
- competitor names
- "alternative to <competitor>"
- "how do I <job>"
- "tool for <job>"
- "spreadsheet for <job>"
- "template for <job>"
- "manual <workflow>"
- "recommend <category>"
- "pricing <competitor>"
- "frustrated with <competitor>"

Record query, source, URL, and why it was kept or rejected.

## Thread Score

Score every candidate thread:

- audience match: `0-5`
- problem intent: `0-5`
- buying/tool intent: `0-5`
- reputation risk: `0-5`
- spam risk: `0-5`

Skip if problem intent is under `3`, reputation risk is over `3`, or rules are
unclear.

## Scorecard Fields

```yaml
thread_scorecard:
  source:
  source_url:
  query:
  audience_match:
  problem_intent:
  buying_or_tool_intent:
  recency:
  thread_activity:
  rules_checked: yes | no
  reputation_risk:
  spam_risk:
  tracking_possible: yes | no
  recommended_action: skip | monitor | help_only | soft_mention | direct_mention
  reason:
```

## Engagement Ladder

- `help_only`: answer the problem without mentioning NoHum product
- `soft_mention`: mention the waitlist only when directly relevant
- `direct_mention`: only for explicit tool/recommendation intent and approved posting

## Drafting Rules

- Lead with useful information, not the product.
- Use the language from the thread, not generic SaaS phrasing.
- Do not pretend to be a customer.
- Do not claim the product exists if the surface is a waitlist.
- Do not post the same message across multiple communities.
- If the safest action is `help_only`, still record whether it can produce
  traffic or learning.

## Blocked States

- `MISSING_ACCESS`: account/tool/search access is unavailable.
- `APPROVAL_REQUIRED`: public post, directory submission, or branded reply needs approval.
- `BLOCKED_BY_POLICY`: community rules, platform terms, or reputation risk blocks the action.
- `LOW_INTENT`: surface exists but is not useful for this cycle.

## Output

Use:

- `community-prospecting-map.md`
- `thread-scorecard.md`
- `traffic-attempt.md`
