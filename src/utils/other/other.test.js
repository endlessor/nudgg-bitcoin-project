import {
  toggleActiveState,
  mapVisibleState,
  createFilterFn,
  isDefined,
  isTruthy,
  isChecked,
  percentOf,
  leftPercentOf,
  parseWithCommas
} from './index'

describe('Utils: other/toggleActiveState', () => {
  test('should return null when the isActive property is missing', () => {
    const state = {}

    expect(toggleActiveState(state)).toBeNull()
  })

  test('should return null when the isActive property is not boolean', () => {
    const state = {
      isActive: 'not boolean'
    }

    expect(toggleActiveState(state)).toBeNull()
  })

  test('should return the toggled isActive[=true] prop', () => {
    const state = {
      isActive: true
    }
    const expected = {
      isActive: false
    }

    expect(toggleActiveState(state)).toEqual(expected)
  })

  test('should return the toggled isActive[=false] prop', () => {
    const state = {
      isActive: false
    }
    const expected = {
      isActive: true
    }

    expect(toggleActiveState(state)).toEqual(expected)
  })
})

describe('Utils: other/mapVisibleState', () => {
  const state = null

  test('should return null when the isVisible property is missing', () => {
    const props = {}

    expect(mapVisibleState(state, props)).toEqual(state)
  })

  test('should return object when the isVisible prop is boolean', () => {
    const props = {
      isVisible: true,
      a: 1
    }

    const expected = {
      isVisible: props.isVisible
    }

    expect(mapVisibleState(state, props)).toEqual(expected)
  })

  test('should return object when the isVisible prop is boolean', () => {
    const props = {
      isVisible: false,
      a: 1
    }

    const expected = {
      isVisible: props.isVisible
    }

    expect(mapVisibleState(state, props)).toEqual(expected)
  })
})

describe('Utils: other/createFilterFn', () => {
  const keys = ['a', 'b']
  const filterFn = createFilterFn(keys)
  const value = ''

  test('should return a function', () => {
    expect(filterFn).toBeInstanceOf(Function)
  })

  test('should return true when the key is part of the list', () => {
    const key = 'a'

    expect(filterFn(value, key)).toBeTruthy()
  })

  test('should return false when the key is not part of the list', () => {
    const key = 'z'

    expect(filterFn(value, key)).toBeFalsy()
  })
})

describe('Utils: other/isDefined', () => {
  test('should return true when the argument is defined', () => {
    const values = [
      0,
      '',
      {},
      [],
      () => {},
      /^\d+$/,
      true,
      false,
      NaN,
      Infinity
    ]

    values.forEach((value) => {
      expect(isDefined(value)).toBeTruthy()
    })
  })

  test('should return false when the argument is not defined', () => {
    const values = [
      null,
      undefined
    ]

    values.forEach((value) => {
      expect(isDefined(value)).toBeFalsy()
    })
  })
})

describe('Utils: other/isTruthy', () => {
  test('should return false when the argument is falsy', () => {
    const values = [
      0,
      '',
      false,
      NaN
    ]

    values.forEach((value) => {
      expect(isTruthy(value)).toBeFalsy()
    })
  })

  test('should return true when the argument is truthy', () => {
    const values = [
      1,
      ' ',
      true,
      {},
      []
    ]

    values.forEach((value) => {
      expect(isTruthy(value)).toBeTruthy()
    })
  })
})

describe('Utils: other/isChecked', () => {
  test('should return true when the argument is true', () => {
    const value = true

    expect(isChecked(value)).toBeTruthy()
  })

  test('should return true when the argument is false', () => {
    const value = false

    expect(isChecked(value)).toBeFalsy()
  })

  test('should return true when the argument is not true', () => {
    const value = 'something'

    expect(isChecked(value)).toBeFalsy()
  })
})

describe('Utils: other/percentOf', () => {
  test('should return zero when the value is not a number', () => {
    const value = 'something'
    const total = 100

    const expected = 0

    expect(percentOf(value, total)).toBe(expected)
  })

  test('should return zero when the value is not a number', () => {
    const value = 15
    const total = 'something'

    const expected = 0

    expect(percentOf(value, total)).toBe(expected)
  })

  test('should return one when the percentage is less than that', () => {
    const value = 1
    const total = 1000

    const expected = 1

    expect(percentOf(value, total)).toBe(expected)
  })

  test('should return one hundred when the percentage is more than that', () => {
    const value = 200
    const total = 100

    const expected = 100

    expect(percentOf(value, total)).toBe(expected)
  })

  test('should return the calculated percentage', () => {
    const value = 3791
    const total = 19422

    const expected = 19

    expect(percentOf(value, total)).toBe(expected)
  })

  test('should return the calculated percentage', () => {
    const value = 1293
    const total = 2877

    const expected = 44

    expect(percentOf(value, total)).toBe(expected)
  })
})

describe('Utils: other/leftPercentOf', () => {
  test('should return the left percentage', () => {
    const value = 0
    const total = 100
    const expected = 100

    expect(leftPercentOf(value, total)).toBe(expected)
  })

  test('should return the left percentage', () => {
    const value = 33
    const total = 100
    const expected = 67

    expect(leftPercentOf(value, total)).toBe(expected)
  })

  test('should return the left percentage', () => {
    const value = 100
    const total = 100
    const expected = 0

    expect(leftPercentOf(value, total)).toBe(expected)
  })
})

describe('Utils: other/parseWithCommas', () => {
  test('should return zero when the value is not a number', () => {
    const value = 'something'
    const expected = 0

    expect(parseWithCommas(value)).toBe(expected)
  })

  test('should return the properly formatted number', () => {
    const value = 123
    const expected = `123`

    expect(parseWithCommas(value)).toBe(expected)
  })

  test('should return the properly formatted number', () => {
    const value = 1234
    const expected = `1,234`

    expect(parseWithCommas(value)).toBe(expected)
  })

  test('should return the properly formatted number', () => {
    const value = 1234567
    const expected = `1,234,567`

    expect(parseWithCommas(value)).toBe(expected)
  })
})