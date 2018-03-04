import { isFSA } from 'flux-standard-action'

import {
  promiseMockup
} from 'utils/test'

import {
  SIGN_UP_INPUT_CHANGE,
  SIGN_UP_SUBMIT,
  SIGN_UP_RESEND_EMAIL,
  SIGN_UP_ACTIVATE_ACCOUNT,
  inputChange,
  submit,
  resendEmail,
  activateAccount
} from './index'

describe(`Actions: ${SIGN_UP_INPUT_CHANGE}`, () => {
  test('should return true when the action is following flux standard', () => {
    const action = inputChange()

    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing the passed payload', () => {
    const input = {
      name: 'my name',
      value: 'my value'
    }

    const expected = {
      type: SIGN_UP_INPUT_CHANGE,
      payload: {
        ...input
      }
    }

    expect(inputChange(input)).toEqual(expected)
  })
})

describe(`Actions: ${SIGN_UP_SUBMIT}`, () => {
  const action = submit()

  test('should return true when the action is following flux standard', () => {
    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing a Promise as payload', () => {
    const expected = {
      type: SIGN_UP_SUBMIT,
      payload: promiseMockup()
    }

    expect(action).toEqual(expected)
  })
})

describe(`Actions: ${SIGN_UP_RESEND_EMAIL}`, () => {
  const action = resendEmail()

  test('should return true when the action is following flux standard', () => {
    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing a Promise as payload', () => {
    const expected = {
      type: SIGN_UP_RESEND_EMAIL,
      payload: promiseMockup()
    }

    expect(action).toEqual(expected)
  })
})

describe(`Actions: ${SIGN_UP_ACTIVATE_ACCOUNT}`, () => {
  const action = activateAccount()

  test('should return true when the action is following flux standard', () => {
    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing a Promise as payload', () => {
    const expected = {
      type: SIGN_UP_ACTIVATE_ACCOUNT,
      payload: promiseMockup()
    }

    expect(action).toEqual(expected)
  })
})