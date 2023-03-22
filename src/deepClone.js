/**
 * 深克隆
 * 例：deepClone({ a: 1 })
 * @export
 * @param {*} obj
 * @return {*} 
 */
export function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let cache = null;

    if (!deepClone.cache) {
        deepClone.cache = new WeakMap();
    }

    cache = deepClone.cache;

    if (cache.has(obj)) {
        return cache.get(obj);
    }

    if (obj instanceof Set) {
        const temp = new Set();
        cache.set(obj, temp);
        obj.forEach((item) => {
            temp.add(deepClone(item));
        });
        return temp;
    } else if (obj instanceof Map) {
        const temp = new Map();
        cache.set(obj, temp);
        obj.forEach((item, key) => {
            temp.set(key, deepClone(item));
        });
        return temp;
    } else if (obj instanceof RegExp) {
        const temp = new RegExp(obj);
        return temp;
    } else {
        const temp = new obj.constructor();
        cache.set(obj, temp);
        for (var key in obj) {
            temp[key] = deepClone(obj[key]);
        }
        return temp;
    }
}