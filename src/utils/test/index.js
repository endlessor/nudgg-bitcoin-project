import { DEBOUNCE_DELAY } from 'data/delay'

// Test purposes only
export const UNKNOWN_ACTION = 'unknown/action'

export const unknownAction = () => ({
  type: UNKNOWN_ACTION,
  payload: {}
})

export const promiseMockup = () => {
  return new Promise((resolve, reject) => resolve())
    .then(_ => {})
    .catch(_ => {})
}

export const debounceMeta = {
  debounce: {
    time: DEBOUNCE_DELAY
  }
}

export const cancelMeta = {
  debounce: {
    cancel: true
  }
}