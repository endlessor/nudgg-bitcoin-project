import {
  requestState,
  handleInputChange,
  handlePendingRequest,
  handleFinishedRequest
} from 'reducers/common'

import {
  PENDING,
  FULFILLED,
  REJECTED
} from 'redux-promise-middleware'

import {
  FORGOTTEN_PASSWORD_INPUT_CHANGE,
  FORGOTTEN_PASSWORD_SUBMIT
} from 'actions/forgottenPassword'

export const initialState = {
  email: '',
  request: requestState
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case FORGOTTEN_PASSWORD_INPUT_CHANGE:
      return handleInputChange(state, payload)

    case `${FORGOTTEN_PASSWORD_SUBMIT}_${PENDING}`:
      return handlePendingRequest(state)

    case `${FORGOTTEN_PASSWORD_SUBMIT}_${FULFILLED}`:
    case `${FORGOTTEN_PASSWORD_SUBMIT}_${REJECTED}`:
      return handleFinishedRequest(state, action)

    default:
      return state
  }
}

export default reducer
