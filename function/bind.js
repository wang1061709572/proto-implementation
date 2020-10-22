Function.prototype._bind = function (context, ...params) {
    context = context ? context : window;
    let contextType = typeof context;
    if (!/object|function/i.test(contextType)) {
        context = Object(context);
    }
    let _this = this;
    return function (...args) {
        return _this.call(context, ...params.concat(args));
    };
}

function a(age, phone) {
    console.log(this.name, age, phone);
    return `${this.name} is ${age} years old`;
}

let obj = {
    name: 'John'
}

console.log(a.bind(obj, 132)(12));
console.log(a._bind(obj, 12)(132));

