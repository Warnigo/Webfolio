import chalk from 'chalk'
import fs from 'fs'
import path from 'path'

const envFilePath = path.resolve(process.cwd(), '.env.development')
const envExamplePath = path.resolve(process.cwd(), '.env.example')

if (!fs.existsSync(envFilePath)) {
  console.error('Error: .env file not found')
  process.exit(1)
}

if (!fs.existsSync(envExamplePath)) {
  console.error(chalk.red('Error: env.example file not found'))
  process.exit(1)
}

const envFileContent = fs.readFileSync(envFilePath, 'utf8')
const envVars = envFileContent.split('\n').reduce((acc, line) => {
  const [key, value] = line.split('=')

  if (key && value) {
    acc[key.trim()] = value.trim()
  }

  return acc
}, {})

const envExampleContent = fs.readFileSync(envExamplePath, 'utf8')
const requiredVars = envExampleContent
  .split('\n')
  .map((line) => line.split('=')[0].trim())
  .filter(Boolean)

const missingVars = requiredVars.filter((varName) => !(varName in envVars))

if (missingVars.length > 0) {
  console.error(
    chalk.red(`Error: Missing required environment variables: ${missingVars.join(', ')}`),
  )
  process.exit(1)
}

console.info(chalk.green('All required environment variables are present'))
