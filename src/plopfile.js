import generators from './generators'
import forEach from 'lodash/forEach'

module.exports = plop => {
  plop.addPrompt('directory', require('inquirer-directory'))

  forEach(generators, g => g(plop))
}
