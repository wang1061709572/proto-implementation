Object.prototype._create = function (proto) {
    if (proto === null || typeof proto !== 'object') {
        throw new TypeError(`Object prototype may only be an Object: ${prototype}`);
    }
    function f() {};
    f.prototype = proto;
    return new f();
}

let a = {
    name: 'John'
};

let b = Object.create(a, {
    age: {
        value: 12
    }
});
console.log(a.age);
console.log(b.age, b);
console.log(Object.getOwnPropertyDescriptor(b));
// let c = Object._create(a);
// console.log(b, b.name);
// console.log(c, c.name);
