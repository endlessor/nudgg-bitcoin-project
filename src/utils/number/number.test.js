import {
  isNumber,
  parseNumber,
  parseToInt
} from './index'

describe('Utils: number/isNumber', () => {
  test('should return true when the argument is a number', () => {
    const values = [
      0,
      0.5,
      '12',
      '12.05'
    ]

    values.forEach((value) => {
      expect(isNumber(value)).toBeTruthy()
    })
  })

  test('should return false when the argument is not a number', () => {
    const values = [
      '',
      true,
      false,
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
      expect(isNumber(value)).toBeFalsy()
    })
  })
})

describe('Utils: number/parseNumber', () => {
  test('should return zero when the argument is not a number', () => {
    const value = 'something'
    const expected = 0

    expect(parseNumber(value)).toBe(expected)
  })

  test('should return the parsed number', () => {
    const value = '1.2345'
    const expected = 1.23

    expect(parseNumber(value)).toBe(expected)
  })

  test('should return the parsed number', () => {
    const value = 1.2345
    const expected = 1.23

    expect(parseNumber(value)).toBe(expected)
  })

  test('should return the parsed number', () => {
    const value = 1.2345
    const parseFn = (value) => value * 100
    const expected = 123.45

    expect(parseNumber(value, parseFn)).toBe(expected)
  })
})

describe('Utils: number/parseToInt', () => {
  test('should return NaN when the argument is not a number', () => {
    const value = {}
    const expected = NaN

    expect(parseToInt(value)).toEqual(expected)
  })

  test('should return the parsed number as integer', () => {
    const value = '77'
    const expected = 77

    expect(parseToInt(value)).toBe(expected)
  })

  test('should return the parsed number as integer', () => {
    const value = 77.520
    const expected = 77

    expect(parseToInt(value)).toBe(expected)
  })

  test('should return the parsed number as integer', () => {
    const value = 77
    const expected = 77

    expect(parseToInt(value)).toBe(expected)
  })
})