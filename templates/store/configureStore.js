import { createStore, combineReducers } from 'redux'

// Customisation point for a Redux app - import and combine your reducers here
// and they'll be available in the store passed to the Root container component.
export default () => {
  createStore(combineReducers())
}
