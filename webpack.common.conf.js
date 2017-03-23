/**
 * Created by adoug on 2017/3/21.
 */

var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  output: {
    filename: 'vue-night-switch.common.js',
    library: 'vue-night-switch.common.js',
    libraryTarget: 'commonjs2'
  }
})

