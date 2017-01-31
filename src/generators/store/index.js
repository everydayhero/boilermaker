import fs from 'fs-promise'
import camelCase from 'lodash/camelcase'

const NAMESPACE = 'Action & Reducer'
const cwd = process.cwd()

export default plop => (
  plop.setGenerator(NAMESPACE, {
    description: 'Create an Action & Reducer set',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is your action-reducer named?',
      validate: v => !!(v && v.trim()) || 'Component name is required.'
    }, {
      type: 'directory',
      name: 'path',
      message: 'Where do you want the Action & Reducer code?',
      basePath: cwd
    }],
    actions: data => ([
      (answers) => {
        const storePath = 'source/store/index.js'

        const addText = (data) => {
          const text = data.toString()
          const re = /(\s*?)combineReducers\(\{\n((?:.|\n)+?)(?=\}\))/g.exec(text)
          const lineBreaks = /(\r\n|\n|\r)/gm
          const indent = re[1].replace(lineBreaks, '')

          const items = re[2]
            .split(',').concat([
              camelCase(answers.name)
            ]).filter(t => t.trim())
              .map((t) => (`${indent}  ${t
              .replace(lineBreaks, '')
              .trim()}`
            )).join(',\n')
            .concat(`\n${indent}`)

          const newFile = text.replace(re[0], `\n${indent}combineReducers({\n${items}`)

          return fs.writeFile(storePath, newFile)
            .then(() => 'Reducers updated')
        }

        return fs.readFile(storePath)
          .then(addText)
          .catch(() => ('No file found at store/index.js. Skipping reducer combining.'))
      }
    ])
  })
)
