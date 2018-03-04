import {
  post
} from 'utils/fetch'

import {
  FORGOTTEN_PASSWORD
} from 'services/types'

export const forgottenPasswordService = (email) => {
  return post({
    url: FORGOTTEN_PASSWORD,
    body: {
      email
    }
  })
}