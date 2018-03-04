import { isFSA } from 'flux-standard-action'

import {
  promiseMockup
} from 'utils/test'

import {
  CHANGE_PASSWORD_INPUT_CHANGE,
  CHANGE_PASSWORD_SUBMIT,
  inputChange,
  submit
} from './index'

describe(`Actions: ${CHANGE_PASSWORD_INPUT_CHANGE}`, () => {
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
      type: CHANGE_PASSWORD_INPUT_CHANGE,
      payload: {
        ...input
      }
    }

    expect(inputChange(input)).toEqual(expected)
  })
})

describe(`Actions: ${CHANGE_PASSWORD_SUBMIT}`, () => {
  const action = submit()

  test('should return true when the action is following flux standard', () => {
    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing a Promise as payload', () => {
    const expected = {
      type: CHANGE_PASSWORD_SUBMIT,
      payload: promiseMockup()
    }

    expect(action).toEqual(expected)
  })
})