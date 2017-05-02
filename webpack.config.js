var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist/assets');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        //exlude: /(node_modules)/,
        include : APP_DIR,
        loader : ['babel-loader']
      },
      {
        test : /\.json?/,
        //exlude: /(node_modules)/,
        include : APP_DIR,
        loader : ['json-loader']
      },
      {
        test : /\.css?/,
        //exlude: /(node_modules)/,
        include : APP_DIR,
        loader : 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test : /\.scss?/,
        //exlude: /(node_modules)/,
        include : APP_DIR,
        loader : 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }
    ]
  }
};

module.exports = config;