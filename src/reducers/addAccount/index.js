import {
  requestState,
  handleFinishedRequest,
  handlePendingRequest
} from 'reducers/common'

import {
  PENDING,
  FULFILLED,
  REJECTED
} from 'redux-promise-middleware'

import {
  GET_FAST_LINK_PARAMETERS
} from 'actions/addAccount'

export const initialState = {
  fastlink: requestState
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case `${GET_FAST_LINK_PARAMETERS}_${PENDING}`:
      return handlePendingRequest(state, 'fastlink')

    case `${GET_FAST_LINK_PARAMETERS}_${FULFILLED}`:
    case `${GET_FAST_LINK_PARAMETERS}_${REJECTED}`:
      return handleFinishedRequest(state, action, 'fastlink')

    default:
      return state
  }
}

export default reducer
