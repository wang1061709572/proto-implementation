/**
 * 使T中的所有属性都是必需的
 */

type required<T> = {
    [P in keyof T]-?: T[P];
}

interface Person1 {
    name: String,
    age?: Number,
    job?: String
}

type partialPerson1 = required<Person>;

// 等价于

// type partialPerson {
//     name: String,
//     age: Number,
//     job: String
// }
