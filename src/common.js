/**
 * 如果数组所有元素满足函数条件，则返回true。调用时，如果省略第二个参数，则默认传递布尔值。
 * 例：
 * all([4, 2, 3], x => x > 1); // true
 * all([1, 2, 3]); // true
 * @param {*} arr
 * @param {*} [fn=Boolean]
 */
export const all = (arr, fn = Boolean) => arr.every(fn);

/**
 * 返回两个或多个数的平均数
 * 例：
 * average(...[1, 2, 3]); // 2
 * average(1, 2, 3); // 2
 * @param {*} nums
 */
export const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

/**
 * 将一个句子中每个单词首字母转换成大写字母，这里中要运用了正则表达式进行替换。
 * capitalizeEveryWord('hello world!'); // 'Hello World!'
 * @param {*} str
 */
export const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

/**
 * 返回当前访问的 URL 地址。
 * currentURL(); // 'https://medium.com/@fatosmorina'
 */
export const currentURL = () => window.location.href;

/**
 * 返回当前是今年的第几天
 * 例：
 * dayOfYear(new Date()); // 272
 * @param {*} date
 */
export const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

/**
 * 获取网址参数
 * 例：
 * getURLParameters("google.com"); // {}
 * getURLParameters("http://url.com/page?name=Adam&surname=Smith"); // {name: 'Adam', surname: 'Smith'}
 * @param {*} date
 */
export const getUrlParamObj = (url) => (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => ((a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a), {});

/**
 * 全局唯一标识符（GUID，Globally Unique Identifier）也称作 UUID(Universally Unique IDentifier) 
 * d12d285e-4195-4866-bc3e-4539b9e644ce
 */
export const guid = () =>
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    });
