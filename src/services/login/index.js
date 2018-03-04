import {
  post
} from 'utils/fetch'

import {
  LOGIN
} from 'services/types'

export const loginService = (fields) => {
  return post({
    url: LOGIN,
    body: fields
  })
}