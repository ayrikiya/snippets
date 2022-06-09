/*
 * @Author: 王荣
 * @Date: 2022-06-09 14:43:27
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 14:43:30
 * @Description: 填写简介
 */

'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

// 正常来说项目中直接引入的axios就是此处导出的axios。可以看出这里的axios其实就是通过createInstance函数，工厂模式产出的一个Axios实例。
// 挂在在该实例上的axios.create函数可以看到其实也是返回了一个createInstance函数生产的实例。这也是为什么直接引入的axios和通过axios.create生产出了实例其实并没有什么区别的原因。

