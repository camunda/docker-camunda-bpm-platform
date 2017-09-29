FROM ubuntu:latest

ENV VERSION 7.8.0-alpha4
ENV DISTRO tomcat
ENV SERVER apache-tomcat-8.0.24
ENV LIB_DIR /camunda/lib/
ENV SERVER_CONFIG /camunda/conf/server.xml
ENV NEXUS https://app.camunda.com/nexus/service/local/artifact/maven/redirect

WORKDIR /camunda

# install oracle java and generate locale
RUN echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" > /etc/apt/sources.list.d/oracle-jdk.list && \
    apt-key adv --recv-keys --keyserver keyserver.ubuntu.com EEA14886 && \
    echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
    apt-get update && \
    apt-get -y install --no-install-recommends oracle-java8-installer xmlstarlet ca-certificates locales && \
    locale-gen en_US.UTF-8 && \
    apt-get clean && \
    rm -rf /var/cache/* /var/lib/apt/lists/*

# set language to englisch
ENV LANG en_US.UTF-8

# add camunda distro
RUN wget -O - "${NEXUS}?r=public&g=org.camunda.bpm.${DISTRO}&a=camunda-bpm-${DISTRO}&v=${VERSION}&p=tar.gz" | \
    tar xzf - -C /camunda/ server/${SERVER} --strip 2

# add scripts
ADD bin/* /usr/local/bin/

# add database drivers
RUN /usr/local/bin/download-database-drivers.sh "${NEXUS}?r=public&g=org.camunda.bpm&a=camunda-database-settings&v=${VERSION}&p=pom"

EXPOSE 8080

CMD ["/usr/local/bin/configure-and-run.sh"]
