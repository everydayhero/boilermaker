import changeCase from 'change-case'
import GitHubApi from 'github'

export default (data) => {
  const github = new GitHubApi({
    protocol: 'https',
    Promise: Promise,
    timeout: 5000
  })

  github.authenticate({
    type: 'token',
    token: process.env.BRM_GITHUB_API_TOKEN
  })

  return github.repos.createForOrg({
    org: 'everydayhero',
    name: changeCase.paramCase(data.name),
    has_wiki: false,
    private: !data.repoPublic,
    description: data.description
  }).then(() => (
    'Repository created'
  )).catch(() => (
    'Error creating repository'
  ))
}
