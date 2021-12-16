FROM node:16.0.0

RUN mkdir -p /server
WORKDIR /server

COPY package*.json /server
RUN npm install

COPY . /server

ENV HOST 0.0.0.0
EXPOSE 8080

CMD npm run start
