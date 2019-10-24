const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  output: {
    filename: path.join('./', 'js/[name].[chunkhash:8].js'),
    chunkFilename: path.join('./', 'js/[name].[chunkhash:8].chunk.js'),
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      fileName: 'index.html',
      template: './src/index.template.html',
    }),
    new UglifyJSPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: path.join('./', 'css/[name].[contenthash:8].css'),
      chunkFilename: path.join('./', 'css/[name].[contenthash:8].chunk.css')
    }),
    new OptimizeCssAssetsPlugin(),
  ]
});
