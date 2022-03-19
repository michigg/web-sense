FROM node:latest as develop-stage
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

FROM develop-stage as build-stage
COPY . .
RUN yarn build

FROM nginx as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
