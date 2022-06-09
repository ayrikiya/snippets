/*
 * @Author: 王荣
 * @Date: 2022-06-09 14:43:41
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 14:45:17
 * @Description: 填写简介
 */
// util
import axios from 'axios'

// 全局配置axios相关全局设置
// 正常来说 es6的module引入逻辑是引入时执行，在组件里这么写default没有问题，但是若是在单独的配置文件中写axios default。最后编译打包时会先执行import逻辑，导致default配置代码先于所有代码执行，不管在其他组件内有没有引入这个单独的配置文件，最后都加载了default配置。这符合module逻辑但不符合我们写代码的执行逻辑，无法确定代码在何处 何时生效了，所以要写单独的axios配置，一定不要在里面写default，单独创建一个axios实例instance，作我们想要的配置。
axios.defaults.baseURL = 'http://localhost:7001/api/'
// 每次请求 加loading和error
axios.interceptors.request.use(config => {
  // 通过vuex管理全局弹窗状态 初看起来有点小题大作，但弹窗的状态放在哪个组件中都不合适，即使放在根组件，如果子组件有修改弹窗状态的需求，父子传值也一点不优雅。
  store.commit('setLoading', true)
  store.commit('setError', {status : false, message : ''})
  return config
})

axios.interceptors.response.use(config => {
  setTimeout(() => {
    store.commit('setLoading', false)
  }, 1000)
  return config
}, err => {
  const { error } = err.response.data
  store.commit('setError', {status : true, message : error})
  store.commit('setLoading', false)
  return Promise.reject(err.response.data)
})