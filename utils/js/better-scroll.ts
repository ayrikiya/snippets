/*
 * @Author: 王荣
 * @Date: 2022-06-09 14:50:47
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 14:50:47
 * @Description: better-scroll
 */

import BScroll from '@better-scroll/core';
import ScrollBar from '@better-scroll/scroll-bar'
import MouseWheel from '@better-scroll/mouse-wheel'

let timer:any = null;
if(timer){
    clearTimeout(timer)
}
timer = setTimeout(()=>{
const wraper:any = document.querySelector('.cascader-dropdown-items-body');
let scroll = new BScroll(wraper,{
    probeType:3,
    scrollY:true,
    scrollX: false,
    click: true
});
console.log(wraper);
},1000);

console.log(scroll,'scroll');
//           
const wraper:any = document.querySelector('.cascader-dropdown-items-body');
BScroll.use(ScrollBar);
BScroll.use(MouseWheel);

scroll = new BScroll(wraper,{
    probeType:3,
    scrollY:true,
    mouseWheel: true,
    scrollX: false,
    click: true,
    bounce: false,
    scrollbar: {
        fade: false,
        interactive: true,
        scrollbarTrackClickable: true,
    },
             
});
console.log('b', scroll)