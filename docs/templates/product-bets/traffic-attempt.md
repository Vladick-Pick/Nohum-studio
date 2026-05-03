# Traffic Attempt

Owner: `organic-traffic-strategist`

```yaml
traffic_attempt:
  id: ta-YYYYMMDD-slug
  organic_distribution_test_plan_ref:
  surface_version_ref:
  owner: organic-traffic-strategist
  created_at:
```

## Attempt

```yaml
attempt:
  channel:
  action_type: SEO_page | directory_submission | community_reply | community_post | HN_comment | X_post | free_tool_distribution | other
  target_url:
  source_url:
  message_or_asset_ref:
  approval_ref:
  posted_or_published_at:
  UTM:
  status: planned | live | skipped | blocked | removed | completed
```

## Result

```yaml
result:
  unique_visitors:
  CTA_clicks:
  waitlist_submits:
  qualitative_feedback:
  source_quality: low | medium | high | unknown
  notes:
  evidence_event_ref:
```

Rules:

- Public posting requires approval.
- Paid traffic is not an organic traffic attempt.
- Each attempt must cite the exact surface version it drove traffic to.
