import { isActionLogout } from 'utils/actions'

// Use this instead of: redux-batched-updates
export const BATCH_ACTIONS = 'BATCH_ACTIONS'

export const batchActions = (...actions) => ({
  type: BATCH_ACTIONS,
  payload: {
    actions
  }
})

export const enableBatching = (reducer) => {
  return (state, action) => {
    const {
      type,
      payload
    } = action

    switch (type) {
      case BATCH_ACTIONS:
        return payload.actions.reduce(reducer, state)

      default:
        return reducer(state, action)
    }
  }
}

export const resetStoreMiddleware = (reducer) => {
  return (state, action) => {
    if (isActionLogout(action)) {
      return reducer(undefined, action)
    }

    return reducer(state, action)
  }
}