const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: './app.js',
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: './js/app.bundle.js'
  }
};
