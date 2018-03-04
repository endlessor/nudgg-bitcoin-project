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
  LOGIN_INPUT_CHANGE,
  LOGIN_SUBMIT
} from 'actions/login'

export const initialState = {
  email: '',
  password: '',
  remember: false,
  request: requestState
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case LOGIN_INPUT_CHANGE:
      return handleInputChange(state, payload)

    case `${LOGIN_SUBMIT}_${PENDING}`:
      return handlePendingRequest(state)

    case `${LOGIN_SUBMIT}_${FULFILLED}`:
    case `${LOGIN_SUBMIT}_${REJECTED}`:
      return handleFinishedRequest(state, action)

    default:
      return state
  }
}

export default reducer
