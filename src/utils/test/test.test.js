import { isFSA } from 'flux-standard-action'

import {
  unknownAction,
  promiseMockup,
  debounceMeta,
  cancelMeta
} from './index'

describe('Utils: test/unknownAction', () => {
  test('should return true when the action is following flux standard', () => {
    const action = unknownAction()

    expect(isFSA(action)).toBeTruthy()
  })
})

describe('Utils: test/promiseMockup', () => {
  test('should be defined', () => {
    expect(promiseMockup).toBeDefined()
    expect(promiseMockup).toBeInstanceOf(Function)
  })
})

describe('Utils: test/debounceMeta', () => {
  test('should be defined', () => {
    expect(debounceMeta).toBeDefined()
    expect(debounceMeta).toBeInstanceOf(Object)
  })
})

describe('Utils: test/cancelMeta', () => {
  test('should be defined', () => {
    expect(cancelMeta).toBeDefined()
    expect(cancelMeta).toBeInstanceOf(Object)
  })
})