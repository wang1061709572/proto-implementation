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

let b = Object.create(a);
let c = Object._create(a);
console.log(b, b.name);
console.log(c, c.name);

