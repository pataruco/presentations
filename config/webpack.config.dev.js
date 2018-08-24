const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
require('@babel/polyfill');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
      path: path.resolve(__dirname, 'dist'),
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
    new Dotenv(),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  serve: {
    contentBase: path.resolve(__dirname, '../dist'),
    hmr: true,
    open: true,
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
  },
};
