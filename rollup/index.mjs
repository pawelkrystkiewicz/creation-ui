import RollupBuildPackage from './jobs/build-package.mjs'
import RollupCopyFiles from './jobs/copy-files.mjs'

export default function PackageBuilder(name) {
  console.info(name)

  return [RollupBuildPackage(name), RollupCopyFiles(name)]
}
