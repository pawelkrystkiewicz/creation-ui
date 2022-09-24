import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import css from 'rollup-plugin-import-css'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import tailwind from 'rollup-plugin-tailwindcss'
import { terser } from 'rollup-plugin-terser'

// files
import pkg from './package.json'
import tsPaths from './tsconfig.paths.json'

const { outDir } = tsPaths.compilerOptions
const { main, module, types, name } = pkg

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
      external(),
      resolve(),
      commonjs(),
      typescript(),
      // tailwind({ input: './styles/globals.css', purge: true }),
      css({
        include: ['./styles/*.css'],
        output: './dist/index.css',
        alwaysOutput: true,
      }),
      postcss({
        plugins: [],
        modules: true,
        minimize: true,
        extract: true,
        extensions: ['.css'],
        inject: {
          insertAt: 'top',
        },
        config: {
          path: './postcss.config.js',
        },
      }),
      terser(),
    ],
  },
  {
    input: `${outDir}/esm/index.d.ts`,
    output: [{ file: types, format: 'esm' }],
    plugins: [dts()],
  },
  {
    input: `${outDir}/esm/index.css`,
    output: [{ file: `${outDir}/index.css`, format: 'esm' }],
    plugins: [],
  },
]
