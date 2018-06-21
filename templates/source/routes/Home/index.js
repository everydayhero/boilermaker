import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
{{#if constructicon}}
import * as traits from '../../lib/traits'
{{/if}}

import Helmet from 'react-helmet'
{{#if constructicon}}
import TraitsProvider from 'constructicon/traits-provider'
{{/if}}

const Root = () => {
  return (
    {{#if constructicon}}<TraitsProvider traits={traits}>{{/if}}
      <div>
        <Helmet title={'My App'} />
        <h1>Hello, world!</h1>
      </div>
    {{#if constructicon}}</TraitsProvider>{{/if}}
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
