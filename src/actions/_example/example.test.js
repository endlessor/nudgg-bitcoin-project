/*
Using the 'isFSA' utility to test if the action is following the FSA standard.
Importing the action and the action type for the test simulation.
All test names follow the naming convention: `Actions: ${ACTION_NAME}`.
Multiple actions should be separated and wrapped in individual describe functions.

DELETE THE COMMENTS WHEN USING THIS BOILERPLATE
*/

import { isFSA } from 'flux-standard-action'

import {
  VIEW_ACTION,
  viewAction
} from './index'

describe(`Actions: ${VIEW_ACTION}`, () => {
  test('should return true when the action is following flux standard', () => {
    const action = viewAction()

    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing the passed payload', () => {
    const value = 'value'

    const expected = {
      type: VIEW_ACTION,
      payload: {
        value
      }
    }

    expect(viewAction(value)).toEqual(expected)
  })
})