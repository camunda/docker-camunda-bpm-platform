# Camunda BPM Platform Docker Images

This Camunda BPM community project provides docker images of the latest Camunda
BPM platform releases. The images can be used to demonstrate and test the
Camunda BPM platform or can be extended with own process applications. It is
planned to provide images on the official [docker registry][] for every upcoming
release, which includes alpha releases.

## Status [![Status][status]][travis]

| Version      | Tomcat                                                     | JBoss                                                    | WildFly                                                      |
| ------------ | ---------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| SNAPSHOT     | [![Tomcat SNAPSHOT][status-tomcat-snapshot]][travis]       | [![JBoss SNAPSHOT][status-jboss-snapshot]][travis]       | [![WildFly SNAPSHOT][status-wildfly-snapshot]][travis]       |
| 7.7.0-alpha1 | [![Tomcat 7.7.0-alpha1][status-tomcat-760-alpha1]][travis] | [![JBoss 7.7.0-alpha1][status-jboss-760-alpha1]][travis] | [![WildFly 7.7.0-alpha1][status-wildfly-760-alpha1]][travis] |
| 7.6.0        | [![Tomcat 7.6.0][status-tomcat-760]][travis]               | [![JBoss 7.6.0][status-jboss-760]][travis]               | [![WildFly 7.6.0][status-wildfly-760]][travis]               |
| 7.5.0        | [![Tomcat 7.5.0][status-tomcat-750]][travis]               | [![JBoss 7.5.0][status-jboss-750]][travis]               | [![WildFly 7.5.0][status-wildfly-750]][travis]               |
| 7.4.0        | [![Tomcat 7.4.0][status-tomcat-740]][travis]               | [![JBoss 7.4.0][status-jboss-740]][travis]               | [![WildFly 7.4.0][status-wildfly-740]][travis]               |
| 7.3.0        | [![Tomcat 7.3.0][status-tomcat-730]][travis]               | [![JBoss 7.3.0][status-jboss-730]][travis]               | [![WildFly 7.3.0][status-wildfly-730]][travis]               |
| 7.2.0        | [![Tomcat 7.2.0][status-tomcat-720]][travis]               | [![JBoss 7.2.0][status-jboss-720]][travis]               | [![WildFly 7.2.0][status-wildfly-720]][travis]               |
| 7.1.0        | [![Tomcat 7.1.0][status-tomcat-710]][travis]               | [![JBoss 7.1.0][status-jboss-710]][travis]               |                                                              |

## Get started

To start the latest release:

```
docker pull camunda/camunda-bpm-platform:latest
docker run -d --name camunda -p 8080:8080 camunda/camunda-bpm-platform:latest
# open browser with url: http://localhost:8080/camunda-welcome/index.html
```

## Supported Tags/Releases

- `tomcat-7.6.0-SNAPSHOT`, `tomcat-SNAPSHOT`, `7.6.0-SNAPSHOT`, `SNAPSHOT` ([Dockerfile][dockerfile-tomcat-snapshot])
- `tomcat-7.7.0-alpha1`, `7.7.0-alpha1`, `tomcat-latest`, `latest` ([Dockerfile][dockerfile-tomcat-760-alpha1])
- `tomcat-7.6.0`, `7.6.0` ([Dockerfile][dockerfile-tomcat-760])
- `tomcat-7.5.0`, `7.5.0` ([Dockerfile][dockerfile-tomcat-750])
- `tomcat-7.4.0`, `7.4.0` ([Dockerfile][dockerfile-tomcat-740])
- `tomcat-7.3.0`, `7.3.0` ([Dockerfile][dockerfile-tomcat-730])
- `tomcat-7.2.0`, `7.2.0` ([Dockerfile][dockerfile-tomcat-720])
- `tomcat-7.1.0`, `7.1.0` ([Dockerfile][dockerfile-tomcat-710])
- `jboss-7.6.0-SNAPSHOT`, `jboss-SNAPSHOT` ([Dockerfile][dockerfile-jboss-snapshot])
- `jboss-7.7.0-alpha1`, `jboss-latest` ([Dockerfile][dockerfile-jboss-760-alpha1])
- `jboss-7.6.0` ([Dockerfile][dockerfile-jboss-760])
- `jboss-7.5.0` ([Dockerfile][dockerfile-jboss-750])
- `jboss-7.4.0` ([Dockerfile][dockerfile-jboss-740])
- `jboss-7.3.0` ([Dockerfile][dockerfile-jboss-730])
- `jboss-7.2.0` ([Dockerfile][dockerfile-jboss-720])
- `jboss-7.1.0` ([Dockerfile][dockerfile-jboss-710])
- `wildfly-7.6.0-SNAPSHOT` `wildfly-SNAPSHOT` ([Dockerfile][dockerfile-wildfly-snapshot])
- `wildfly-7.7.0-alpha1`, `wildfly-latest` ([Dockerfile][dockerfile-wildfly-760-alpha1])
- `wildfly-7.6.0` ([Dockerfile][dockerfile-wildfly-760])
- `wildfly-7.5.0` ([Dockerfile][dockerfile-wildfly-750])
- `wildfly-7.4.0` ([Dockerfile][dockerfile-wildfly-740])
- `wildfly-7.3.0` ([Dockerfile][dockerfile-wildfly-730])
- `wildfly-7.2.0` ([Dockerfile][dockerfile-wildfly-720])

## Java Version

All images have Oracle JDK installed. The tomcat and wildfly image use
JDK 8 and the jboss image uses JDK 7.


## Environment variables

The used database can be configured by providing the following environment
variables:

- `DB_DRIVER` the database driver class name (**Note**: use for jboss and wildfly only
  the database identifier `h2`, `mysql` or `postgresql`)
- `DB_URL` the database jdbc url
- `DB_USERNAME` the database username
- `DB_PASSWORD` the database password
- `SKIP_DB_CONFIG` skips the database configuration

For example to use a postgresql docker image as database you can start the
platform as follows:

```
# start postgresql image with database and user configured
docker run -d --name postgresql ...

docker run -d --name camunda -p 8080:8080 --link postgresql:db \
           -e DB_DRIVER=org.postgresql.Driver \
           -e DB_URL=jdbc:postgresql://db:5432/process-engine \
           -e DB_USERNAME=camunda \
           -e DB_PASSWORD=camunda \
           camunda/camunda-bpm-platform:latest
```

Another option is to save the database config to an environment file, i.e.
`db-env.txt`:

```
DB_DRIVER=org.postgresql.Driver
DB_URL=jdbc:postgresql://db:5432/process-engine
DB_USERNAME=camunda
DB_PASSWORD=camunda
```

and use this file to start the container:

```
docker run -d --name camunda -p 8080:8080 --link postgresql:db \
           --env-file db-env.txt camunda/camunda-bpm-platform:latest
```

The docker image already contains drivers for `h2`, `mysql` and `postgresql`.
If you want to use other databases you have to add the driver to the container.

To skip the configuration of the database by the docker container and use our
own configuration set the environment variable `SKIP_DB_CONFIG` to a non
empty value:

```
docker run -d --name camunda -p 8080:8080 -e SKIP_DB_CONFIG=true \
           camunda/camunda-bpm-platform:latest
```


## Volumes

The Camunda BPM Platform is installed inside the `/camunda` directory. Which
means the tomcat configuration files are inside the `/camunda/conf/` directory
and the deployments on tomcat are in `/camunda/webapps/`. The directory
structure depends on the application server.

## Use Cases


### Change Configuration Files

You can use docker volumes to link your own configuration files inside the
container.  For example if you want to change the `bpm-platform.xml` on tomcat:

```
docker run -d --name camunda -p 8080:8080 \
           -v $PWD/bpm-platform.xml:/camunda/conf/bpm-platform.xml \
           camunda/camunda-bpm-platform:latest

```


### Add Own Process Application

If you want to add an own process application to the docker container also use
volumes. For example if you want to deploy the [twitter demo][] on tomcat:

```
docker run -d --name camunda -p 8080:8080 \
           -v /PATH/TO/DEMO/twitter.war:/camunda/webapps/twitter.war \
           camunda/camunda-bpm-platform:latest
```

This also allows you to modify the app outside of the container and it will
be redeployed inside the platform.


### Clean Distro Without Webapps and Examples

To remove all webapps and examples from the distro and only deploy your
own applications or your own configured cockpit also use volumes. You
only have to overlay the deployment folder of the application server with
a directory on your local machine. So in tomcat you would mount a directory
to `/camunda/webapps/'

```
docker run -d --name camunda -p 8080:8080 \
           -v $PWD/webapps/:/camunda/webapps/ \
           camunda/camunda-bpm-platform:latest
```


### Extend Docker Image

As we release these docker images on the offical [docker registry][] it is
easy to create your own image. This way you can deploy your applications
with docker or provided an own demo image. Just specify in the `FROM`
clause which Camunda image you want to use as a base image:

```
FROM camunda/camunda-bpm-platform:tomcat-latest

ADD my.war /camunda/webapps/my.war
```


### Change timezone

To change the timezone of the docker container you can set the environment variable `TZ`.

```
docker run -d --name camunda -p 8080:8080 \
           -e TZ=Europe/Berlin \
          camunda/camunda-bpm-platform:latest
```

## Maintainer

[Sebastian Menski][]


## License

Apache License, Version 2.0


[Sebastian Menski]: https://github.com/menski
[twitter demo]: https://github.com/camunda/camunda-consulting/tree/master/showcases/twitter
[docker registry]: https://registry.hub.docker.com/u/camunda/camunda-bpm-platform/

[dockerfile-tomcat-710]: https://github.com/camunda/docker-camunda-bpm-platform/blob/tomcat-7.1.0/Dockerfile
[dockerfile-jboss-710]: https://github.com/camunda/docker-camunda-bpm-platform/blob/jboss-7.1.0/Dockerfile
[dockerfile-tomcat-720]: https://github.com/camunda/docker-camunda-bpm-platform/blob/tomcat-7.2.0/Dockerfile
[dockerfile-jboss-720]: https://github.com/camunda/docker-camunda-bpm-platform/blob/jboss-7.2.0/Dockerfile
[dockerfile-wildfly-720]: https://github.com/camunda/docker-camunda-bpm-platform/blob/wildfly-7.2.0/Dockerfile
[dockerfile-tomcat-730]: https://github.com/camunda/docker-camunda-bpm-platform/blob/tomcat-7.3.0/Dockerfile
[dockerfile-jboss-730]: https://github.com/camunda/docker-camunda-bpm-platform/blob/jboss-7.3.0/Dockerfile
[dockerfile-wildfly-730]: https://github.com/camunda/docker-camunda-bpm-platform/blob/wildfly-7.3.0/Dockerfile
[dockerfile-tomcat-740]: https://github.com/camunda/docker-camunda-bpm-platform/blob/tomcat-7.4.0/Dockerfile
[dockerfile-jboss-740]: https://github.com/camunda/docker-camunda-bpm-platform/blob/jboss-7.4.0/Dockerfile
[dockerfile-wildfly-740]: https://github.com/camunda/docker-camunda-bpm-platform/blob/wildfly-7.4.0/Dockerfile
[dockerfile-tomcat-750]: https://github.com/camunda/docker-camunda-bpm-platform/blob/tomcat-7.5.0/Dockerfile
[dockerfile-jboss-750]: https://github.com/camunda/docker-camunda-bpm-platform/blob/jboss-7.5.0/Dockerfile
[dockerfile-wildfly-750]: https://github.com/camunda/docker-camunda-bpm-platform/blob/wildfly-7.5.0/Dockerfile
[dockerfile-tomcat-760]: https://github.com/camunda/docker-camunda-bpm-platform/blob/tomcat-7.6.0/Dockerfile
[dockerfile-jboss-760]: https://github.com/camunda/docker-camunda-bpm-platform/blob/jboss-7.6.0/Dockerfile
[dockerfile-wildfly-760]: https://github.com/camunda/docker-camunda-bpm-platform/blob/wildfly-7.6.0/Dockerfile
[dockerfile-tomcat-760-alpha1]: https://github.com/camunda/docker-camunda-bpm-platform/blob/master/Dockerfile
[dockerfile-jboss-760-alpha1]: https://github.com/camunda/docker-camunda-bpm-platform/blob/jboss-7.7.0-alpha1/Dockerfile
[dockerfile-wildfly-760-alpha1]: https://github.com/camunda/docker-camunda-bpm-platform/blob/wildfly-7.7.0-alpha1/Dockerfile

[dockerfile-tomcat-snapshot]: https://github.com/camunda/docker-camunda-bpm-platform/blob/tomcat-SNAPSHOT/Dockerfile
[dockerfile-jboss-snapshot]: https://github.com/camunda/docker-camunda-bpm-platform/blob/jboss-SNAPSHOT/Dockerfile
[dockerfile-wildfly-snapshot]: https://github.com/camunda/docker-camunda-bpm-platform/blob/wildfly-SNAPSHOT/Dockerfile

[travis]: https://travis-ci.org/camunda/docker-camunda-bpm-platform

[status]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=master
[status-tomcat-710]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=tomcat-7.1.0
[status-jboss-710]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=jboss-7.1.0
[status-tomcat-720]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=tomcat-7.2.0
[status-jboss-720]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=jboss-7.2.0
[status-wildfly-720]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=wildfly-7.2.0
[status-tomcat-730]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=tomcat-7.3.0
[status-jboss-730]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=jboss-7.3.0
[status-wildfly-730]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=wildfly-7.3.0
[status-tomcat-740]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=tomcat-7.4.0
[status-jboss-740]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=jboss-7.4.0
[status-wildfly-740]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=wildfly-7.4.0
[status-tomcat-750]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=tomcat-7.5.0
[status-jboss-750]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=jboss-7.5.0
[status-wildfly-750]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=wildfly-7.5.0
[status-tomcat-760]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=tomcat-7.6.0
[status-jboss-760]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=jboss-7.6.0
[status-wildfly-760]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=wildfly-7.6.0
[status-tomcat-760-alpha1]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=master
[status-jboss-760-alpha1]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=jboss-7.7.0-alpha1
[status-wildfly-760-alpha1]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=wildfly-7.7.0-alpha1


[status-tomcat-snapshot]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=tomcat-SNAPSHOT
[status-jboss-snapshot]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=jboss-SNAPSHOT
[status-wildfly-snapshot]: https://travis-ci.org/camunda/docker-camunda-bpm-platform.svg?branch=wildfly-SNAPSHOT
