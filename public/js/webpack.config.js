var path = require('path');
var webpack = require('webpack');
var BUILD_PATH = path.resolve(__dirname, './build');
module.exports = {
  entry: './react/apps/LoginApp.js',
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: 'babel-loader',
      query: {
        presets: ['es2015','react','stage-1'],
        plugins: ['transform-decorators-legacy','transform-decorators']
      }
    },
    {
      test: /\.(less|css)$/,
      use:[ 'style-loader','css-loader','less-loader'],
    },
  ]
  }
}