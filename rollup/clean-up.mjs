import fs from 'fs'
import path from 'path'
import config from './config.mjs'
import { getPackageOut } from './helpers/get-directories.mjs'

const PACKAGES_DIR = config.directories.packages

export default function CleanUp() {
  const packages = fs.readdirSync(PACKAGES_DIR)
  packages.map(deleteLibPath)
}

const deleteLibPath = name => {
  fs.rmSync(path.join(getPackageOut(name), 'lib'), {
    recursive: true,
    force: true,
  })
}

CleanUp()
