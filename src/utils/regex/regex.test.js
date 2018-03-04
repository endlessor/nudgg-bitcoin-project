import {
  isRegex
} from './index'

describe('Utils: regex/isRegex', () => {
  test('should return true when the argument is a regex', () => {
    const value = /^\d+$/

    expect(isRegex(value)).toBeTruthy()
  })

  test('should return false when the argument is not a regex', () => {
    const values = [
      0,
      '',
      true,
      false,
      {},
      [],
      () => {},
      NaN,
      Infinity,
      null,
      undefined
    ]

    values.forEach(value => {
      expect(isRegex(value)).toBeFalsy()
    })
  })
})