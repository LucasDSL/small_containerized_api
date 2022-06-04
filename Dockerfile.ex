FROM node:14

WORKDIR /scapi

COPY package.json package-lock.json ./

RUN npm install 

COPY . .

CMD npm start 