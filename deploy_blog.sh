##!/bin/bash

# Load environment variables from server.env file (available on localhost only)
if [ -f server.env ]; then
  export $(cat server.env | grep -v '^#' | xargs)
fi
# Check if required environment variables are set
if [ -z "$PROD_SERVER_IP" ] || [ -z "$USERNAME" ] || [ -z "$SSH_PROD_SERVER_PORT" ]; then
  echo "Error: Required environment variables are not set. Please check your .env file."
  exit 1
fi
npm run build &&
ssh -p $SSH_PROD_SERVER_PORT $USERNAME@$PROD_SERVER_IP  'rm -rf /home/tienhoang/htdocs/wiki.tienhoangdev.com' &&
scp -P $SSH_PROD_SERVER_PORT -r build $USERNAME@$PROD_SERVER_IP:/home/tienhoang/htdocs/wiki.tienhoangdev.com

