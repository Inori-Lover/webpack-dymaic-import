const path = require('path')

module.exports = {
  // mode: 'development',
  mode: 'production',
  cache: false,
  entry: {
    index: './src/index.import.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
