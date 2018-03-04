import { inputChangeHOC } from 'actions/common'

import { addGoalService } from 'services/addGoal'

// Normal actions
export const ADD_GOAL_INPUT_CHANGE = 'ADD_GOAL_INPUT_CHANGE'

// Services as actions
export const ADD_GOAL_SUBMIT = 'ADD_GOAL_SUBMIT'

export const inputChange = inputChangeHOC(ADD_GOAL_INPUT_CHANGE)

export const submit = (fields, token) => ({
  type: ADD_GOAL_SUBMIT,
  payload: addGoalService(fields, token)
})
