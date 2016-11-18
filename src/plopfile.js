import generators from './generators'
import forEach from 'lodash/forEach'

module.exports = plop => forEach(generators, g => g(plop))

