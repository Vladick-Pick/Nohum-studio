# Measurement Plan

Owner: `product-bet-measurement-specialist`

```yaml
measurement_plan:
  id: mp-YYYYMMDD-slug
  product_bet_revision_ref:
  surface_version_ref:
  observation_window_ref:
  owner: product-bet-measurement-specialist
  created_at:
```

## Events

```yaml
events:
  page_view:
  CTA_click:
  pricing_click:
  waitlist_submit:
  scroll_depth:
  outbound_directory_click:
  community_referral_visit:
  waitlist_submit_success:
  waitlist_submit_error:
```

## Tracking

```yaml
tracking:
  analytics_destination:
  dashboard_ref:
  UTM_policy:
  source_naming_policy:
  identity_policy:
  data_retention_or_privacy_notes:
```

## Thresholds

```yaml
thresholds:
  pass:
  weak_pass:
  fail:
  inconclusive:
  minimum_sample_or_timebox:
  min_unique_visitors:
  min_channel_count:
  min_runtime_hours:
  max_runtime_days:
```

## QA

```yaml
QA:
  desktop_checked: yes | no
  mobile_checked: yes | no
  form_checked: yes | no
  event_delivery_checked: yes | no
  dashboard_checked: yes | no
  observation_window_checked: yes | no
  blocker:
  sufficiency_status: pass | retry | escalate
```
