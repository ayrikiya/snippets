/*
 * @Author: 王荣
 * @Date: 2022-06-09 15:37:52
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 15:37:52
 * @Description: 填写简介
 */


/*
 * @Author: 王荣
 * @Date: 2022-04-26 10:20:16
 * @LastEditors: 王荣
 * @LastEditTime: 2022-04-26 10:23:19
 * @Description: 填写简介
 */
const mapValues = (object, callback) => {
  const O = {};
  for (let key in object) {
    O[key] = callback(object[key]);
  }
  return O;
};

const deepClone = (value) => {
  switch (value.constructor) {
    case Array:
      return value.map(deepClone);
    case Object:
      return mapValues(value, deepClone);
    default:
      return value;
  }
};

const styleRuleByName = (name, module) => {
  return (rule) => {
    if (rule.test) {
      const test = rule.test.toString();

      const includeName = test.includes(name);
      const includeModule = test.includes("module");

      return module
        ? includeName && includeModule
        : includeName && !includeModule;
    }

    return false;
  };
};

module.exports = {
  mapValues,
  deepClone,
  styleRuleByName,
};