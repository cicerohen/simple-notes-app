process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    main: path.resolve(process.cwd(), 'src/main.tsx')
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader',
            options: {
              configFile: path.resolve('./.eslintrc')
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: () => {
                if (process.env.NODE_ENV === 'development') {
                  return '[name].[ext]';
                }
                return '[contenthash].[ext]';
              },
              outputPath: (url, resourcePath) => {
                if (/images/.test(resourcePath)) {
                  return `assets/images/${url}`;
                }
                if (/fonts/.test(resourcePath)) {
                  return `assets/fonts/${url}`;
                }
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.css'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'src/index.html'),
      inject: true
    }),
    new Dotenv({
      path: path.join(process.cwd(), `.${process.env.NODE_ENV}.env`)
    })
  ],
  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
};
