# Camunda BPM Platform Docker Images

This Camunda BPM community project provides docker images of the latest Camunda
BPM platform releases. The images can be used to demonstrate and test the
Camunda BPM platform or can be extended with own process applications. It is
planned to provide images on the official [docker registry][] for every upcoming
release, which includes alpha releases.

## Get started

To start the latest release:

```
docker pull camunda/camunda-bpm-platform:latest
docker run -d --name camunda -p 8080:8080 camunda/camunda-bpm-platform:latest
```

### Tasklist, Cockpit, Admin Web Apps

The three Camunda webapps are accessible through the landing page: http://localhost:8080/camunda-welcome/index.html

The default credentials for admin access to the webapps is:

- Username: `demo`
- Password: `demo`

### Rest-API

The Camunda Rest-API is accessible through: http://localhost:8080/engine-rest

See the [Rest-API](https://docs.camunda.org/manual/latest/reference/rest/)
documentation for more details on how to use it.

**Note**: The Rest-API does not require authentication by default. Please
follow the instructions from the [documentation](https://docs.camunda.org/manual/latest/reference/rest/overview/authentication/)
to enable authentication for the Rest-API.


## Supported Tags/Releases

The following tag schema is used. The user has the choice between different
application server distributions of Camunda BPM platform. `${DISTRO}` can
either be `tomcat` or `wildfly`. If no `${DISTRO}` is specified the
`tomcat` distribution is used.

- `latest`, `${DISTRO}-latest`: Alywas the latest minor release of Camunda BPM
  platform. Without
- `SNAPSHOT`, `${VERSION}-SNAPSHOT`, `${DISTRO}-SNAPSHOT`,
  `${DISTRO}-${VERSION}-SNAPSHOT`: The latest SNAPSHOT version of Camunda BPM
  platform, which is not released yet.
- `${VERSION}`, `${DISTRO}-${VERSION}`: A specific version of Camunda BPM
  platform.

For all available tags see the [docker hub tags][].

## Java Version

All images use OpenJDK 8 in an alpine image.

### Java Options

To override the default Java options the environment variable `JAVA_OPTS` can
be set. The default value is set to limit the heap size to 768 MB and the
metaspace size to 256 MB.

```
JAVA_OPTS="-Xmx768m -XX:MaxMetaspaceSize=256m"
```

### Use docker memory limits

Instead of specifying the Java memory settings it is also possible to instruct
the JVM to respect the docker memory settings. As the image uses Java 8 it has
to be enabled using the `JAVA_OPTS` environment variable. Using the following
settings the JVM will respect docker memory limits specified during startup.

```
JAVA_OPTS="-XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap"
```

## Database environment variables

The used database can be configured by providing the following environment
variables:

- `DB_CONN_MAXACTIVE` the maximum number of active connections (default:
  `20`)
- `DB_CONN_MAXIDLE` the maximum number of idle connections (default: `20`
  - ignored when app server = `wildfly`)
- `DB_CONN_MINIDLE` the minimum number of idle connections (default: `5`)
- `DB_DRIVER` the database driver class name, supported are h2, mysql and
  postgresql:
  - h2: `DB_DRIVER=org.h2.Driver`
  - mysql: `DB_DRIVER=com.mysql.jdbc.Driver`
  - postgresql: `DB_DRIVER=org.postgresql.Driver`
- `DB_URL` the database jdbc url
- `DB_USERNAME` the database username
- `DB_PASSWORD` the database password
- `SKIP_DB_CONFIG` skips the automated database configuration to use manual
  configuration
- `WAIT_FOR` wait for a `host:port` to be available over TCP before starting
- `WAIT_FOR_TIMEOUT` how long to wait for the service to be avaiable - defaults to 30 seconds

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
           -e WAIT_FOR=db:5432 \
           camunda/camunda-bpm-platform:latest
```

Another option is to save the database config to an environment file, i.e.
`db-env.txt`:

```
DB_DRIVER=org.postgresql.Driver
DB_URL=jdbc:postgresql://db:5432/process-engine
DB_USERNAME=camunda
DB_PASSWORD=camunda
WAIT_FOR=db:5432
```

and use this file to start the container:

```
docker run -d --name camunda -p 8080:8080 --link postgresql:db \
           --env-file db-env.txt camunda/camunda-bpm-platform:latest
```

The docker image already contains drivers for `h2`, `mysql` and `postgresql`.
If you want to use other databases you have to add the driver to the container
and configure the database settings manually by linking the configuration file
into the container.

To skip the configuration of the database by the docker container and use your
own configuration set the environment variable `SKIP_DB_CONFIG` to a non
empty value:

```
docker run -d --name camunda -p 8080:8080 -e SKIP_DB_CONFIG=true \
           camunda/camunda-bpm-platform:latest
```

## Waiting for database

Starting the Camunda BPM Docker image requires the database to be already available.
This is quite a challenge when the database and the Camunda BPM are both docker containers spawned simualtenously eg. by `docker-compose` or inside a Kubernetes Pod.
To help with that, the Camunda BPM Docker image includes [wait-for-it.sh](https://github.com/vishnubob/wait-for-it) to allow the container to wait until a 'host:port' is ready.
The mechanism can be configured by two environment variables:

- `WAIT_FOR`: the service `host:port` to wait for
- `WAIT_FOR_TIMEOUT`: how long to wait for the service to be available in seconds

Example with a PostgreSQL container
```
docker run -d --name postgresql ...

docker run -d --name camunda -p 8080:8080 --link postgresql:db \
           -e DB_DRIVER=org.postgresql.Driver \
           -e DB_URL=jdbc:postgresql://db:5432/process-engine \
           -e DB_USERNAME=camunda \
           -e DB_PASSWORD=camunda \
           -e WAIT_FOR=db:5432 \
           -e WAIT_FOR_TIMEOUT=60 \
           camunda/camunda-bpm-platform:latest
```

## Volumes

The Camunda BPM Platform is installed inside the `/camunda` directory. Which
means the tomcat configuration files are inside the `/camunda/conf/` directory
and the deployments on tomcat are in `/camunda/webapps/`. The directory
structure depends on the application server.

## Debug

To enable JPDA inside the container you can set the environment variable
`DEBUG=true` on startup of the container. This will allow you to connect to the
container on port `8000` to debug your application.

## Build

The image can be used to build a Docker image for a given Camunda BPM platform
version and distribution.

### Build a released version

To build a community image specify the `DISTRO` and `VERSION` build
argument. Possible values for `DISTRO` are `tomcat` and `wildfly` (if the
Camunda BPM platform version already supported it). The `VERSION` is the
Camunda BPM platform version you want to build, i.e. `7.10.0`.

```
docker build -t camunda-bpm-platform \
  --build-arg DISTRO=${DISTRO} \
  --build-arg VERSION=${VERSION} \
  .
```

### Build a SNAPSHOT version

Additonally you can build SNAPSHOT versions for the upcoming releases by
setting the `SNAPSHOT` build argument to `true`.

```
docker build -t camunda-bpm-platform \
  --build-arg DISTRO=${DISTRO} \
  --build-arg VERSION=${VERSION} \
  --build-arg SNAPSHOT=true \
  .
```

### Build a enterprise version

If you are a Camunda enterprise customer you can use this image to build
an enterprise version of the Docker image. Therefore set the `VERSION`
build argument to the Camunda version with out the ee suffix, i.e. `7.8.1`,
set the `EE` build argument to `true` and
the `USER` and `PASSWORD` build argument to your enterprise credentials.

**Note:** As the image uses a multi stage Dockerfile the credentials are
**not** part of the Docker image history of the final image. But please be
aware that you should not distribute this image outside of your company.

```
docker build -t camunda-bpm-platform \
  --build-arg EE=true \
  --build-arg DISTRO=${DISTRO} \
  --build-arg VERSION=${VERSION} \
  --build-arg USER=${USER} \
  --build-arg PASSWORD=${PASSWORD} \
  .
```

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
[twitter demo]: https://github.com/camunda-consulting/code/tree/master/one-time-examples/twitter
[docker registry]: https://registry.hub.docker.com/u/camunda/camunda-bpm-platform/
[docker hub tags]: https://hub.docker.com/r/camunda/camunda-bpm-platform/tags/
