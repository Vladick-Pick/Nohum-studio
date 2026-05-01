# Reference: companies.sh

Date: 2026-03-28

## What It Is

`companies.sh` presents itself as:

- `The Open Company Directory`
- an open directory of reusable AI agent companies
- a catalog of installable company packages

The homepage language in the shipped client bundle is:

- `Reusable companies for AI agents.`

The site is clearly built around publishable company packages, not around one-off live runtimes.

## Observed Model

From the live site bundle and page data, the directory stores package-level metadata such as:

- `slug`
- `name`
- `tagline`
- `description`
- `category`
- `founded`
- `installs`
- `website`
- `repo`
- `techStack`
- `githubStars`
- `firstSeen`
- `documentMarkdown`
- `documentSource`
- `featured`

It also supports package detail pages for shapes like:

- `/:org`
- `/:org/:repo`
- `/:org/:repo/:company`

There is also an `unapproved` submission flow.

## Import / Install Mental Model

The docs embedded in the client bundle show:

- `companies.sh` accepts company packages from multiple source types
- GitHub shorthand is a first-class install source
- install examples use package-style commands such as:
  - `npx companies.sh add owner/repo/path`

This matters because it confirms an important distinction:

- live runtime company
- portable company package

For NoHum, this matches the model we already converged on:

- `Nohum-studio` is the portable package and rebuild artifact
- the live Paperclip company on the server is the runtime source of truth

## What It Reinforces For NoHum

### 1. Company-As-Package Is A Real Abstraction

This is not just our local invention.

`companies.sh` treats an AI company as something that can be:

- described
- versioned
- installed
- browsed
- compared

That strongly supports continuing to keep NoHum as:

- a live runtime on the server
- plus a durable package/bootstrap repo

### 2. Directory-Ready Packaging Matters

The directory is clearly optimized for packages that explain themselves well.

That means NoHum should gradually improve:

- `README.md`
- org chart
- venture lifecycle diagram
- artifact flow diagram
- clear description of what the company actually does

In other words:

- the atlas work is not just internal design
- it is also future package presentation material

### 3. Public Package Metadata Is Different From Runtime Governance

The directory metadata is useful for discovery.

It is not enough for operating the machine.

So NoHum still needs two layers:

- public/package layer:
  - name
  - tagline
  - README
  - diagrams
  - exported company structure
- private/runtime layer:
  - budgets
  - approvals
  - heartbeats
  - live instructions
  - live venture state
  - live artifacts

### 4. NoHum Should Eventually Be Directory-Publishable

Not immediately.

But the package should be designed so it can eventually be published as a real reusable company package.

That means:

- clean package docs
- clean agent bundles
- clean org map
- clean install story
- minimal hidden assumptions

## What Not To Copy Blindly

`companies.sh` is a discovery surface, not a venture factory operating system.

So we should not confuse:

- package listing quality
- runtime machine quality

For NoHum, the real machine still depends on:

- research machine
- launch machine
- governance
- routines
- venture artifacts
- payment signal handling

The directory can describe those things.

It cannot replace them.

## Concrete Implication

The correct stance for NoHum now is:

- keep building the machine first
- but structure the docs and atlas so the package can later become publishable through `companies.sh` or similar directories

That is the right balance between:

- internal operational rigor
- external package clarity
