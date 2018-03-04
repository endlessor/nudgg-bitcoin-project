
import isDev from 'isdev'

if (isDev) {
  module.exports = require('./App.dev')
} else {
  module.exports = require('./App.prod')
}