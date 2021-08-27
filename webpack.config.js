const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
    filename: 'carota.js',
    path: path.resolve(__dirname, 'dist'),
  },devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    publicPath: '/dist/',
    host:'0.0.0.0',
    port:8081
  }
};