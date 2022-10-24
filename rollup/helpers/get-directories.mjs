import path from 'path'
import config from '../config.mjs'

export const getPackageRoot = name =>
  path.resolve(process.cwd(), path.join(config.directories.packages, name))

export const getPackageOut = name =>
  path.resolve(
    process.cwd(),
    path.join(getPackageRoot(name), config.directories.out)
  )
