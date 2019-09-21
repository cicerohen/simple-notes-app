const merge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    filename: '[name].[contenthash].js'
  },
  optimization: {
    nodeEnv: 'production'
  },
  devtool: 'source-map',
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, '../src/assets'),
        to: 'assets'
      }
    ]),
    new CleanWebpackPlugin()
  ]
});
