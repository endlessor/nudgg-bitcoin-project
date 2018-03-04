import {
  get
} from 'utils/fetch'

import {
  FAST_LINK
} from 'services/types'

export const getFastLinkParametersService = (token) => {
  return get({
    url: FAST_LINK,
    token
  })
}
