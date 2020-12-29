FROM node:12.16.1-alpine3.9
COPY ./front /front
WORKDIR /front
RUN npm install
CMD npm start
