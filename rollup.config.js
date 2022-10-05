import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import autoprefixer from 'autoprefixer'
import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy'
import dts from 'rollup-plugin-dts'
import filesize from 'rollup-plugin-filesize'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import progress from 'rollup-plugin-progress'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer'
import pkg from './package.json'

const { main, module, types, name, styles, files } = pkg
const outDir = files[0]

if (!outDir) {
  throw new Error('"outDir" is not defined')
}

console.info(`Building packages ${name} into ${outDir}/`)

export default [
  {
    external: ['react', 'react-dom'],
    input: './lib/index.tsx',
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
        plugins: [autoprefixer()],
        minimize: true,
        inject: true,
        extract: true,
        sourceMap: true,
        config: {
          path: './postcss.config.js',
        },
      }),
      terser({ keep_classnames: true }),
      progress(),
      visualizer(),
      filesize(),
    ],
  },
  {
    input: `${outDir}/esm/index.d.ts`,
    output: [{ file: types, format: 'esm' }],
    external: [/\.s[ac]ss$/i],
    plugins: [
      dts(),
      progress(),
      visualizer(),
      copy({
        targets: [
          {
            src: [`${outDir}/esm/index.css`, `${outDir}/esm/index.css.map`],
            dest: outDir,
          },
        ],
        verbose: true,
        copyOnce: true,
      }),
    ],
  },
]
