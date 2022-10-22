import fs from 'fs'
import _ from 'lodash'
import rootPkgJson from './package.json'
import config from './rollup/config.mjs'
import PackageBuilder from './rollup/index.mjs'

const PACKAGES_DIR = config.directories.packages
const packages = fs.readdirSync(PACKAGES_DIR)

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}


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

storeData(buildOptions, './rollup.results.json')


export default buildOptions
