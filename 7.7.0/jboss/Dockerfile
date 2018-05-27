FROM ubuntu:latest

ENV VERSION 7.7.0
ENV DISTRO jboss
ENV SERVER jboss-as-7.2.0.Final
ENV LIB_DIR /camunda/modules
ENV SERVER_CONFIG /camunda/standalone/configuration/standalone.xml
ENV PREPEND_JAVA_OPTS -Djboss.bind.address=0.0.0.0 -Djboss.bind.address.management=0.0.0.0
ENV NEXUS https://app.camunda.com/nexus/service/local/artifact/maven/redirect
ENV LAUNCH_JBOSS_IN_BACKGROUND TRUE

WORKDIR /camunda

# install oracle java and generate locale
RUN echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" > /etc/apt/sources.list.d/oracle-jdk.list && \
    apt-key adv --recv-keys --keyserver keyserver.ubuntu.com EEA14886 && \
    echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
    apt-get update && \
    apt-get -y install --no-install-recommends ca-certificates wget && \
    # hack to get jdk7 installer working again: https://stackoverflow.com/a/44151028
    mkdir -p /var/cache/oracle-jdk7-installer && \
    wget -O /var/cache/oracle-jdk7-installer/jdk-7u80-linux-x64.tar.gz https://ftp.osuosl.org/pub/funtoo/distfiles/oracle-java/jdk-7u80-linux-x64.tar.gz && \
    echo 'a772878f740e87835bafc82841e8f4c1dfbe8bc79e072d3f6c5c74d3a206eb9001a53b474d91a22819c7c0d6407ed88993635c39738779c2b08c22c7a1c2e9e9 /var/cache/oracle-jdk7-installer/jdk-7u80-linux-x64.tar.gz' | sha512sum -c && \
    apt-get -y install --no-install-recommends oracle-java7-installer xmlstarlet locales && \
    locale-gen en_US.UTF-8 && \
    apt-get clean && \
    rm -rf /var/cache/* /var/lib/apt/lists/*

# set language to englisch
ENV LANG en_US.UTF-8

# add camunda distro
RUN wget -O - "${NEXUS}?r=public&g=org.camunda.bpm.${DISTRO}&a=camunda-bpm-${DISTRO}&v=${VERSION}&p=tar.gz" | \
    tar xzf - -C /camunda/ server/${SERVER} --strip 2

# add jboss modules
COPY modules/ /camunda/modules/

# add scripts
ADD bin/* /usr/local/bin/

# add database drivers
RUN /usr/local/bin/download-database-drivers.sh "${NEXUS}?r=public&g=org.camunda.bpm&a=camunda-database-settings&v=${VERSION}&p=pom"

EXPOSE 8080

CMD ["/usr/local/bin/configure-and-run.sh"]
