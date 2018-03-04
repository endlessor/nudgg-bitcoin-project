import { isArray } from 'utils/array'

export const getTotalAmount = (data) => {
  if (!isArray(data)) return 0

  return data.reduce((total, { amount }) => total + amount, 0)
}