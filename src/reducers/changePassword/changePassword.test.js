import { Reducer } from 'redux-testkit'
import { unknownAction } from 'utils/test'

import reducer, { initialState } from './index'

import {
  CHANGE_PASSWORD_INPUT_CHANGE,
  // CHANGE_PASSWORD_SUBMIT,
  inputChange,
  // submit
} from 'actions/changePassword'

// TODO: Add test for submit

describe('Reducers: changePassword', () => {
  test('should return the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  test('should return the current state', () => {
    Reducer(reducer).expect(unknownAction).toReturnState(initialState)
  })
})

describe(`Reducers: changePassword - ${CHANGE_PASSWORD_INPUT_CHANGE}`, () => {
  const input = {
    name: 'password',
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
      password: 'old value'
    }

    Reducer(reducer).withState(state).expect(action).toReturnState(expected)
  })
})