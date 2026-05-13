# Product Bet Validation Hosting

Owner: `launch-lead`

This file defines the default host shape for validation-surface previews and
public test surfaces.

## Default Domain

```yaml
validation_hosting:
  base_domain: claricont.com
  preferred_subdomain_pattern: <surface-slug>.claricont.com
  raw_ip_urls_allowed: no
  board_review_preview_requires_noindex: yes
```

Rules:

- Do not send raw IP URLs in board publication approval requests when a company
  validation domain is available.
- Default preview/public host is `https://<surface-slug>.claricont.com`.
- Board-review preview and public validation should use the same host shape when
  possible.
- If wildcard DNS or reverse proxy routing is missing, record
  `validation_hosting_blocked` and keep the surface in review/blocked state
  instead of approving traffic.
- Review-preview traffic must remain `internal_test` and must not count as
  market evidence.

## Required Runtime Checks

Before publication approval:

```yaml
validation_hosting_check:
  dns_resolves:
  tls_valid:
  reverse_proxy_routes_to_surface:
  noindex_present:
  robots_disallow_present:
  attribution_internal_test_for_preview:
  public_url:
  status: pass | blocked
```

`claricont.com` resolving to the VPS is not enough. The specific subdomain or
wildcard record must resolve, and the reverse proxy must route that host to the
surface server.
