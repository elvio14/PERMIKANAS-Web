# File: skip-build-if-not-main.sh
#!/bin/bash

# Exit with status 0 to skip the build
# Exit with status 1 to proceed with the build
if [ "$VERCEL_GIT_BRANCH" != "main" ]; then
  echo "Not main branch — skipping build"
  exit 0
else
  echo "Main branch — proceeding with build"
  exit 1
fi