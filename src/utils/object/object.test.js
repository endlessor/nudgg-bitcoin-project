import {
  toString,
  isObject,
  hasOwnProperty,
  omitKeys,
  hasKeys
} from './index'

describe('Utils: object/toString', () => {
  test('should return the array prototype', () => {
    const value = []
    const expected = '[object Array]'

    expect(toString.call(value)).toEqual(expected)
  })

  test('should return the object prototype', () => {
    const value = {}
    const expected = '[object Object]'

    expect(toString.call(value)).toEqual(expected)
  })

  test('should return the function prototype', () => {
    const value = () => {}
    const expected = '[object Function]'

    expect(toString.call(value)).toEqual(expected)
  })
})

describe('Utils: object/isObject', () => {
  test('should return true when the argument is an object', () => {
    const value = {}

    expect(isObject(value)).toBeTruthy()
  })

  test('should return false when the argument is not an object', () => {
    const values = [
      0,
      '',
      true,
      false,
      [],
      () => {},
      // /^\d+$/, Fails for regex on purpose
      NaN,
      Infinity,
      null,
      undefined
    ]

    values.forEach((value) => {
      expect(isObject(value)).toBeFalsy()
    })
  })
})

describe('Utils: object/hasOwnProperty', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3
  }

  test('should return true when the key is object property', () => {
    const key = 'a'

    expect(hasOwnProperty(obj, key)).toBeTruthy()
  })

  test('should return false when the key is not object property', () => {
    const key = 'd'

    expect(hasOwnProperty(obj, key)).toBeFalsy()
  })
})

describe('Utils: object/omitKeys', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3
  }

  test('should return empty object when the passed first argument is not an object', () => {
    const value = null
    const expected = {}

    expect(omitKeys(value)).toEqual(expected)
  })

  test('should return the passed object when the filter argument is missing', () => {
    expect(omitKeys(obj)).toBe(obj)
  })

  test('should return a copy of the passed object removing the passed key', () => {
    const filter = 'a'
    const expected = {
      b: 2,
      c: 3
    }

    const returned = omitKeys(obj, filter)

    expect(returned).toEqual(expected)
    expect(returned).not.toBe(obj)
  })

  test('should return a copy of the passed object removing the passed keys (array)', () => {
    const filter = ['a', 'c']
    const expected = {
      b: 2
    }

    const returned = omitKeys(obj, filter)

    expect(returned).toEqual(expected)
    expect(returned).not.toBe(obj)
  })

  test('should return a copy of the passed object using the filter function by value', () => {
    const filterFn = value => value > 2
    const expected = {
      c: 3
    }

    const returned = omitKeys(obj, filterFn)

    expect(returned).toEqual(expected)
    expect(returned).not.toBe(obj)
  })

  test('should return a copy of the passed object using the filter function by key', () => {
    const filterFn = (_, key) => key === 'a'
    const expected = {
      a: 1
    }

    const returned = omitKeys(obj, filterFn)

    expect(returned).toEqual(expected)
    expect(returned).not.toBe(obj)
  })

  test('should return a copy of the passed object using the filter function by multiple arguments', () => {
    const filterFn = (value, key) => key === 'b' && value >= 2
    const expected = {
      b: 2
    }

    const returned = omitKeys(obj, filterFn)

    expect(returned).toEqual(expected)
    expect(returned).not.toBe(obj)
  })
})

describe('Utils: object/hasKeys', () => {
  test('should return false when the argument in not an object', () => {
    const obj = []

    expect(hasKeys(obj)).toBeFalsy()
  })

  test('should return false when the object is empty', () => {
    const obj = {}

    expect(hasKeys(obj)).toBeFalsy()
  })

  test('should return true when the object is not empty', () => {
    const obj = {
      a: 1
    }

    expect(hasKeys(obj)).toBeTruthy()
  })

  test('should return true when the object is not empty', () => {
    const obj = {
      a: 1,
      b: 2
    }

    expect(hasKeys(obj)).toBeTruthy()
  })
})