import React from 'react'
import { render } from 'react-dom'
import 'minimal.css'
import Page from './layouts/Page'

{{#if fetching}}
if (typeof Promise === 'undefined') {
  require('es6-promise').polyfill()
}

{{/if}}
render(<Page />, document.getElementById('mount'))
