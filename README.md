# Dockerized Fullstack Javascript environment.

The goal of this repo is to provide ideas for developers on how to setup Docker & Docker-Compose to serve a software developer that wants to see changes to his code at each **CTRL-S**

You can now start developing a full stack React.js front end plus Node.js without installing any of the pre-requirements on your machine, just Docker!

Another benefit of this setup is to use as a starting point to share all configurations with your team!

## Use

```bash
git clone --single-branch --branch base git@github.com:c0dingarchit3ct/dockerized-javascript-fullstack.git
docker-compose build
docker-compose run
```

Expect the Build phase to take longer the first time as it pulls the full (almost 1GB) node image, subsequnt builds should be much faster.

## Testing

Frontend

- _localhot:3002_

Backend

- _localhost:3001_

## Notes

- Dockerfile.dev is used instead of 'Dockerfile' to highlight that this build is optimized for development, you can another Dockerfil optimized for building test/production images
- The React front end was created with create-react-app with one caveat, changing react-scripts from 3.4.1 down to 3.4.0 to avoid a [docker issue](https://github.com/facebook/create-react-app/issues/8688) at the time of creating this repo

- The base images are not Alpine nor slim to give the developer stronger tooling inside the docker containers.

* If you want to add a new dependency you can use the included _npm_install.sh_.

* first paramter will be either _express-container_ or _react-container_

```bash
# this is the equivelant of running npm install in the node.js express container
./npminstall.sh express-container

# this is the equivelant of installing faker.js and saving it to the package.json of the react container
./npminstall.sh react-container faker
```
