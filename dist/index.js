/*!
 * @niux/utils 1.0.0
 * Licensed under MIT
 */

'use strict';

var _WeakMap = require('@babel/runtime-corejs2/core-js/weak-map');
var _Set = require('@babel/runtime-corejs2/core-js/set');
var _Map = require('@babel/runtime-corejs2/core-js/map');
var _Array$isArray = require('@babel/runtime-corejs2/core-js/array/is-array');
var _Date$now = require('@babel/runtime-corejs2/core-js/date/now');

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function type(x) {
  var _x$constructor;
  var t = _typeof(x);
  if (x === null) {
    return 'null';
  }
  if (t !== 'object') {
    return t;
  }
  var toString = Object.prototype.toString;
  var innerType = toString.call(x).slice(8, -1);
  var innerLowType = innerType.toLowerCase();

  // 区分 String() 和 new String()
  if (['String', 'Boolean', 'Number'].includes(innerType)) {
    return innerType;
  }

  // function A() {}; new A
  if (typeof (x === null || x === void 0 ? void 0 : (_x$constructor = x.constructor) === null || _x$constructor === void 0 ? void 0 : _x$constructor.name) === 'string') {
    return x.constructor.name;
  }
  return innerLowType;
}

/**
 * 深克隆
 * 例：deepClone({ a: 1 })
 * @export
 * @param {*} obj
 * @return {*} 
 */
function deepClone(obj) {
  if (obj === null || _typeof(obj) !== "object") {
    return obj;
  }
  var cache = null;
  if (!deepClone.cache) {
    deepClone.cache = new _WeakMap();
  }
  cache = deepClone.cache;
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  if (obj instanceof _Set) {
    var temp = new _Set();
    cache.set(obj, temp);
    obj.forEach(function (item) {
      temp.add(deepClone(item));
    });
    return temp;
  } else if (obj instanceof _Map) {
    var _temp = new _Map();
    cache.set(obj, _temp);
    obj.forEach(function (item, key) {
      _temp.set(key, deepClone(item));
    });
    return _temp;
  } else if (obj instanceof RegExp) {
    var _temp2 = new RegExp(obj);
    return _temp2;
  } else {
    var _temp3 = new obj.constructor();
    cache.set(obj, _temp3);
    for (var key in obj) {
      _temp3[key] = deepClone(obj[key]);
    }
    return _temp3;
  }
}

// Object.create(null) 的对象，没有hasOwnProperty方法
function hasOwnProp$1(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function pick(obj, paths) {
  if (type(obj) !== 'Object') {
    return {};
  }
  if (!_Array$isArray(paths)) {
    return {};
  }
  var res = {};
  for (var i = 0; i < paths.length; i++) {
    var key = paths[i];
    console.log('key', key, obj[key]);
    if (hasOwnProp$1(obj, key)) {
      res[key] = obj[key];
    }
  }
  return res;
}

function truncate(str, len) {
  var omission = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';
  str = String(str);
  omission = String(omission);
  len = Math.round(len);
  if (isNaN(len)) {
    return '';
  }
  if (str.length > len) {
    str = str.slice(0, len - omission.length) + omission;
  }
  return str;
}

function range(start, stop) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  start = isNaN(+start) ? 0 : +start;
  stop = isNaN(+stop) ? 0 : +stop;
  step = isNaN(+step) ? 1 : +step;

  // 保证step正确
  if (start > stop && step > 0) {
    step = -step;
  }
  var arr = [];
  for (var i = start; start > stop ? i > stop : i < stop; i += step) {
    arr.push(i);
  }
  return arr;
}

/**
 * 如果数组所有元素满足函数条件，则返回true。调用时，如果省略第二个参数，则默认传递布尔值。
 * 例：
 * all([4, 2, 3], x => x > 1); // true
 * all([1, 2, 3]); // true
 * @param {*} arr
 * @param {*} [fn=Boolean]
 */
var all = function all(arr) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Boolean;
  return arr.every(fn);
};

/**
 * 返回两个或多个数的平均数
 * 例：
 * average(...[1, 2, 3]); // 2
 * average(1, 2, 3); // 2
 * @param {*} nums
 */
var average = function average() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }
  return nums.reduce(function (acc, val) {
    return acc + val;
  }, 0) / nums.length;
};

/**
 * 将一个句子中每个单词首字母转换成大写字母，这里中要运用了正则表达式进行替换。
 * capitalizeEveryWord('hello world!'); // 'Hello World!'
 * @param {*} str
 */
var capitalizeEveryWord = function capitalizeEveryWord(str) {
  return str.replace(/\b[a-z]/g, function (_char) {
    return _char.toUpperCase();
  });
};

/**
 * 返回当前访问的 URL 地址。
 * currentURL(); // 'https://medium.com/@fatosmorina'
 */
var currentURL = function currentURL() {
  return window.location.href;
};

/**
 * 返回当前是今年的第几天
 * 例：
 * dayOfYear(new Date()); // 272
 * @param {*} date
 */
var dayOfYear = function dayOfYear(date) {
  return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
};

/**
 * 获取网址参数
 * 例：
 * getURLParameters("google.com"); // {}
 * getURLParameters("http://url.com/page?name=Adam&surname=Smith"); // {name: 'Adam', surname: 'Smith'}
 * @param {*} date
 */
var getUrlParamObj = function getUrlParamObj(url) {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(function (a, v) {
    return a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1), a;
  }, {});
};

/**
 * 全局唯一标识符（GUID，Globally Unique Identifier）也称作 UUID(Universally Unique IDentifier) 
 * d12d285e-4195-4866-bc3e-4539b9e644ce
 */
var guid = function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

function getParam(name, url) {
  name = String(name);
  url = String(url);
  var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
  if (!results) {
    return '';
  }
  return results[1] || '';
}

function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  wait = Math.round(wait, 10);
  var timerId;
  return function debounced() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(function () {
      func.apply(_this, args);
    }, wait);
  };
}
function throttle(func, time) {
  var args;
  var timer = null;
  var lastTriggerTime = 0; // 首次触发执行
  function self() {
    var _this2 = this;
    for (var _len2 = arguments.length, a = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      a[_key2] = arguments[_key2];
    }
    args = a;
    var ct = _Date$now();
    var diff = ct - lastTriggerTime;
    if (timer) clearTimeout(timer);
    if (diff > time) {
      func.apply(this, args);
      lastTriggerTime = ct;
      return;
    }
    timer = setTimeout(function () {
      lastTriggerTime = _Date$now();
      func.apply(_this2, args);
      timer = null;
    }, time - diff);
  }
  self.clear = function () {
    if (timer) clearTimeout(timer);
  };
  return self;
}

// Object.create(null) 的对象，没有hasOwnProperty方法
function hasOwnProp(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function extend(defaultOpt, customOpt) {
  defaultOpt = deepClone(defaultOpt); // 拷贝一份defaultOpt，隔离数据

  for (var name in customOpt) {
    var src = defaultOpt[name];
    var copy = customOpt[name];

    // 非可枚举属性，例如原型链上的属性
    if (!hasOwnProp(customOpt, name)) {
      continue;
    }

    // 对于对象需要递归处理
    if (copy && type(copy) === 'object') {
      // 如果default上不存在值时，会自动创建空对象
      var clone = src && type(src) === 'object' ? src : {};
      // 递归合并
      defaultOpt[name] = extend(clone, copy);
    } else if (typeof copy !== 'undefined') {
      // 非对象且值不为undefined
      defaultOpt[name] = copy;
    }
  }
  return defaultOpt;
}

exports.all = all;
exports.average = average;
exports.capitalizeEveryWord = capitalizeEveryWord;
exports.currentURL = currentURL;
exports.dayOfYear = dayOfYear;
exports.debounce = debounce;
exports.deepClone = deepClone;
exports.extend = extend;
exports.getParam = getParam;
exports.getUrlParamObj = getUrlParamObj;
exports.guid = guid;
exports.pick = pick;
exports.range = range;
exports.throttle = throttle;
exports.truncate = truncate;
exports.type = type;
