# RoyalCalc v2

RoyalCalc is a mobile-first financial calculator for the **Royal** ecosystem, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Quick start

```bash
pnpm install   # or npm install / yarn install
pnpm dev       # starts dev server on http://localhost:3000
pnpm build     # generates a static export in ./out for deployment
```

## Tech stack

* Next.js 14 (App Router)
* React 18 + TypeScript
* Tailwind CSS v3
* Zustand (state)
* React-Hook-Form + Zod (forms / validation)
* recharts (charts)

## Project structure (partial)

```
app/                – Next.js app router
  layout.tsx        – global HTML shell
  page.tsx          – calculator page
components/
  core/             – feature components (CalculatorForm, ResultsPanel)
  layout/           – Header, Footer
lib/                – business logic & state
styles/             – global Tailwind styles
```

## Roadmap

This repository contains an MVP implementation that lets users:

1. Enter an investment amount, staking duration (1 or 2 years), and projected annual return.
2. Instantly see total projected return, ROI %, and a yearly breakdown.

Planned next steps (from the PRD):

* Integrate full **RWA token sale** mechanics (community round + sigmoid pricing).
* Replace placeholder yield formula with validated Royal business logic.
* Add charts (recharts) and tutorials/overlays.
* Improve mobile UX polish, dark mode, accessibility.

## Deploying to Netlify

Run `pnpm build` to generate the `out` directory and deploy that folder on
Netlify as a static site. Use the following settings:

```text
Build command: pnpm build
Publish directory: out
```

The `next.config.mjs` file has `output: 'export'` enabled so the build
produces static HTML assets that Netlify can serve directly from its CDN.

### Local setup with Docker and MCP servers

To reproduce the CI environment (which launches several Model Context Protocol
servers) run:

```bash
docker build -t royalcalc .
docker run --rm -it royalcalc bash
```

Inside the container execute `./codex/setup.sh` to install dependencies and
start the MCP servers. Afterwards you can run `pnpm dev` or `pnpm build` as
usual. This setup mirrors the environment used during automated testing.
=======
Run `pnpm build` to generate the `out` directory. Deploy this directory on
Netlify as a static site. The `next.config.mjs` file is configured with
`output: 'export'` so the build produces purely static HTML assets that work
correctly on Netlify's CDN.

## Pull request automation

Pull requests labeled `automerge` are automatically merged after all checks
pass. The head branch is deleted once the merge completes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

© Royal.Space
