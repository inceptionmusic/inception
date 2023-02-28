FROM node:16.17.0-bullseye-slim as base

ENV PATH /app/node_modules/.bin:$PATH

USER node
WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN yarn config set network-timeout 600000 -g

FROM base AS development

ENV NODE_ENV=development
RUN yarn install && yarn cache clean
COPY . .

CMD ["yarn", "dev"]

FROM base AS production

ENV NODE_ENV=production
RUN yarn install --production && yarn cache clean
COPY . .
RUN yarn build

CMD ["node", "dist/index.js"]
