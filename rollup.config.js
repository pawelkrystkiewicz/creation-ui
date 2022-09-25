import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import visualizer from 'rollup-plugin-visualizer'
import babel from 'rollup-plugin-babel'
import autoprefixer from 'autoprefixer'
import path from 'path'
import pkg from './package.json'

const { main, module, types, name, styles, files } = pkg
const outDir = files[0]

if (!outDir) {
  throw new Error('"outDir" is not defined')
}

export default [
  {
    external: ['react', 'react-dom'],
    input: './index.tsx',
    output: [
      {
        file: main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: module,
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
      typescript({}),
      postcss({
        modules: true,
        minimize: true,
        inject: true,
        extract: path.resolve(styles),
        extensions: ['.css'],
        sourceMap: true,
        config: {
          path: './postcss.config.js',
        },
      }),
      terser(),
      progress(),
      visualizer(),
      filesize(),
    ],
  },
  {
    input: `${outDir}/esm/index.d.ts`,
    output: [{ file: types, format: 'esm' }],
    plugins: [dts(), progress(), visualizer(), filesize()],
  },
]
