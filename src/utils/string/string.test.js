import {
  isString
} from './index'

describe('Utils: string/isString', () => {
  test('should return true when the argument is a string', () => {
    const value = ''

    expect(isString(value)).toBeTruthy()
  })

  test('should return false when the argument is not a string', () => {
    const values = [
      0,
      true,
      false,
      [],
      {},
      () => {},
      /^\d+$/,
      NaN,
      Infinity,
      null,
      undefined
    ]

    values.forEach((value) => {
      expect(isString(value)).toBeFalsy()
    })
  })
})