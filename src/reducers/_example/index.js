/*
All reducers use 'immutability-helper' utility to update the state without mutations.
Future improvements will recommend using Immutable.js

DELETE THE COMMENTS WHEN USING THIS BOILERPLATE
*/

import update from 'immutability-helper'

import { VIEW_ACTION } from 'actions/_example'

export const initialState = {
  key: ''
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case VIEW_ACTION:
      return update(state, {
        key: {
          $set: payload.value
        }
      })

    default:
      return state
  }
}

export default reducer
