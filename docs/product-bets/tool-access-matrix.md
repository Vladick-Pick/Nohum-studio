# Research And Product Bet Tool Access Matrix

| Tool/source | Secret/access | Phase | Action |
|---|---|---|---|
| TrustMRR | `TRUSTMRR_API_KEY` | Research | source intake by `Idea Scout` |
| Apify SimilarWeb | `APIFY_TOKEN` | Research | enrichment for shortlisted candidates |
| Product Hunt | `PRODUCT_HUNT_TOKEN` plus commercial-use approval | Research | automated only when approved, otherwise blocked |
| GitHub | optional `GITHUB_TOKEN` | Research or Product Bet | public search/API when configured and policy-allowed |
| Firecrawl | `FIRECRAWL_API_KEY` | Research or Product Bet | web extraction when configured and allowed |
| Playwright | local/runtime browser | Product Bet | browser checks and landing QA when available |
| Email outreach | email account plus policy approval | Product Bet | draft-only until send approval |
| Paid ads | ad account plus budget approval | Product Bet | approval required |
| Landing deploy | Vercel, Railway, or Cloudflare access | Product Bet | public deploy approval required |
| Analytics | Plausible or PostHog access | Product Bet | required before interpreting live tests |
| Payment collection | payment provider plus approval | Product Bet / Build | R4 approval required |

## Execution States

- `READY`: access exists and policy allows the action
- `MISSING_ACCESS`: required secret/account/tool is absent
- `APPROVAL_REQUIRED`: human or board approval is required
- `BLOCKED_BY_POLICY`: action is forbidden by current policy

Agents must return these states explicitly. They must not silently skip missing
access.

## Phase Rule

Research tools may create source batches, evidence, and `Idea Card` sections.
They must not create Product Bet Definition artifacts before Gate A.

Product Bet tools may create product definition, red hypothesis, test GTM, and
evidence artifacts only after Gate A opens product definition.
