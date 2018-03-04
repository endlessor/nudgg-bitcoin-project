import {
  isBoolean
} from './index'

describe('Utils: boolean/isBoolean', () => {
  test('should return true when the argument is a boolean', () => {
    const values = [
      true,
      false
    ]

    values.forEach((value) => {
      expect(isBoolean(value)).toBeTruthy()
    })
  })

  test('should return false when the argument is not a boolean', () => {
    const values = [
      0,
      '',
      {},
      [],
      () => {},
      /^\d+$/,
      NaN,
      Infinity,
      null,
      undefined
    ]

    values.forEach((value) => {
      expect(isBoolean(value)).toBeFalsy()
    })
  })
})