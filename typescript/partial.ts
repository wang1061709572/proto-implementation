/**
 * 让T中的所有属性都是可选的
 */

type partial<T> = {
    [P in keyof T]?: T[P]
}

interface Person {
    name: String,
    age: Number,
    job: String
}

type partialPerson = partial<Person>;

// 等价于

// type partialPerson {
//     name?: String,
//     age?: Number,
//     job?: String
// }

