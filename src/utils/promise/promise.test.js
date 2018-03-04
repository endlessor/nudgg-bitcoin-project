import {
  isPromise
} from './index'

describe('Utils: promise/isPromise', () => {
  test('should return true when the argument is a promise', () => {
    const value = new Promise(() => {})

    expect(isPromise(value)).toBeTruthy()
  })

  test('should return false when the argument is not a promise', () => {
    const values = [
      0,
      '',
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
      expect(isPromise(value)).toBeFalsy()
    })
  })
})
