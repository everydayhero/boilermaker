import path from 'path'
import { chmodSync, existsSync } from 'fs'

const cwd = process.cwd()

export default (files) => (
  (data) => new Promise((resolve, reject) => {
    let count = 0

    const interval = setInterval(() => {
      count++

      const existingFiles = files
        .map((file) => path.join(`${cwd}/`, file))
        .filter((file) => existsSync(file))

      if (existingFiles.length === files.length) {
        existingFiles.map((file) => chmodSync(file, '755'))
        clearInterval(interval)
        return resolve('Scripts in the bin directory of your project are now executable.')
      }

      if (count > 15) {
        clearInterval(interval)
        reject('Modes were not set for your scripts. Please run `chmod +x ./bin` in your project.')
      }
    }, 100)
  })
)
