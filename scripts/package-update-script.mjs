import path from 'path'
import fs from 'fs'
import pro from '../pro-packages.json' assert { type: 'json' }

const devDependencies = {
  '@creation-ui/core': '*',
  '@babel/core': '^7.18.10',
  '@babel/preset-react': '^7.18.6',
  '@headlessui/react': '^1.7.0',
  '@headlessui/tailwindcss': '^0.1.1',
  '@tailwindcss/aspect-ratio': '^0.4.0',
  '@tailwindcss/forms': '^0.5.2',
  '@tailwindcss/line-clamp': '^0.4.0',
  '@tailwindcss/typography': '^0.5.4',
  '@types/node': '17.0.35',
  '@types/react': '18.0.9',
  '@types/react-dom': '18.0.5',
  '@types/uuid': '^8.3.4',
  autoprefixer: '^10.4.12',
  'babel-loader': '^8.2.5',
  'babel-plugin-module-resolver': '^4.1.0',
  clsx: '^1.2.1',
  postcss: '^8.4.16',
  'postcss-loader': '^7.0.1',
  react: '18.1.0',
  'react-dom': '18.1.0',
  'react-router-dom': '6',
  'react-spring': '^9.5.5',
  'react-use': '^17.4.0',
  rollup: '^3.3.0',
  'rollup-plugin-babel': '^4.4.0',
  'rollup-plugin-filesize': '^9.1.2',
  'rollup-plugin-peer-deps-external': '^2.2.4',
  'rollup-plugin-postcss': '^4.0.2',
  'rollup-plugin-progress': '^1.1.2',
  'rollup-plugin-terser': '^7.0.2',
  'rollup-plugin-visualizer': '^5.8.1',
  sass: '^1.55.0',
  'storybook-addon-next': '^1.6.7',
  'storybook-addon-outline': '^1.4.2',
  'storybook-addon-sass-postcss': '^0.1.3',
  'storybook-addon-turbo-build': '^1.1.0',
  'storybook-dark-mode': '^1.1.0',
  tailwindcss: '^3.1.8',
  'ts-loader': '^9.4.1',
  typescript: '4.8.3',
  uuid: '^8.3.2',
}

const PRIVJS = 'https://r.privjs.com'
const NPM = 'https://registry.npmjs.org'

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

  if (name !== 'core') {
    pkg.devDependencies = devDependencies
  }

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
