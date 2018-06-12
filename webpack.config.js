process.env.NODE_ENV = 'production'
var webpack = require('webpack')
var path = require('path')

module.exports = {
  mode: 'production',
  entry: './lib/index.js',
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'simi.js'
  }
}