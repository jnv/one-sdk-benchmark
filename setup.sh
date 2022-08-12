#!/bin/sh

npx --yes doctor

pushd v1
npm install
popd

pushd v2
npm install
popd