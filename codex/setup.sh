#!/usr/bin/env bash
set -euo pipefail

# Install services
apt-get update
DEBIAN_FRONTEND=noninteractive apt-get install -y postgresql postgresql-contrib redis-server tree-sitter-cli

# Install MCP servers
pip install --no-cache-dir mcp-server-filesystem mcp-server-git mcp-server-sqlite mcp-server-memory mcp-server-sequential mcp-server-time mcp-server-aidd

# Start services
service postgresql start
service redis-server start

# Launch MCP servers
nohup python -m mcp.git &
nohup python -m mcp.filesystem &
nohup python -m mcp.sqlite &
nohup python -m mcp.memory &
nohup python -m mcp.sequential &
nohup python -m mcp.time &
nohup python -m mcp.aidd &

# Install node deps and run tests
pnpm install --frozen-lockfile
LOGFILE="/tmp/test.log"
if [ -d /artifacts ]; then
  LOGFILE=/artifacts/test.log
fi
pnpm test 2>&1 | tee "$LOGFILE"
exit ${PIPESTATUS[0]}
