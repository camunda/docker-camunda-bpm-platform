FROM openjdk:8u212-jre-alpine3.9 as builder

ARG VERSION=7.10.0
ARG DISTRO=tomcat
ARG SNAPSHOT=false

ARG EE=false
ARG USER
ARG PASSWORD

RUN apk add --no-cache \
        ca-certificates \
        maven \
        tar \
        wget \
        xmlstarlet

COPY settings.xml download.sh camunda-tomcat.sh camunda-wildfly.sh  /tmp/

RUN /tmp/download.sh


##### FINAL IMAGE #####

FROM openjdk:8u212-jre-alpine3.9

ARG VERSION=7.10.0

ENV CAMUNDA_VERSION=${VERSION}
ENV DB_DRIVER=org.h2.Driver
ENV DB_URL=jdbc:h2:./camunda-h2-dbs/process-engine;MVCC=TRUE;TRACE_LEVEL_FILE=0;DB_CLOSE_ON_EXIT=FALSE
ENV DB_USERNAME=sa
ENV DB_PASSWORD=sa
ENV DB_CONN_MAXACTIVE=20
ENV DB_CONN_MINIDLE=5
ENV DB_CONN_MAXIDLE=20
ENV SKIP_DB_CONFIG=
ENV WAIT_FOR=
ENV WAIT_FOR_TIMEOUT=30
ENV TZ=UTC
ENV DEBUG=false
ENV JAVA_OPTS="-Xmx768m -XX:MaxMetaspaceSize=256m"

EXPOSE 8080 8000

RUN apk add --no-cache \
        bash \
        ca-certificates \
        tzdata \
        tini \
        xmlstarlet \
    && wget -O /usr/local/bin/wait-for-it.sh \
      "https://raw.githubusercontent.com/vishnubob/wait-for-it/db049716e42767d39961e95dd9696103dca813f1/wait-for-it.sh" \
    && chmod +x /usr/local/bin/wait-for-it.sh

RUN addgroup -g 1000 -S camunda && \
    adduser -u 1000 -S camunda -G camunda -h /camunda -s /bin/bash -D camunda
WORKDIR /camunda
USER camunda

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["./camunda.sh"]

COPY --chown=camunda:camunda --from=builder /camunda .
