FROM node:lts

WORKDIR /usr/src/api

COPY package.json /usr/src/api
RUN npm install --quiet

COPY . /usr/src/api

EXPOSE 3005

CMD ["node", "server.js"]