FROM mhart/alpine-node:12.18.3 AS build-env
ADD . /chator-client

WORKDIR /chator-client

RUN yarn install --frozen-lockfile
RUN yarn build

FROM nginx:alpine
COPY --from=build-env /chator-client/dist /usr/share/nginx/html

