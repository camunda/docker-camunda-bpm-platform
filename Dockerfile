FROM openjdk:8-jre-alpine as builder

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

COPY download.sh camunda-tomcat.sh camunda-wildfly.sh  /tmp/

RUN /tmp/download.sh


##### FINAL IMAGE #####

FROM openjdk:8-jre-alpine

ENV DB_DRIVER=org.h2.Driver
ENV DB_URL=jdbc:h2:./camunda-h2-dbs/process-engine;MVCC=TRUE;TRACE_LEVEL_FILE=0;DB_CLOSE_ON_EXIT=FALSE
ENV DB_USERNAME=sa
ENV DB_PASSWORD=sa
ENV SKIP_DB_CONFIG=
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
