# Product Bet Tool Access Matrix

| Tool/source | Secret/access | v0 action |
|---|---|---|
| TrustMRR | `TRUSTMRR_API_KEY` | automated if present |
| Apify SimilarWeb | `APIFY_TOKEN` | automated for shortlisted candidates when configured |
| Product Hunt | `PRODUCT_HUNT_TOKEN` plus commercial-use approval | automated only when approved, otherwise blocked |
| GitHub | optional `GITHUB_TOKEN` | automated public search or API when configured |
| Firecrawl | `FIRECRAWL_API_KEY` | automated web extraction when configured and allowed |
| Playwright | local/runtime browser | automated browser checks when available |
| Email outreach | email account plus policy approval | draft-only until approval |
| Paid ads | ad account plus budget approval | approval required |
| Landing deploy | Vercel, Railway, or Cloudflare access | configured access required |
| Analytics | Plausible or PostHog access | configured access required |
| Payment collection | payment provider plus approval | R4 approval required |

## Execution States

- `READY`: access exists and policy allows the action
- `MISSING_ACCESS`: required secret/account/tool is absent
- `APPROVAL_REQUIRED`: human or board approval is required
- `BLOCKED_BY_POLICY`: action is forbidden by current policy

Agents must return these states explicitly. They must not silently skip missing
access.
