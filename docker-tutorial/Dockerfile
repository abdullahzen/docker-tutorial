# FROM debian
FROM alpine

RUN mkdir /abdulla /persistent

# RUN apt-get update && apt-get install -y curl bash

RUN apk add curl bash

WORKDIR /abdulla

COPY entrypoint.sh /abdulla/

RUN chmod +x /abdulla/entrypoint.sh

ENTRYPOINT [ "/abdulla/entrypoint.sh" ]

