FROM node:alpine

WORKDIR /usr/frontend

COPY ../../frontend/package*.json ./
COPY ../../frontend/yarn.lock ./

RUN yarn install

ENV DEV true

COPY ../../frontend ./

EXPOSE 3000

CMD yarn run dev
