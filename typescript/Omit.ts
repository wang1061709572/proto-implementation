/**
 * 构造一个除类型K之外的T属性的类型
 */

type omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

interface IDog3 {
    name: string;
    age: number;
    height: number;
    weight: number;
    sex: string;
}

// 表示忽略掉User接口中的name和age属性
type OmitDog = Omit<IDog3, "name" | "age">;
// 等价于
// type OmitDog = {
//     height: number;
//     weight: number;
//     sex: string;
// };

let dog1: OmitDog = {
    height: 1,
    weight: 2,
    sex: 'boy'
};

