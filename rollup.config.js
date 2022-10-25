import fs from 'fs'
import _ from 'lodash'
import rootPkgJson from './package.json'
import config from './rollup/config.mjs'
import { getPackageOut } from './rollup/helpers/get-directories.mjs'
import PackageBuilder from './rollup/index.mjs'
import UpdatePeerDependencies from './rollup/scripts/update-peer-deps.mjs'

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
// START
console.info(
  `Building ${packages.length} packages for ${rootPkgJson.name} v${rootPkgJson.version}...`
)
// Clean old builds
console.info('Removing previous builds...')
packages.forEach(pkg =>
  fs.rmSync(getPackageOut(pkg), { recursive: true, force: true })
)
console.info('Done!')

// Update peer dependencies
console.info('Updating peerDependencies in package.json files of packages...')

packages.forEach(UpdatePeerDependencies)
console.info('Done!')

//Generate and save list of current components
const externals = packages.map(p => `@creation-ui/${p}`)
storeData(externals, config.directories.externals)

// Build packages
console.info('Build starting...')
const buildOptions = _.flow(
  _.partialRight(_.map, PackageBuilder),
  _.flattenDeep
)(packages)

export default buildOptions
