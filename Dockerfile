FROM node:lts-alpine
RUN apk add curl
RUN npm install -g serve
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
RUN rm -rf .git .gitignore .gitmodules art babel.config Fetlads.code-workspace package.json package-lock.json README.md src vue.config.js
EXPOSE 5000
HEALTHCHECK CMD curl --fail http://localhost:5000 || exit 1
CMD [ "serve", "-s", "dist" ]
