import { toString } from 'utils/object'

const BOOLEAN_PROTO = '[object Boolean]'

export const isBoolean = (value) => {
  return toString.call(value) === BOOLEAN_PROTO
}
