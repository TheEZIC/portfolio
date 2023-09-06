FROM node:alpine

WORKDIR /usr/backend

RUN chmod -R 755 ./

COPY ../../backend/package*.json ./
COPY ../../backend/yarn.lock ./

RUN yarn install

COPY ../../backend ./
COPY ../../backend/dist ./
COPY ../../backend/src ./

EXPOSE 80

CMD yarn run start:dev
