import { inputChangeHOC } from 'actions/common'

import {
  submitService,
  resendEmailService,
  activateAccountService
} from 'services/signUp'

// Normal actions
export const SIGN_UP_INPUT_CHANGE = 'SIGN_UP_INPUT_CHANGE'

// Services as actions
export const SIGN_UP_SUBMIT = 'SIGN_UP_SUBMIT'
export const SIGN_UP_RESEND_EMAIL = 'SIGN_UP_RESEND_EMAIL'
export const SIGN_UP_ACTIVATE_ACCOUNT = 'SIGN_UP_ACTIVATE_ACCOUNT'

export const inputChange = inputChangeHOC(SIGN_UP_INPUT_CHANGE)

export const submit = (fields) => ({
  type: SIGN_UP_SUBMIT,
  payload: submitService(fields)
})

export const resendEmail = (email, token) => ({
  type: SIGN_UP_RESEND_EMAIL,
  payload: resendEmailService(email, token)
})

export const activateAccount = (token) => ({
  type: SIGN_UP_ACTIVATE_ACCOUNT,
  payload: activateAccountService(token)
})