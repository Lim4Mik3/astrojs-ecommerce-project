#!/bin/bash

if [[ "$VERCEL_ENV" == "production" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - BUILD CANCELLED - This build will not be proceed because only productions and staging are supported"
  exit 0;
fi