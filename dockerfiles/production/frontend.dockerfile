FROM node:alpine

WORKDIR /usr/frontend

COPY ../../frontend/package*.json ./
COPY ../../frontend/yarn.lock ./

RUN yarn install

ENV DEV false

COPY ../../frontend ./

EXPOSE 3000

CMD yarn run build && yarn run start
