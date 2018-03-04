/*
import createExpirationTransform from 'redux-persist-transform-expire'

The backend express JWT middleware will take care of expiring the token.

const EXPIRE_KEY = 'expiresAt'
const expireTransform = createExpirationTransform({
  expireKey: EXPIRE_KEY
})
*/

import { createTransform } from 'redux-persist'
import createFilter from 'redux-persist-transform-filter'

import { isObject } from 'utils/object'
import { isDefined } from 'utils/other'

const initialState = {}

export const userStoreName = 'user'
export const newsStoreName = 'news'

const filterTransformUser = createFilter(
  userStoreName,
  ['token']
)

const filterTransformNews = createFilter(
  newsStoreName,
  ['filters']
)

const persistConfig = {
  keyPrefix: 'nudgg_persist_',
  whitelist: [
    userStoreName,
    newsStoreName
  ],
  transforms: [
    filterTransformUser,
    filterTransformNews,
  ]
}

export default persistConfig
