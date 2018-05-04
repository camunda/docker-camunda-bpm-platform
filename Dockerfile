FROM alpine as builder

ARG VERSION=7.8.0
ARG DISTRO=tomcat
ARG SNAPSHOT=false

ARG EE=false
ARG USER
ARG PASSWORD

RUN apk add --no-cache \
        ca-certificates \
        tar \
        wget \
		xmlstarlet

COPY download.sh camunda-tomcat.sh camunda-wildfly.sh modules/ /tmp/

RUN /tmp/download.sh


##### FINAL IMAGE #####

FROM openjdk:8-jre-alpine

ENV TZ=UTC

EXPOSE 8080

WORKDIR /camunda
COPY --from=builder /camunda .

RUN apk add --no-cache \
        bash \
        ca-certificates \
        tzdata \
        xmlstarlet

CMD ["./camunda.sh"]
