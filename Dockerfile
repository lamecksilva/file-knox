FROM node:11-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --quiet

RUN npm install -D nodemon

COPY . . 

EXPOSE 9000