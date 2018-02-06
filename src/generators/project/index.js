import path from 'path'
import changeFileModes from '../../lib/changeFileModes'
import createGitHubRepo from '../../lib/github'

const cwd = process.cwd()
const templatesDir = '../templates'

const inputExists = (value) => (
  value && value.trim()
    ? true
    : 'Project name is required.'
)

export const renderTemplateActions = (data, templateFiles) => (
  templateFiles.map(templateFile => ({
    type: 'add',
    path: path.join(`${cwd}/`, templateFile),
    templateFile: path.join(templatesDir, templateFile[0] === '.' ? templateFile.substr(1) : templateFile),
    abortOnFail: true
  }))
)

const executableScripts = ['bin/deploy', 'bin/test']

export default plop => {
  plop.setGenerator('project', {
    description: 'Create a new boiler room project',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is your project called?',
      validate: inputExists
    }, {
      type: 'input',
      name: 'description',
      message: 'Enter a short project description (optional):'
    }, {
      type: 'confirm',
      name: 'prismic',
      message: 'Will this project use Prismic for a CMS?',
      default: true
    }, {
      type: 'confirm',
      name: 'constructicon',
      message: 'Do you use Constructicon?',
      default: true
    }, {
      type: 'confirm',
      name: 'supporticon',
      message: 'Do you use Supporticon?',
      default: true
    }, {
      type: 'confirm',
      name: 'testing',
      message: 'Will you be writing tests in this project?',
      default: false
    }, {
      type: 'confirm',
      name: 'deployment',
      message: 'Will you be deploying this project using Buildkite?',
      default: true
    }, {
      type: 'confirm',
      name: 'repo',
      message: 'Need a repo made?',
      default: false
    }, {
      when: (answers) => answers.repo,
      type: 'confirm',
      name: 'repoPublic',
      message: 'Should this repo be public (MIT licensed if so)?',
      default: false
    }, {
      when: (answers) => answers.repo,
      type: 'input',
      name: 'repoOwner',
      message: 'What org or user should this repo be created under (blank for self)?'
    }],
    actions: data => ([
      ...renderTemplateActions(data, [
        'package.json',
        'README.md',
        'source/components/Document/index.js',
        'source/lib/createLocals/index.js',
        'source/lib/renderDocument/index.js',
        'source/lib/traits/index.js',
        'source/lib/unlessFetched/index.js',
        'source/routes/Home/index.js',
        'source/routes/index.js',
        'source/client.js',
        'source/server.js',
        'source/store/index.js',
        'webpack.shared.config.js',
        '.env.default',
        '.gitignore'
      ].concat(data.deployment ? [
        '.env.staging',
        '.env.production',
        '.buildkite/hooks/pre-command',
        '.buildkite/pipeline.yml',
        'docker-compose.yml',
        ...executableScripts
      ] : [])),
      data.deployment && changeFileModes(executableScripts),
      data.repo && (() => createGitHubRepo(data))
    ].filter(a => a))
  })
}
