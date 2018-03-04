import { Reducer } from 'redux-testkit'
import { unknownAction } from 'utils/test'

import reducer, { initialState } from './index'

import {
  MESSAGES_ADD,
  messagesAdd
} from 'actions/messages'

describe('Reducers: messages', () => {
  test('should return the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  test('should return the current state', () => {
    Reducer(reducer).expect(unknownAction).toReturnState(initialState)
  })
})

describe(`Reducers: messages - ${MESSAGES_ADD}`, () => {
  const message = {
    type: null,
    text: 'sample'
  }

  const action = messagesAdd(message)

  const expected = [
    ...initialState,
    message
  ]

  test('should handle action on initial state', () => {
    Reducer(reducer).expect(action).toReturnState(expected)
  })

  test('should handle action on existing state', () => {
    const state = [
      message,
      message
    ]

    const expected = [
      ...state,
      message
    ]

    Reducer(reducer).withState(state).expect(action).toReturnState(expected)
  })
})
