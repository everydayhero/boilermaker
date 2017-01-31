import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

// @reducers

const middleware = process.env.NODE_ENV === 'production'
  ? [thunk]
  : [thunk, createLogger()]

export const configureStore = (initialState = {}) => (
  createStore(
    combineReducers({
    }),
    initialState,
    applyMiddleware(...middleware)
  )
)

export default configureStore({})
