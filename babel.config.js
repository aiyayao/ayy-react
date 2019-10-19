'use strict';
module.exports = function(api) {
  const env = api.env();
  const config = {
    presets: [
      "@babel/env",
      "@babel/preset-react",
    ],
    plugins: []
  };

  return config;
};
