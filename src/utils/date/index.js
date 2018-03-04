const REMOVE_SPACES = /\s/g
const ONE_OR_MORE_NUMBER_REG = /[^\d]+/g
const DOB_FORMAT_REG = /\d{2,8}/g

const baseFormatter = (value, matchPattern, iterateCount = 2, joinChar, customFn) => {
  let v = value.replace(REMOVE_SPACES, '').replace(ONE_OR_MORE_NUMBER_REG, '')
  let matches = v.match(matchPattern)
  let match = (matches && matches[0]) || ''
  let parts = []

  for (let i = 0, len = match.length; i < len; i += iterateCount) {
    if (typeof customFn === 'function') {
      const result = customFn(parts, match, i)
      if (result === false) {
        break
      }
    }
    parts.push(match.substring(i, (i + iterateCount)))
  }

  if (parts.length) {
    return parts.join(joinChar)
  } else {
    return value
  }
}

export const formatDateOfBirth = (value = '', joinChar = '/') => {
  if (!value.length) {
    return value
  }

  return baseFormatter(value, DOB_FORMAT_REG, 2, joinChar, (parts, match, index) => {
    if (parts.length >= 2) {
      parts.push(match.substring(index, index + (match.length - index)))
      return false
    }
  })
}