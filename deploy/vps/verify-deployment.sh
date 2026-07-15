#!/usr/bin/env bash
set -euo pipefail

credentials_file=${CREDENTIALS_FILE:-/root/restosync-initial-credentials.txt}

if [[ ! -r "$credentials_file" ]]; then
  echo "Cannot read $credentials_file." >&2
  exit 1
fi

admin_password=$(awk -F= '$1 == "admin@restosync.com" { print $2 }' "$credentials_file")
if [[ -z "$admin_password" ]]; then
  echo "The administrator credential is missing." >&2
  exit 1
fi

frontend_status=$(curl -sS -o /dev/null -w '%{http_code}' \
  https://restosync.rmpstack.blog/login)
login_response=$(printf '{"email":"admin@restosync.com","password":"%s"}' \
  "$admin_password" | curl -fsS -H 'Content-Type: application/json' \
  --data-binary @- https://api-restosync.rmpstack.blog/api/auth/login)
token=$(printf '%s' "$login_response" | python3 -c \
  'import json, sys; print(json.load(sys.stdin)["data"]["token"])')
login_status=200
websocket_status=$(curl -sS -o /dev/null -w '%{http_code}' \
  -H 'Origin: https://restosync.rmpstack.blog' \
  'https://api-restosync.rmpstack.blog/ws/info?t=1')

if [[ "$frontend_status" != 200 || "$login_status" != 200 || "$websocket_status" != 200 ]]; then
  echo "Verification failed: frontend=$frontend_status login=$login_status websocket=$websocket_status" >&2
  exit 1
fi

user_count=$(mysql -NBe 'SELECT COUNT(*) FROM restosync_db.users')
product_count=$(mysql -NBe 'SELECT COUNT(*) FROM restosync_db.products')
users_response=$(curl -fsS \
  -H "Authorization: Bearer $token" \
  https://api-restosync.rmpstack.blog/api/users)
visible_inactive_count=$(printf '%s' "$users_response" | python3 -c \
  'import json, sys; print(sum(not user["active"] for user in json.load(sys.stdin)["data"]))')

if [[ "$visible_inactive_count" -eq 0 ]]; then
  echo "Verification failed: the administrative list does not include inactive users." >&2
  exit 1
fi

echo "Verification passed: frontend=200 login=200 websocket=200 users=$user_count inactive-visible=$visible_inactive_count products=$product_count"
