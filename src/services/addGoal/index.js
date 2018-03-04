import {
  post
} from 'utils/fetch'

import {
  GOAL
} from 'services/types'

import { parseNumber } from 'utils/number'

export const addGoalService = (fields = {}, token) => {
  const { goalAmount } = fields

  const body = {
    ...fields,
    goalAmount: parseNumber(goalAmount)
  }

  return post({
    url: GOAL,
    body,
    token
  })
}