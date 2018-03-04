import {
  collapsedActions,
  collapsed
} from './index'

import { inputChangeHOC } from 'actions/common'

describe('Utils: store/collapsed', () => {
  const collapsedMockup = (action) => collapsed(null, action)

  test('should return true when the action is part of the list', () => {
    const firstActionType = collapsedActions[0]

    const action = {
      type: firstActionType,
      payload: {}
    }

    expect(collapsedMockup(action)).toBeTruthy()
  })

  test('should return false when the action is not part of the list', () => {
    const action = {
      type: 'my-type',
      payload: {}
    }

    expect(collapsedMockup(action)).toBeFalsy()
  })

  test('should return true when the action is suffixed from the inputChangeHOC reducer', () => {
    const actionType = 'my-type'
    const actionWrapper = inputChangeHOC(actionType)
    const action = actionWrapper()

    expect(collapsedMockup(action)).toBeFalsy()
  })
})