import {
  post
} from 'utils/fetch'

import {
  CHANGE_PASSWORD
} from 'services/types'

export const changePasswordService = (password, token) => {
  return post({
    url: CHANGE_PASSWORD,
    body: {
      password
    },
    token
  })
}