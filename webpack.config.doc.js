const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
  mode: 'production', //生产模式
  entry: {
    example: './example.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'doc'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'FUI',
      template: 'example.html',
      filename: 'example.html',
    }),
  ],
})
