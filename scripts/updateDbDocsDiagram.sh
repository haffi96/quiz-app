#!/bin/sh
export $(grep -v '^#' .env.local | xargs)


pg_dump -s -t answers -t questions -t question_sets > schema.sql

awk '!/POLICY/' schema.sql > new_schema.sql && mv new_schema.sql schema.sql
awk '!/GRANT/' schema.sql > new_schema.sql && mv new_schema.sql schema.sql
awk '!/SET/' schema.sql > new_schema.sql && mv new_schema.sql schema.sql
awk '!/pg_catalog/' schema.sql > new_schema.sql && mv new_schema.sql schema.sql
sed -i schema.sql 's/CREATE TABLE public./CREATE TABLE /g' schema.sql
sed -i schema.sql 's/public.//g' schema.sql

sql2dbml --postgres schema.sql -o docs/schema.dbml


dbdocs build docs/schema.dbml --project quizapp-dbdocs