import { inputChangeHOC } from 'actions/common'

import { loginService } from 'services/login'

// Normal actions
export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE'

// Services as actions
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT'

export const inputChange = inputChangeHOC(LOGIN_INPUT_CHANGE)

export const submit = (fields) => ({
  type: LOGIN_SUBMIT,
  payload: loginService(fields)
})