import { inputChangeHOC } from 'actions/common'

import { changePasswordService } from 'services/changePassword'

// Normal actions
export const CHANGE_PASSWORD_INPUT_CHANGE = 'CHANGE_PASSWORD_INPUT_CHANGE'

// Services as actions
export const CHANGE_PASSWORD_SUBMIT = 'CHANGE_PASSWORD_SUBMIT'

export const inputChange = inputChangeHOC(CHANGE_PASSWORD_INPUT_CHANGE)

export const submit = (password, token) => ({
  type: CHANGE_PASSWORD_SUBMIT,
  payload: changePasswordService(password, token)
})