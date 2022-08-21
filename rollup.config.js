import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'

export default [
  {
    external: ['react', 'react-dom'],
    input: './index.tsx',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      typescriptPaths(),
      postcss({
        plugins: [],
        modules: true,
        extract: true,
        minimize: true,
        extensions: ['.css'],
        inject: {
          insertAt: 'top',
        },
        config: {
          path: './postcss.config.js',
        },
      }),
      babel({
        except: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve(),
      terser(),
    ],
  },
]
