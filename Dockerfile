FROM node:16-slim as compiler

COPY / ./
RUN yarn --frozen-lockfile --non-interactive install \
    && yarn cache clean
RUN yarn build

FROM node:16-slim as app

RUN mkdir /app

COPY package.json yarn.lock /app/
COPY --from=compiler dist /app/

WORKDIR /app

RUN yarn --production --frozen-lockfile --non-interactive install \
    && yarn cache clean

ENTRYPOINT ["node", "/app/main.js"]
