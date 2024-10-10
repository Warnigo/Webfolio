import chalk from 'chalk'
import fs from 'fs'
import path from 'path'

const camelCaseRegex = /^[A-Z][a-zA-Z0-9]*$/
const kebabCaseRegex = /^[a-z]+(-[a-z]+)*$/
const ignorePatterns = [/^\[.*\]$/, /^\(.*\)$/]
const srcPath = path.join(process.cwd(), 'src')

const args = process.argv.slice(2)
const ignoreFolders = []
const ignoreFiles = []

args.forEach((arg) => {
  if (arg.startsWith('--ignore-folder=')) {
    const folderName = arg.split('=')[1]

    ignoreFolders.push(folderName)
  } else if (arg.startsWith('--ignore-file=')) {
    const fileName = arg.split('=')[1]

    ignoreFiles.push(fileName)
  }
})

const checkNames = (dirPath) => {
  const items = fs.readdirSync(dirPath)
  let allValid = true

  items.forEach((item) => {
    const fullPath = path.join(dirPath, item)
    const stats = fs.statSync(fullPath)

    if (stats.isDirectory()) {
      const isIgnored =
        ignorePatterns.some((pattern) => pattern.test(item)) || ignoreFolders.includes(item)

      if (!isIgnored) {
        if (fullPath.includes('components') || fullPath.includes('Containers')) {
          if (!camelCaseRegex.test(item)) {
            console.error(
              chalk.red(
                `Error: React folder "${item}" at path "${fullPath}" is not in PascalCase.`,
              ),
            )
            allValid = false
          }
        } else {
          if (!kebabCaseRegex.test(item)) {
            console.error(
              chalk.red(`Error: Folder "${item}" at path "${fullPath}" is not in kebab-case.`),
            )
            allValid = false
          }
        }
      }

      if (!isIgnored) {
        allValid = checkNames(fullPath) && allValid
      }
    } else if (stats.isFile()) {
      const fileExt = path.extname(item)
      const fileName = path.basename(item, fileExt)

      const isIgnored = ignoreFiles.includes(item)

      if (isIgnored || (fileName === 'index' && fileExt === '.ts')) {
        return
      }

      if (fileExt === '.tsx') {
        if (!camelCaseRegex.test(fileName)) {
          console.error(
            chalk.red(
              `Error: React component file "${fileName}${fileExt}" at path "${fullPath}" is not in PascalCase.`,
            ),
          )
          allValid = false
        }
      } else if (fileExt === '.ts' || fileExt === '.js') {
        if (!kebabCaseRegex.test(fileName)) {
          console.error(
            chalk.red(
              `Error: Non-React file "${fileName}${fileExt}" at path "${fullPath}" should be in kebab-case.`,
            ),
          )
          allValid = false
        }
      } else if (['.css', '.scss', '.less', '.sass'].includes(fileExt)) {
        if (!kebabCaseRegex.test(fileName)) {
          console.error(
            chalk.red(
              `Error: CSS/SCSS/LESS/SASS file "${fileName}${fileExt}" at path "${fullPath}" should be in kebab-case.`,
            ),
          )
          allValid = false
        }
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
