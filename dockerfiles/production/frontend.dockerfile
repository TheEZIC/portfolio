FROM node:alpine

WORKDIR /usr/frontend

COPY ../../frontend/package*.json ./

RUN yarn start

ENV BUILD_STANDALONE true

COPY ../../frontend ./

EXPOSE 3000

CMD yarn run build && yarn run start
