import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'

import Helmet from 'react-helmet'

const Root = () => {
  return (
    <div>
      <Helmet title={'My App'} />
      <h1>Hello, world!</h1>
    </div>
  )
}

const hooks = {
  fetch: ({
    dispatch,
    state
  }) => Promise.all([])
}

const mapStateToProps = () => ({})

export default compose(
  connect(mapStateToProps),
  provideHooks(hooks)
)(Root)
