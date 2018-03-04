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
  ADD_GOAL_INPUT_CHANGE,
  ADD_GOAL_SUBMIT
} from 'actions/addGoal'

export const initialState = {
  goalType: '',
  goalName: '',
  goalAmount: '',
  request: requestState
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case ADD_GOAL_INPUT_CHANGE:
      return handleInputChange(state, payload)

    case `${ADD_GOAL_SUBMIT}_${PENDING}`:
      return handlePendingRequest(state)

    case `${ADD_GOAL_SUBMIT}_${FULFILLED}`:
    case `${ADD_GOAL_SUBMIT}_${REJECTED}`:
      return handleFinishedRequest(state, action)

    default:
      return state
  }
}

export default reducer
