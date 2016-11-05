'use strict'

const path = require('path')
const _ = require('lodash')
const cwd = process.cwd()

module.exports = plop => {

  plop.addHelper('allTrue', function(...args) {
    const opts = args.pop()
    if (_.every(args), Boolean) {
      return opts.fn(this)
    }
    return opts.inverse(this)
  })

  plop.setGenerator('project', {
    description: 'Create a new boiler room project',
    prompts: [],
		actions: data => {
      let actions = renderTemplateActions(
        'source/components/Button/index.js',
        'source/layouts/Page/index.js',
        'source/lib/traits/index.js',
        'source/client.js',
        'source/server.js',
        '.gitignore',
        'package.json'
      )
      return actions
    }
  })
}

const renderTemplateActions = (...templateFiles) => {
  return templateFiles.map(templateFile => {
		return {
      type: 'add',
      path: path.join(cwd + '/', templateFile),
      templateFile: path.join('templates', templateFile),
      abortOnFail: true
    }
  })
}
