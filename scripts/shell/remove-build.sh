#!/bin/zsh

function runCommand() {
    for d in ./packages/* ; do /bin/zsh -c "(cd "$d" && "$@")"; done
}

runCommand "rm -rf build .rollup_cache"