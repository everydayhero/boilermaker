'use strict'

const path = require('path')
const cwd = process.cwd()

module.exports = plop => {
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
    }, {
      type: 'input',
      name: 'description',
      message: 'Enter a short project description (optional):'
    }, {
      type: 'confirm',
      name: 'prismic',
      message: 'Will this project use Prismic for a CMS?',
      default: false
    }],
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
      path: path.join(`${cwd}/`, templateFile),
      templateFile: path.join('templates', templateFile),
      abortOnFail: true
    }
  })
}
