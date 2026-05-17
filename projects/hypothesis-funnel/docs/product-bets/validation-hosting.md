# Product Bet Validation Hosting

Owner: `launch-lead`

This file defines the default host shape for validation-surface previews and
public test surfaces.

Operational setup, verification commands, blocker comments, and current
Timeweb/Traefik/systemd implementation notes live in
`docs/runbooks/validation-surface-hosting.md`. This file is the Product Bet
policy; the runbook is the Engineering/SRE execution contract.

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
- A working host does not approve traffic. It only satisfies the hosting gate
  after surface quality, visual conversion, board approval, measurement, and
  tracking gates are separately satisfied.

## Required Runtime Checks

Before publication approval:

```yaml
validation_hosting_check:
  dns_resolves:
  tls_valid:
  reverse_proxy_routes_to_surface:
  noindex_present:
  robots_disallow_present:
  service_supervised:
  host_implementation:
  attribution_internal_test_for_preview:
  public_url:
  status: pass | blocked
```

`claricont.com` resolving to the VPS is not enough. The specific subdomain or
wildcard record must resolve, and the reverse proxy must route that host to the
surface server.

Current allowed `host_implementation` values are:

- `shared_wildcard_route_current_surface`
- `dedicated_surface_service`
- `static_publisher_gateway`

The current runtime can use a shared wildcard route for the active surface, but
future multiple simultaneous surfaces require a publisher/gateway or dedicated
service routing. Do not treat the shared route as immutable surface registry.
