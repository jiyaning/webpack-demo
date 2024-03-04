/*
 * @Description:
 * @Version:
 * @Author: ji.yaning
 * @Date: 2024-03-04 10:53:51
 * @LastEditors: ji.yaning
 * @LastEditTime: 2024-03-04 15:55:28
 */
// 显式要求引入的 lodash 必须存在，然后将它绑定为 _
import _ from "lodash"

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());