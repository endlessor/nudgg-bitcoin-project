// import { debounceFactory } from 'utils/actions'

export const INPUT_CHANGE_SUFFIX = 'INPUT_CHANGE'

const prependSuffix = (type) => `${type}_${INPUT_CHANGE_SUFFIX}`

export const inputChangeHOC = (type, isSuffixed = false) => {
  const newType = !isSuffixed
    ? type
    : prependSuffix(type)

  return ({ name, value } = {}) => ({
    type: newType,
    payload: {
      name,
      value
    }
  })
}
