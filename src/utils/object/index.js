import {
  isArray,
  includes
} from 'utils/array'

import { isFunction } from 'utils/function'

export const toString = Object.prototype.toString

export const isObject = (val) => {
  return val !== null &&
    typeof val === 'object' &&
    isArray(val) === false
}

export const hasOwnProperty = (obj, key) => {
  return Object.hasOwnProperty.call(obj, key)
}

export const omitKeys = (obj, fn) => {
  if (!isObject(obj)) return {}
  if (!fn) return obj

  let key
  let item
  let result = {}

  for (key in obj) {
    if (!hasOwnProperty(obj, key)) continue

    item = obj[key]

    if (isFunction(fn)) {
      if (fn(item, key, obj)) {
        result[key] = item
      }
    } else {
      if (fn !== key && !includes(fn, key)) {
        result[key] = item
      }
    }
  }

  return result
}

export const hasKeys = (obj) => {
  if (!isObject(obj)) return false

  return Object.keys(obj).length > 0
}