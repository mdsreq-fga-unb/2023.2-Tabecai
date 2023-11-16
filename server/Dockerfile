FROM node

WORKDIR /usr/app

COPY package.json ./
COPY ./entrypoint.sh /entrypoint.sh

COPY . .

RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]