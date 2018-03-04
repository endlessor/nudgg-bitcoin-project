import {
  isArray,
  includes,
  removeWithoutMutate
} from './index'

describe('Utils: array/isArray', () => {
  test('should return true when the argument is an array', () => {
    const value = []

    expect(isArray(value)).toBeTruthy()
  })

  test('should return false when the argument is not an array', () => {
    const values = [
      0,
      '',
      true,
      false,
      {},
      () => {},
      /^\d+$/,
      NaN,
      Infinity,
      null,
      undefined
    ]

    values.forEach((value) => {
      expect(isArray(value)).toBeFalsy()
    })
  })
})

describe('Utils: array/includes', () => {
  test('should return false when the argument is not an array', () => {
    const value = {}

    expect(includes(value)).toBeFalsy()
  })

  test('should return false when the second argument is missing', () => {
    const arr = [1, 2, 3]

    expect(includes(arr)).toBeFalsy()
  })

  test('should return true when the argument is included in the array', () => {
    const arr = [1, 2, 3]
    const value = 1

    expect(includes(arr, value)).toBeTruthy()
  })

  test('should return false when the argument is not included in the array', () => {
    const arr = [1, 2, 3]
    const value = 4

    expect(includes(arr, value)).toBeFalsy()
  })
})

describe('Utils: array/removeWithoutMutate', () => {
  const arr = [1, 2, 3]

  test('should return an empty array when the argument is not an array', () => {
    const value = {}

    expect(removeWithoutMutate(value)).toEqual([])
  })

  test('should return the passed array when the second argument is missing', () => {
    expect(removeWithoutMutate(arr)).toBe(arr)
  })

  test('should return the passed array when the second argument is not included of the array', () => {
    const element = 4

    expect(removeWithoutMutate(arr, element)).toBe(arr)
  })

  test('should return the filtered array without mutating the passed one', () => {
    const value = 1
    const expected = [2, 3]

    expect(arr).not.toBe(expected)
    expect(removeWithoutMutate(arr, value)).toEqual(expected)
  })
})