import {
  post
} from 'utils/fetch'

import {
  CONTACT
} from 'services/types'

export const contactService = (fields) => {
  return post({
    url: CONTACT,
    body: fields
  })
}