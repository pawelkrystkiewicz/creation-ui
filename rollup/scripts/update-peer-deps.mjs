import path from 'path'
import fs from 'fs'
import { getPackageRoot } from '../helpers/get-directories.mjs'

export default function UpdatePeerDependencies(name) {
  // RUN THIS SCRIPT BEFORE BUILD

  const pkgPath = path.join(getPackageRoot(name), 'package.json')

  const rootPkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
  if (!rootPkg.peerDependencies) {
    throw new Error('Root package.json not found!')
  }
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))

  pkg.peerDependencies = rootPkg.peerDependencies

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
}
