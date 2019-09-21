const merge = require('webpack-merge');
const path = require('path');
const prodConfig = require('./webpack.prod.config');

module.exports = merge(prodConfig, {
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  devServer: {
    contentBase: path.resolve(process.cwd(), 'dist'),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    noInfo: false
  }
});
