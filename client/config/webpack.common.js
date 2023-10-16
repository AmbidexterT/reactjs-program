const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['babel-polyfill', paths.src + '/index.tsx'],

  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: paths.alias,
  },

  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
    // Copies assets files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.src + '/assets',
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'Movies app',
      template: paths.public + '/index.html', // Template file
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(css|scss|sass)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader', // Postcss loader for Tailwind CSS
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [tailwindcss, autoprefixer], // Tailwind CSS
              },
            },
          },
        ],
      },
      // JavaScript: Use Babel to transpile files
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      { test: /\.svg$/, use: ['@svgr/webpack'] }, // SVG as Components
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' }, // Image assets
      { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline' }, // Fonts
    ],
  },
};
