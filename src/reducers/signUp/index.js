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
  SIGN_UP_INPUT_CHANGE,
  SIGN_UP_SUBMIT,
  SIGN_UP_RESEND_EMAIL,
  SIGN_UP_ACTIVATE_ACCOUNT
} from 'actions/signUp'

const RESEND_KEY = 'request_resend'
export const ACTIVATE_KEY = 'request_activate'

export const initialState = {
  firstName: '',
  lastName: '',
  dob: '',
  email: '',
  phoneNumber: '',
  password: '',
  terms: false,
  request: requestState,
  [RESEND_KEY]: requestState,
  [ACTIVATE_KEY]: requestState
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case SIGN_UP_INPUT_CHANGE:
      return handleInputChange(state, payload)

    case `${SIGN_UP_SUBMIT}_${PENDING}`:
      return handlePendingRequest(state)

    case `${SIGN_UP_SUBMIT}_${FULFILLED}`:
    case `${SIGN_UP_SUBMIT}_${REJECTED}`:
      return handleFinishedRequest(state, action)

    case `${SIGN_UP_RESEND_EMAIL}_${PENDING}`:
      return handlePendingRequest(state, RESEND_KEY)

    case `${SIGN_UP_RESEND_EMAIL}_${FULFILLED}`:
    case `${SIGN_UP_RESEND_EMAIL}_${REJECTED}`:
      return handleFinishedRequest(state, action, RESEND_KEY)

    case `${SIGN_UP_ACTIVATE_ACCOUNT}_${PENDING}`:
      return handlePendingRequest(state, ACTIVATE_KEY)

    case `${SIGN_UP_ACTIVATE_ACCOUNT}_${FULFILLED}`:
    case `${SIGN_UP_ACTIVATE_ACCOUNT}_${REJECTED}`:
      return handleFinishedRequest(state, action, ACTIVATE_KEY)

    default:
      return state
  }
}

export default reducer
