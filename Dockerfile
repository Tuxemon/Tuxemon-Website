FROM node:15-alpine3.13

LABEL org.opencontainers.image.title="Tuxemon Website"
LABEL org.opencontainers.image.description="Tuxemon website container"
LABEL org.opencontainers.image.vendor="Tuxemon"
LABEL org.opencontainers.image.url="https://www.tuxemon.org"
LABEL org.opencontainers.image.source="https://github.com/Tuxemon/Tuxemon-Website"

COPY tuxemon /tuxemon
RUN cd /tuxemon && npm install
WORKDIR /tuxemon

ENTRYPOINT ["node", "./bin/www"]
