FROM node:lts-alpine
RUN apk add curl
RUN yarn global add serve
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build
RUN rm -rf .git .gitignore .gitmodules babel.config Fetlads.code-workspace package.json package-lock.json README.md src vue.config.js yarn.lock
EXPOSE 5000
HEALTHCHECK CMD curl --fail http://localhost:5000 || exit 1
CMD [ "serve", "-s", "dist" ]