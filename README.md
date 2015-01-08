# camunda BPM platform docker images

This camunda BPM community project provides docker images of the latest camunda
BPM platform releases.  The images can be used to demonstrate and test the
camunda BPM platform or can be extended with own process applications. It is
planed to provide images for every upcoming release, which includes alpha
releases.


## Get started

To start the latest release:

```
docker pull camunda/camunda-bpm-platform:latest
docker run -d --name camunda -p 8080:8080 camunda/camunda-bpm-platform:latest
# open browser with url: http://localhost:8080/camunda/
```

## Supported Tags/Releases

- `tomcat-7.2.0`, `latest` ([Dockerfile][tomcat-7.2.0])

## Java Version

All images have Oracle JDK 8 installed, which allows you to use the latest Java
features in your own applications.

## Environment variables

The used database can be configured by providing the following environment
variables:

- `DB_DRIVER` the database driver class name
- `DB_URL` the database jdbc url
- `DB_USERNAME` the database username
- `DB_PASSWORD` the database password

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


## Volumes

The camunda BPM platform is installed inside the `/camunda` directory. Which
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
clause which camunda image you want to use as a base image:

```
FROM camunda/camunda-bpm-platform:tomcat-7.2.0

ADD my.war /camunda/webapps/my.war
```


## Maintainer

[Sebastian Menski][]


## License

Apache License, Version 2.0


[tomcat-7.2.0]: docker-camunda-bpm-platform/blob/master/Dockerfile
[Sebastian Menski]: https://github.com/menski
[twitter demo]: https://github.com/camunda/camunda-consulting/tree/master/showcases/twitter
[docker registry]: https://registry.hub.docker.com/
