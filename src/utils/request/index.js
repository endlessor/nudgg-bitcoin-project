import { isObject } from 'utils/object'
import { isArray } from 'utils/array'
import { isBoolean } from 'utils/boolean'

import API_URL from 'services/apiUrl'

export const INVALID_FORMAT_MESSAGE = 'fetch: Invalid request format!'

export const constructBaseUrl = url => `${API_URL}/${url}`

export const constructUrl = (url, query) => {
  const fullUrl = constructBaseUrl(url)
  const queryString = parseQuery(query)

  if (!queryString) return fullUrl

  return `${fullUrl}?${queryString}`
}

export const constructAuthHeader = (token) => ({
  'Authorization': token
})

export const validateFormat = (response) => {
  const {
    error,
    data
  } = response

  const isValid =
    isObject(response) &&
    (isObject(data) || isArray(data)) &&
    isBoolean(error)

  if (isValid) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(INVALID_FORMAT_MESSAGE, response)
  }
}

export const handleResponse = (response) => {
  const {
    error,
    data
  } = response

  const isSuccess = !error

  const meta = {
    data,
    error,
    response
  }

  if (isSuccess) {
    return Promise.resolve(data, meta)
  } else {
    const { message } = data
    return Promise.reject(message, meta)
  }
}

const esc = encodeURIComponent

export const parseQuery = (params) => {
  if (!isObject(params)) return ''

  return Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&')
}