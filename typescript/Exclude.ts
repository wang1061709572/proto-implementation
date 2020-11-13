/**
 * 从T中排除那些可分配给U的类型
 */

type exclude<T, U> = T extends U ? never : T

interface IDog2 {
    name: string;
    age: number;
    height: number;
    weight: number;
    sex: string;
}
 
type keys = keyof IDog2; // -> "name" | "age" | "height" | "weight" | "sex"
 
type ExcludeDog = Exclude<keys, "name" | "age">;
// 等价于
// type ExcludeDog = "height" | "weight" | "sex";


