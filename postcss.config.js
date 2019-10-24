module.export = {
  loader: 'postcss-loader',
  plugins: [
    require('cssnano'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    })
  ]
};
