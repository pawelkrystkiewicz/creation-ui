# $1 = file to copy (with extension)
# $2 = list of directories
find $2 -type d -maxdepth 1 -exec cp $1 {} \;