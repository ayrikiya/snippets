/*
 * @Author: 王荣
 * @Date: 2022-06-09 14:44:21
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 14:44:35
 * @Description: 填写简介
 */

import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

type IAxiosRequestConfig = AxiosRequestConfig&{
    metadata?: {
        startTime?: number,
        endTime?: number
    }
}

// 基本返回数据格式 (response.data)
interface BaseResponse<T> {
    code: number;
    data: T;
    message?: string;
}

// 基本 Ajax 格式
interface ICustomAxios {
    create: (config: AxiosRequestConfig) => ICustomAxios;
    get: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
    delete: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
    head: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
    options: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
    post: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
    put: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
    patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
}

/**
 * @description: 获取axios的一个实例 并定制拦截器处理response request
 * @param {*} 
 * @return {AxiosInstance} 
 */
const getAxiosInstance = (config?: AxiosRequestConfig): AxiosInstance => {
    const instance = axios.create(Object.assign({}, {
        timeout : 1000 * 8,
    }, config))

    // 每次请求 加loading和error
    instance.interceptors.request.use((config: IAxiosRequestConfig) => {
        // 通过vuex管理全局弹窗状态 初看起来有点小题大作，但弹窗的状态放在哪个组件中都不合适，即使放在根组件，如果子组件有修改弹窗状态的需求，父子传值也一点不优雅。
        // store.commit('setLoading', true)
        // store.commit('setError', {status : false, message : ''})

        // 拦截器计算响应时间
        config.metadata = { startTime: Number(new Date()) }

        return config
    })

    instance.interceptors.response.use((response: AxiosResponse&{config : IAxiosRequestConfig}) => {
    // 2xx范围内状态码触发成功处理
    let { data, status, statusText, headers, config, request } = response;
    
    setTimeout(() => {
      // store.commit('setLoading', false)
    }, 1000)

    // 拦截器计算响应时间
    config.metadata.endTime = Number(new Date())
    // 响应时间 毫秒
    const resDuration = config.metadata.endTime - config.metadata.startTime
    console.log('响应时间', resDuration)

    return response; }, err => {
    // 超出2xx状态码触发错误处理
    // 在error中要取到后端返回信息，必须要取err.response。被包装了一层。
    const { response } = err;
    const { data, status, statusText, headers, config, request } = response;

    console.log('err', err)
    console.log('err response', response)

    // 拦截器计算响应时间
    config.metadata.endTime = Number(new Date())
    // 响应时间 毫秒
    const resDuration = config.metadata.endTime - config.metadata.startTime
    console.log('响应时间', resDuration)

    // const { error } = err.response.data
    // store.commit('setError', {status : true, message : error})
    // store.commit('setLoading', false)
    // return Promise.reject(err.response.data)

    // 这里必须是返回一个reject的promise， 这样才会走axios.request在then函数中的catch
    // 如果是return err; 也会then当作成功处理。
    return Promise.reject(err) })

    return instance;
}

/**
 * @description: // 获取一个 自定义axios 实例
 * @param {*}
 * @return {*}
 */
const GetCustomAxios = (config?: AxiosRequestConfig): ICustomAxios => {
    const instance = getAxiosInstance(config);
    const request = <T>(config: AxiosRequestConfig): Promise<T> => {
        return new Promise((resolve, reject) => {
            instance.request<BaseResponse<T>>(config).then((response) => {
                let {data, status, statusText, headers, config, request} = response;

                if (status === 200 && data.code === 0) {
                    resolve(data.data);
                } else {
                    console.log('成功但不是200', response);
                    reject(data);
                }
            }, (err) => { reject(err); });
        });
    };

    // Ajax 实体
    const CustomAxios: ICustomAxios = {
        create : function(config: AxiosRequestConfig) : ICustomAxios {
            return GetCustomAxios(config);
        },
        get : function<T>(url: string, config?: AxiosRequestConfig) : Promise<T> {
            return request<T>(
                Object.assign({}, config, {
                    method : 'GET',
                    url : url
                }));
        },
        delete : function<T>(url: string, config?: AxiosRequestConfig) : Promise<T> {
            return request<T>(
                Object.assign({}, config, {
                    method : 'DELETE',
                    url : url
                }));
        },
        head : function<T>(url: string, config?: AxiosRequestConfig) : Promise<T> {
            return request<T>(
                Object.assign({}, config, {
                    method : 'HEAD',
                    url : url
                }));
        },
        options : function<T>(url: string, config?: AxiosRequestConfig) : Promise<T> {
            return request<T>(
                Object.assign({}, config, {
                    method : 'OPTIONS',
                    url : url
                }));
        },
        post : function<T>(url: string, data: any, config?: AxiosRequestConfig) : Promise<T> {
            return request<T>(
                Object.assign({}, config, {
                    method : 'POST',
                    url : url,
                    data : data
                }));
        },
        put : function<T>(url: string, data: any, config?: AxiosRequestConfig) : Promise<T> {
            return request<T>(
                Object.assign({}, config, {
                    method : 'PUT',
                    url : url,
                    data : data
                }));
        },
        patch : function<T>(url: string, data: any, config?: AxiosRequestConfig) : Promise<T> {
            return request<T>(
                Object.assign({}, config, {
                    method : 'PATCH',
                    url : url,
                    data : data
                }));
        }
    };

    return CustomAxios;
};

const CustomAxios = GetCustomAxios();

export default CustomAxios;

export {GetCustomAxios};