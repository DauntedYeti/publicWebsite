
set -eu

echo "=> Ensure permissions"
chown -R cloudron:cloudron /app/code

echo "=> Start the server"
exec /usr/local/bin/gosu cloudron:cloudron node /app.code/app.js