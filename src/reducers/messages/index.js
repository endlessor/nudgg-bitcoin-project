import update from 'immutability-helper'

import {
  MESSAGES_ADD
} from 'actions/messages'

import { isObject } from 'utils/object'

export const initialState = []

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case MESSAGES_ADD:
      const text = !isObject(payload.text)
        ? payload.text
        : 'Bad error message!'

      return update(state, {
        $push: [{
          text,
          type: payload.type
        }]
      })

    default:
      return state
  }
}

export default reducer
