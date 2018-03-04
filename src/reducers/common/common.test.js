import {
  requestState,
  handleInputChange,
  handlePendingRequest,
  handleFinishedRequest
} from 'reducers/common'

describe('Reducers: requestState', () => {
  test('should be an object', () => {
    expect(requestState).toBeInstanceOf(Object)
  })

  test('should contain the specified shape', () => {
    expect(requestState.data).toBeInstanceOf(Object)
    expect(requestState.isError).toBeFalsy()
    expect(requestState.isPending).toBeFalsy()
  })
})

describe('Reducers: handleInputChange', () => {
  const state = {
    firstName: 'sample'
  }

  const payload = {
    name: 'firstName',
    value: 'modified'
  }

  const expected = {
    ...state,
    [payload.name]: payload.value
  }

  const modifiedState = expected

  test('should handle action on initial state', () => {
    expect(handleInputChange(state, payload)).toEqual(expected)
  })

  test('should handle action on existing state', () => {
    expect(handleInputChange(modifiedState, payload)).toEqual(expected)
  })
})

describe('Reducers: handlePendingRequest', () => {
  test('should handle action', () => {
    const state = {
      request: requestState
    }

    const expected = {
      request: {
        ...requestState,
        isPending: true
      }
    }

    expect(handlePendingRequest(state)).toEqual(expected)
  })

  test('should handle action with custom key', () => {
    const customKey = 'customKey'

    const state = {
      [customKey]: requestState
    }

    const expected = {
      [customKey]: {
        ...requestState,
        isPending: true
      }
    }

    expect(handlePendingRequest(state, customKey)).toEqual(expected)
  })
})

describe('Reducers: handleFinishedRequest - success', () => {
  const action = {
    error: false,
    payload: {
      key: 'value'
    }
  }

  const request = {
    ...requestState,
    data: action.payload,
    isError: false
  }

  test('should handle action', () => {
    const state = {
      request: requestState
    }

    const expected = {
      request
    }

    expect(handleFinishedRequest(state, action)).toEqual(expected)
  })

  test('should handle action with custom key', () => {
    const customKey = 'customKey'

    const state = {
      [customKey]: requestState
    }

    const expected = {
      [customKey]: request
    }

    expect(handleFinishedRequest(state, action, customKey)).toEqual(expected)
  })
})

describe('Reducers: handleFinishedRequest - error', () => {
  const action = {
    error: true,
    payload: {
      key: 'value'
    }
  }

  const request = {
    ...requestState,
    data: action.payload,
    isError: true
  }

  test('should handle action', () => {
    const state = {
      request: requestState
    }

    const expected = {
      request
    }

    expect(handleFinishedRequest(state, action)).toEqual(expected)
  })

  test('should handle action with custom key', () => {
    const customKey = 'customKey'

    const state = {
      [customKey]: requestState
    }

    const expected = {
      [customKey]: request
    }

    expect(handleFinishedRequest(state, action, customKey)).toEqual(expected)
  })
})