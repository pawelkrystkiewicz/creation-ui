import RollupBuildPackage from './build-package.mjs'
import RollupCopyFiles from './copy-files.mjs'
import { getPackageOut } from './get-directories.mjs'
import fs from 'fs'

export default function PackageBuilder(name) {
  console.info(name)
  fs.rmSync(getPackageOut(name), { recursive: true, force: true })
  return [RollupBuildPackage(name), RollupCopyFiles(name)]
}
