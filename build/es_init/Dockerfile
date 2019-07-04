FROM alpine:latest

ENV HTTP_PROXY "http://135.245.48.34:8000" 
ENV HTTPS_PROXY "http://135.245.48.34:8000" 

RUN apk --update add curl openssl
RUN apk add jq
WORKDIR /code

COPY . .
RUN chmod +x entry.sh healthcheck.sh

# Healthcheck. Copied from
# https://github.com/docker-library/healthcheck/blob/master/elasticsearch/Dockerfile
# Reference: https://docs.docker.com/engine/reference/builder/#/healthcheck
HEALTHCHECK CMD /code/healthcheck.sh

CMD /code/entry.sh
