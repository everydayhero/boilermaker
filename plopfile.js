'use strict'

const path = require('path')
const _ = require('lodash')

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
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is your project called?',
      validate: value => {
        if (value && value.trim()) {
          return true
        }
        return 'Project name is required.'
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a short project description (optional):'
    },
    {
      type: 'input',
      name: 'port',
      message: 'What port should your Development server run on?',
      default: 3000
    },
    {
      type: 'confirm',
      name: 'useRedux',
      message: 'Do you need Redux for state management?',
      default: false
    },
    {
      type: 'confirm',
      name: 'useRouter',
      message: 'Does your app need routing (e.g. React Router)?',
      default: false
    },
    {
      type: 'confirm',
      name: 'productionServer',
      message: 'Will your app run its own production server?',
      default: false
    }],
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

      if (data.useRedux) {

      }

      if (data.useRouter) {

      }

      return actions
    }
  })

  plop.setGenerator('')
}

const renderTemplateActions = (...templateFiles) => {
  return templateFiles.map(templateFile => {
    return {
      type: 'add',
      path: path.join('./', path.dirname(templateFile)),
      templateFile: path.join('templates', templateFile),
      abortOnFail: true
    }
  })
}

