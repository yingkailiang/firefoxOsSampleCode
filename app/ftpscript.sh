#!/bin/sh
DIRECTORY="CheckerBoard"
HOST='yingkailiang.zxq.net'
USER='yingkailiang_zxq'
PASSWD='Syr0920!'
FILE='CheckBoard/'

ftp -n $HOST <<END_SCRIPT
quote USER $USER
quote PASS $PASSWD
mkdir $DIRECTORY
cd $DIRECTORY
binary
put $FILE
quit
END_SCRIPT
exit 0

