import { isBoolean } from 'utils/boolean'
import { includes } from 'utils/array'
import { isFunction } from 'utils/function'
import {
  isNumber,
  parseToInt
} from 'utils/number'

export const toggleActiveState = (state) => {
  const { isActive } = state

  if (!isBoolean(isActive)) return null

  const inverted = !isActive

  return {
    isActive: inverted
  }
}

export const mapVisibleState = (_, props) => {
  const { isVisible } = props

  if (!isBoolean(isVisible)) return null

  return {
    isVisible
  }
}

export const createFilterFn = (requiredKeys) => {
  return (_, key) => {
    return includes(requiredKeys, key)
  }
}

export const isDefined = (value) => {
  return value !== undefined && value !== null
}

export const isTruthy = (value) => !!value

export const isChecked = (value) => value === true

export const percentOf = (value, total, parseFn = parseToInt) => {
  if (
    !isNumber(value) ||
    !isNumber(total)
  ) return 0

  const val = (value / total) * 100

  if (val < 1) return 1
  if (val > 100) return 100

  if (!isFunction(parseFn)) return val

  return parseFn(val)
}

export const leftPercentOf = (value) => {
  // return 100 - percentOf(value, total, parseFn)
  return 100 - value
}

export const parseWithCommas = (value) => {
  if (!isNumber(value)) return 0

  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}