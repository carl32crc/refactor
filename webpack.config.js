const webpack = require('webpack');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    filename: '_build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'es2017'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  },
  plugins: [
    // env plugin
    new webpack.DefinePlugin({
      'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './'),
  }
};
