export default function GetTSConfig(name) {
  return {
    tsconfig: './tsconfig.build.json',
    include: ['./lib/core/**/*', `./lib/${name}/*`],
  }
}
