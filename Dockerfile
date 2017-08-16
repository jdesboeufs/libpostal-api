FROM node:8-stretch

RUN apt-get install -y curl autoconf automake libtool pkg-config

RUN mkdir -p /opt/libpostal \
    && mkdir -p /opt/libpostal-data \
    && git clone https://github.com/openvenues/libpostal /opt/libpostal \
    && cd /opt/libpostal \
    && ./bootstrap.sh \
    && ./configure --datadir=/opt/libpostal-data \
    && make \
    && make install \
    && ldconfig

WORKDIR /app

COPY package.json .
RUN npm install --production
COPY . .

ENV NODE_ENV=production

EXPOSE 3000
CMD [ "npm", "start" ]
