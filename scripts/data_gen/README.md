Install python3.11

from /data_gen

Replace DB_CONNECTION_URI value with supabase database url

```sh
python -m venv .venv
pip install psycopg2-binary
```

Then run:
```sh
DB_CONNECTION_URI="postgresql://postgres:pass@localhost:5555/postgres" python 