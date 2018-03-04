import configureStore from './index'

describe('Store: configureStore', () => {
  it('should exist', () => {
    expect(configureStore).toBeDefined()
  })

  it('should be a function', () => {
    expect(configureStore).toBeInstanceOf(Function)
  })
})