import { isFSA } from 'flux-standard-action'

import { promiseMockup } from 'utils/test'

import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_VERIFY_TOKEN,
  login,
  logout,
  verifyToken
} from './index'

describe(`Actions: ${USER_LOGIN}`, () => {
  test('should return true when the action is following flux standard', () => {
    const action = login()

    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing the passed payload', () => {
    const token = 'my token'
    const details = {
      firstName: 'sample'
    }

    const expected = {
      type: USER_LOGIN,
      payload: {
        token,
        details
      }
    }

    expect(login(token, details)).toEqual(expected)
  })
})

describe(`Actions: ${USER_LOGOUT}`, () => {
  const action = logout()

  test('should return true when the action is following flux standard', () => {
    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing the passed payload', () => {
    const expected = {
      type: USER_LOGOUT
    }

    expect(action).toEqual(expected)
  })
})

describe(`Actions: ${USER_VERIFY_TOKEN}`, () => {
  const action = verifyToken()

  test('should return true when the action is following flux standard', () => {
    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing a Promise as payload', () => {
    const expected = {
      type: USER_VERIFY_TOKEN,
      payload: promiseMockup()
    }

    expect(action).toEqual(expected)
  })
})
