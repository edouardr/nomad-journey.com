#!/usr/bin/env bash
set -euo pipefail

LATEST_TAG="WIP" #$(git describe --abbrev=0 --tags)"
now="$(date --utc --iso-8601=seconds)"
IS_PROD=0
TARGET="s3://$BUCKET/archive/$UPLOAD_DIR/$now"

usage() {
  echo "Usage: $0 [ -p ]" 1>&2 
}
while getopts "ph" options; do
  case "${options}" in
    p)
      IS_PROD=1  
      ;;
    h)
      usage
      exit 0
  esac
done
if [ "$IS_PROD" = "1" ]; then
  TARGET="s3://$BUCKET/archive/$UPLOAD_DIR/$LATEST_TAG"
fi
echo "archiving"
aws s3 mv "s3://$BUCKET/$UPLOAD_DIR" "$TARGET" --recursive