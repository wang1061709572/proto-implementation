/**
 * 在元组中获取构造函数类型的参数
 */

type constructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

