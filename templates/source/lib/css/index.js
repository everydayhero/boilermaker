import cxsync from 'cxsync'
import prefixer from 'inline-style-prefixer/static'
import { compose } from 'redux'
import merge from 'lodash.merge'

const mergeStyles = (...styles) => (
  styles.reduce((acc, style) => merge({}, acc, style))
)

const cxsyncClasses = (styles) => {
  if (styles.length <= 1) {
    return styles
  }
  return Object.keys(styles).map((key) => (
    cxsync({[key]: styles[key]})
  )).join(' ')
}

export default compose(
  cxsyncClasses,
  prefixer,
  mergeStyles
)

