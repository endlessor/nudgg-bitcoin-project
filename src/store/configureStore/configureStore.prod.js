import {
  createStore,
  applyMiddleware
} from 'redux'

import combinedReducers from 'reducers'

import thunk from 'redux-thunk'
// import createDebounce from 'redux-debounced'
import promiseMiddleware from 'redux-promise-middleware'

import { autoRehydrate } from 'redux-persist'

const middleware = [
  thunk,
  // createDebounce(),
  promiseMiddleware()
]

const configureStore = (initialStore) => createStore(
  combinedReducers,
  initialStore,
  applyMiddleware(...middleware),
  autoRehydrate()
)

export default configureStore
