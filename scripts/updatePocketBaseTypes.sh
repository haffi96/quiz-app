#!/bin/sh
export $(grep -v '^#' .env.local | xargs)

npx pocketbase-typegen --url $URL --email $EMAIL --password $PASSWORD