'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './4_71/src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/4_71/dist/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
