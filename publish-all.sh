#!/bin/zsh

function runCommand() {
    for d in ./packages/* ; do /bin/zsh -c "(cd "$d/build" && "$@")"; done
}

runCommand "npm publish --registry https://r.privjs.com"