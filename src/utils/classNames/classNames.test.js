import classNames, { createModifierFactory } from './index'

describe('Utils: classNames', () => {
  const baseClass = 'base-class'

  const firstClassName = 'my-class'
  const secondClassName = 'my-second-class'

  const classesArray = [
    firstClassName,
    secondClassName
  ]

  const classesObject = {
    [firstClassName]: true,
    [secondClassName]: false
  }

  const firstModifier = 'my-modifier'
  const secondModifier = 'my-second-modifier'

  const modifiersArray = [
    firstModifier,
    secondModifier
  ]

  const modifiersObject = {
    [firstModifier]: true,
    [secondModifier]: false
  }

  const createModifier = createModifierFactory(baseClass)

  test('should return empty string when there is no arguments passed', () => {
    const expected = ''

    expect(classNames()).toBe(expected)
  })

  test('should return base class only', () => {
    expect(classNames(baseClass)).toBe(baseClass)
  })

  test('should return base class and additional class name', () => {
    const expected = `${baseClass} ${firstClassName}`

    expect(classNames(baseClass, firstClassName)).toBe(expected)
  })

  test('should return base class and additional class names (Array)', () => {
    const expected = `${baseClass} ${firstClassName} ${secondClassName}`

    expect(classNames(baseClass, classesArray)).toBe(expected)
  })

  test('should return base class and additional class names (Object)', () => {
    const expected = `${baseClass} ${firstClassName}`

    expect(classNames(baseClass, classesObject)).toBe(expected)
  })

  test('should return base class and additional modifier', () => {
    const expected = `${baseClass} ${createModifier(firstModifier)}`

    expect(classNames(baseClass, null, firstModifier)).toBe(expected)
  })

  test('should return base class and additional modifiers (Array)', () => {
    const expected = `${baseClass} ${createModifier(firstModifier)} ${createModifier(secondModifier)}`

    expect(classNames(baseClass, null, modifiersArray)).toBe(expected)
  })

  test('should return base class and additional modifiers (Object)', () => {
    const expected = `${baseClass} ${createModifier(firstModifier)}`

    expect(classNames(baseClass, null, modifiersObject)).toBe(expected)
  })

  test('should ignore falsy classes and modifiers', () => {
    const expected = `${baseClass}`

    expect(classNames(baseClass, null, undefined)).toBe(expected)
    expect(classNames(baseClass, null, [
      undefined,
      null,
      NaN
    ])).toBe(expected)
  })
})