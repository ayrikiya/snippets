/*
 * @Author: 王荣
 * @Date: 2022-06-09 14:52:06
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 14:52:07
 * @Description: 页面暗语功能 类似队列的实现
 */


// 监听keyup事件获得字符，pressed字符数组类似队列，长度为secretCode长度，长度满后先进先出。
const pressed:string[] =[], secretCode = 'qingqing';
window.addEventListener('keyup', (e)=>{
    console.log(e);
    pressed.push(e.key);
    pressed.splice(0, pressed.length - secretCode.length);
    console.log(pressed.join(''))
    if(pressed.join('').includes(secretCode)){
        console.log('ding! you got it!')
        pressed.splice(0, pressed.length);
    }

})