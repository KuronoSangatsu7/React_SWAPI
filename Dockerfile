FROM node:18-alpine3.18

COPY . ./SWAPI

RUN adduser newuser -D && chown -R newuser /SWAPI

USER newuser
WORKDIR /SWAPI

RUN npm i

EXPOSE 5173

ENTRYPOINT [ "npm", "run", "dev"]
