const webpack = require('webpack');
const { resolve } = require('path');

process.noDeprecation = true;

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: './app.js',
  devtool: 'sourcemap',
  module: {
    rules: [
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
