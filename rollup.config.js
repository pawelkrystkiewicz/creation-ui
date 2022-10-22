import fs from 'fs'
import _ from 'lodash'
import rootPkgJson from './package.json'
import config from './rollup/config.mjs'
import PackageBuilder from './rollup/package-builder.mjs'

const PACKAGES_DIR = config.directories.packages
const packages = fs.readdirSync(PACKAGES_DIR)

if (!packages) {
  throw new Error(`No packages found in ${PACKAGES_DIR} directory`)
}

console.info(
  `Building ${packages.length} packages for ${rootPkgJson.name} v${rootPkgJson.version}...`
)

const buildOptions = _.flow(
  _.partialRight(_.map, PackageBuilder),
  _.flattenDeep
)(packages)

export default buildOptions
