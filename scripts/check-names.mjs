import chalk from 'chalk'
import fs from 'fs'
import path from 'path'

const camelCaseRegex = /^[A-Z][a-zA-Z0-9]*$/
const cababCaseRegex = /^[a-z]+(-[a-z]+)*$/

const ignorePatterns = [/^\[.*\]$/, /^\(.*\)$/]

const srcPath = path.join(process.cwd(), 'src')

const checkNames = (dirPath) => {
  const items = fs.readdirSync(dirPath)
  let allValid = true

  items.forEach((item) => {
    const fullPath = path.join(dirPath, item)
    const stats = fs.statSync(fullPath)

    if (stats.isDirectory()) {
      const isIgnored = ignorePatterns.some((pattern) => pattern.test(item))

      if (!isIgnored) {
        if (!cababCaseRegex.test(item)) {
          console.error(chalk.red(`Error: Folder "${item}" is not in cabab-case.`))
          allValid = false
        }
      }
      allValid = checkNames(fullPath) && allValid
    } else if (stats.isFile() && path.extname(item) === '.tsx') {
      const fileName = path.basename(item, '.tsx')

      if (!camelCaseRegex.test(fileName)) {
        console.error(chalk.red(`Error: React component file "${item}" is not in CamelCase.`))
        allValid = false
      }
    }
  })

  return allValid
}

if (checkNames(srcPath)) {
  console.info(chalk.green('✅ Success: All files and folders follow the naming conventions.'))
} else {
  process.exit(1)
}
