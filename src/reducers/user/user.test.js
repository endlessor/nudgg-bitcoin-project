import { Reducer } from 'redux-testkit'
import { unknownAction } from 'utils/test'

import reducer, { initialState } from './index'

import {
  USER_LOGIN,
  USER_LOGOUT,
  login,
  logout
} from 'actions/user'

import { REHYDRATE } from 'redux-persist/constants'

describe('Reducers: user', () => {
  test('should return the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  test('should return the current state', () => {
    Reducer(reducer).expect(unknownAction).toReturnState(initialState)
  })
})

describe(`Reducers: user - ${REHYDRATE}`, () => {
  const token = 'my-token'

  const persistedData = {
    user: {
      token
    }
  }

  const action = {
    type: REHYDRATE,
    payload: persistedData
  }

  const expected = {
    ...initialState,
    token,
    isLoaded: true
  }

  test('should handle action on initial state', () => {
    Reducer(reducer).expect(action).toReturnState(expected)
  })
})

describe(`Reducers: user - ${USER_LOGIN}`, () => {
  const token = 'my token'
  const details = {
    firstName: 'sample'
  }

  const action = login(token, details)

  const expected = {
    ...initialState,
    token,
    details,
    isLogged: true
  }

  test('should handle action on initial state', () => {
    Reducer(reducer).expect(action).toReturnState(expected)
  })
})

describe(`Reducers: user - ${USER_LOGOUT}`, () => {
  const action = logout()

  const expected = {
    ...initialState,
    isLoaded: true
  }

  test('should handle action on initial state', () => {
    Reducer(reducer).expect(action).toReturnState(expected)
  })
})