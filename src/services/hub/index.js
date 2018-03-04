import {
  get
} from 'utils/fetch'

import {
  GOAL,
  BALANCE,
  ACCOUNTS,
  ACCOUNT_BREAKDOWN
} from 'services/types'

export const getGoalService = (token) => {
  return get({
    url: GOAL,
    token
  })
}

export const getBalanceService = (token) => {
  return get({
    url: BALANCE,
    token
  })
}

export const getAccountsService = (token) => {
  return get({
    url: ACCOUNTS,
    token
  })
}

export const getAccountBreakdownService = (accountId, token) => {
  return get({
    url: ACCOUNT_BREAKDOWN,
    query: {
      accountId
    },
    token
  })
}
