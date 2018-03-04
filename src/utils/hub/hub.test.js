import {
  getTotalAmount
} from './index'

describe('Utils: hub/getTotalAmount', () => {
  test('should return zero when argument is not a array', () => {
    const data = null

    expect(getTotalAmount(data)).toBe(0)
  })

  test('should return an the total amount', () => {
    const data = [
      { amount: 50 },
      { amount: 70 }
    ]

    const expected = 120

    expect(getTotalAmount(data)).toEqual(expected)
  })
})