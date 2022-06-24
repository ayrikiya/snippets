/*
 * @Author: 王荣
 * @Date: 2022-06-22 15:32:54
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-22 15:32:55
 * @Description: 填写简介
 */

// Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。
// 如果是标准盒子模型（content box），元素的尺寸等于width/height + padding + borderWidth的总和。
// 如果box-sizing: border-box，元素的的尺寸等于 width/height。

 //拥有 left, top, right, bottom, x, y, width, 和 height这几个以像素为单位的只读属性用于描述整个边框。
  // 除了width 和 height 以外的属性是相对于视图窗口的左上角来计算的。
  box = Element.getBoundingClientRect();
  