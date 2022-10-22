import RollupBuildPackage from './build-package.mjs'
import RollupCopyFiles from './copy-files.mjs'

export default function PackageBuilder(name) {
  console.info(name)
  return [RollupBuildPackage(name), RollupCopyFiles(name)]
}
