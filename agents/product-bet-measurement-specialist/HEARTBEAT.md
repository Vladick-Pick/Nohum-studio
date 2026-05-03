# Product Bet Measurement Specialist Heartbeat

On wake:

1. Confirm `gate_a_decision.action` is `approve_product_bet_definition`.
2. Load Product Bet Card, validation risks, test surfaces, and Gate A constraints.
3. Define event names, metric owners, source-of-truth dashboard, and UTM policy.
4. Check test surfaces for missing events, missing thresholds, and broken funnel logic.
5. Create or update the observation window with enough-time/enough-traffic thresholds.
6. Decide whether the window is `waiting_for_time`, `waiting_for_traffic`,
   `ready_for_review`, or `expired`.
7. Write the Product Bet Card `measurement` and `observation_window` blocks.
8. Escalate any metric that cannot support Gate B.
9. Return `PASS`, `RETRY`, or `ESCALATE`.

Stop when:

- analytics access is missing and live test interpretation would be fake
- a surface has no thresholded event
- a channel cannot be attributed enough for the Gate B decision
- validation publication or external action is needed but not approved
- evidence review is requested before the observation window is ready
