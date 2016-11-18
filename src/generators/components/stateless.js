import path from 'path'

const NAMESPACE = 'Stateless'
const cwd = process.cwd()
const templatesDir = `../templates/source/components/${NAMESPACE}`

const renderTemplateActions = (data, templateFiles) => (
  templateFiles.map(templateFile => (templateFile && {
    type: 'add',
    path: path.join(`${cwd}/${data.name}`, templateFile.replace(NAMESPACE, data.name)),
    templateFile: path.join(templatesDir, templateFile[0] === '.' ? templateFile.substr(1) : templateFile),
    abortOnFail: true
  })).filter(x => x)
)

export default plop => (
  plop.setGenerator(NAMESPACE, {
    description: 'Create a new stateless view component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is your component named?',
      validate: v => !!(v && v.trim()) || 'Component name is required.'
    }, {
      type: 'confirm',
      name: 'styles',
      message: 'Will your component have css styling?',
      default: true
    }, {
      type: 'confirm',
      name: 'i18n',
      message: 'Will your component require translations?',
      default: false
    }],
    actions: data => (
      renderTemplateActions(data, [
        'index.js',
        data.styles && 'styles.js',
        data.i18n && 'i18n.js',
        `__tests__/${NAMESPACE}-test.js`
      ])
    )
  })
)