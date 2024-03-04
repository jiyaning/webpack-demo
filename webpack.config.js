/*
 * @Description:
 * @Version:
 * @Author: ji.yaning
 * @Date: 2024-03-04 13:51:23
 * @LastEditors: ji.yaning
 * @LastEditTime: 2024-03-04 13:52:22
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};