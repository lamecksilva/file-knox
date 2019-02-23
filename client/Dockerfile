FROM node:11-stretch-slim

WORKDIR /usr/src/web-app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000