#!/bin/sh
DIRECTORY="CheckerBoard"
HOST='yingkailiang.zxq.net'
USER='yingkailiang_zxq'
PASSWD='Syr0920!'
FILE='checkers.html'

ftp -n $HOST <<END_SCRIPT
quote USER $USER
quote PASS $PASSWD
put $FILE
quit
END_SCRIPT
exit 0

