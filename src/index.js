/*
 * @Description:
 * @Version:
 * @Author: ji.yaning
 * @Date: 2024-03-04 10:53:51
 * @LastEditors: ji.yaning
 * @LastEditTime: 2024-03-04 15:59:07
 */
// 显式要求引入的 lodash 必须存在，然后将它绑定为 _
import _ from "lodash"
import printMe from "./print.js"

function component() {
  const element = document.createElement('div');

  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());