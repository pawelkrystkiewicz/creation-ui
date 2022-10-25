import path from 'path'
import copy from 'rollup-plugin-copy'
import dts from 'rollup-plugin-dts'
import progress from 'rollup-plugin-progress'
import visualizer from 'rollup-plugin-visualizer'
import { getPackageOut, getPackageRoot } from '../helpers/get-directories.mjs'
import config from '../config.mjs'
import typescript from '@rollup/plugin-typescript'
import GetTSConfig from '../helpers/get-tsconfig.mjs'

export default function RollupCopyFiles(name) {
  const out = getPackageOut(name)
  const root = getPackageRoot(name)
  const externals = (require(config.directories.externals) || []).filter(
    e => !e.includes(name)
  )

  return {
    input: path.join(
      out,
      'esm',
      config.directories.packages,
      name,
      'index.d.ts'
    ),
    output: [{ file: path.join(out, '/index.d.ts'), format: 'esm' }],
    external: [/\.s[ac]ss$/i, ...externals],
    plugins: [
      dts(),
      typescript(GetTSConfig(name)),
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
          {
            src: [
              path.join(root, 'package.json'),
              path.join(root, 'README.md'),
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
