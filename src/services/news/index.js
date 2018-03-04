import {
  get
} from 'utils/fetch'

import {
  TWITTER_ARTICLES,
  WORDPRESS_ARTICLES
} from 'services/types'

export const getTwitterNewsArticlesServices = () => {
  return get({
    url: TWITTER_ARTICLES
  })
}

export const getWordpressNewsArticlesServices = () => {
  return get({
    url: WORDPRESS_ARTICLES
  })
}
