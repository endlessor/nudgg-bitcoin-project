import { isFunction } from 'utils/function'

export const isNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value)
}

export const parseNumber = (value, fn) => {
  if (!isNumber(value)) return 0

  const newValue = isFunction(fn)
    ? fn(value)
    : value

  return Math.round(newValue * 100) / 100
}

export const parseToInt = (value) => parseInt(value, 10)