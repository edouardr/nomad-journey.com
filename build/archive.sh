#!/usr/bin/env bash
set -euo pipefail

now="$(date --utc --iso-8601=seconds)"

echo "archiving"
aws s3 mv "s3://$BUCKET/$UPLOAD_DIR" "s3://$BUCKET/archive/$UPLOAD_DIR/$now" \
  --recursive