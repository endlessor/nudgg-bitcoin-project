import isDev from 'isdev'

if (isDev) {
  module.exports = require('./configureStore.dev')
} else {
  module.exports = require('./configureStore.prod')
}