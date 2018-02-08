#! /usr/bin/env node

const { spawn } = require('child_process')
const { join } = require('path')
const { version } = require('../package.json')

const script = process.argv[2]
const plopfile = join(__dirname, '../dist/plopfile.js')

switch (script) {
  case 'create':
    const proc = spawn(
      join(__dirname, '../node_modules/.bin/plop'),
      [ '--plopfile=' + plopfile ],
      { stdio: 'inherit' }
    )

    return proc.on('exit', (code, signal) => {
      process.on('exit', () => {
        if (signal) {
          process.kill(process.pid, signal)
        } else {
          process.exit(code)
        }
      })
    })
  case 'version':
  case '--version':
  case '-v':
    return console.log(`Boilermaker v${version}`)
  default:
    return console.log('Please enter a valid command [create, version]')
}
