FROM node:latest

WORKDIR /Users/I741614/Learn/btp/nodejs-tutorials/04/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8005 

CMD [ "npm", "start" ]
