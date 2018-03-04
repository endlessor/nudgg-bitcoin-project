import { toString } from 'utils/object'

const ARRAY_PROTO = '[object Array]'

const _isArray = (value) => {
  return toString.call(value) === ARRAY_PROTO
}

export const isArray = Array.isArray || _isArray

export const includes = (arr, value) => {
  if (!isArray(arr)) return false
  if (!value) return false

  return arr.indexOf(value) >= 0
}

export const removeWithoutMutate = (arr, element) => {
  if (!isArray(arr)) return []
  if (!element) return arr

  const index = arr.indexOf(element)

  if (index < 0) return arr

  return [
    ...arr.slice(0, index),
    ...arr.slice(index + 1)
  ]
}
