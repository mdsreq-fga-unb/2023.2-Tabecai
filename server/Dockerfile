FROM node:20.9.0

WORKDIR /usr/app

COPY package.json ./ 
COPY ./.docker/entrypoint.sh /entrypoint.sh

COPY . .

RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]