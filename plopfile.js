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
    }, {
      type: 'confirm',
      name: 'fetching',
      message: 'Need a data fetching setup (Axios & ES6 Polyfill)?',
      default: false
    }],
    actions: data => {
      let actions = renderTemplateActions(
        'package.json',
        'source/components/Button/index.js',
        'source/components/Document/index.js',
        'source/lib/createLocals/index.js',
        'source/lib/css/index.js',
        'source/lib/renderDocument/index.js',
        'source/lib/traits/index.js',
        'source/lib/unlessFetched/index.js',
        'source/routes/Home/index.js',
        'source/routes/index.js',
        'source/client.js',
        'source/server.js',
        'source/store/actions/.gitkeep',
        'source/store/index.js',
        'source/store/reducers/index.js',
        'webpack.shared.config.js'
      )

      actions.push({
        type: 'add',
        path: path.join(`${cwd}/`, '.gitignore'),
        templateFile: path.join('templates', 'gitignore'),
        abortOnFail: true
      })

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
