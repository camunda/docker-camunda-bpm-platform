FROM ubuntu:14.04.1

ENV VERSION 7.3.0-alpha1
ENV DISTRO tomcat
ENV SERVER apache-tomcat-7.0.50
ENV LIB_DIR /camunda/lib/
ENV SERVER_CONFIG /camunda/conf/server.xml
ENV NEXUS https://app.camunda.com/nexus/content/groups/public/

# install oracle java
RUN echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" > /etc/apt/sources.list.d/oracle-jdk.list && \
    apt-key adv --recv-keys --keyserver keyserver.ubuntu.com EEA14886 && \
    echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
    apt-get update && \
    apt-get -y install --no-install-recommends oracle-java8-installer xmlstarlet ca-certificates && \
    apt-get clean && \
    rm -rf /var/cache/* /var/lib/apt/lists/*

# add camunda distro
ADD ${NEXUS}/org/camunda/bpm/${DISTRO}/camunda-bpm-${DISTRO}/${VERSION}/camunda-bpm-${DISTRO}-${VERSION}.tar.gz /tmp/camunda-bpm-platform.tar.gz

# unpack camunda distro
WORKDIR /camunda
RUN tar xzf /tmp/camunda-bpm-platform.tar.gz -C /camunda/ server/${SERVER} --strip 2

# add scripts
ADD bin/* /usr/local/bin/

# add database drivers
RUN /usr/local/bin/download-database-drivers.sh https://raw.githubusercontent.com/camunda/camunda-bpm-platform/${VERSION}/parent/pom.xml

EXPOSE 8080

CMD ["/usr/local/bin/configure-and-run.sh"]
