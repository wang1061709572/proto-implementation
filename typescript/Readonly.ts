/**
 * 将所有属性设置为只读
 */

type readonly<T> = {
    readonly [P in keyof T]: T[P];
}

interface IDog{
    name: string;
    age: number;
}
type TDog = Readonly<IDog>;
class TestDog {
    run() {
        let dog: IDog = {
            name: 'dd',
            age: 1
        };
        dog.name = 'cc';
        let dog1: TDog = {
            name: 'read',
            age: 1
        };
        // dog1.age = 3;  //报错,不能赋值
    }
}

