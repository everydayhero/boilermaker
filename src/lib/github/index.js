import changeCase from 'change-case'
import GitHubApi from 'github'
import gitCmd from 'simple-git/promise'

const org = 'everydayhero'

const initialCommit = (name) => {
  const git = gitCmd(process.cwd())

  return git.init()
    .then(() => git.addRemote('origin', `git@github.com:${org}/${name}.git`))
    .then(() => git.add(['.']))
    .then(() => git.commit('Initial commit'))
    .then(() => git.push('origin', 'master'))
    .then(() => 'Repo made with initial commit')
}

export default (data) => {
  const github = new GitHubApi({
    protocol: 'https',
    Promise: Promise,
    timeout: 5000
  })

  const name = changeCase.paramCase(data.name)

  github.authenticate({
    type: 'token',
    token: process.env.BRM_GITHUB_API_TOKEN
  })

  return github.repos.createForOrg({
    org,
    name,
    has_wiki: false,
    private: !data.repoPublic,
    description: data.description
  }).then(() => initialCommit(name))
}
