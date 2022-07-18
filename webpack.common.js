const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src', 'index.js')
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src', 'index.html')
      }),
      new CopyPlugin({
          patterns: [
              { from: 'src/assets/images', to: 'assets/images' }
          ]
      }),
      new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css'
      })
  ],
  module: {
      rules: [
          {
              test: /\.(scss)$/i,
              use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader'
              ]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource'
          }
      ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }
};
