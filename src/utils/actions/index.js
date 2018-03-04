import { DEBOUNCE_DELAY } from 'data/delay'
import { USER_LOGOUT } from 'actions/user'

export const debounceFactory = (action, debounceTime = DEBOUNCE_DELAY) => ({
  ...action,
  meta: {
    debounce: {
      time: debounceTime
    }
  }
})

export const cancelDebounceFactory = (action) => ({
  ...action,
  meta: {
    debounce: {
      cancel: true
    }
  }
})

export const isActionLogout = ({ type }) => {
  return type === USER_LOGOUT
}