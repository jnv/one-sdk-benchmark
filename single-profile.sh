#!/bin/sh

MAX_OLD_SPACE=128
SCRIPT=sdk-single-profile.js

echo "Running v1 warm up"
pushd v1
node $SCRIPT
echo "Running v1 with profiler"
npx -y clinic doctor -- node --max-old-space-size=$MAX_OLD_SPACE $SCRIPT
popd

echo "Running v2 warm up"
pushd v2
node $SCRIPT
echo "Running v2 with profiler"
npx -y clinic doctor -- node --max-old-space-size=$MAX_OLD_SPACE $SCRIPT
popd
