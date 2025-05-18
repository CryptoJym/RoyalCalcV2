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
