FROM node:15-slim as compiler

COPY / ./
RUN yarn --frozen-lockfile --non-interactive install \
    && yarn cache clean
RUN yarn build \
    && yarn test

FROM node:15-slim as app
COPY package.json yarn.lock ./
COPY --from=compiler dist ./

RUN yarn --production --frozen-lockfile --non-interactive install \
    && yarn cache clean

ENTRYPOINT ["node", "/main.js"]
