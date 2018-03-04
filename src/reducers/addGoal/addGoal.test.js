import { Reducer } from 'redux-testkit'
import { unknownAction } from 'utils/test'

import reducer, { initialState } from './index'

import {
  ADD_GOAL_INPUT_CHANGE,
  // ADD_GOAL_SUBMIT,
  inputChange,
  // submit
} from 'actions/addGoal'

// TODO: Add test for submit

describe('Reducers: addGoal', () => {
  test('should return the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  test('should return the current state', () => {
    Reducer(reducer).expect(unknownAction).toReturnState(initialState)
  })
})

describe(`Reducers: addGoal - ${ADD_GOAL_INPUT_CHANGE}`, () => {
  const input = {
    name: 'goalName',
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
      goalName: 'old value'
    }

    Reducer(reducer).withState(state).expect(action).toReturnState(expected)
  })
})