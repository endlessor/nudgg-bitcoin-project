import update from 'immutability-helper'
import { removeWithoutMutate } from 'utils/array'

import { REHYDRATE } from 'redux-persist/constants'

import {
  NEWS_ADD_FILTER,
  NEWS_REMOVE_FILTER,
  TWITTER_ARTICLES_REQUESTING,
  TWITTER_ARTICLES_REQUESTED,
  WORDPRESS_ARTICLES_REQUESTING,
  WORDPRESS_ARTICLES_REQUESTED,
  TWITTER_ARTICLES_FAILED,
  FILTER_DATA
} from 'actions/news'

import _ from 'lodash'

import { wordpresstransformFunction } from 'utils/function'

// Mockup
import { news } from 'data/news'

export const initialState = {
  feed: news,
  filters: [],
  isRequesting: false,
  twitterArticles: [],
  wordpressArticles: [],
  wordpressArticlesFilters: []
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case REHYDRATE:
      let { news = {} } = payload
      let { filters: persistantFilters = [] } = news

      return update(state, {
        filters: {
          $set: persistantFilters
        }
      })

    case NEWS_ADD_FILTER:
      return update(state, {
        filters: {
          $push: [payload.filter]
        }
      })

    case NEWS_REMOVE_FILTER:
      const filters = removeWithoutMutate(state.filters, payload.filter)

      return update(state, {
        filters: {
          $set: filters
        }
      })

    case TWITTER_ARTICLES_REQUESTED:
      return update(state, {
        twitterArticles: {
          $push: [payload]
        },
      })

    case WORDPRESS_ARTICLES_REQUESTING:
      return update(state, {
        isRequesting: {
          $set: true
        }
      })

    case WORDPRESS_ARTICLES_REQUESTED:
      return update(state, {
        wordpressArticles: {
          $set: payload
        },
        isRequesting: {
          $set: false
        }
      })

    case FILTER_DATA:
      let newState = _.cloneDeep(state)
      let filterOptions = newState.filters
      let data = newState.wordpressArticles && newState.wordpressArticles.reduce((result, article) => {
        let showFilters = article.filters
        let count = filterOptions.reduce((subResult, item) => {
          if (showFilters && showFilters.indexOf(item) !== -1) {
            subResult.push(item)
          }
          return subResult
        }, [])
        if (count && count.length > 0) {
          result.push(article)
        }
        return result
      }, [])
      let transformData = wordpresstransformFunction(data)
      newState.wordpressArticlesFilters = transformData
      return newState

    default:
      return state
  }
}

export default reducer
