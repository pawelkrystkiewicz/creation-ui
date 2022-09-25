import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import babel from 'rollup-plugin-babel'
import dts from 'rollup-plugin-dts'
import filesize from 'rollup-plugin-filesize'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import progress from 'rollup-plugin-progress'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer'
import pkg from './package.json'
import copy from 'rollup-plugin-copy'

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
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        modules: true,
        minimize: true,
        inject: false,
        extract: true,
        extensions: ['.css'],
        sourceMap: true,
        config: {
          path: './postcss.config.js',
        },
      }),
      terser(),
      copy({
        targets: [
          {
            src: [`${outDir}/cjs/index.css`, `${outDir}/cjs/index.css.map`],
            dest: outDir,
          },
        ],
      }),
      progress(),
      visualizer(),
      filesize(),
    ],
  },
  {
    input: `${outDir}/index.d.ts`,
    output: [{ file: types, format: 'esm' }],
    plugins: [dts(), progress(), visualizer(), filesize()],
  },
]
