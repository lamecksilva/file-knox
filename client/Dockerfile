FROM node:11-stretch-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --quiet

COPY . . 

EXPOSE 3000