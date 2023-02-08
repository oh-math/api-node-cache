FROM node:alpine

WORKDIR /api-node-cache


COPY package*.json ./

RUN npm install \
    npx prisma migrate \
    npm run build

COPY . .

EXPOSE 3000

CMD ["npm run", "start"]