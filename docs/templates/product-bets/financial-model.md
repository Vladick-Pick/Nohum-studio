# Financial Model

Owner: `economics-modeler`

```yaml
financial_model:
  id: fm-YYYYMMDD-slug
  product_bet_id:
  product_bet_revision_ref:
  owner: economics-modeler
  created_at:
```

## Pricing

```yaml
pricing:
  expected_price_monthly:
  alternative_prices:
  plan_shape:
  free_trial_or_free_tier:
  pricing_anchor_refs:
  pricing_confidence: low | medium | high
```

## Funnel Assumptions

```yaml
funnel_assumptions:
  scenario_conservative:
    monthly_visits:
    visit_to_signup:
    signup_to_activation:
    activation_to_paid:
    churn_monthly:
    assumption_notes:
  scenario_base:
    monthly_visits:
    visit_to_signup:
    signup_to_activation:
    activation_to_paid:
    churn_monthly:
    assumption_notes:
  scenario_aggressive:
    monthly_visits:
    visit_to_signup:
    signup_to_activation:
    activation_to_paid:
    churn_monthly:
    assumption_notes:
```

## Costs

```yaml
costs:
  hosting_fixed_monthly:
  ai_api_cost_per_active_user:
  payment_fee_percent:
  support_minutes_per_paid_user:
  support_cost_per_hour:
  maintenance_cost_monthly:
  test_gtm_cost:
  external_service_costs:
  assumption_notes:
```

## Outputs

```yaml
outputs:
  conservative:
    month_1_mrr:
    month_3_mrr:
    month_6_mrr:
    gross_margin:
    contribution_margin:
    break_even_month:
    break_even_paid_users:
    month_to_5000_mrr:
    month_to_5000_net_contribution:
  base:
    month_1_mrr:
    month_3_mrr:
    month_6_mrr:
    gross_margin:
    contribution_margin:
    break_even_month:
    break_even_paid_users:
    month_to_5000_mrr:
    month_to_5000_net_contribution:
  aggressive:
    month_1_mrr:
    month_3_mrr:
    month_6_mrr:
    gross_margin:
    contribution_margin:
    break_even_month:
    break_even_paid_users:
    month_to_5000_mrr:
    month_to_5000_net_contribution:
```

## Sensitivity And Kill Thresholds

```yaml
sensitivity:
  most_sensitive_variable:
  second_order_risks:
  kill_thresholds:
    activation_below:
    paid_conversion_below:
    churn_above:
    support_minutes_above:
    ai_cost_above:
    gross_margin_below:
  model_limitations:
  sufficiency_status: pass | retry | escalate
```
