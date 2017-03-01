import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Helmet from 'react-helmet'

const hooks = {
  fetch ({
    dispatch,
    state
  }) {
    return Promise.all([])
  }
}

const mapState = () => ({})

const Root = () => {
  return (
    <div>
      <Helmet
        title={'My App'}
      />
      <h1>Hello, world!</h1>
    </div>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(Root)
