/**
 * Created by adoug on 2017/3/23.
 */

var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  output: {
    filename: 'vue-night-switch.js',
    library: 'vue-night-switch.js',
    libraryTarget: 'umd'
  }
})
