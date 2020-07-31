FROM mhart/apline-node:12.18.3 AS build-env
ADD . /chator-client

WORKDIR /chator-client

RUN yarn install --frozen-lockfile
RUN yarn build
ADD dist /chator-client-build-files

FROM nginx:alpine
COPY --from=build-env /chator-client-build-files /usr/share/nginx/html

