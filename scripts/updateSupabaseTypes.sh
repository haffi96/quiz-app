#!/bin/sh
export $(grep -v '^#' .env.local | xargs)

supabase gen types typescript --linked  > lib/database.types.ts