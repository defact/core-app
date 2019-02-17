/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = (env = {}) => {
  const { PLATFORM, VERSION } = env;

  return merge([
      {
        devServer: {
          port: 3000,
          historyApiFallback: true,
          proxy: {
            '/api': {
              target: 'http://localhost:4200',
              pathRewrite: {'^/api' : ''}
            }
          }
        },

        entry: ['@babel/polyfill', APP_DIR],
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            },
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ]
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: './src/static/index.html',
            filename: './index.html'
          }),
          new webpack.DefinePlugin({ 
            'process.env.VERSION': JSON.stringify(VERSION),
            'process.env.PLATFORM': JSON.stringify(PLATFORM)
          }),
          new CopyWebpackPlugin([ { from: 'src/static' } ]),
        ],
        output: {
          filename: '[name].bundle.js',
          chunkFilename: '[name].chunk.bundle.js',
          path: path.resolve(__dirname, '..', 'dist'),
          publicPath: '/',
        },
    }
  ])
};
