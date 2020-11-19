# Mini Amazon
Basic e-commerce app

### Getting started
1. install docker
https://docs.docker.com/get-docker/
2. install docker-compose
https://docs.docker.com/compose/install/
## melanie notes: if you're on mac Docker desktop has both docker and docker compose included in one. You'll know it's working when there's a little whale icon w/ squares on the top bar of your screen
3. install frontend dependencies
```
cd frontend && npm ci
```

### Start backend (API & DB)
```
docker-compose up
```
NOTE: might take a while on the first run

### Shutdown backend (API & DB)
```
docker-compose down
```
NOTE: command also removes containers

### Start frontend (UI)
```
cd frontend && npm start
```

### Shutdown frontend (UI)
```
ctrl + c
```