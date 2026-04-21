const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  context: path.resolve(__dirname, 'src'),

  resolve: {
    extensions: ['.ts', '.js']
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    }
  },

  entry: './app',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'TypeScript In-Depth',
      template: 'index.html'
    })
  ],

  devtool: 'source-map'
};
