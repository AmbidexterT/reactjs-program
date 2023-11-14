const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: ['...', new TerserPlugin(), new CssMinimizerPlugin()],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
