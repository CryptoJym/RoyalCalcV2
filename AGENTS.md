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
