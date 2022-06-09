/*
 * @Author: 王荣
 * @Date: 2022-06-09 15:32:37
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 15:32:37
 * @Description: 填写简介
 */


import React from 'react';
import "src/css/App.scss";

//redux
import { Provider } from 'react-redux';
import store from 'src/store';

// components
import Header from './Header/Header';
import Nav from './Nav';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
            </div>
        </Provider>
    );
};

export default App;