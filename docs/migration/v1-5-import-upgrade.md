# NoHum Studio v1.5 Import Upgrade

1. Validate the GitHub package against the current portability importer before touching the live company.
2. Use `--target existing`, never `--target new`, for the v1.5 upgrade.
3. Replace only the exact-parity core agents:
   - `ceo`
   - `research-lead`
   - `launch-lead`
4. Import the new specialist roster in a second pass.
5. If preview shows any specialist already exists, stop and remediate that slug manually before bulk import.
6. Manually pause newly created specialists after import because portability manifest does not encode agent status.
7. Treat `teams/` as package/bootstrap documentation unless the importer proves it materializes them.
8. Apply post-import runtime wiring for managed instruction files, bundled skills, and MCP/tool access.
9. Re-run a bootstrap audit after import before waking the new org.
