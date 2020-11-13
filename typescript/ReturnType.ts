/**
 * 从T中提取可分配给U的类型
 */

type returnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

function foo2(x: number): Array<number> {
  return [x];
}

type fn2 = returnType<typeof foo2>; // -> number[]
