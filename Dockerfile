FROM node:latest
RUN npm i -g yarn
RUN mkdir /code
WORKDIR /code
COPY code/yarn.lock /code/
COPY code/package.json /code/
RUN yarn
