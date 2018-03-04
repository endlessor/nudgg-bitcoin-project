import {
  PASSWORD
} from 'data/regex'

export const validation = {
  password: PASSWORD,
  confirmPassword: (value, values) => {
    const { password } = values

    return value === password
  }
}

export const errors = {
  // password: 'Please enter a valid password.',
  confirmPassword: 'Please confirm your password.'
}