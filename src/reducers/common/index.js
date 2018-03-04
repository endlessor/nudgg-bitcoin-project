import update from 'immutability-helper'

const DEFAULT_KEY = 'request'

export const requestState = {
  data: {},
  isError: false,
  isPending: false
}

export const handleInputChange = (state, payload) => {
  const {
    name,
    value
  } = payload

  return update(state, {
    [name]: {
      $set: value
    }
  })
}

export const handlePendingRequest = (state, key = DEFAULT_KEY) => {
  return update(state, {
    [key]: {
      $set: {
        ...requestState,
        isPending: true
      }
    }
  })
}

export const handleFinishedRequest = (state, action, key = DEFAULT_KEY) => {
  const {
    payload,
    error: isError = false
  } = action

  return update(state, {
    [key]: {
      $set: {
        ...requestState,
        data: payload,
        isError,
        isPending: false
      }
    }
  })
}
