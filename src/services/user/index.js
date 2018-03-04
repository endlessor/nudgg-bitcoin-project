import {
  post
} from 'utils/fetch'

import {
  VERIFY_TOKEN
} from 'services/types'

export const verifyTokenService = (token) => {
  return post({
    url: VERIFY_TOKEN,
    token
  })
}
