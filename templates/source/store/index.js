import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers'

const middleware = process.env.NODE_ENV === 'production'
  ? [thunk]
  : [thunk, createLogger()]

export const configureStore = (initialState) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  )
}

export default configureStore({})
