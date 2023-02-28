FROM node:16.17.0-bullseye-slim AS base

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

FROM base AS build

ENV NODE_ENV=production
RUN yarn install --production && yarn cache clean
COPY . .
RUN yarn build

FROM nginx:1.21.1-alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
