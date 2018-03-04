import { Selector } from 'redux-testkit'

import {
  getLastMessage
} from './index'

describe('Selectors: messages/getLastMessage', () => {
  const message = {
    type: null,
    text: 'sample'
  }

  test('should return NULL when the array is empty', () => {
    const initialState = {
      messages: []
    }

    Selector(getLastMessage).expect(initialState).toReturn(null)
  })

  test('should return the last message', () => {
    const state = {
      messages: [0, 1, 2, message]
    }

    Selector(getLastMessage).expect(state).toReturn(message)
  })
})