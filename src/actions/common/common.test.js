import { isFSA } from 'flux-standard-action'

import {
  UNKNOWN_ACTION
} from 'utils/test'

import {
  INPUT_CHANGE_SUFFIX,
  inputChangeHOC
} from './index'

describe(`Actions: inputChangeHOC`, () => {
  const wrappedAction = inputChangeHOC(UNKNOWN_ACTION)
  const input = {
    name: 'my name',
    value: 'my value'
  }

  test('should return true when the action is following flux standard', () => {
    const action = wrappedAction()

    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing the passed payload', () => {
    const expected = {
      type: UNKNOWN_ACTION,
      payload: {
        ...input
      }
    }

    expect(wrappedAction(input)).toEqual(expected)
  })

  test('should return an action containing the passed payload with suffixed action type', () => {
    const isSuffixed = true
    const wrapperActionWithPrefix = inputChangeHOC(UNKNOWN_ACTION, isSuffixed)

    const expected = {
      type: `${UNKNOWN_ACTION}_${INPUT_CHANGE_SUFFIX}`,
      payload: {
        ...input
      }
    }

    expect(wrapperActionWithPrefix(input)).toEqual(expected)
  })
})
