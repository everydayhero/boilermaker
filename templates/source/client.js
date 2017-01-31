import React from 'react'
import routes from './routes'
import { createClient } from 'boiler-room-runner'
import { render } from 'react-dom'
import { configureStore } from './store'
import createLocals from './lib/createLocals'
import 'minimal.css'

if (typeof Promise === 'undefined') {
  require('es6-promise').polyfill()
}

const basepath = process.env.BASE_PATH
const initialState = JSON.parse(document.getElementById('initial-state').innerHTML)
const store = configureStore(initialState)
const App = createClient({ basepath, routes, store, createLocals })

render(<App />, document.getElementById('mount'))
