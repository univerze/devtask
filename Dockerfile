FROM node:carbon-alpine

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 3000
