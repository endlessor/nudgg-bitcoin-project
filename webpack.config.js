const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const getDirectories = srcPath => {
  return fs.readdirSync(srcPath)
    .filter(file => fs.statSync(path.join(srcPath, file)).isDirectory())
}

const generateAliases = basePath => {
  const aliases = {}
  const dirNames = getDirectories(basePath)

  dirNames.forEach(dirName => {
    aliases[dirName] = path.resolve(__dirname, basePath + '/' + dirName)
  })

  return aliases
}

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/App.js'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/app.js',
    publicPath: '/'
  },
  resolve: {
    alias: generateAliases('src')
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
    // host: '10.32.0.205',
    // port: 8080
  },
  module: {
    rules: [
      // Pre-loaders
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.scss/,
        loader: 'import-glob',
        enforce: 'pre'
      },
      // Loaders
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff|eot|mp4)$/i,
        loader: 'file-loader',
        query: {
          name: 'assets/[path][name].[ext]',
          context: './src/assets'
        }
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
}
