# Why this repo exists?
I developed this API using express for learning purposes of the express framework and node-cache lib

## Techs
- TypeScript
- Express
- Prisma
- node-cache for caching

### Run locally

First of all, rename the `.env.example` file to only `.env`

`1. Install project dependencies`
    
    npm install

`2. Build project`

    npm run build

`3. Create docker container`

    docker-compose up

`4. Create migration`
  
    npx prisma migrate dev --name init

`5. Run project`

    npm run start