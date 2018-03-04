import { Reducer } from 'redux-testkit'
import { unknownAction } from 'utils/test'

import reducer, { initialState } from './index'

import {
  NEWS_ADD_FILTER,
  NEWS_REMOVE_FILTER,
  addFilter,
  removeFilter
} from 'actions/news'

describe('Reducers: news', () => {
  test('should return the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  test('should return the current state', () => {
    Reducer(reducer).expect(unknownAction).toReturnState(initialState)
  })
})

describe(`Reducers: news - ${NEWS_ADD_FILTER}`, () => {
  const filter = 'sample'
  const action = addFilter(filter)

  test('should handle action on initial state', () => {
    const expected = {
      ...initialState,
      filters: [filter]
    }

    Reducer(reducer).expect(action).toReturnState(expected)
  })

  test('should handle action on existing state', () => {
    const state = {
      ...initialState,
      filters: ['a', 'b']
    }

    const expected = {
      ...initialState,
      filters: [
        ...state.filters,
        filter
      ]
    }

    Reducer(reducer).withState(state).expect(action).toReturnState(expected)
  })
})

describe(`Reducers: news - ${NEWS_REMOVE_FILTER}`, () => {
  const filter = 'sample'
  const action = removeFilter(filter)

  test('should handle action on initial state', () => {
    const expected = {
      ...initialState,
      filters: []
    }

    Reducer(reducer).expect(action).toReturnState(expected)
  })

  test('should handle action on existing state', () => {
    const state = {
      ...initialState,
      filters: ['a', 'b', 'sample']
    }

    const expected = {
      ...initialState,
      filters: ['a', 'b']
    }

    Reducer(reducer).withState(state).expect(action).toReturnState(expected)
  })
})