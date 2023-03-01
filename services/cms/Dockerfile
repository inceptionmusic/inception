FROM node:16.17.0-bullseye-slim as base

ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN yarn config set network-timeout 600000 -g && yarn install
COPY . .

FROM base AS development

ENV NODE_ENV=development
CMD ["yarn", "dev"]

FROM base AS production

ENV NODE_ENV=production
RUN yarn build
CMD ["yarn", "start"]