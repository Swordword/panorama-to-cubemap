const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackCommon = require('./webpack.common')

module.exports = merge(webpackCommon, {
  mode: 'development',
  entry: './test/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|obj|mtl)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './test/index.html',
    }),
  ],
})
