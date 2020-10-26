class Promise {
    static resolve(value) {
        if (value instanceof Promise) return value;
        return new Promise((resolve, reject) => {
            if (value && value.then && typeof value.then === 'function') {
                value.then(resolve, reject);
            } else {
                resolve(value);
            }
        });
    }
    static reject(reason) {
        if (reason instanceof Promise) return reason;
        if (reason && reason.then && typeof reason.then === 'function') {
            reason.then(resolve, reject);
        } else {
            reject(reason);
        }
    }
    static all(promises) {
        if (!promises || typeof promises[Symbol.iterator] !== 'function') {
            throw TypeError(
                `${typeof promises} is not iterable (cannot read property Symbol(Symbol.iterator))`,
            )
        }
        const len = promises.length;
        if (!len) return []
        const result = new Array(len);
        return new Promise((resolve, reject) => {
            function processPromise(value, i) {
                result[i] = value;
                if (i === len - 1) resolve(result);
            }
            for (let i = 0; i < len; i++) {
                Promise.resolve(promises[i]).then(res => {
                    processPromise(res, i);
                }, (err) => {
                    reject(err);
                });
            }
        });
    }
    static race(promises) {
        if (!promises || typeof promises[Symbol.iterator] !== 'function') {
            throw TypeError(
                `${typeof promises} is not iterable (cannot read property Symbol(Symbol.iterator))`,
            )
        }
        const len = promises.length;
        if (!len) return [];
        return new Promise((resolve, reject) => {
            for (let i = 0; i < len; i++) {
                Promise.resolve(promises[i]).then(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
            }
        });
    }
    state = 'pending'
    value = null
    reason = null

    onFulfilledCallBack = []
    onRejectedCallBack = []

    constructor(executor) {
        if (typeof executor !== 'function') {
            throw TypeError(
                'executor is not a function'
            )
        }
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
        executor(this.resolve, this.reject);
    }
    resolve(value) {
        if (this.state === 'pending') {
            this.state = 'fulfilled';
            this.value = value;
            this.onFulfilledCallBack.forEach(fn => {
                fn(this.value);
            })
        }
    }
    resolve(reason) {
        if (this.state === 'pending') {
            this.state = 'rejected';
            this.value = reason;
            this.onRejectedCallBack.forEach(fn => {
                fn(this.value);
            })
        }
    }
    then(onFulfilled, onRejected) {
        if (typeof onFulfilled !== 'function') {
            onFulfilled = function (value) {
                return value;
            }
        }
        if (typeof onRejected !== 'function') {
            onRejected = function (reason) {
                return reason;
            }
        }
        const promise = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                try {
                    const result = onFulfilled(this.value);
                    check(promise, result, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }
            if (this.state === 'reject') {
                try {
                    const reason = onRejected(this.value);
                    check(promise, reason, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }
            if (this.state === 'pending') {
                this.onFulfilledCallBack.push((value) => {
                    try {
                        const result = onFulfilled(value);
                        check(promise, result, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                })
                this.onRejectedCallBack.push((value) => {
                    try {
                        const reason = onRejected(value);
                        check(promise, reason, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                })
            }
        })
        return promise;
    }
    finally(callback) {
        return this.then(
            () => Promise.resolve(callback()),
            () => Promise.reject(callback())
        );
    }
}

function check(promise1, promise2, resolve, reject) {
    if (promise1 === promise2) {
        reject('Chaining cycle detected for Promise')
    } else {
        if (promise2 instanceof Promise) {
            promise2.then(resolve, reject);
        } else {
            resolve(promise2);
        }
    }
}

export default Promise
