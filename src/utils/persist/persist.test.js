import persistConfig from './index'

describe('Utils: persist/persistConfig', () => {
  test('should be defined', () => {
    expect(persistConfig).toBeDefined()
    expect(persistConfig).toBeInstanceOf(Object)
  })

  test('should contain all configuration keys', () => {
    expect(persistConfig).toHaveProperty('keyPrefix')
    expect(persistConfig).toHaveProperty('whitelist')
    expect(persistConfig).toHaveProperty('transforms')
  })
})