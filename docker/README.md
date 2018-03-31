# Docker cheat sheet

## INTRO
- If you have surgestions for this repo create a [github issue](https://github.com/mjarkk/school-stuff/issues)
- If you wan't to change code fork this repo after you'r dune do a pull request.
- The assignments came from: [katacoda](https://www.katacoda.com/courses/docker)

# Commands
Santex, Examples and links to commands

## Note:
- Replace all `< some text >` with data you wan't, don't forget to remove `<` and `>`
- You can add extra data when `[? < some text > ]` is added

## Show running Images: `ps`
- [LINK](https://docs.docker.com/engine/reference/commandline/ps/)
- Santex: `docker ps`

## Search for Image: `search`
- [LINK](https://docs.docker.com/engine/reference/commandline/search/)
- Santex: `docker search < image name >`
- Example: `docker search php`

## Run image: `run`
- [LINK](https://docs.docker.com/engine/reference/run/)
- Santex: `docker run < image name >`
- Example: `docker run -d redis`
- Example: `docker run -d --name redisHostPort -p 6379:6379 redis:latest`
- Example: `docker run -d --name redisMapped -v /opt/docker/data/redis:/data redis:latest`
- Flags: run in background `-d`, port `-p <host-port>:<container-port>`, friendly name `--name <name>`, volumes `-v <host-folder>:<container-folder>`, Bind to network `--net=< network name >`

## View mapping for port: `port`
- [LINK](https://docs.docker.com/engine/reference/commandline/port/)
- Santex: `docker port <container name> <port number>`
- Example: `docker port redisDynamic 6379`

## Kill container: `kill`
- [LINK](https://docs.docker.com/engine/reference/commandline/kill/)
- Santex: `docker kill <container>`
- Example: `docker kill 69f335c0adff2f96689aba85d7d5cac11e96c4f6ed5a4d1f733a3ced2a96a0ca`

## Remove container: `rm`
- [LINK](https://docs.docker.com/engine/reference/commandline/rm/)
- Santex: `docker rm <container>`
- Example: `docker rm 69f335c0adff2f96689aba85d7d5cac11e96c4f6ed5a4d1f733a3ced2a96a0ca`

## Use the ubuntu shell: `run -it`
- Santex: `docker run -it ubuntu bash`

## Run Dockerfile: `build`
- [LINK](https://docs.docker.com/engine/reference/commandline/build/)
- Santex: `docker build <dockerfile location>`
- Example: `docker build -t nginx-image:v1 .`
- Flags: add name and version `-t <name>:v<version>`

## Create network: `network cre..`
- [LINK](https://docs.docker.com/engine/reference/commandline/network_create/)
- Santex: `docker network create <name>`
- Example: `docker network create backend-network`

## Conect network: `network con..`
- [LINK](https://docs.docker.com/engine/reference/commandline/network_connect/)
- Santex: `docker network connect <network> <container>`
- Example: `docker network connect frontend-network redis`
- Flags: alias `--alias <name>`

# Dockerfile
About docker files

## Get image: `FROM`
- [LINK](https://docs.docker.com/engine/reference/builder/#from) 
- Santex: `FROM <container>`
- Example: `FROM nginx:alpine`

## Copy data: `COPY`
- [LINK](https://docs.docker.com/engine/reference/builder/#copy) 
- Santex: `COPY <host-folder> <container-folder>`
- Example: `COPY ./www/ /usr/share/nginx/html`

## Expose port: `EXPOSE`
- [LINK](https://docs.docker.com/engine/reference/builder/#expose)
- Santex: `EXPOSE <port number> [? <port number>]`
- Example: `EXPOSE 80 443`

## Add build Commands: `RUN`
- [LINK](https://docs.docker.com/engine/reference/builder/#run)
- Santex: `RUN [ "[? <for every space in a command add a new array item>]" ]` OR `RUN <command>`
- Example: `RUN php -f test.php`

## Add run Commands: `CMD`
- [LINK](https://docs.docker.com/engine/reference/builder/#cmd)
- Santex: `CMD [ "[? <for every space in a command add a new array item>]" ]`
- Example: `CMD ["node", "--production", "start.js;"]`

## CD change dir: `WORKDIR`
- [LINK](https://docs.docker.com/engine/reference/builder/#workdir)
- Santex: `WORKDIR <dir>`
- Example: `WORKDIR /src/app`

## build instruction: `ONBUILD`
- [LINK](https://docs.docker.com/engine/reference/builder/#onbuild)
- Santex: `ONBUILD <instruction>`
- Example: `ONBUILD RUN npm install`

# Progressess
A lists with steps that represent how to do things  

## Remove container:
- View containers: `docker ps`
- Stop the container: `docker kill <container>`
- Remove the container: `docker rm <container>`

## Run dockerfile
Santex:
- Create a docker file
- Build container: `docker build -t <container name>:v<version> <dockerfile locaiton>`  
- Run container: `docker run -d -p <host-port>:<container-port> <container name>:v<version>`
Example:  
Dockerfile:
```Dockerfile
FROM node:7-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json /src/app/package.json
RUN npm install
COPY . /src/app
EXPOSE 3000
CMD ["npm","start"]
```
- Build container: `docker build -t webserver:v1 .`  
- Run container: `docker run -d -p 80:3000 webserver:v1`

## Tips:
- Use .dockerignore file to ignore big, compiled, sensitive or not usefull files