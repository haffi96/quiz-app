#!/bin/sh
export $(grep -v '^#' .env.local | xargs)

npx pocketbase-typegen --url $PB_URL --email $PB_EMAIL --password $PB_PASSWORD