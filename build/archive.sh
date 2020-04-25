#!/usr/bin/env bash
set -euo pipefail

now="$(date --utc --iso-8601=seconds)"
lastTag="$(git describe --abbrev=0 --tags)"

#!/usr/bin/env bash
IS_PROD=0
TARGET="s3://$BUCKET/archive/$UPLOAD_DIR/$now"
usage() {             
  echo "Usage: $0 [ -p ]" 1>&2 
}
exit_abnormal() {     
  usage
  exit 1
}
while getopts ":p:" options; do
  case "${options}" in
    p)                
      IS_PROD=1  
      ;;
  esac
done
if [ IS_PROD = 1 ]; then
  TARGET="s3://$BUCKET/archive/$UPLOAD_DIR/$lastTag"
fi
echo "archiving"
aws s3 mv "s3://$BUCKET/$UPLOAD_DIR" "$TARGET" \
  --recursive