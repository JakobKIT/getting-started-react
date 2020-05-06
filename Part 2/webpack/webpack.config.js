const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const baseURL = path.resolve(__dirname, '..');

module.exports = {
  entry: path.resolve(baseURL, 'src', 'index.js'),
  output: {
    path: path.resolve(baseURL, 'dist')
  },
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: '8000',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `${baseURL}/src/index.html`,
      filename: './index.html',
      inject: 'body',
    })
  ]
};