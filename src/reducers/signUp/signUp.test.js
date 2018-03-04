import { Reducer } from 'redux-testkit'
import { unknownAction } from 'utils/test'

import reducer, { initialState } from './index'

import {
  SIGN_UP_INPUT_CHANGE,
  SIGN_UP_SUBMIT,
  inputChange,
  // submit
} from 'actions/signUp'

// TODO: Add test for submit

describe('Reducers: signUp', () => {
  test('should return the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  test('should return the current state', () => {
    Reducer(reducer).expect(unknownAction).toReturnState(initialState)
  })
})

describe(`Reducers: signUp - ${SIGN_UP_INPUT_CHANGE}`, () => {
  const input = {
    name: 'firstName',
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
      firstName: 'old value'
    }

    Reducer(reducer).withState(state).expect(action).toReturnState(expected)
  })
})

describe(`Reducers: signUp - ${SIGN_UP_SUBMIT}`, () => {
})