const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseCfg = require('./base.config')

module.exports = merge(baseCfg, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        ventor: {
          name: 'vue-common',
          filename: 'vue-common.js',
          test: /node_modules/,
          chunks: 'initial',
        },
        common: {
          minChunks: 5,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})