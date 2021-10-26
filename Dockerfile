FROM node:10.24.1-alpine

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
COPY ./src /app/src
COPY ./public /app/public

RUN rm -rf node_modules

RUN yarn

ENV PATH /app/node_modules/.bin:$PATH

EXPOSE 3000

CMD [ "yarn", "start" ]