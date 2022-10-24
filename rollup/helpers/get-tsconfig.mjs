export default function GetTSConfig(name) {
  return {
    tsconfig: './tsconfig.json',
    exclude: [
      'build',
      'vite.config.ts',
      'site',
      'scripts',
      'public',
      'lib'
    ],

    include: [`lib/${name}/**/*.ts*`],
  }
}
