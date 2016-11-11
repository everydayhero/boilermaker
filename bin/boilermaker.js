#! /usr/bin/env node

const { spawn } = require('child_process')
const { join } = require('path')

const script = process.argv[2]
const plopfile = join(__dirname, '../plopfile.js')

if (script === 'create') {
  const proc = spawn(
    'plop',
    [ '--plopfile=' + plopfile ],
    { stdio: 'inherit' }
  )

  proc.on('exit', (code, signal) => {
    process.on('exit', () => {
      if (signal) {
        process.kill(process.pid, signal)
      } else {
        process.exit(code)
      }
    })
  })
} else {
  console.log('Please enter a valid command [create]')
}
