##!/bin/bash
npm run build &&
ssh -p $SSH_PROD_SERVER_PORT root@$PROD_SERVER_IP  'rm -rf /home/tienhoang/htdocs/wiki.tienhoangdev.com' &&
scp -P $SSH_PROD_SERVER_PORT -r build root@$PROD_SERVER_IP:/home/tienhoang/htdocs/wiki.tienhoangdev.com

