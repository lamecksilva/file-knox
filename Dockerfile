FROM node:11-alpine

WORKDIR /usr/src/node-app/

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 9000