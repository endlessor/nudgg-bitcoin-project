import {
  requestState,
  // handleInputChange,
  handlePendingRequest,
  handleFinishedRequest
} from 'reducers/common'

import {
  PENDING,
  FULFILLED,
  REJECTED
} from 'redux-promise-middleware'

import update from 'immutability-helper'

import {
  HUB_GET_GOAL,
  HUB_GET_BALANCE,
  HUB_GET_ACCOUNTS,
  HUB_GET_ACCOUNT_BREAKDOWN,
  HUB_RESET_ACCOUNT_BREAKDOWN,
  HUB_SET_ACCOUNT
} from 'actions/hub'

export const initialState = {
  request: requestState,
  balance: {},
  accounts: {},
  breakdown: {},
  account: {}
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    // payload
  } = action

  switch (type) {
    case `${HUB_GET_GOAL}_${PENDING}`:
      return handlePendingRequest(state)

    case `${HUB_GET_GOAL}_${FULFILLED}`:
    case `${HUB_GET_GOAL}_${REJECTED}`:
      return handleFinishedRequest(state, action)

    case `${HUB_GET_BALANCE}_${PENDING}`:
      return handlePendingRequest(state, 'balance')

    case `${HUB_GET_BALANCE}_${FULFILLED}`:
    case `${HUB_GET_BALANCE}_${REJECTED}`:
      return handleFinishedRequest(state, action, 'balance')

    case `${HUB_GET_ACCOUNTS}_${PENDING}`:
      return handlePendingRequest(state, 'accounts')

    case `${HUB_GET_ACCOUNTS}_${FULFILLED}`:
    case `${HUB_GET_ACCOUNTS}_${REJECTED}`:
      return handleFinishedRequest(state, action, 'accounts')

    case `${HUB_GET_ACCOUNT_BREAKDOWN}_${PENDING}`:
      return handlePendingRequest(state, 'breakdown')

    case `${HUB_RESET_ACCOUNT_BREAKDOWN}`:
      return update(state, {
        breakdown: {
          $set: requestState
        }
      })

    case `${HUB_GET_ACCOUNT_BREAKDOWN}_${FULFILLED}`:
    case `${HUB_GET_ACCOUNT_BREAKDOWN}_${REJECTED}`:
      return handleFinishedRequest(state, action, 'breakdown')

    case `${HUB_SET_ACCOUNT}`:
      return update(state, {
        account: {
          $set: action.payload
        }
      })

    default:
      return state
  }
}

export default reducer
