import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import autoprefixer from 'autoprefixer'
import path from 'path'
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import progress from 'rollup-plugin-progress'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer'
import config from '../../rollup/config.mjs'
import pkgJson from './package.json' assert { type: 'json' }

const { module, name, version } = pkgJson
const { out } = config.directories

console.info(`Building ${name} package v${version}...`)
console.info('Build starting...')

const mainConfig = [
  {
    external: ['react', 'react-dom'],
    input: 'index.ts',
    output: {
      file: path.join(out, module),
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },

    plugins: [
      resolve(),
      external(),
      babel({ exclude: 'node_modules/**' }),
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
]

export default mainConfig
