/*
 * @Description:
 * @Version:
 * @Author: ji.yaning
 * @Date: 2024-03-04 13:51:23
 * @LastEditors: ji.yaning
 * @LastEditTime: 2024-03-04 17:45:50
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};