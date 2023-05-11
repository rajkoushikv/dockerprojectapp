FROM node:14-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]