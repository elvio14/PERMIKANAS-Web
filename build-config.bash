#!/bin/bash

echo "Branch is: $VERCEL_GIT_BRANCH"

if [ "$VERCEL_GIT_BRANCH" = "main" ]; then
  echo "On main — proceeding with build"
  exit 1  # Exit with non-zero to run the build
else
  echo "Not main — skipping build"
  exit 0  # Exit 0 to skip
fi