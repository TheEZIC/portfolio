FROM node:alpine

WORKDIR /usr/backend

COPY ../../backend/package*.json ./
COPY ../../backend/yarn.lock ./

RUN yarn install

COPY ../../backend ./

EXPOSE 80

CMD yarn run build && yarn run migration:run && yarn run start:prod
