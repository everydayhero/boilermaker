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
        'docker-compose.ci.yml',
        'docker-compose.yml',
        'Dockerfile',
        'webpack.config.js',
        '.babelrc',
        '.eslintrc',
        '.gitignore',
        '.dockerignore',
        'package.json',
        'index.js',
        'README.md'
      )
      return actions
    }
  })
}

const renderTemplateActions = (...templateFiles) => {
  return templateFiles.map(templateFile => {
    console.log(templateFile)
		console.log(path.dirname(templateFile))
		return {
      type: 'add',
      path: path.join(cwd + '/', templateFile),
      templateFile: path.join('templates', templateFile),
      abortOnFail: true
    }
  })
}

