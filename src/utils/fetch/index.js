import 'whatwg-fetch'

import {
  constructUrl,
  constructAuthHeader,
  validateFormat,
  handleResponse
} from 'utils/request'

import { hasKeys } from 'utils/object'

import { GET } from 'data/methods'

export const WRONG_PARAMS = 'fetch: Query parameters only for GET requests!'

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const parseFromJSON = resp => resp.json()

const request = (props) => {
  const {
    url: path,
    method,
    headers: specifiedHeaders,
    body: bodyObject,
    query,
    token
  } = props

  if (method !== GET && hasKeys(query)) {
    console.error(WRONG_PARAMS)
  }

  const url = constructUrl(path, query)

  const headers = Object.assign({},
    defaultHeaders,
    specifiedHeaders,
    token
      ? constructAuthHeader(token)
      : null
  )

  const body = JSON.stringify(bodyObject)

  const params = {
    method,
    headers,
    body
  }

  return fetch(url, params)
    .then(parseFromJSON)
    .then(validateFormat)
    .then(handleResponse)
}

export const get = props => request({ ...props, method: 'GET' })
export const head = props => request({ ...props, method: 'HEAD' })
export const post = props => request({ ...props, method: 'POST' })
export const put = props => request({ ...props, method: 'PUT' })
export const patch = props => request({ ...props, method: 'PATCH' })

// Intentional typo in the name of the function because delete is a reserved word
export const delet = props => request({ ...props, method: 'DELETE' })
