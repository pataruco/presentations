import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
// tslint:disable-next-line:no-var-requires
// require('@babel/polyfill');

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
      // path: path.resolve(__dirname, 'dist'),
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
  devServer: {
    open: true,
    port: 3000,
  },
};
