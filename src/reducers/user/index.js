import update from 'immutability-helper'

import { REHYDRATE } from 'redux-persist/constants'

import {
  USER_LOGIN,
  USER_LOGOUT
} from 'actions/user'

export const initialState = {
  token: null,
  details: {},
  isLogged: false,
  isLoaded: false,
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case REHYDRATE:
      const { user = {} } = payload
      const { token = null } = user

      return update(state, {
        token: {
          $set: token
        },
        isLoaded: {
          $set: true
        }
      })

    case USER_LOGIN:
      return update(state, {
        token: {
          $set: payload.token
        },
        details: {
          $set: payload.details
        },
        isLogged: {
          $set: true
        }
      })

    case USER_LOGOUT:
      return {
        ...state,
        ...initialState,
        isLoaded: true
      }

    default:
      return state
  }
}

export default reducer
