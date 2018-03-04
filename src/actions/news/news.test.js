import { isFSA } from 'flux-standard-action'

import {
  NEWS_ADD_FILTER,
  NEWS_REMOVE_FILTER,
  addFilter,
  removeFilter
} from './index'

describe(`Actions: ${NEWS_ADD_FILTER}`, () => {
  test('should return true when the action is following flux standard', () => {
    const action = addFilter()

    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing the passed payload', () => {
    const filter = 'my filter'

    const expected = {
      type: NEWS_ADD_FILTER,
      payload: {
        filter
      }
    }

    expect(addFilter(filter)).toEqual(expected)
  })
})

describe(`Actions: ${NEWS_REMOVE_FILTER}`, () => {
  test('should return true when the action is following flux standard', () => {
    const action = removeFilter()

    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing the passed payload', () => {
    const filter = 'my filter'

    const expected = {
      type: NEWS_REMOVE_FILTER,
      payload: {
        filter
      }
    }

    expect(removeFilter(filter)).toEqual(expected)
  })
})