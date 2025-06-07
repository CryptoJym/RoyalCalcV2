<<<<<<< HEAD
# RoyalCalc Agent Guidelines

This repo uses Next.js 14, TypeScript and PNPM.

## Required checks

Run the following commands from the repository root after making changes:

```bash
pnpm lint   # run eslint via Next.js
pnpm test   # run vitest tests
```

Format code using Prettier:

```bash
npx prettier -w .
```

Include the results of these commands in the PR description.
=======
# Repository Guide

## Languages and Tools
- **Node.js/TypeScript** located throughout the repo.
  - Testing uses **vitest** via `pnpm test`.

## Development
- Install dependencies with `pnpm install`.
- Build with `pnpm build`.
- Lint with `pnpm lint`.
- Test with `pnpm test`.

## Docker
To reproduce the CI environment locally:
```bash
docker build -t repo-dev .
docker run --rm repo-dev ./codex/setup.sh
```

Outbound-network MCP servers are intentionally excluded.

## Backlog
The project's backlog is documented in [BACKLOG.md](./BACKLOG.md). Review this
file when starting work to understand the current outstanding tasks.
>>>>>>> origin/main
