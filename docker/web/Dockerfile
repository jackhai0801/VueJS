# Node.jsをインストール
FROM node:16-alpine

# docker-compose.ymlに合わせておく
WORKDIR /var/www
COPY ./package.json /var/www/
RUN apk update && \
    npm install && \
    npm install -g npm && \
    npm install -g vue-cli
