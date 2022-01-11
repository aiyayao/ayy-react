const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = merge(baseWebpackConfig, {
  output: {
    filename: path.join('./', 'js/[name].js'),
    chunkFilename: path.join('./', 'js/[name].chunk.js'),
    path: resolve('dist')
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    }
  },
  devServer: {
    port: 8088,
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
    open: true,
    hot: true,
    compress: true,
    inline: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/, 
        loader: require.resolve('eslint-loader'), 
        include: resolve('src')
      },
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      fileName: 'index.html',
      template: './src/index.template.html',
    }),
  ]
});
