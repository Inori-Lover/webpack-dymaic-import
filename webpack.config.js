const path = require('path')

module.exports = {
  // mode: 'development',
  mode: 'production',
  cache: false,
  entry: {
    inori: './src/inori.import.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
