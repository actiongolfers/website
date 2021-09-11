file='package.json'
master='master'

echo "Checking if '$file' has changed"

CHANGED=`git diff $1 $2 --stat -- $GIT_DIR/$file | wc -l`

if [ `git rev-parse --abbrev-ref HEAD` == $master ] && [ $CHANGED -gt 0 ];
then
    echo "'$file' has changed.  Updating project..."
    npm update
    echo "Update complete."
fi