/*
 * @Author: 王荣
 * @Date: 2022-06-09 15:21:33
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 15:21:55
 * @Description: 填写简介
 */


import React from 'react';
import 'src/css/component/mutiline-textcut.scss'

interface MutiLineTextCutProps {
    toggleKey?:string
}

class MutiLineTextCut extends React.Component<MutiLineTextCutProps>{

    render():React.ReactNode{
        return (
        <div className="text-cut-wrap">
            <input type="checkbox" name={this.props.toggleKey} id={this.props.toggleKey} />
            <p>{this.props.children}</p>
            <label htmlFor={this.props.toggleKey}></label>
        </div>
        )
    }
    componentDidUpdate():void{

        let list = document.querySelectorAll('p');
        list.forEach(item => {
            item.classList[item.scrollHeight > item.offsetHeight ? "add" : "remove"]("truncated");
        });
    }
        

}

export default MutiLineTextCut;



//css

// .text-cut-wrap {
//     position: relative;
//     input {
//         display: none;
//         &: checked {
//             & + p {
//                 // display: inline;
//                 -webkit - line - clamp: unset;
//                 // -webkit-box-orient: unset;
//                 // overflow: visible;
//             }
//             & ~ label {
//                 // display: inline;
//                 &::after {
//                     content: "收起";
//                     color: #415af0;
//                 }
//             }
//         }
//     }
//     p {
//         padding-right: 25px;
//         display: -webkit-box;
//         -webkit-line-clamp: 2;
//         -webkit-box-orient: vertical;
//         overflow: hidden;
//         margin-top: 7px;
//         margin-bottom: 7px;
//         &.truncated {
//             & + label {
//                 display: block;
//             }
//         }
//     }

//     label {
//         display: none;
//         position: absolute;
//         bottom: 0;
//         right: 0;
//         &::after {
//             font-size: 14px;
//             content: "展开";
//             color: #415af0;
//         }
//     }
// }