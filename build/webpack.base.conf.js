const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NODE_ENV = process.env.NODE_ENV;

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  mode: NODE_ENV,
  entry: {
    index: resolve('src/index.js'),
  },
  resolve: {
    alias: {
      pages: resolve('src/pages'),
      components: resolve('src/components'),
      assets: resolve('src/assets'),
      router: resolve('src/router'),
      reducers: resolve('src/redux/reducers'),
      actions: resolve('src/redux/actions'),
    }
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        loader: require.resolve('babel-loader'), 
        exclude: /node_modules/ 
      },
      { 
        test: /\.css$/, 
        use: [NODE_ENV === 'development' ? require.resolve('style-loader') : MiniCssExtractPlugin.loader, require.resolve('css-loader')]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          NODE_ENV === 'development' ? require.resolve('style-loader') : MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true
            }
          },
          {
            loader: require.resolve('postcss-loader')
          },
          {
            loader: require.resolve('sass-loader')
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: require.resolve('file-loader'),
        options: {
          limit: 10000,
          name: path.join('./', 'images/[name].[hash:8].[ext]')
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: require.resolve('file-loader'),
        options: {
          limit: 10000,
          name: path.join('./', 'fonts/[name].[hash].[ext]')
        }
      },
    ]
  },
};
