import store from './index'

describe('Store: store', () => {
  it('should exist', () => {
    expect(store).toBeDefined()
  })

  it('should be an object', () => {
    expect(store).toBeInstanceOf(Object)
  })
})