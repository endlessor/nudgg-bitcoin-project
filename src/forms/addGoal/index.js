import { NAME } from 'data/regex'
import { GOAL_TYPES } from 'data/goal'

import { includes } from 'utils/array'
import { isNumber } from 'utils/number'

export const validation = {
  goalType: (value) => {
    return includes(GOAL_TYPES, value)
  },
  goalName: NAME,
  goalAmount: (value) => {
    if (!isNumber(value)) return false

    return value > 0
  }
}

export const errors = {
  goalType: 'Please enter a valid goal type.',
  goalName: 'Please enter a valid goal name.',
  goalAmount: 'Please enter a valid goal amount.'
}