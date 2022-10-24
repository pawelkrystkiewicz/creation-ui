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
import visualizer from 'rollup-plugin-visualizer'
import config from '../config.mjs'
import { getPackageOut, getPackageRoot } from '../helpers/get-directories.mjs'
import GetTSConfig from '../helpers/get-tsconfig.mjs'

export default function RollupBuildPackage(name) {
  const root = getPackageRoot(name)
  const out = getPackageOut(name)
  const { module } = require(path.join(root, 'package.json'))
  const externals = (require(config.directories.externals) || []).filter(
    e => !e.includes(name)
  )

  return {
    external: ['react', 'react-dom', ...externals],
    input: path.join(root, 'index.ts'),
    output: [
      {
        file: path.join(out, module),
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      external(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      commonjs(),
      typescript(GetTSConfig(name)),
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
  }
}
