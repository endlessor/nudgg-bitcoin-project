import combinedReducers from './index'

describe('Reducers: combinedReducers', () => {
  it('should exist', () => {
    expect(combinedReducers).toBeDefined()
  })

  it('should be an object', () => {
    expect(combinedReducers).toBeInstanceOf(Object)
  })
})