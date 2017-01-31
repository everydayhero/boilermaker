import path from 'path'

const cwd = process.cwd()
const templatesDir = '../templates'

export const renderTemplateActions = (data, templateFiles) => (
  templateFiles.map(templateFile => ({
    type: 'add',
    path: path.join(`${cwd}/`, templateFile),
    templateFile: path.join(templatesDir, templateFile[0] === '.' ? templateFile.substr(1) : templateFile),
    abortOnFail: true
  }))
)

export default plop => {
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
      message: 'Need a data fetching setup (Axios)?',
      default: false
    }, {
      type: 'confirm',
      name: 'hui',
      message: 'Do you use HUI?',
      default: false
    }],
    actions: data => (
      renderTemplateActions(data, [
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
        'webpack.shared.config.js',
        '.env.default',
        '.gitignore'
      ])
    )
  })
}
