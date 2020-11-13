/**
 * 获取构造函数类型的返回类型
 */

type instanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

