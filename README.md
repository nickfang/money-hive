# Money Hive

[Project Board](https://github.com/users/nickfang/projects/2/views/1)

---

# Development

## Setup

- Install Vercel
  ```bash
  npm i -g vercel@latest
  ```

- Get Environment Variables
  ```bash
  vercel env pull .env.development.local
  ```

- Install packages
  ```bash
  npm install
  ```

- Install Docker Desktop<br>
  - [Download Docker Desktop](https://www.docker.com/get-started/)<br>
  - Follow the install instruction

- Run local postgres server<br>
  ```
  docker compose -f local build
  docker compose -f local up
  ```


- Run dev server
  ```bash
  npm run dev
  ```


## Prisma

While developing, we can use `npx prisma db push`.  Once we start putting more than just test data in, start using migrations so the data won't be erased each time we push.  We can also update `/prisma/seed.js` to see test data.

### Migrations

To change the database, you need to update the schema and then create a migration.
- Update `/prisma/schema.prisma`
- Create migration
  ```
  npx prisma migrate --name <migration name>
  ```

### Notes

[Type mappings for Postgres](https://www.prisma.io/docs/concepts/database-connectors/postgresql#native-type-mappings)



---

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Architecture

[Jamboard](https://jamboard.google.com/d/173lZpiHtC86uy6dyaVXCfLQ5CiuHL8d1ZFawKiDpwaM/viewer?hl=en&pli=1&mtt=medn7qi04iqt&f=0) for frontend flow

