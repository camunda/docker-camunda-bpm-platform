FROM openjdk:8u151-jre-alpine3.7 as builder

ARG VERSION=7.10.0
ARG DISTRO=tomcat
ARG SNAPSHOT=true

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

FROM openjdk:8u151-jre-alpine3.7

ENV DB_DRIVER=org.h2.Driver
ENV DB_URL=jdbc:h2:./camunda-h2-dbs/process-engine;MVCC=TRUE;TRACE_LEVEL_FILE=0;DB_CLOSE_ON_EXIT=FALSE
ENV DB_USERNAME=sa
ENV DB_PASSWORD=sa
ENV SKIP_DB_CONFIG=
ENV TZ=UTC

EXPOSE 8080

RUN apk add --no-cache \
        bash \
        ca-certificates \
        tzdata \
        tini \
        xmlstarlet

RUN addgroup -g 1000 -S camunda && \
    adduser -u 1000 -S camunda -G camunda -h /camunda -s /bin/bash -D camunda
WORKDIR /camunda
USER camunda

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["./camunda.sh"]

COPY --chown=camunda:camunda --from=builder /camunda .
