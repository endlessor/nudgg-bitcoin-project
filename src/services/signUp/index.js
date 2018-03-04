import {
  post
} from 'utils/fetch'

import {
  SIGN_UP,
  RESEND_EMAIL,
  ACTIVATE_ACCOUNT
} from 'services/types'

export const submitService = (fields) => {
  return post({
    url: SIGN_UP,
    body: fields
  })
}

export const resendEmailService = (email, token) => {
  return post({
    url: RESEND_EMAIL,
    body: {
      email
    },
    token
  })
}

export const activateAccountService = (token) => {
  return post({
    url: ACTIVATE_ACCOUNT,
    token
  })
}