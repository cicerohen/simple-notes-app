const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(process.cwd(), 'src'),
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(process.cwd(), 'src'),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    noInfo: false
  }
});
