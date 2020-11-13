/**
 * 在元组中获取构造函数类型的参数
 */

type parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

function foo1(x: number): Array<number> {
  return [x];
}

type P = Parameters<typeof foo1>; // -> [number]
