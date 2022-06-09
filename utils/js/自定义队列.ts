/*
 * @Author: 王荣
 * @Date: 2022-06-09 14:53:03
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 14:53:04
 * @Description: 填写简介
 */

export default class Queue {
  items:any[] = [];
  constructor(...props:any){
      console.log(props)
  }
  // 队长度的getter
  get size(){
      return this.items.length;
  }
  set size(value){
       throw new ReferenceError('禁止修改队列长度属性')
  }

  // 入队 队尾添加元素
  enQueue(ele:any){
      this.items.push(ele)
  }

  // 出队 队首删除元素
  deQueue(){
      this.items.shift();
  }

  // 查看队首元素
  front(){
      return this.items[0]
  }

  // 查看是否为空队列
  isEmpty(){
      return this.items.length === 0;
  }

  // 转化为字符串输出
  toString(){
      return this.items.join('')
  }



}