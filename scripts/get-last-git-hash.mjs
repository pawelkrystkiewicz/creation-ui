import git from 'git-last-commit'
import { writeFileSync, readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(path.join(__filename, '..'))
console.log(__dirname)

git.getLastCommit((err, commit = { hash: 'n/a' }) => {
  if (err) {
    console.error(err)
    return
  }
  let packageJson = readFileSync(path.join(__dirname, '/package.json'), {
    encoding: 'utf8',
  })
  packageJson = JSON.parse(packageJson)

  const result = {
    ...commit,
    version: packageJson.version ?? null,
    timestamp: new Date().toISOString(),
  }

  writeFileSync(path.join(__dirname, '/git-hash.json'), JSON.stringify(result, null, 2))
})
