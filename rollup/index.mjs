import fs from 'fs'
import RollupBuildPackage from './jobs/build-package.mjs'
import RollupCopyFiles from './jobs/copy-files.mjs'
import { getPackageOut } from './helpers/get-directories.mjs'

export default function PackageBuilder(name) {
  console.info(name)
  fs.rmSync(getPackageOut(name), { recursive: true, force: true })

  return [RollupBuildPackage(name), RollupCopyFiles(name)]
}
