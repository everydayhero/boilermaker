describe('project generator', () => {
  it('creates a project structure', () => {
    const plop = nodePlop('./dist/plopfile.js')
    const project = plop.getGenerator('project')

    return project.runActions({name: 'test-project'})
    .then(() => assert.ok(true))
    .catch(() => assert.ok(false))
  })
})
