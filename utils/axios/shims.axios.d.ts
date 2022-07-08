/*
 * @Author: 王荣
 * @Date: 2022-06-16 14:38:28
 * @LastEditors: 王荣
 * @LastEditTime: 2022-07-08 10:54:58
 * @Description: 填写简介
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";


declare module 'axios'{
  // 声明合并 为AxiosRequestConfig这个类型增加属性
  interface AxiosRequestConfig{
    metadata?: {
      startTime: number;
      endTime: number;
    };
  }
}

