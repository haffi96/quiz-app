# Quiz App
Live Site: https://quiz-app-mocha-eight.vercel.app/

## Env Vars
Create a .env.local file at root of project and add
PB_API=pocketbase-connection-url/api
PB_URL=pocketbase-connection-url
PB_EMAIL=admin@email.com
PB_PASSWORD=password

## Scripts
### Get auto generated pocketbase types
Add env vars as above 

From project root folder run
`chmod +x scripts/updatePocketBaseTypes.sh`

Run
`npm run get-pocket-base-types`

## Run dev server

First create .env.local file and add PB_API='pocketbase-connection-url'

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Pocketbase
### Deployed on fly.io:
Pocketbase admin: https://pocketbase-url/_/

Login with admin creds

Check status via flyctl, from ./deploy (where fly.toml is):
https://github.com/pocketbase/pocketbase/discussions/537

```sh
flyctl status
```
