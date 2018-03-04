import { Reducer } from 'redux-testkit'
import { unknownAction } from 'utils/test'

import reducer, { initialState } from './index'

import {
  CONTACT_INPUT_CHANGE,
  // CONTACT_SUBMIT,
  inputChange,
  // submit
} from 'actions/contact'

// TODO: Add test for submit

describe('Reducers: contact', () => {
  test('should return the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  test('should return the current state', () => {
    Reducer(reducer).expect(unknownAction).toReturnState(initialState)
  })
})

describe(`Reducers: contact - ${CONTACT_INPUT_CHANGE}`, () => {
  const input = {
    name: 'name',
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
      name: 'old value'
    }

    Reducer(reducer).withState(state).expect(action).toReturnState(expected)
  })
})