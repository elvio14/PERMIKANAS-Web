#!/bin/bash

echo "VERCEL_GIT_BRANCH is: '$VERCEL_GIT_BRANCH'"

# If it's main, or if VERCEL_GIT_BRANCH is empty (manual deploy), proceed
if [ "$VERCEL_GIT_BRANCH" = "main" ] || [ -z "$VERCEL_GIT_BRANCH" ]; then
  echo "Proceeding with build"
  exit 1  # Non-zero = DON'T skip build
else
  echo "Skipping build because not on main"
  exit 0  # Zero = SKIP build
fi