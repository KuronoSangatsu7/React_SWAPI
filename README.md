# React_SWAPI:

![example workflow](https://github.com/KuronoSangatsu7/React_SWAPI/actions/workflows/node.yml/badge.svg)

## Overview:
Simple web app that fetches Star Wars movies from [SWAPI](https://swapi.dev/) and displays them in a Star Wars inspired theme.

## Deployments:
https://react-swapi-blush.vercel.app/

## Endpoints:

- /: Displays the list of movies
- /visits: Displays the number of visits to the app's root route

## Tech Stack:
- **Frontend**: `React.js`, `Tailwind CSS`, `React Query`.

## Docker:
Pull the image from Dockerhub and run it using the following command:

    docker run -dp 5173:5173 kurohata7/react_swapi

After successfully running the container, navigate to http://127.0.0.1:5173 to view the app.

## Unit Tests:
Use the following commands to run unit tests and generate the coverage report:

    npm run test
    
    npm run coverage

## CI/CD
This project uses Github Actions as its CI tool. The CI workflow will run on Ubuntu in the `app_python` directory following any `push` events. The workflow contains multiple stages:

### Python
0. Cache check: The workflow will first check for cached dependencies from previous runs, if successful, it will restore them to speed up the next step and increase efficiency. [Ref](https://github.com/actions/cache)
1. Dependency installation: The workflow will install dependecies from `package.json`.
2. Build: The workflow will attempt to build the app using the script in `package.json`.
3. Linting: The workflow will run ESLint to lint all the code using the config in `elsintrc.cjs`.
4. Testing: The workflow will then run any tests present in the repo using Vitest.

### Security
5. Vulnerability testing: The code will be tested for any vulnerabilities and the CI pipeline will be halted if any are found. This step also makes use of the cache from the previous step.

### Deployment
6. Docker Login: At this stage, the workflow will use secrets stored in the repo to login to a Docker Hub account. [Ref](https://github.com/docker/login-action)
7. Docker Push: The workflow will build a docker image following the config in the repo and push it to Docker Hub. [Ref](https://github.com/docker/build-push-action)

#### Live deployment
- Additionally, the repo is also connected to Vercel and will deploy a live version of the website there.

### Contact Info:
> Author: Jaffar Totanji

> Email: jaafarti@gmail.com

> Telegram: @KuroHata7