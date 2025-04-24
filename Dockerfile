# Etapa 1: Construcción
FROM node:23-slim AS builder
WORKDIR /app
RUN apt-get update && apt-get upgrade -y && apt-get clean
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build

# Etapa 2: Producción
FROM node:23-slim AS production
WORKDIR /app
RUN apt-get update && apt-get upgrade -y && apt-get clean
COPY --from=builder /app/dist ./dist
RUN npm install -g serve
RUN chown -R node:node /app
USER node
CMD ["serve", "-s", "dist", "-l", "3000"]

# Etapa 3: Desarrollo
FROM node:23-slim AS development
WORKDIR /app
RUN apt-get update && apt-get upgrade -y && apt-get clean
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN chown -R node:node /app
USER node
CMD ["pnpm", "run", "dev"]