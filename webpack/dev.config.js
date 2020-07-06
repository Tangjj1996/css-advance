const merge = require('webpack-merge')
const baseCfg = require('./base.config')

module.exports = merge(baseCfg, {
  mode: 'development',
  devServer: {
    port: 3000,
    contentBase: '/build/'
  }
})