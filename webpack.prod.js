const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common')

module.exports = merge(webpackCommon, {
  mode: 'production',
  entry: './src/index.js',
})
