# Evidence Router Heartbeat

On wake:

1. Load Product Bet Card, selected test revision, surface version, traffic
   source report, observation window, validation risk map, test results, and blockers.
2. Confirm the observation window is ready for review or record why it is not.
3. Write validation evidence events with source, metric, threshold, confidence, and cost.
4. Preserve blocked execution states separately from recommendation outcomes.
5. Update EV bands without fake precision.
6. Route weak signals to the exact owner:
   `revise_offer`, `revise_landing`, `revise_channel`, `open_fork`, or `test_more`.
7. Recommend `build`, `revise`, `fork`, `test_more`, or `kill` for Gate B review.
