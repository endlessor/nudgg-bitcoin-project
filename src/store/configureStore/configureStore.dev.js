import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import combinedReducers from 'reducers'

import thunk from 'redux-thunk'
// import createDebounce from 'redux-debounced'
import promiseMiddleware from 'redux-promise-middleware'

import { autoRehydrate } from 'redux-persist'

// Dev only middleware
import { createLogger } from 'redux-logger'
import immutableStateInvariant from 'redux-immutable-state-invariant'

// import { collapsed } from 'utils/store'

// TODO: Implement dev tools in all browsers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [
  thunk,
  // createDebounce(),
  promiseMiddleware(),
  createLogger({
    collapsed: true // collapsed
  }),
  immutableStateInvariant()
]

const configureStore = (initialStore) => createStore(
  combinedReducers,
  initialStore,
  composeEnhancers(
    applyMiddleware(...middleware),
    autoRehydrate()
  )
)

export default configureStore
