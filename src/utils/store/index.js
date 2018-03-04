import { includes } from 'utils/array'

import { INPUT_CHANGE_SUFFIX } from 'actions/common'
import { REHYDRATE } from 'redux-persist/constants'

export const collapsedActions = [
  REHYDRATE
]

export const collapsed = (_, action) => {
  const { type } = action
  const isInputChange = !!~type.indexOf(INPUT_CHANGE_SUFFIX)

  return isInputChange || includes(collapsedActions, type)
}