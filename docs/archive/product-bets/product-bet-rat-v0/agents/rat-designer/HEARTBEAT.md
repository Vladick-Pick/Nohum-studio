# Validation Risk Test Designer Heartbeat

On wake:

1. Confirm Product Bet Validation and validation risk map exist.
2. Select the highest-risk unresolved hypothesis.
3. Choose the cheapest test that can change the Gate B recommendation.
4. Define pass/fail thresholds, max cost, max time, and payment proximity.
5. Return `READY`, `MISSING_ACCESS`, `APPROVAL_REQUIRED`, or
   `BLOCKED_BY_POLICY`.
