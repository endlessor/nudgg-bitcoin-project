import {
  getGoalService,
  getBalanceService,
  getAccountsService,
  getAccountBreakdownService
} from 'services/hub'

// Normal actions

// Services as actions
export const HUB_GET_GOAL = 'HUB_GET_GOAL'
export const HUB_GET_BALANCE = 'HUB_GET_BALANCE'
export const HUB_GET_ACCOUNTS = 'HUB_GET_ACCOUNTS'
export const HUB_GET_ACCOUNT_BREAKDOWN = 'HUB_GET_ACCOUNT_BREAKDOWN'
export const HUB_RESET_ACCOUNT_BREAKDOWN = 'HUB_RESET_ACCOUNT_BREAKDOWN'
export const HUB_SET_ACCOUNT = 'HUB_SET_ACCOUNT'

export const getGoal = (token) => ({
  type: HUB_GET_GOAL,
  payload: getGoalService(token)
})

export const getBalance = (token) => ({
  type: HUB_GET_BALANCE,
  payload: getBalanceService(token)
})

export const getAccounts = (token) => ({
  type: HUB_GET_ACCOUNTS,
  payload: getAccountsService(token)
})

export const getAccountBreakdown = (accountId, token) => ({
  type: HUB_GET_ACCOUNT_BREAKDOWN,
  payload: getAccountBreakdownService(accountId, token)
})

export const resetAccountBreakdown = () => ({
  type: HUB_RESET_ACCOUNT_BREAKDOWN
})

export const setAccount = (account) => ({
  type: HUB_SET_ACCOUNT,
  payload: account
})
