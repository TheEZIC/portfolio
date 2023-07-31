FROM node:alpine

WORKDIR /usr/backend

COPY ../../backend/package*.json ./

RUN yarn install

COPY ../../backend ./

EXPOSE 8080

CMD yarn build && yarn start:prod
