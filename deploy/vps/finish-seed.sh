#!/usr/bin/env bash
set -euo pipefail

if [[ ${EUID} -ne 0 ]]; then
  echo "Run this script as root." >&2
  exit 1
fi

APP_DIR=${APP_DIR:-/opt/restosync}
cd "$APP_DIR"

if [[ ! -f .env ]]; then
  echo "$APP_DIR/.env does not exist." >&2
  exit 1
fi

set -a
# shellcheck disable=SC1091
source .env
set +a

user_count=$(MYSQL_PWD="$MYSQL_PASSWORD" mysql \
  -h 127.0.0.1 -u "$MYSQL_USER" -NBe \
  "SELECT COUNT(*) FROM ${MYSQL_DATABASE}.users")
product_count=$(MYSQL_PWD="$MYSQL_PASSWORD" mysql \
  -h 127.0.0.1 -u "$MYSQL_USER" -NBe \
  "SELECT COUNT(*) FROM ${MYSQL_DATABASE}.products")

if [[ "$user_count" -eq 0 || "$product_count" -eq 0 ]]; then
  echo "Seed verification failed: users=$user_count products=$product_count" >&2
  exit 1
fi

sed -i 's/^SPRING_SQL_INIT_MODE=.*/SPRING_SQL_INIT_MODE=never/' .env
docker compose up -d --force-recreate backend

echo "Seed verified: users=$user_count products=$product_count"
echo "SPRING_SQL_INIT_MODE is now never. Change all demo passwords before real use."
