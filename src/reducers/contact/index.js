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
  CONTACT_INPUT_CHANGE,
  CONTACT_SUBMIT
} from 'actions/contact'

export const initialState = {
  name: '',
  email: '',
  subject: '',
  body: '',
  request: requestState
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case CONTACT_INPUT_CHANGE:
      return handleInputChange(state, payload)

    case `${CONTACT_SUBMIT}_${PENDING}`:
      return handlePendingRequest(state)

    case `${CONTACT_SUBMIT}_${FULFILLED}`:
      return handleFinishedRequest(initialState, action)

    case `${CONTACT_SUBMIT}_${REJECTED}`:
      return handleFinishedRequest(state, action)

    default:
      return state
  }
}

export default reducer
