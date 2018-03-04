import { inputChangeHOC } from 'actions/common'

import { forgottenPasswordService } from 'services/forgottenPassword'

// Normal actions
export const FORGOTTEN_PASSWORD_INPUT_CHANGE = 'FORGOTTEN_PASSWORD_INPUT_CHANGE'

// Services as actions
export const FORGOTTEN_PASSWORD_SUBMIT = 'FORGOTTEN_PASSWORD_SUBMIT'

export const inputChange = inputChangeHOC(FORGOTTEN_PASSWORD_INPUT_CHANGE)

export const submit = (email) => ({
  type: FORGOTTEN_PASSWORD_SUBMIT,
  payload: forgottenPasswordService(email)
})
