FROM registry.gitlab.com/codeviper18/docker-express-fresco:1.0

WORKDIR /home/node/app

COPY . .
EXPOSE 8080

CMD ["node", "server.js"]

