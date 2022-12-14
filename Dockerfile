FROM node:16
WORKDIR /user/src/app

COPY package*.json ./
RUN npm install

COPY . .
# RUN npm run build

EXPOSE 4000
CMD npm run production


