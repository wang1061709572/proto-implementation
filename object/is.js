Object.prototype._is = function (a, b) {
    if (a === b) {
        return a === b && 1 / a === 1 / b;
    } else {
        return a !== a && b !== b;
    }
}

console.log(Object.is(NaN, NaN));
console.log(Object._is(NaN, NaN));

