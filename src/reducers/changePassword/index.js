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
  CHANGE_PASSWORD_INPUT_CHANGE,
  CHANGE_PASSWORD_SUBMIT
} from 'actions/changePassword'

export const initialState = {
  password: '',
  confirmPassword: '',
  request: requestState
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case CHANGE_PASSWORD_INPUT_CHANGE:
      return handleInputChange(state, payload)

    case `${CHANGE_PASSWORD_SUBMIT}_${PENDING}`:
      return handlePendingRequest(state)

    case `${CHANGE_PASSWORD_SUBMIT}_${FULFILLED}`:
    case `${CHANGE_PASSWORD_SUBMIT}_${REJECTED}`:
      return handleFinishedRequest(state, action)

    default:
      return state
  }
}

export default reducer
