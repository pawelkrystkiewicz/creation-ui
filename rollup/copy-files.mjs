import path from 'path'
import copy from 'rollup-plugin-copy'
import dts from 'rollup-plugin-dts'
import progress from 'rollup-plugin-progress'
import visualizer from 'rollup-plugin-visualizer'
import { getPackageOut } from './get-directories.mjs'
import config from './config.mjs'
import typescript from '@rollup/plugin-typescript'

export default function RollupCopyFiles(name) {
  const out = getPackageOut(name)

  return {
    input: path.join(
      out,
      'esm',
      config.directories.packages,
      name,
      'index.d.ts'
    ),
    output: [{ file: path.join(out, '/index.d.ts'), format: 'esm' }],
    external: [/\.s[ac]ss$/i],
    plugins: [
      dts(),
      typescript({
        tsconfig: './tsconfig.build.json',
        include: ['./lib/core/**/*', `./lib/${name}/**/*`],
      }),
      progress(),
      visualizer(),
      copy({
        targets: [
          {
            src: [
              path.join(
                out,
                'esm',
                config.directories.packages,
                name,
                'index.css'
              ),
              path.join(
                out,
                'esm',
                config.directories.packages,
                name,
                'index.css.map'
              ),
            ],
            dest: out,
          },
        ],
        verbose: true,
        copyOnce: true,
      }),
    ],
  }
}
