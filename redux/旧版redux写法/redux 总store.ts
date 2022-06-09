/*
 * @Author: 王荣
 * @Date: 2022-06-09 15:32:00
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 15:32:00
 * @Description: 填写简介
 */

// import { createStore }  from 'redux'; 
// import reducer from './reducer';

// // 基础用法，不使用任何中间件 redux最小用法
// const store = createStore(reducer);

// export default store;

// // 基础用法，不使用任何中间件redux最小用法


// 使用redux thunk中间件
//applyMiddleware来引入redux中间件 保证可使用中间件
import { createStore, compose, applyMiddleware } from 'redux';
//redux-thunk中间件统一管理异步请求和其他复杂逻辑
//有了thunk， action就可以是一个函数了（在函数里些ajax等异步请求） 否则必须是一个对象 包含type 和 组件通信的数据
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducer, enhancer)

export default store;