/**
 * Created by adoug on 2017/3/23.
 */

var path = require('path')
var webpack = require('webpack')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            /*css: ExtractTextPlugin.extract({
             use: 'css-loader',
             fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
             })*/
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env']        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url-loader?importLoaders=1&limit=3000&name=/fonts/[name].[ext]'
      },
      {
        test: /\.js$/,
        loader: 'imports-loader?define=>false'
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin('vue-night-switch.css')
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  node: {
    Buffer: false
  },
  target: 'web'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
