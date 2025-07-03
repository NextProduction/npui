#!/bin/bash

# This script provides shortcuts for common development and deployment tasks
# within the npui monorepo, specifically for the web app and CLI.
#
# Usage:
#   cd apps/web
#   chmod +x ./scripts/dev-ops.sh
#   ./scripts/dev-ops.sh <command>
#
# Commands:
#   dev-web      - Starts the Next.js development server for the web app.
#   build-web    - Builds the Next.js web app for production.
#   build-cli    - Builds the @npui/cli package.
#   publish-cli  - Builds and publishes the @npui/cli package to npm.
#                  (Requires npm login and version bump in packages/cli/package.json)
#   help         - Displays this help message.

# Navigate to the monorepo root from apps/web
REPO_ROOT=$(dirname "$(dirname "$(dirname "$0")")")
cd "$REPO_ROOT" || { echo "Error: Could not navigate to monorepo root."; exit 1; }

echo "Current working directory: $(pwd)"

# Function to run the web app in development mode
run_web_app() {
  echo "🚀 Starting npui web app in development mode..."
  pnpm --filter=npui-web dev
}

# Function to build the web app for production
build_web_app() {
  echo "📦 Building npui web app for production..."
  pnpm --filter=npui-web build
  echo "✅ Web app build complete. Output in apps/web/.next"
}

# Function to build the CLI package
build_cli() {
  echo "🛠️ Building @npui/cli package..."
  pnpm --filter=@npui/cli build
  echo "✅ CLI build complete. Output in packages/cli/dist"
}

# Function to publish the CLI package to npm
publish_cli() {
  echo "⬆️ Publishing @npui/cli package to npm..."
  echo "IMPORTANT: Ensure you have incremented the version in packages/cli/package.json"
  echo "and are logged into npm (npm login) before proceeding."
  read -p "Are you sure you want to publish @npui/cli? (y/N): " confirm
  if [[ "$confirm" =~ ^[yY]$ ]]; then
    build_cli # Ensure CLI is built before publishing
    pnpm publish -r --filter=@npui/cli --access public
    echo "✅ @npui/cli published to npm."
  else
    echo "🚫 CLI publish cancelled."
  fi
}

# Display help message
display_help() {
  echo ""
  echo "Usage: ./scripts/dev-ops.sh <command>"
  echo ""
  echo "Commands:"
  echo "  dev-web      - Starts the Next.js development server for the web app."
  echo "  build-web    - Builds the Next.js web app for production."
  echo "  build-cli    - Builds the @npui/cli package."
  echo "  publish-cli  - Builds and publishes the @npui/cli package to npm."
  echo "                 (Requires npm login and version bump in packages/cli/package.json)"
  echo "  help         - Displays this help message."
  echo ""
  echo "Example: cd apps/web && ./scripts/dev-ops.sh dev-web"
  echo ""
}

# Main script logic
case "$1" in
  dev-web)
    run_web_app
    ;;
  build-web)
    build_web_app
    ;;
  build-cli)
    build_cli
    ;;
  publish-cli)
    publish_cli
    ;;
  help)
    display_help
    ;;
  *)
    echo "Invalid command: $1"
    display_help
    exit 1
    ;;
esac
