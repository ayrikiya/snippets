/*
 * @Author: 王荣
 * @Date: 2022-06-16 14:38:28
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-16 14:41:49
 * @Description: 填写简介
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";


declare module 'axios'{

  interface AxiosRequestConfig extends AxiosRequestConfig{
    metadata?: {
      startTime: number;
      endTime: number;
    };
  }
}

