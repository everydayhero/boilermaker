import changeCase from 'change-case'
import GitHubApi from 'github'
import gitCmd from 'simple-git/promise'

const initialCommit = ({
  name,
  owner
}) => {
  const git = gitCmd(process.cwd())

  return git.init()
    .then(() => git.addRemote('origin', `git@github.com:${owner}/${name}.git`))
    .then(() => git.add(['.']))
    .then(() => git.commit('Initial commit'))
    .then(() => git.push('origin', 'master'))
    .then(() => 'Repo made with initial commit')
}

export default (data) => {
  const github = new GitHubApi({
    protocol: 'https',
    Promise,
    timeout: 5000
  })

  const repoConfig = {
    name: changeCase.paramCase(data.name),
    has_wiki: false,
    private: !data.repoPublic,
    description: data.description
  }

  github.authenticate({
    type: 'token',
    token: process.env.BRM_GITHUB_API_TOKEN
  })

  const createOrgRepo = (org) => (
    github.repos.createForOrg({
      ...repoConfig,
      org
    }).then(() => (org))
  )

  const createUserRepo = () => (
    Promise.all([
      github.users.get({})
        .then(({ login }) => (login)),
      github.repos.create(repoConfig)
    ]).then(([user]) => user)
  )

  const createRepo = data.repoOwner
    ? createOrgRepo(data.repoOwner)
    : createUserRepo()

  return createRepo.then((owner) => initialCommit({
    owner,
    name: repoConfig.name
  }))
}
