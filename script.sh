#!/bin/zsh

function runCommand() {
    for d in ./lib/* ; do /bin/zsh -c "(cd "$d/build" && "$@")"; done
}

runCommand "npm publish"