import {
  isTouchDevice
} from './index'

describe('Utils: touch/isTouchDevice', () => {
  test('should be defined', () => {
    expect(isTouchDevice).toBeDefined()
    expect(isTouchDevice).toBeInstanceOf(Function)
  })
})