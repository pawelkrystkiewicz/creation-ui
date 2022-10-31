import path from 'path'
import fs from 'fs'
import { getPackageRoot } from '../helpers/get-directories.mjs'
import config from '../config.mjs'

export default function UpdatePeerDependencies(name) {
  // RUN THIS SCRIPT BEFORE BUILD
  let base = config.dependencies.common

  //filter out circular deps
  base = base.filter(dep => dep !== `@creation-ui/${name}`)

  if (config.dependencies[name]) {
    base = base.concat(config.dependencies[name])
  }

  const pkgPath = path.join(getPackageRoot(name), 'package.json')

  const rootPkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

  if (!rootPkg) {
    throw new Error('Root package.json not found!')
  }
  const { version, peerDependencies: list } = rootPkg

  const dependencies = base
    .map(dep =>
      list[dep]
        ? { [dep]: list[dep] }
        : dep.includes('@creation-ui')
        ? { [dep]: version }
        : null
    )
    .filter(Boolean)
    .reduce((acc, cur) => ({ ...acc, ...cur }), {})

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))

  pkg.peerDependencies = dependencies
  pkg.version = version
  pkg.publishConfig = { registry: 'https://r.privjs.com' }

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
}
