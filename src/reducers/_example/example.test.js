/*
DELETE THE COMMENTS WHEN USING THIS BOILERPLATE
*/

import { Reducer } from 'redux-testkit'
import { unknownAction } from 'utils/test'

import reducer, { initialState } from './index'

import {
  VIEW_ACTION,
  viewAction
} from 'actions/_example'

describe('Reducers: example', () => {
  test('should return the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  test('should return the current state', () => {
    Reducer(reducer).expect(unknownAction).toReturnState(initialState)
  })
})

describe(`Reducers: example - ${VIEW_ACTION}`, () => {
  const value = 'value'
  const action = viewAction(value)
  const expected = {
    key: value
  }

  test('should handle action on initial state', () => {
    Reducer(reducer).expect(action).toReturnState(expected)
  })

  test('should handle action on existing state', () => {
    const state = {
      key: 'old value'
    }

    Reducer(reducer).withState(state).expect(action).toReturnState(expected)
  })
})
