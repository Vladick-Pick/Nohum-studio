# Thread Scorecard

Owner: `organic-traffic-strategist`

```yaml
thread_scorecard:
  id: ts-YYYYMMDD-slug
  product_bet_revision_ref:
  owner: organic-traffic-strategist
  created_at:
```

## Score

```yaml
thread:
  platform:
  url:
  title:
  thread_age:
  audience_match: 0-5
  problem_intent: 0-5
  buying_or_tool_intent: 0-5
  allowed_to_reply: yes | no | unclear
  reputation_risk: 0-5
  spam_risk: 0-5
  expected_traffic_quality: low | medium | high
  selected_action: skip | monitor | help_only | soft_mention | direct_mention
```

Decision rule:

- skip if `problem_intent < 3`
- skip if `reputation_risk > 3`
- skip if rules are unclear and approval is unavailable
- prefer `help_only` before direct mention
