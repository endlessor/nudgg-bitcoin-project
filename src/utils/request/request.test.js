import {
  INVALID_FORMAT_MESSAGE,
  constructBaseUrl,
  constructUrl,
  constructAuthHeader,
  validateFormat,
  handleResponse,
  parseQuery
} from './index'

import API_URL from 'services/apiUrl'

describe('Utils: request/constructBaseUrl', () => {
  test('basic test', () => {
    const endpoint = 'test'
    const expected = `${API_URL}/${endpoint}`

    expect(constructBaseUrl(endpoint)).toBe(expected)
  })
})

describe('Utils: request/constructUrl', () => {
  test('should return the url', () => {
    const endpoint = 'test'
    const expected = `${API_URL}/${endpoint}`

    expect(constructUrl(endpoint)).toBe(expected)
  })

  test('should return the url appending the query parameters', () => {
    const endpoint = 'test'
    const params = {
      a: 1
    }
    const expected = `${API_URL}/${endpoint}?a=1`

    expect(constructUrl(endpoint, params)).toBe(expected)
  })

  test('should return the url appending the query parameters', () => {
    const endpoint = 'test'
    const params = {
      a: 1,
      b: 2
    }
    const expected = `${API_URL}/${endpoint}?a=1&b=2`

    expect(constructUrl(endpoint, params)).toBe(expected)
  })
})

describe('Utils: request/constructAuthHeader', () => {
  test('basic test', () => {
    const token = 'token'
    const expected = {
      'Authorization': token
    }

    expect(constructAuthHeader(token)).toEqual(expected)
  })
})

describe('Utils: request/validateFormat', () => {
  test('should return the payload because the payload is valid', () => {
    const payload = {
      error: true,
      data: {}
    }

    expect(validateFormat(payload)).resolves.toEqual(payload)
  })

  test('should return the payload because the payload is valid', () => {
    const payload = {
      error: false,
      data: {}
    }

    expect(validateFormat(payload)).resolves.toEqual(payload)
  })

  test('should return the payload because the payload is valid', () => {
    const payload = {
      error: true,
      data: []
    }

    expect(validateFormat(payload)).resolves.toEqual(payload)
  })

  test('should return the error message because the payload is invalid', () => {
    const payload = {
      error: true
    }

    expect(validateFormat(payload)).rejects.toEqual(INVALID_FORMAT_MESSAGE)
  })

  test('should return the error message because the payload is invalid', () => {
    const payload = {
      data: {}
    }

    expect(validateFormat(payload)).rejects.toEqual(INVALID_FORMAT_MESSAGE)
  })
})

describe('Utils: request/handleResponse', () => {
  test('should resolve the promise and return the response payload', () => {
    const data = {
      a: 1
    }

    const response = {
      error: false,
      data
    }

    expect(handleResponse(response)).resolves.toEqual(data)
  })

  test('should reject the promise and return the response message', () => {
    const message = 'Error message sample'

    const response = {
      error: true,
      data: {
        message
      }
    }

    expect(handleResponse(response)).rejects.toEqual(message)
  })
})

describe('Utils: request/handleResponse', () => {
  test('should resolve the promise and return the response payload', () => {
    const data = {
      a: 1
    }

    const response = {
      error: false,
      data
    }

    expect(handleResponse(response)).resolves.toEqual(data)
  })

  test('should reject the promise and return the response message', () => {
    const message = 'Error message sample'

    const response = {
      error: true,
      data: {
        message
      }
    }

    expect(handleResponse(response)).rejects.toEqual(message)
  })
})

describe('Utils: request/parseQuery', () => {
  test('should return an empty string when the passed argument is not an object', () => {
    const params = []
    const expected = ''

    expect(parseQuery(params)).toBe(expected)
  })

  test('should return an empty string when the passed object is empty', () => {
    const params = {}
    const expected = ''

    expect(parseQuery(params)).toBe(expected)
  })

  test('should return the formatted query parameters', () => {
    const params = {
      a: 1
    }
    const expected = 'a=1'

    expect(parseQuery(params)).toBe(expected)
  })

  test('should return the formatted query parameters', () => {
    const params = {
      a: 1,
      b: 2
    }
    const expected = 'a=1&b=2'

    expect(parseQuery(params)).toBe(expected)
  })

  test('should return the formatted query parameters', () => {
    const params = {
      a: 1,
      b: 'test'
    }
    const expected = 'a=1&b=test'

    expect(parseQuery(params)).toBe(expected)
  })
})