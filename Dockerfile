# ── Stage 1: build ───────────────────────────────────────────────────────────
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2: serve ───────────────────────────────────────────────────────────
# nginx-unprivileged runs as uid/gid 101 (nginx), matching the pod securityContext.
# The nginx.conf is NOT baked in here — the Helm chart mounts it from a ConfigMap
# at /etc/nginx/conf.d/default.conf at runtime.
FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
