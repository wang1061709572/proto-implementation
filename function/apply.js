Function.prototype._apply = function(context, args) {
    context = context ? context : window;
    let contextType = typeof context;
    if (!/(object|function)/.test(contextType)) {
        context = Object(context);
    }
    context['fn'] = this;
    const result = context['fn'](...args);
    delete context['fn'];
    return result;
}

function a(age, phone) {
    console.log(this.name, age, phone);
    return `${this.name} is ${age} years old`;
}

let obj = {
    name: 'John'
}

console.log(a.apply(2, [12, 132]))
console.log(a._apply(2, [12, 132]))
// console.log(a.call(obj, 12, 132))
