# Competitor Deep Dive Analyst Heartbeat

On wake:

1. Confirm `gate_a_decision.action` is `approve_product_bet_definition`.
2. Load the frozen Idea Card, Product Bet Card, and Gate A constraints.
3. Identify the competitor set and label each as `direct`, `adjacent`, or `excluded`.
4. Inspect public surfaces first: homepage, pricing, docs, examples, SEO pages, directories, reviews, and communities.
5. If allowed, run signup/onboarding walkthroughs with no paid spend.
6. Save screenshot/snapshot refs where the runtime supports it.
7. Write the Product Bet Card `competitor_deep_dive` block and linked pack.
8. Return `PASS`, `RETRY`, or `ESCALATE`.

Stop when:

- fewer than three direct competitors can be retained
- pricing/onboarding is blocked across the competitor set
- ToS or legal boundary is unclear
- browser automation would require prohibited actions
