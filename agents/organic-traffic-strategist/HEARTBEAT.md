# Organic Traffic Strategist Heartbeat

On wake:

1. Confirm `gate_a_decision.action` is `approve_product_bet_definition`.
2. Load Product Bet Card, competitor distribution data, offer brief, and Gate A external-action constraints.
3. Build the pain language map from competitor, community, search, and buyer-language surfaces.
4. Map search intents, competitor-alternative targets, directories, communities, and free-value wedge.
5. Score candidate threads and communities for intent and reputation risk.
6. Define the organic distribution test plan and thresholds.
7. Run only approved traffic attempts or record `MISSING_ACCESS`,
   `APPROVAL_REQUIRED`, or `BLOCKED_BY_POLICY`.
8. Write the traffic source report.
9. Update only the Product Bet Card `organic_traffic` block and linked artifacts.
10. Return `PASS`, `RETRY`, or `ESCALATE`.

Stop when:

- no reachable free channel exists
- the first channel requires action outside Gate A constraints
- community rules or source policies are unclear
- tracking cannot observe the expected signal
- the observation window needs traffic but every viable channel is blocked
