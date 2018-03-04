import { verifyTokenService } from 'services/user'

// Normal actions
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

// Services as actions
export const USER_VERIFY_TOKEN = 'USER_VERIFY_TOKEN'

export const login = (token, details) => ({
  type: USER_LOGIN,
  payload: {
    token,
    details
  }
})

export const logout = () => ({
  type: USER_LOGOUT
})

export const verifyToken = (token) => ({
  type: USER_VERIFY_TOKEN,
  payload: verifyTokenService(token)
})