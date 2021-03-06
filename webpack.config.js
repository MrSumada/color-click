const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
        require('postcss-100vh-fix'),
        require('autoprefixer')
      ],
};