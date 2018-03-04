import { isFSA } from 'flux-standard-action'

import { DEBOUNCE_DELAY } from 'data/delay'
import { cancelMeta } from 'utils/test'

import {
  debounceFactory,
  cancelDebounceFactory,
  isActionLogout
} from './index'

import { USER_LOGOUT } from 'actions/user'

const action = {
  type: 'my type',
  payload: {}
}

describe('Utils: actions/debounceFactory', () => {
  test('should return true when the action is following flux standard', () => {
    const newAction = debounceFactory(action)

    expect(isFSA(newAction)).toBeTruthy()
  })

  test('should return the de-bounced action with additional meta properties', () => {
    const expected = {
      ...action,
      meta: {
        debounce: {
          time: DEBOUNCE_DELAY
        }
      }
    }

    expect(debounceFactory(action)).toEqual(expected)
  })

  test('should return the de-bounced action with additional meta properties and custom delay', () => {
    const customDelay = 500

    const expected = {
      ...action,
      meta: {
        debounce: {
          time: customDelay
        }
      }
    }

    expect(debounceFactory(action, customDelay)).toEqual(expected)
  })
})

describe('Utils: actions/cancelDebounceFactory', () => {
  test('should return true when the action is following flux standard', () => {
    const newAction = cancelDebounceFactory(action)

    expect(isFSA(newAction)).toBeTruthy()
  })

  test('should return the canceled action with additional meta properties', () => {
    const expected = {
      ...action,
      meta: cancelMeta
    }

    expect(cancelDebounceFactory(action)).toEqual(expected)
  })
})

describe('Utils: actions/isActionLogout', () => {
  test('should return true when the action is a logout', () => {
    const action = {
      type: USER_LOGOUT
    }

    expect(isActionLogout(action)).toBeTruthy()
  })

  test('should return false when the action is not a logout', () => {
    const action = {
      type: 'something random'
    }

    expect(isActionLogout(action)).toBeFalsy()
  })
})