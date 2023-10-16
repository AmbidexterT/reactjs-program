const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 3000,
  },
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
  ],
});
