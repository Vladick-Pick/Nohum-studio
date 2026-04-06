# TrustMRR Sourcing Batch

- `batch_id`:
- `source_platform`: `TrustMRR`
- `capture_date`:
- `sourcing_brief`:
- `pages_checked`:
- `filters_checked`:
- `duplicates_skipped`:
- `search_stop_reason`:
- `candidate_count`:
- `tools_used`:
  - `trustmrr_api`
  - `apify_similarweb` (optional per candidate)

## Candidate Rows

### Candidate 1

#### Scout Summary

- `product_name`:
- `trustmrr_slug`:
- `product_url`:
- `trustmrr_source_url`:
- `recommended_next_step`: `review` / `skip`
- `one_line_hypothesis`:
- `why_this_might_fit`:
- `obvious_red_flags`:
- `duplicate_note`:

#### Full TrustMRR Snapshot

- `name`:
- `slug`:
- `url`:
- `icon`:
- `description`:
- `website`:
- `country`:
- `foundedDate`:
- `category`:
- `paymentProvider`:
- `targetAudience`:
- `revenue.last30Days`:
- `revenue.mrr`:
- `revenue.total`:
- `customers`:
- `activeSubscriptions`:
- `askingPrice`:
- `profitMarginLast30Days`:
- `growth30d`:
- `growthMRR30d`:
- `multiple`:
- `rank`:
- `visitorsLast30Days`:
- `googleSearchImpressionsLast30Days`:
- `revenuePerVisitor`:
- `onSale`:
- `firstListedForSaleAt`:
- `xHandle`:
- `xFollowerCount`:
- `isMerchantOfRecord`:
- `techStack`:
- `cofounders`:

#### SimilarWeb Enrichment

- `similarweb_site_name`:
- `similarweb_snapshot_date`:
- `similarweb_visits_latest`:
- `similarweb_visits_history`:
- `traffic_sources`:
- `top_country_shares`:
- `global_rank`:
- `country_rank`:
- `category_rank`:
- `top_keywords`:
- `similar_sites`:
- `ai_traffic_total_visits`:
- `ai_traffic_top_sources`:
- `similarweb_confidence`:

#### Derived Heuristics

- `has_live_website`:
- `has_subscription_signal`:
- `traffic_confidence`:
- `trustmrr_to_similarweb_visit_gap`:
- `rough_mrr_per_active_subscription`:
- `rough_mrr_per_trustmrr_visit`:
- `rough_mrr_per_similarweb_visit`:
- `rough_business_shape`:
- `api_data_completeness`:
