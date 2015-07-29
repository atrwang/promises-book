#!/bin/bash

declare parentDir=$(cd $(dirname $(cd $(dirname $0);pwd));pwd)
declare currentDir=$(cd $(dirname $0);pwd)
SRC_FILE=${parentDir}/$1

${currentDir}/fopub/fopub "${SRC_FILE}" \
-param body.font.family STKaiti \
-param dingbat.font.family STKaiti \
-param monospace.font.family STKaiti \
-param sans.font.family STKaiti \
-param title.font.family STKaiti \
-param alignment left
