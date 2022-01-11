# Run in docker container
build image

```bash
docker build <username>/fileshare-api
```

run image
```bash
docker run -p 3090:3090 -d <username>/fileshare-api
```

now the exposed port of the container is ready to be forwarded using nginx