import path from 'path'
import fs from 'fs'
import pro from '../pro-packages.json' assert { type: 'json' }
import mainPkg from '../package.json' assert { type: 'json' }

const PRIVJS = 'https://r.privjs.com'
const NPM = 'https://registry.npmjs.org'
const version = mainPkg.version
/**
 * 1.get all packages folders names
 * 2.for each folder create package.json path
 * 3.update package.json with new deps
 * 4.remove publishConfig from free packages
 */

const COPY_BASIC_FILES = 'cp package.json README.md CHANGELOG.md ./build'

const updateTailwindConfig = async pkgPath => {
  const content = `
  const path = require('path')
  /** @type {import('tailwindcss').Config} */

  const config = require(path.join(__dirname, '..', '..', 'tailwind.config'))

  module.exports = config
  `

  fs.writeFileSync(path.join(pkgPath, 'tailwind.config.cjs'), content, 'utf-8')
}

const updatePackageJson = async (name, pkgPath) => {
  const isPro = pro.includes(name)

  const pkg = JSON.parse(
    fs.readFileSync(path.join(pkgPath, 'package.json'), 'utf-8')
  )

  if (!pkg) {
    throw new Error(`@creation-ui/${name} package.json was not found!`)
  }

  pkg.version = version
  pkg.publishConfig = { registry: isPro ? PRIVJS : NPM }
  pkg.scripts['_publish'] = `npm publish --registry ${
    isPro ? PRIVJS : NPM
  } --access ${isPro ? 'restricted' : 'public'}`

  pkg.scripts.build = `yarn tsc && rollup -c && ${COPY_BASIC_FILES}`

  pkg.scripts['test:npmignore'] = 'npm pack --dry-run'

  fs.writeFileSync(
    path.join(pkgPath, 'package.json'),
    JSON.stringify(pkg, null, 2)
  )
}

const update = async () => {
  const packages = fs.readdirSync('./packages')

  packages.forEach(name => {
    const pkgPath = path.join('packages', name)
    updatePackageJson(name, pkgPath)
    updateTailwindConfig(pkgPath)
  })
}

update()
