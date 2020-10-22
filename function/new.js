function _new(fn, ...args) {
    let obj = Object.create(fn.prototype);
    let result = fn.call(obj, ...args);
    if (/^(object|function)$/.test(typeof result) && result !== null) {
        return result;
    }
    return obj;
}
