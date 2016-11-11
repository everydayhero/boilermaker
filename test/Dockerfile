FROM node:6.2.2
MAINTAINER EverydayHero "edh-dev@everydayhero.com.au"

RUN apt-get update && apt-get install -y dumb-init

ENV HOME /code
RUN mkdir -p $HOME
COPY package.json $HOME
WORKDIR $HOME

RUN npm install
COPY . $HOME
RUN npm run build

ENV NODE_ENV=production
ENV PORT=

EXPOSE 
