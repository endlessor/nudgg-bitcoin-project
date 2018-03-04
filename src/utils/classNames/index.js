import { isString } from 'utils/string'
import { isArray } from 'utils/array'
import { isFunction } from 'utils/function'

import {
  isObject,
  hasOwnProperty
} from 'utils/object'

import { isTruthy } from 'utils/other'

export const createModifierFactory = (baseClass) => {
  return (modifier) => `${baseClass}--${modifier}`
}

const extractClasses = (className, parseFn) => {
  let classes = []

  if (isString(className)) {
    classes.push(className)
  } else if (isArray(className)) {
    classes.push(...className)
  } else if (isObject(className)) {
    for (let key in className) {
      if (hasOwnProperty(className, key) && className[key]) {
        classes.push(key)
      }
    }
  }

  if (!isFunction(parseFn)) return classes.filter(isTruthy)

  return classes
    .filter(isTruthy)
    .map(parseFn)
}

const parseToClassName = (classes) => {
  const hasClasses = classes.length
  if (!hasClasses) return ''

  return classes.join(' ')
}

const classNames = (baseClass, className, ...modifiers) => {
  if (!isString(baseClass)) return ''

  let classes = [baseClass]

  if (className) {
    classes.push(
      ...extractClasses(className)
    )
  }

  if (!modifiers.length) return parseToClassName(classes)

  const createModifier = createModifierFactory(baseClass)

  modifiers.forEach((modifier) => {
    classes.push(
      ...extractClasses(modifier, createModifier)
    )
  })

  return parseToClassName(classes)
}

export default classNames
