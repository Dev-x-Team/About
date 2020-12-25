FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=7500

EXPOSE 7500

CMD [ "npm", "start" ]