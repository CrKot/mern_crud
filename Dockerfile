FROM node:16.0.0

WORKDIR ./

COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000
CMD npm run start

