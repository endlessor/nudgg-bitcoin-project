import {
  getTwitterNewsArticlesServices,
  getWordpressNewsArticlesServices
} from 'services/news'

import { wordpresstransformFunction } from 'utils/function'

// Normal actions
export const NEWS_ADD_FILTER = 'NEWS_ADD_FILTER'
export const NEWS_REMOVE_FILTER = 'NEWS_REMOVE_FILTER'
export const TWITTER_ARTICLES_REQUESTING = 'TWITTER_ARTICLES_REQUESTING'
export const TWITTER_ARTICLES_REQUESTED = 'TWITTER_ARTICLES_REQUESTED'
export const WORDPRESS_ARTICLES_REQUESTING = 'WORDPRESS_ARTICLES_REQUESTING'
export const WORDPRESS_ARTICLES_REQUESTED = 'WORDPRESS_ARTICLES_REQUESTED'
export const TWITTER_ARTICLES_FAILED = 'TWITTER_ARTICLES_REQUESTED'
export const FILTER_DATA = 'FILTER_DATA'

// Services as actions

export const addFilter = (filter) => ({
  type: NEWS_ADD_FILTER,
  payload: {
    filter
  }
})

// TODO: Change remove by `filterId`
export const removeFilter = (filter) => ({
  type: NEWS_REMOVE_FILTER,
  payload: {
    filter
  }
})

export const twitterRequestingArticles = () => ({
  type: TWITTER_ARTICLES_REQUESTING
})

export const twitterArticles = (data) => ({
  type: TWITTER_ARTICLES_REQUESTED,
  payload: data
})


export const wordpressRequestingArticles = () => ({
  type: WORDPRESS_ARTICLES_REQUESTING
})

export const wordpressArticles = (data) => ({
  type: WORDPRESS_ARTICLES_REQUESTED,
  payload: data
})

export const getFailedArticles = () => ({
  type: TWITTER_ARTICLES_FAILED
})

export const filterData = () => ({
  type: FILTER_DATA
})

export const getTwitterArticles = () => {
  return (dispatch, getState) => {
    dispatch(twitterRequestingArticles())

    return getTwitterNewsArticlesServices()
      .then((data) => {
        dispatch(twitterArticles(data))
      })
      .catch((error) => {
        dispatch(getFailedArticles())
        console.log(error)
      })
  }
}

export const getWordpressArticles = () => {
  return (dispatch, getState) => {
    dispatch(wordpressRequestingArticles())

    return getWordpressNewsArticlesServices()
      .then((data) => {
        dispatch(wordpressArticles(data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
