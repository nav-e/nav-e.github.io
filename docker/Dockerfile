FROM ubuntu

RUN apt-get update && apt-get -y install \
  python-pip \
  npm \
  nodejs \
  libpng12-0

RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install -g gatsby
