import isDev from 'isdev'

if (isDev) {
  module.exports = require('./apiUrl.dev')
} else {
  module.exports = require('./apiUrl.prod')
}