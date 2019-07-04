FROM alpine:latest

#proxy
ENV HTTP_PROXY "http://135.245.48.34:8000"
ENV HTTPS_PROXY "http://135.245.48.34:8000"
ENV http_proxy http://135.245.48.34:8000
ENV https_proxy http://135.245.48.34:8000


#RUN export http_proxy=$HTTP_PROXY
#RUN export https_proxy=$HTTPS_PROXY
#RUN echo "Acquire::http::proxy \"$HTTP_PROXY\";\nAcquire::https::proxy \"$HTTPS_PROXY\";" > ./apt.conf

RUN apk --update add curl openssl
RUN apk add jq
CMD syslogd && sleep 1 && tail -f /var/log/messages*
