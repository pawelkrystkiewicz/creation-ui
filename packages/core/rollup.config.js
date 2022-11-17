import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import autoprefixer from 'autoprefixer'
import path from 'path'
import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy'
import dts from 'rollup-plugin-dts'
import filesize from 'rollup-plugin-filesize'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import progress from 'rollup-plugin-progress'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer'

import config from '../../rollup/config.mjs'
import pkgJson from './package.json' assert { type: 'json' }

const NAME = 'core'

// START
console.info(`Building ${pkgJson.name} package v${pkgJson.version}...`)

// Build packages
console.info('Build starting...')

const { module } = pkgJson
const out = 'build'

//TODO:mark all packages as external
const externals = []
// (require(config.directories.externals) || []).filter(
//   e => !e.includes(NAME)
// )

const sharedOutputSettings = {
  interop: 'default',
  generatedCode: {
    symbols: true,
  },
}

const mainConfig = [
  {
    external: ['react', 'react-dom', ...externals],
    input: 'index.ts',
    output: {
      file: path.join(out, module),
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      ...sharedOutputSettings,
    },

    plugins: [
      resolve(),
      external(),
      babel({
        exclude: 'node_modules/**',
        // babelHelpers: 'bundled',
        // skipPreflightCheck: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
      postcss({
        plugins: [autoprefixer()],
        minimize: true,
        inject: true,
        extract: true,
        sourceMap: true,
        config: { path: './postcss.config.js' },
      }),
      terser({ keep_classnames: true }),
      progress(),
      visualizer(),
      filesize(),
    ],
  },
  {
    input: path.join(out, 'esm', 'index.d.ts'),
    output: {
      file: path.join(out, '/index.d.ts'),
      format: 'esm',
      ...sharedOutputSettings,
    },
    external: [/\.s[ac]ss$/i, ...externals],
    plugins: [
      dts(),
      typescript({ tsconfig: './tsconfig.build.json' }),
      progress(),
      visualizer(),
      copy({
        targets: [
          {
            src: [
              path.join(out, 'esm', 'index.css'),
              path.join(out, 'esm', 'index.css.map'),
            ],
            dest: out,
          },
          {
            src: [path.join('package.json'), path.join('README.md')],
            dest: out,
          },
        ],
        verbose: true,
        copyOnce: true,
      }),
    ],
  },
]

const dtsPlugin = dts()

/**
 this is fix for:
(!) The "output.namespaceToStringTag" option is deprecated. Use the "output.generatedCode.symbols" option instead.
[!] RollupError: Invalid value false for option "output.interop" - use one of "compat", "auto", "esModule", "default", "defaultOnly".
https://rollupjs.org/guide/en/#outputinterop
*/
mainConfig[1].plugins.push({
  ...dtsPlugin,
  outputOptions(...args) {
    const opts = dtsPlugin.outputOptions(...args)
    opts.interop = 'esModule'
    delete opts.namespaceToStringTag
    opts.generatedCode = { symbols: false, ...opts.generatedCode }
    return opts
  },
})

export default mainConfig
