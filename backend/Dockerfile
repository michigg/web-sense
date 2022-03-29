FROM nginx:1.21.6-alpine as develop-stage
WORKDIR /app
COPY prototype-backend/nginx.conf /etc/nginx/nginx.conf
COPY prototype-backend/api /api
RUN yarn install

FROM develop-stage as build-stage
COPY . .
RUN yarn build

FROM nginx as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
