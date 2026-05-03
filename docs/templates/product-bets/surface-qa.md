# Surface QA

Owner: `landing-surface-builder`

```yaml
surface_QA:
  id: sqa-YYYYMMDD-slug
  surface_version_ref:
  owner: landing-surface-builder
  created_at:
```

## Checks

```yaml
browser_QA:
  desktop_checked: yes | no
  mobile_checked: yes | no
  critical_text_fits: yes | no
  CTA_clickable: yes | no
  form_visible: yes | no
  form_submit_success: yes | no
  form_submit_error_state: yes | no
  no_console_errors_checked: yes | no
```

```yaml
measurement_QA:
  page_view_event: pass | fail | blocked
  CTA_click_event: pass | fail | blocked
  waitlist_submit_event: pass | fail | blocked
  UTM_capture: pass | fail | blocked
  dashboard_receives_events: pass | fail | blocked
```

```yaml
claims_QA:
  fake_logos_absent: pass | fail
  unsupported_claims_absent: pass | fail
  anti_ai_slop_review_ref:
  claims_review_status: pass | fail | blocked
```

```yaml
result:
  status: pass | retry | escalate
  blockers:
  retry_owner:
```
