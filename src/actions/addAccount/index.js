import {
  getFastLinkParametersService
} from 'services/addAccount'

export const GET_FAST_LINK_PARAMETERS = 'GET_FAST_LINK_PARAMETERS'

export const getFastLinkParameters = (token) => ({
  type: GET_FAST_LINK_PARAMETERS,
  payload: getFastLinkParametersService(token)
})
