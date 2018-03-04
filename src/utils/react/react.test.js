import {
  defaultPropTypes
} from './index'

describe('Utils: react/defaultPropTypes', () => {
  test('should be defined', () => {
    expect(defaultPropTypes).toBeDefined()
    expect(defaultPropTypes).toBeInstanceOf(Object)
  })
})