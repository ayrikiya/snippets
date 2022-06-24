/*
 * @Author: 王荣
 * @Date: 2022-06-22 14:33:25
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-22 16:01:43
 * @Description: 填写简介
 */

// window在自己身上挂载了一个自身的引用
window.window === window 

// document nodeType 9; body nodeType 1;
document.nodeType === 9;
document.body.nodeType === 1;

// 获取元素所在的document对象, 每个dom元素都有这个属性
const doc = Element.ownerDocument;

// 获取document的上级window对象，parentWindow目测是IE的 chrome浏览器只有defaultView属性。
const w = doc.defaultView || doc.parentWindow;
document.defaultView === window;

