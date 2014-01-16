#!/bin/bash

r.js -o build/config.js

cat src/header.js lego.min.js > /tmp/out && mv /tmp/out lego.min.js
