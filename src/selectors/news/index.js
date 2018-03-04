import { createSelector } from 'reselect'

import { isArray } from 'utils/array'

export const feedSelector = state => state.feed
export const filtersSelector = state => state.filters

// TODO: Use real data and change the selectors
export const getFilteredFeed = createSelector(
  feedSelector,
  filtersSelector,
  (feed) => {
    if (!isArray(feed)) return []

    return feed
  }
)

export const getFeaturedArticle = createSelector(
  getFilteredFeed,
  (feed) => {
    const index = 0
    return feed[index]
  }
)

export const getSmallArticles = createSelector(
  getFilteredFeed,
  (feed) => {
    const index = 1
    return feed.slice(index, index + 2)
  }
)

export const getMediumArticles = createSelector(
  getFilteredFeed,
  (feed) => {
    const index = 3
    return feed.slice(index)
  }
)