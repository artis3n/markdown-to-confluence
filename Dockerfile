FROM node:15-slim as compiler

COPY / ./
RUN yarn install --frozen-lockfile
RUN yarn build \
    && yarn test

FROM node:15-slim as app
COPY package.json yarn.lock ./
COPY --from=compiler dist ./

RUN yarn install --production --frozen-lockfile

ENTRYPOINT ["node", "/main.js"]
