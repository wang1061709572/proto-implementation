/**
 * 从T中，选择一组键在并集K中的属性
 */

type pick<T, K extends keyof T> = {
    [P in K]: T[P];
}

interface IDog1 {
 name: string;
 age: number;
 height: number;
 weight: number;
}
 
type PickDog = Pick<IDog1, "name" | "age" | "height">;
// 等价于
// type PickDog = {
//  name: string;
//  age: number;
//  height: number;
// };
 
let dog: PickDog = {
    name: 'wangcai',
    age: 3,
    height: 70
};
