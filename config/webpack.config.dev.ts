import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
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
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' },

      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
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
  // @ts-ignore
  devServer: {
    open: true,
    port: 3000,
  },
};

export default config;
