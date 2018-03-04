import { isFSA } from 'flux-standard-action'

import {
  BATCH_ACTIONS,
  batchActions,
  enableBatching,
  resetStoreMiddleware
} from './index'

import { USER_LOGOUT } from 'actions/user'

const MY_ACTION = 'MY_ACTION'

const initialState = {
  num: 0
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case MY_ACTION:
      return {
        num: payload.num
      }

    default:
      return state
  }
}

describe(`Utils: redux/batchActions`, () => {
  const batchedAction = {
    type: 'MY-ACTION',
    payload: {}
  }

  test('should return true when the action is following flux standard', () => {
    const action = batchActions()

    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing the passed payload', () => {
    const actions = [batchedAction, batchedAction]

    const expected = {
      type: BATCH_ACTIONS,
      payload: {
        actions
      }
    }

    expect(batchActions(batchedAction, batchedAction)).toEqual(expected)
  })
})

describe('Utils: redux/enableBatching', () => {
  const firstAction = {
    type: MY_ACTION,
    payload: {
      data: 1
    }
  }

  const secondAction = {
    type: MY_ACTION,
    payload: {
      data: 2
    }
  }

  const batchedReducer = enableBatching(reducer)

  test('should return a function wrapping the reducer', () => {
    expect(batchedReducer).toBeInstanceOf(Function)
  })

  test('should return the final state batching the passed actions', () => {
    const batchAction = batchActions(
      firstAction,
      secondAction
    )

    const expected = {
      ...initialState,
      num: secondAction.payload.num
    }

    expect(batchedReducer(initialState, batchAction)).toEqual(expected)
  })

  test('should return the final state batching the passed actions', () => {
    const batchAction = batchActions(
      secondAction,
      firstAction
    )

    const expected = {
      ...initialState,
      num: firstAction.payload.num
    }

    expect(batchedReducer(initialState, batchAction)).toEqual(expected)
  })

  test('should return the final state batching the passed actions', () => {
    const batchAction = batchActions(
      secondAction,
      secondAction,
      firstAction,
      secondAction
    )

    const expected = {
      ...initialState,
      num: secondAction.payload.num
    }

    expect(batchedReducer(initialState, batchAction)).toEqual(expected)
  })
})

describe('Utils: redux/resetStoreMiddleware', () => {
  const reducer = (state) => state
  const mockupState = {}

  const wrappedReducer = resetStoreMiddleware(reducer)

  test('should return a wrapped reducer function', () => {
    expect(resetStoreMiddleware).toBeInstanceOf(Function)
  })

  test('should return the state because the action is not a logout ', () => {
    const action = {
      type: 'something'
    }

    expect(wrappedReducer(mockupState, action)).toEqual(mockupState)
  })

  test('should return the state because the action is not a logout ', () => {
    const action = {
      type: USER_LOGOUT
    }

    expect(wrappedReducer(mockupState, action)).toBe(undefined)
  })
})