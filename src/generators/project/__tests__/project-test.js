import path from 'path'
import fs from 'fs-extra'

describe('project generator', () => {
  it('creates a project structure', () => {
    const tmpDir = fs.mkdtempSync(`node_modules${path.sep}tmp${path.sep}`)

    fs.copySync('dist', path.join(tmpDir, 'dist'))
    fs.copySync('templates', path.join(tmpDir, 'templates'))
    process.chdir(tmpDir)

    const plop = nodePlop('dist/plopfile.js')
    const project = plop.getGenerator('project')

    return project.runActions({
      name: 'test-project'
    }).then((res) => {
      assert.ok(!res.failures.length)
    }).catch(() => {
      assert.ok(false)
    })
  })
})
