import initialStore from './index'

describe('Store: initialStore', () => {
  it('should exist', () => {
    expect(initialStore).toBeDefined()
  })

  it('should be an object', () => {
    expect(initialStore).toBeInstanceOf(Object)
  })
})