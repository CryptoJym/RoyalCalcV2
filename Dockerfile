FROM ghcr.io/openai/codex-universal:latest

# Install pnpm for node package management
RUN corepack enable && corepack prepare pnpm@8.15.4 --activate

# Pre-install node dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Install test dependencies for languages (here vitest is part of dev deps)

# Default command
CMD ["bash"]
