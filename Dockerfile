FROM node:14-alpine

# Install python to compile packages
RUN apk add --no-cache python make g++

RUN npm i -g npm@latest

RUN mkdir -p /opt/app/
WORKDIR /opt/app/

COPY . .

RUN npm install

EXPOSE ${SERVER_PORT}

CMD npm run migrate:up && npm start
