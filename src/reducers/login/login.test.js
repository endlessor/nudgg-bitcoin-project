import { Reducer } from 'redux-testkit'
import { unknownAction } from 'utils/test'

import reducer, { initialState } from './index'

import {
  LOGIN_INPUT_CHANGE,
  LOGIN_SUBMIT,
  inputChange,
  // loginSubmit
} from 'actions/login'

// TODO: Add test for submit

describe('Reducers: login', () => {
  test('should return the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  test('should return the current state', () => {
    Reducer(reducer).expect(unknownAction).toReturnState(initialState)
  })
})

describe(`Reducers: login - ${LOGIN_INPUT_CHANGE}`, () => {
  const input = {
    name: 'email',
    value: 'value'
  }

  const action = inputChange(input)

  const expected = {
    ...initialState,
    [input.name]: input.value
  }

  test('should handle action on initial state', () => {
    Reducer(reducer).expect(action).toReturnState(expected)
  })

  test('should handle action on existing state', () => {
    const state = {
      ...initialState,
      email: 'old value'
    }

    Reducer(reducer).withState(state).expect(action).toReturnState(expected)
  })
})

describe(`Reducers: login - ${LOGIN_SUBMIT}`, () => {
})