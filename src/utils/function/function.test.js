import {
  isFunction
} from './index'

describe('Utils: function/isFunction', () => {
  test('should return true when the argument is a function', () => {
    const values = [
      () => {},
      function () {},
      Function
    ]

    values.forEach((value) => {
      expect(isFunction(value)).toBeTruthy()
    })
  })

  test('should return false when the argument is not a function', () => {
    const values = [
      0,
      '',
      true,
      false,
      {},
      [],
      /^\d+$/,
      NaN,
      Infinity,
      null,
      undefined
    ]

    values.forEach((value) => {
      expect(isFunction(value)).toBeFalsy()
    })
  })
})