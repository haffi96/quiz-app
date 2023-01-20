# Quiz App
Live Site: https://quiz-app-mocha-eight.vercel.app/

## Run dev server

First create .env.local file and add supabase env vars (see below)

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## Env Vars
Create a .env.local file at root of project and add value

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_ACCESS_TOKEN=
```

## Scripts
### Get auto generated supabase types
Setup supabase CLI: https://supabase.com/docs/reference/cli/usage

Make sure SUPABASE_ACCESS_TOKEN is in .env.local, might need to create a new personal one on supabase dashboard

While on dashboard, click on your account (bottom left) -> account prefs -> access_token -> generate new

TLDR:
```
brew install supabase/tap/supabase
supabase login

Cheeck if supabase project linked to cli:

supabase projects list

If not,

supabase link --project-ref {get_supabase_password_from_dashboard}
```

From project root folder run
`chmod +x scripts/updateSupabaseTypes.sh`

Run
supabase gen types typescript --linked  > lib/database.types.ts

## Users

Now using auth, so create a new test user. But use an email which you can verify with

current test user:

email: haffimazhar96@gmail.com
for password, ask me

