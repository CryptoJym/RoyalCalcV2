# RoyalCalc v2

RoyalCalc is a mobile-first financial calculator for the **Royal** ecosystem, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Quick start

```bash
pnpm install   # or npm install / yarn install
pnpm dev       # starts dev server on http://localhost:3000
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

---

© Royal.Space 