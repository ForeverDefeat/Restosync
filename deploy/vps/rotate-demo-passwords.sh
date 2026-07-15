#!/usr/bin/env bash
set -euo pipefail

if [[ ${EUID} -ne 0 ]]; then
  echo "Run this script as root." >&2
  exit 1
fi

credentials_file=${CREDENTIALS_FILE:-/root/restosync-initial-credentials.txt}

if [[ -e "$credentials_file" ]]; then
  echo "$credentials_file already exists; refusing to rotate passwords again." >&2
  exit 1
fi

mapfile -t emails < <(mysql -NBe \
  "SELECT email FROM restosync_db.users WHERE active = TRUE ORDER BY id")

if [[ ${#emails[@]} -eq 0 ]]; then
  echo "No active RestoSync users were found." >&2
  exit 1
fi

temp_file=$(mktemp)
trap 'rm -f "$temp_file"' EXIT
chmod 600 "$temp_file"

for email in "${emails[@]}"; do
  password=$(openssl rand -hex 12)
  password_hash=$(docker run --rm httpd:2.4-alpine \
    htpasswd -bnBC 12 '' "$password" | tr -d ':\n')

  mysql --protocol=socket -e \
    "UPDATE restosync_db.users SET password='${password_hash}' WHERE email='${email}'"

  printf '%s=%s\n' "$email" "$password" >> "$temp_file"
done

install -m 0600 -o root -g root "$temp_file" "$credentials_file"

echo "Rotated ${#emails[@]} demo passwords."
echo "Credentials are stored in $credentials_file with mode 600."
