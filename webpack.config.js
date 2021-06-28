const path = require('path');

module.exports = {
    mode: 'development',
  entry: './src/UI.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};