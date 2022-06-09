/*
 * @Author: 王荣
 * @Date: 2022-06-09 14:49:36
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 14:49:36
 * @Description: 取url中的query
 */

function getQueryString(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
      return decodeURIComponent(r[2]);
  };
  return null;
}